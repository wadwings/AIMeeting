import { connect, Global, css, styled } from "frontity";
import React, { useState } from "react";
import yunPic from "../../assets/img/云端直播.png";
import * as common from "./common";

const Broadcast = ({}) => {
  const { Main, Title, MainBg2, Post, Menu, Option, ActiveOption } = common.components;
  const [active, setActive] = useState(0);
  const optionText = ["视频直播", "照片直播"];

  const options = optionText.map((_, i) =>
    i === active ? (
      <ActiveOption key={_} onClick={setActive.bind(this, i)}>
        {_}
      </ActiveOption>
    ) : (
      <Option key={_} onClick={setActive.bind(this, i)}>
        {_}
      </Option>
    )
  );
  return (
    <Main id='item5'>
      <MainBg2 />
      <Title word="云端直播" png={yunPic}></Title>
      <Menu>{options}</Menu>
      <BroadcastLayout>
        {active === 0 ? <VideoBroadcast /> : <Post url="/photobroadcast" />}
      </BroadcastLayout>
    </Main>
  );
};

const VideoBroadcast = () => {
  const data = [
    {
      title: "论坛主会场",
      url: "www.baidu.com",
    },
    {
      title: "第一分会场",
      url: "www.baidu.com",
    },
    {
      title: "第二分会场",
      url: "www.baidu.com",
    },
    {
      title: "第三分会场",
      url: "www.baidu.com",
    },
    {
      title: "第四分会场",
      url: "www.baidu.com",
    },
    {
      title: "第五分会场",
      url: "www.baidu.com",
    },
  ];

  const Videos = data.map((_) => (
    <VideoSingle key={_.title} title={_.title} url={_.url} />
  ));
  return <VideoFrame>{Videos}</VideoFrame>;
};

const VideoSingle = (props) => {
  const { title, url } = props;
  return (
    <VideoLayout>
      <VideoTitle>{title}</VideoTitle>
      <VideoText href={url}>{url}</VideoText>
    </VideoLayout>
  );
};
const VideoFrame = styled.div({
  margin: "0 2rem",
});
const VideoText = styled.a({
  textDecoration: "none",
  color: "#000078",
});

const VideoLayout = styled.div({
  display: "flex",
  padding: "0.5rem",
  alignItems: "center",
});

const VideoTitle = styled.div({
  border: "2px solid #000078",
  padding: "1rem 2rem",
  color: "black",
  borderRadius: "2rem",
  marginRight: "2rem",
});

const BroadcastLayout = styled.div({
  position: "relative",
  flex: 1,
  margin: "2rem",
  overflowY: "auto",
});

export default Broadcast;