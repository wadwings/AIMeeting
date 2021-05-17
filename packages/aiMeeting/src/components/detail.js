import { connect, Global, css, styled } from "frontity";
import React, { useState, useEffect } from "react";
import detailPic from "../assets/img/论坛详情.png";
import defaultPic from "../assets/img/默认.png";
import * as common from "./common";

const Detail = ({ state, actions }) => {
  const [isDetail, setIsDetail] = useState(false);
  const [active, setActive] = useState(0);
  const [displays, setDisplays] = useState([]);
  const optionText = [
    {
      name: "论坛主会场",
      url: "/conference/main",
    },
    {
      name: "第一分会场",
      url: "/conference/no1",
    },
    {
      name: "第二分会场",
      url: "/conference/no2",
    },
    {
      name: "第三分会场",
      url: "/conference/no3",
    },
    {
      name: "第四分会场",
      url: "/conference/no4",
    },
    {
      name: "第五分会场",
      url: "/conference/no5",
    },
  ];
  //fetch data
  useEffect(() => {
    actions.source.fetch("/person");
    actions.source.fetch("/conference");
    optionText.map(({ url }, i) => {
      i === active
        ? actions.source.fetch(url).then(() =>
            setDisplays(
              state.source
                .get(url)
                .items.map(({ type, id }) => state.source[type][id])
                .map(({ test: name, position, photo }) => (
                  <Display
                    key={name}
                    name={name}
                    position={position}
                    pic={photo.guid}
                    click={() => setIsDetail(!isDetail)}
                  ></Display>
                ))
            )
          )
        : actions.source.fetch(url);
    });
  });
  const { Main, Title, MainBg2 } = common.components;
  const options = optionText.map(({ name }, i) => (
    <option key={name} value={name}>
      {name}
    </option>
  ));

  return (
    <Main>
      <MainBg2 />
      <Title word="论坛详情" png={detailPic}></Title>
      <Center>
        <Select>{options}</Select>
      </Center>
      <Grid>
        {isDetail ? (
          <Content
            pic={defaultPic}
            name="XXX"
            position="XXX"
            content={{
              title: "XXXXXXX",
              report: "XXXXXXXXXXXXXXXXXXX",
              person: "XXXXXXXXXXXXXXXXXXX",
            }}
          ></Content>
        ) : (
          displays
        )}
      </Grid>
    </Main>
  );
};

const Content = (props) => {
  const { pic, name, position, content } = props;
  return (
    <ContentFrame>
      <ContentImg src={pic}></ContentImg>
      <H3>{name}</H3>
      <P>{position}</P>
      <p>报告主题：{content.title}</p>
      <p>报告简介：{content.report}</p>
      <p>个人简介：{content.report}</p>
    </ContentFrame>
  );
};

const ContentFrame = styled.div`
  padding: 3rem;
`;

const ContentImg = styled.img`
  height: 10rem;
  display: block;
  margin: 0 auto;
`;

const H3 = styled.h3`
  margin-bottom: 0;
  text-align: center;
`;

const P = styled.p`
  margin-top: 0;
  text-align: center;
`;

const Display = (props) => {
  const { pic, name, position, click } = props;
  return (
    <div onClick={click}>
      <DisplayImg src={pic}></DisplayImg>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

const DisplayImg = styled.img`
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 7rem;
  margin: 1rem auto;
  margin-top: 2rem;
  font-size: 1rem;
  height: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 3rem;
`;

export default connect(Detail);
