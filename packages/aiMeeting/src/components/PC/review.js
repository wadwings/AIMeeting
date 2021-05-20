import { connect, Global, css, styled } from "frontity";
import React, { useState, useEffect } from "react";
import reviewPic from "../../assets/img/往届回顾.png";
import groupPic from "../../assets/img/2019人工智能大会合影.png";
import defaultPic from "../../assets/img/默认.png";
import * as common from "./common";

const Review = ({ state, actions }) => {
  const { Main, Title, MainBg2 } = common.components;
  const { fetch } = common;
  const [imgs, setImgs] = useState([]);
  useEffect(async () => {
    await fetch("/usage/review");
    setImgs(
      state.source
        .get("/usage/review")
        .items.map(({ type, id }) => state.source[type][id])
        .map(({text, picture}) => <MagicImg key={text} src={picture.guid} word={text}></MagicImg>)
    );
  }, []);
  return (
    <Main>
      <div id='item6' css={css`position:absolute;top:-5rem;`}></div>
      <MainBg2 />
      <Title word="往届回顾" png={reviewPic}></Title>
      <ReviewLayout>
        <Header>首届中国光谷人工智能大会暨企业家高峰论坛（2019）</Header>
        <Img src={groupPic}></Img>
        <P>2019人工智能大会全体人员合影</P>
        <Grid>
          {imgs}
        </Grid>
      </ReviewLayout>
    </Main>
  );
};

const ReviewLayout = styled.div({
  margin: "2rem",
  maxHeight: "calc(100% - 8rem)",
  overflowY: "auto",
});

const MagicImg = (props) => {
  const [status, setStatus] = useState(0)
  const { src, word } = props;
  return (
    <MagicDiv onMouseEnter={() => setStatus(1)} onMouseLeave={() => setStatus(0)}>
      <Img src={src}></Img>
      <Text show={status}>{word}</Text>
    </MagicDiv>
  );
}

const Text = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s;
  position: absolute;
  transform: ${(props) => (props.show === 1 ? "none" : "translate(0, 100%)")};
  bottom: 0;
  opacity: ${(props) => props.show};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MagicDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-size: 1.5rem;
`;

const Img = styled.img`
  width: 100%;
`;

const P = styled.p`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem;
  grid-gap: 2rem;
`;

export default connect(Review);
