import { connect, Global, css, styled } from "frontity";
import React, { useState, useEffect } from "react";
import reviewPic from "../../assets/img/往届回顾.png";
import groupPic from "../../assets/img/2019人工智能大会合影.png";
import * as common from "./common";
import left from "../../assets/img/arrow-left-bold.png";
import right from "../../assets/img/arrow-right-bold.png";

const Review = ({ state, actions }) => {
  const { Main, Title, MainBg2 } = common.components;
  const { fetch } = common;
  const [imgs, setImgs] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(async () => {
    await fetch("/usage/review");
    setImgs(
      state.source
        .get("/usage/review")
        .items.map(({ type, id }) => state.source[type][id])
        .map(({ text, picture }) => {
          return { text, picture };
        })
    );
  }, []);
  const updateIndex = (n) => {
    if(active + n === imgs.length){
      setActive(0)
    }else if(active + n === -1){
      setActive(img.length - 1)
    }else{
      setActive(active + n)
    }
  }

  return (
    <Main id="item6">
      <MainBg2 />
      <Title word="往届回顾" png={reviewPic}></Title>
      <ReviewLayout>
        <Header>首届中国光谷人工智能大会暨企业家高峰论坛（2019）</Header>
        <Img src={groupPic}></Img>
        <P>2019人工智能大会全体人员合影</P>
        {imgs.length && (
          <MagicImg
            src={imgs[active].picture.guid}
            word={imgs[active].text}
            click={updateIndex}
          ></MagicImg>
        )}
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
  const [status, setStatus] = useState(0);
  const { src, word, click} = props;
  return (
    <MagicDiv
      onMouseEnter={() => setStatus(1)}
      onMouseLeave={() => setStatus(0)}
    >
      <Img src={src}></Img>
      <Text show={status}>{word}</Text>
      <Prev
        src={left}
        onClick={() => click(-1)}
      ></Prev>
      <Next
        src={right}
        onClick={() => click(1)}
      ></Next>
    </MagicDiv>
  );
};

const Next = styled.img({
  position: "absolute",
  width: "2rem",
  height: "2rem",
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: '1',
});

const Prev = styled.img({
  position: "absolute",
  width: "2rem",
  height: "2rem",
  left: "0",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: '1',
});

const Text = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s;
  font-size: 0.8rem;
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
  height: calc(100vw / 16 * 9);
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-size: 3.3vw;
  text-align: center;
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
  grid-gap: 1rem;
`;

export default connect(Review);
