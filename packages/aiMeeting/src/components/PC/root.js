import { connect, Global, css, styled } from "frontity";
import * as common from "./common";
import React, { useState, useEffect } from "react";
import bgLayer1 from "../../assets/img/bgLayer1.png";
import bgLayer2 from "../../assets/img/bgLayer2.png";
import logo from "../../assets/img/logo.png";
import titleImg from "../../assets/img/标题.png";
import themeImg from "../../assets/img/主题.png";
import positionImg from "../../assets/img/时间地点.png";

const Root = ({ state, actions }) => {
  const option = [
    "组织架构",
    "日程安排",
    "论坛详情",
    "大会指引",
    "云端直播",
    "往届回顾",
  ];
  const [active, setActive] = useState(0);
  const {
    Detail,
    Guide,
    Organization,
    Intro,
    Routine,
    Review,
    Guest,
    Sponsor,
    Broadcast,
  } = common.pages;
  const options = option.map((_, i) =>
    i == active ? (
      <ActiveOption href={`#item${i + 1}`} onClick={() => setActive(i)} key={i}>
        {_}
      </ActiveOption>
    ) : (
      <Option href={`#item${i + 1}`} key={i} onClick={() => setActive(i)}>
        {_}
      </Option>
    )
  );

  return (
    <div id='PC'>
      <Global
        styles={css`
          @media screen and (min-width: 500px) {
            html {
              font-size: 12px;
            }
          }
          @media screen and (min-width: 800px) {
            html {
              font-size: 16px;
            }
          }
          @media screen and (min-width: 1200px) {
            html {
              font-size: 20px;
            }
          }
          @media screen and (min-width: 1600px) {
            html {
              font-size: 24px;
            }
          }
          @media screen and (min-width: 2000px) {
            html {
              font-size: 28px;
            }
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            margin: 0;
          }
          body {
            margin: 0;
          }
          p {
            word-break: break-word;
            font-size: 1rem;
          }
        `}
      />
      <BgImg src={bgLayer1}></BgImg>
      <BgImg src={bgLayer2}></BgImg>
      <Logo src={logo}></Logo>
      <Main>
        <Menu>{options}</Menu>
        <Title src={titleImg}></Title>
        <Theme src={themeImg}></Theme>
        <Title src={positionImg}></Title>
      </Main>
      <Intro />
      <Guest />
      <Sponsor />
      <Organization />
      <Routine />
      <Detail />
      <Guide />
      <Broadcast />
      <Review />
    </div>
  );
};

const Main = styled.div`
  width: 100%;
  min-height: calc(100vw / 16 * 9);
`;

const BgImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  width: 7rem;
`;

const Menu = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
`;

const Option = styled.a({
  display: "block",
  textAlign: "center",
  width: "8rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
});

const ActiveOption = styled.a({
  display: "block",
  textAlign: "center",
  width: "8rem",
  color: "#8adbff",
  fontSize: "1.6rem",
  padding: "0.2rem 0.4rem",
  cursor: "pointer",
  textDecoration: "none",
  borderBottom: "1px #8adbff solid",
});

const Title = styled.img`
  position: relative;
  width: 50%;
  padding: 1.5rem 25% 0 25%;
`;

const Theme = styled.img`
  position: relative;
  width: 70%;
  padding: 1.5rem 15%;
`;

export default connect(Root);
