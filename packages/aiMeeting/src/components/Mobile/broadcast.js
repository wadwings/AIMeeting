import { connect, Global, css, styled } from "frontity";
import React, { useState, useEffect } from "react";
import yunPic from "../../assets/img/云端直播.png";
import * as common from "./common";

const Broadcast = ({ state }) => {
  const {
    Main,
    Title,
    MainBg2,
    Menu,
    Option,
    ActiveOption,
    Content,
    ContentLayout,
    ActiveImg,
  } = common.components;
  const { fetch } = common;
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState([]);
  const optionText = ["视频直播", "照片直播"];
  async function updatePhotos() {
    await fetch('/usage')
    await fetch("/usage/broadcast");
    setPhoto(
      state.source
        .get("/usage/broadcast")
        .items.map(({ type, id }) => state.source[type][id])
        .map(({ picture, text }) => {
          return{
            url: picture.guid,
            text: text
          }
        })
    );
  }
  useEffect(() => {
    updatePhotos()
  },[])
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
    <Main id="item5">
      <MainBg2 />
      <Title word="云端直播" png={yunPic}></Title>
      <Menu>{options}</Menu>
      <ContentLayout>
        <Content>
          {active === 0 ? <VideoBroadcast /> : <Photobroadcast src={photo} />}
        </Content>
      </ContentLayout>
    </Main>
  );
};
const Photobroadcast = ({src}) => {
  const photos = src.map(({url, text}) => <MagicImg key={text} src={url} word={text}></MagicImg>)
  return (
    <PhotosLayout>
      {photos}
    </PhotosLayout>
  )
}

const PhotosLayout = styled.div({
  display: 'grid',
  gridTemplateRows: '33vh',
  gridTemplateColumns: '1fr',
  gridGap: '2rem'
})

const MagicImg = (props) => {
  const [status, setStatus] = useState(0);
  const { src, word } = props;
  return (
    <MagicDiv
      onMouseEnter={() => setStatus(1)}
      onMouseLeave={() => setStatus(0)}
    >
      <Img src={src}></Img>
      <Text show={status}>{word}</Text>
    </MagicDiv>
  );
};

const Text = styled.div`
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
`;

const Img = styled.img`
  width: 100%;
`;

const VideoBroadcast = () => {
  const data = [
    {
      title: "论坛主会场",
      url: "https://www.baidu.com",
    },
    {
      title: "第一分会场",
      url: "https://www.baidu.com",
    },
    {
      title: "第二分会场",
      url: "https://www.baidu.com",
    },
    {
      title: "第三分会场",
      url: "https://www.baidu.com",
    },
    {
      title: "第四分会场",
      url: "https://www.baidu.com",
    },
    {
      title: "第五分会场",
      url: "https://www.baidu.com",
    },
  ];

  const Videos = data.map((_) => (
    <VideoSingle key={_.title} title={_.title} url={_.url} />
  ));
  return Videos;
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

const VideoText = styled.a({
  textDecoration: "none",
  color: "#000078",
  paddingTop: "0.5rem",
  paddingLeft: "2rem",
});

const VideoLayout = styled.div({
  display: "flex",
  flexFlow: "column",
  padding: "0.5rem",
  alignItems: "flex-start",
});

const VideoTitle = styled.div({
  border: "2px solid #000078",
  padding: "0.5rem 1rem",
  color: "black",
  borderRadius: "2rem",
  marginRight: "2rem",
});

export default connect(Broadcast);
