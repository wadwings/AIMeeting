import { connect, Global, css, styled } from "frontity";
import React, { useState } from "react";
import guidePic from "../../assets/img/大会指引.png";
import activeOptionPic from '../../assets/img/ActiveOption.png'
import * as common from "./common";

const Guide = ({ preIndex, setIndex }) => {
  const { Main, Title, MainBg2, Post, Content, ContentLayout } =
    common.components;
  const data = [
    {
      title: "投稿通知",
      url: "/contributornotification",
    },
    {
      title: "会议注册",
      url: "/conferenceregistration",
    },
    {
      title: "住宿交通",
      url: "/accommodation",
    },
  ];
  const options = data.map((_, i) =>
    i === preIndex ? (
      <ActiveOption onClick={() => setIndex(i)} key={_.title}>
        <ActiveImg></ActiveImg>
        {_.title}
      </ActiveOption>
    ) : (
      <Option onClick={() => setIndex(i)} key={_.title}>
        {_.title}
      </Option>
    )
  );
  return (
    <Main>
      <div
        id="item4"
        css={css`
          position: absolute;
          top: -5rem;
        `}
      ></div>
      <MainBg2 />
      <Title word="大会指引" png={guidePic}></Title>
      <Menu>{options}</Menu>
      <ContentLayout>
        <Content>
          <Post url={data[preIndex].url}></Post>
        </Content>
      </ContentLayout>
    </Main>
  );
};

const Menu = styled.div({
  position: "relative",
  margin: "0 auto",
  width: "80%",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Option = styled.div({
  color: "grey",
  textAlign: "center",
  width: "8rem",
  fontSize: "1.2rem",
  cursor: "pointer",
});
const ActiveImg = () => {
  return (
    <img
      css={css({
        position: "absolute",
        zIndex: -1,
        top: 0,
        width: "11rem",
        transform: "translate(-3rem, -0.6rem)",
      })}
      src={activeOptionPic}
    ></img>
  );
};
const ActiveOption = styled.div({
  textAlign: "center",
  width: "8rem",
  color: "#042252",
  fontSize: "1.6rem",
  cursor: "pointer",
});

export default Guide;
