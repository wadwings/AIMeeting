import { connect, Global, css, styled } from "frontity";
import React, { useState } from "react";
import yunPic from "../assets/img/云端直播.png";
import * as common from "./common";

const Broadcast = ({}) => {
  const { Main, Title, MainBg2, Post } = common.components;
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

const Menu = styled.div({
  position: 'relative',
  margin: '0 auto',
  width: '60vw',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})


const Option = styled.div({
  textAlign: 'center',
  width: '8rem',
  fontSize: '1.2rem',
  cursor: 'pointer'
});

const ActiveOption = styled.div({
  textAlign: 'center',
  width: '8rem',
  color: '#8adbff',
  fontSize: '1.6rem',
  padding: '0.2rem 0.4rem',
  cursor: 'pointer',
  borderBottom: '1px #8adbff solid',
})

export default Broadcast;
