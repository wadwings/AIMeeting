import { connect, Global, css, styled } from "frontity";
import React, { useState } from "react";
import guidePic from "../../assets/img/大会指引.png";
import defaultPic from "../../assets/img/默认.png";
import * as common from "./common";

const Guide = () => {
  const {
    Main,
    Title,
    MainBg2,
    Post,
    Content,
    ContentLayout,
    Menu,
    Option,
    ActiveOption,
    ActiveImg,
  } = common.components;
  const [active, setActive] = useState(0);
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
    i === active ? (
      <ActiveOption onClick={() => setActive(i)} key={_.title}>
        {_.title}
      </ActiveOption>
    ) : (
      <Option onClick={() => setActive(i)} key={_.title}>
        {_.title}
      </Option>
    )
  );
  return (
    <Main id="item4">
      <MainBg2 />
      <Title word="大会指引" png={guidePic}></Title>
      <Menu>{options}</Menu>
      <ContentLayout>
        <Content>
          <Post url={data[active].url}></Post>
        </Content>
      </ContentLayout>
    </Main>
  );
};

export default Guide;
