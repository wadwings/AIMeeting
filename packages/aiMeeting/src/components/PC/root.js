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
  const [active, setActive] = useState();
  const [routine, setRoutine] = useState(0);
  const [broadcast, setBroadcast] = useState(0);
  const [guide, setGuide] = useState(0);
  const option = {
    大会详情: {
      type: "list",
      list: [
        {
          name: "大会介绍",
          url: "intro",
        },
        {
          name: "主要嘉宾",
          url: "guest",
        },
        {
          name: "参展赞助",
          url: "sponsor",
        },
      ],
    },
    组织架构: {
      type: "url",
      url: "#item1",
    },
    日程安排: {
      type: "list",      
      list: [
        {
          name: "7月23日",
          url: "item2",
          click: () => setRoutine(0)
        },
        {
          name: "7月24日",
          url: "item2",
          click: () => setRoutine(1)
        },
        {
          name: "7月25日",
          url: "item2",
          click: () => setRoutine(2)
        },
      ],
    },
    论坛详情: {
      type: "url",
      url: "#item3",
    },
    大会指引: {
      type: "list",
      list: [
        {
          name: "投稿通知",
          url: "item4",
          click: () => setGuide(0)
        },
        {
          name: "会议注册",
          url: "item4",
          click: () => setGuide(1)
        },
        {
          name: "住宿交通",
          url: "item4",
          click: () => setGuide(2)
        },
      ],
    },
    云端直播: {
      type: "list",
      list: [
        {
          name: "视频直播",
          url: "item5",
          click: () => setBroadcast(0)
        },
        {
          name: "图片直播",
          url: "item5",
          click: () => setBroadcast(1)
        },
      ],
    },
    往届回顾: {
      type: "url",
      url: "#item6",
    },
  };
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
  const options = [];

  for (let [key, value] of Object.entries(option)) {
    if (value.type === "url") {
      options.push(
          <Option key={key} href={value.url} onClick={() => setActive(key)}>
            {key}
          </Option>
      );
    } else {
      options.push(
        <SubList
          key={key}
          active={active === key ? 1 :0}
          name={key}
          list={value.list}
          click={setActive}
        ></SubList>
      );
    }
  }

  return (
    <div id="PC">
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
        <div css={css`height:4rem`}></div>
        <Title src={titleImg}></Title>
        <Theme src={themeImg}></Theme>
        <Title src={positionImg}></Title>
      </Main>
      <Intro />
      <Guest />
      <Sponsor />
      <Organization />
      <Routine preIndex={routine} setIndex={setRoutine}/>
      <Detail />
      <Guide preIndex={guide} setIndex={setGuide}/>
      <Broadcast preIndex={broadcast} setIndex={setBroadcast}/>
      <Review />
    </div>
  );
};

const SubList = ({ active, name, list, click }) => {
  const content = list.map((_) => 
    <SubListOption key={_.name} href={`#${_.url}`} onClick={_.click}>
      {_.name}
    </SubListOption>
  );
  const onClick = () => {
    !active ? click(name) : click('')
  }
  return  (
    <SubListBlock onClick={onClick}>
      {name}
      <SubListLayout opacity={active}>{content}</SubListLayout>
    </SubListBlock>
  )
};

const SubListBlock = styled.div(({active}) =>({
  position: 'relative',
  display: "block",
  textAlign: "center",
  width: "8rem",
  cursor: "pointer",
  color: "white",
  fontSize: "1.2rem",
  padding: "none",
  borderBottom: "none",
}))

const SubListLayout = styled.div(({opacity}) => ({
  transition: '0.5s',
  display: "flex",
  flexFlow: "column",
  position: "absolute",
  opacity: opacity,
  bottom: '-1.2rem',
  transform: !opacity ? 'none': 'translateY(100%)',
  visibility: opacity ? 'visible' : 'hidden',
  background: 'rgba(0,0,0,0.5)'
}));

const SubListOption = styled.a({
  position: 'relative',
  display: "block",
  color: "white",
  textDecoration: "none",
  width: "8rem",
  fontSize: "1.2rem",
  padding: '0.5rem 0',
  textAlign: "center",
  pointer: 'cursor',
  zIndex: 2,
  ":visited": {
    color: "white",
  },
});

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

const Menu = styled.div({
  position: 'fixed',
  top: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  width: '80vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.2rem 10vw',
  zIndex: 1,
})

const Option = styled.a({
  position: 'relative',
  display: "block",
  textAlign: "center",
  width: "8rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
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
