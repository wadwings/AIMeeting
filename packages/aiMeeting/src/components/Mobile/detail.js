import { connect, Global, css, styled } from "frontity";
import React, { useState, useEffect } from "react";
import detailPic from "../../assets/img/论坛详情.png";
import * as common from "./common";

const Detail = ({ state, actions }) => {
  const [active, setActive] = useState(0);
  const [displays, setDisplays] = useState([]);
  const [DetailContent, setDetailContent] = useState(null);
  const { Main, Title, MainBg2, Content, ContentLayout } = common.components;
  const { fetch } = common;
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
  const activeUrl = optionText[active].url;
  useEffect(() => {
    fetch("/person");
    fetch("/conference");
  }, []);
  useEffect(async () => {
    await fetch(activeUrl);
    setDisplays(
      state.source
        .get(activeUrl)
        .items.map(({ type, id }) => state.source[type][id])
        .map((data) => {
          const {
            person_name: name,
            position,
            photo,
            subject,
            subjectintro,
            personintro,
          } = data;
          const content = {
            subject,
            subjectintro,
            personintro,
          };
          return (
            <Display
              key={name}
              name={name}
              position={position}
              pic={photo.guid}
              click={() => setUpDetail(photo.guid, name, position, content)}
            ></Display>
          );
        })
    );
  }, [active]);

  function updateActive(e) {
    const value = e.target.value;
    for (let i = optionText.length - 1; i--; i >= 0) {
      if (optionText[i].name === value) {
        setActive(i);
        return;
      }
    }
  }
  function setUpDetail(pic, name, position, content) {
    setDetailContent(
      <DisplayContent
        pic={pic}
        name={name}
        position={position}
        content={content}
        click={setDetailContent}
      ></DisplayContent>
    );
  }
  const options = optionText.map(({ name }, i) => (
    <option key={name} value={name}>
      {name}
    </option>
  ));

  return (
    <Main id="item3">
      <MainBg2 />
      <Title word="论坛详情" png={detailPic}></Title>
      <Center>
        <Select onChange={updateActive}>{options}</Select>
      </Center>
      <ContentLayout>
        <Content>
          {DetailContent ? DetailContent : <Grid>{displays}</Grid>}
        </Content>
      </ContentLayout>
    </Main>
  );
};

const Exit = styled.div({
  borderRadius: "3rem",
  padding: "0.2rem",
  border: "1px #8adbff solid",
  position: "absolute",
  bottom: "0",
  right: "1rem",
  textAligh: "center",
  width: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const DisplayContent = (props) => {
  const { pic, name, position, content, click } = props;
  return (
    <>
      <ContentImg src={pic}></ContentImg>
      <Exit onClick={() => click(null)}>返回</Exit>
      <H3>{name}</H3>
      <P>{position}</P>
      <ContentBlock>
        报告主题：<Text>{content.subject}</Text>
      </ContentBlock>
      <ContentBlock>
        报告简介：<Text>{content.subjectintro}</Text>
      </ContentBlock>
      <ContentBlock>
        个人简介：<Text>{content.personintro}</Text>
      </ContentBlock>
    </>
  );
};

const ContentBlock = styled.div({
  margin: "0.5rem",
});

const Text = styled.p({
  wordBreak: "break-word",
});

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
    <div
      css={css`
        cursor: pointer;
      `}
      onClick={click}
    >
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
  font-size: 1rem;
`;

const Grid = styled.div({
  display: "grid",
  gridGap: "2rem",
  gridTemplateColumns: "1fr 1fr",
  margin: "3rem",
});

export default connect(Detail);
