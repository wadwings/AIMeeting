import { connect, Global, css, styled } from "frontity";
import * as common from "./common";
import React, { useState, useEffect } from "react";
import background from '../../assets/img/移动端背景图.png'
import logo from "../../assets/img/logo.png";
import titleImg from "../../assets/img/标题.png";
import themeImg from "../../assets/img/移动端slogan.png";
import positionImg from "../../assets/img/时间地点.png";

const Root = ({ state, actions }) => {
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

  const { Main} = common.components;

  return (
    <div id='mobile'>
      <Global
        styles={css`
          @media screen and (min-width: 500px) {
            html {
              font-size: 12px;
            }
          }
          @media screen and (min-width: 800px) {
            html {
              font-size: 14px;
            }
          }
          @media screen and (min-width: 1200px) {
            html {
              font-size: 18px;
            }
          }
          @media screen and (min-width: 1600px) {
            html {
              font-size: 22px;
            }
          }
          @media screen and (min-width: 2000px) {
            html {
              font-size: 26px;
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
      <BgImg src={background}></BgImg>
      <Logo src={logo}></Logo>
      <Main>
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

const Title = styled.img({
  position: 'relative',
  top: '15vh',
  width: '70%',
  padding: '1.5rem 15% 0 15%'
})


const Theme = styled.img({
  position: 'relative',
  top: '15vh',
  width: '80%',
  padding: '1.5rem 10%',
})

export default connect(Root);
