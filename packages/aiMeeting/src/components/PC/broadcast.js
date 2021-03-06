import { connect, useConnect, css, styled } from "frontity";
import React, { useState, useEffect } from "react";
import yunPic from "../../assets/img/云端直播.png";
import activeOptionPic from "../../assets/img/ActiveOption.png";
import * as common from "./common";

const Broadcast = ({ preIndex, setIndex }) => {
  const { state } = useConnect();
  const { fetch } = common;
  const { Main, Title, MainBg2, ContentLayout, Post, Content } =
    common.components;
  const [photo, setPhoto] = useState([]);
  const optionText = ["视频直播", "照片直播"];
  async function updatePhotos() {
    let url = "/usage/broadcast";
    let photos = [];
    while (url) {
      await fetch(url);
      photos = photos.concat(
        state.source
          .get(url)
          .items.map(({ type, id }) => state.source[type][id])
          .map(({ picture, text }) => {
            return {
              url: picture.guid,
              text: text,
            };
          })
      );
      url = state.source.get(url).next;
    }
    setPhoto(photos)
  }
  useEffect(() => {
    updatePhotos();
  }, []);
  const options = optionText.map((_, i) =>
    i === preIndex ? (
      <ActiveOption key={_} onClick={setIndex.bind(this, i)}>
        <ActiveImg></ActiveImg>
        {_}
      </ActiveOption>
    ) : (
      <Option key={_} onClick={setIndex.bind(this, i)}>
        {_}
      </Option>
    )
  );
  return (
    <Main>
      <div
        id="item5"
        css={css`
          position: absolute;
          top: -5rem;
        `}
      ></div>
      <MainBg2 />
      <Title word="云端直播" png={yunPic}></Title>
      <Menu>{options}</Menu>
      <ContentLayout>
        {preIndex === 0 ? (
          <Content>
            <Post url="/broadcast" />
          </Content>
        ) : (
          <Photobroadcast src={photo} />
        )}
      </ContentLayout>
    </Main>
  );
};

const Photobroadcast = ({ src }) => {
  const photos = src.map(({ url, text }) => (
    <MagicImg key={text} src={url} word={text}></MagicImg>
  ));
  return <>{photos}</>;
};

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
  font-size: 1.5rem;
  position: absolute;
  transform: ${(props) => (props.show === 1 ? "none" : "translate(0, 100%)")};
  bottom: 0;
  opacity: ${(props) => props.show};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MagicDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 80%;
  margin: 2rem auto;
  width: -webkit-fit-content;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

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
        left: 0,
        width: "8rem",
      })}
      src={activeOptionPic}
    ></img>
  );
};
const ActiveOption = styled.div({
  position: "relative",
  textAlign: "center",
  width: "8rem",
  color: "#670a1c",
  fontSize: "1.6rem",
  cursor: "pointer",
});

export default connect(Broadcast);
