import { connect, Global, css, styled } from "frontity";
import React, { useEffect, useState } from "react";
import structPic from "../../assets/img/组织架构.png";
import defaultPic from "../../assets/img/默认.png";
import * as common from "./common";

const Organization = ({ state, actions }) => {
  const { Main, Title, MainBg2, Post, Content, ContentLayout } =
    common.components;
  const { fetch } = common;
  const [presidents, setPresidents] = useState([]);
  useEffect(async () => {
    await fetch("/orgaization");
    await fetch("/organization/president");
    setPresidents(
      state.source
        .get("/organization/president")
        .items.map(({ type, id }) => state.source[type][id])
        .map(({ photo, person_name: name, achievement }) => (
          <Display
            key={name}
            name={name}
            achievement={achievement}
            pic={photo.guid}
          ></Display>
        ))
    );
  }, []);
  return (
    <Main>
      <div
        id="item1"
        css={css`
          position: absolute;
          top: -5rem;
        `}
      ></div>
      <MainBg2 />
      <Title word="组织架构" png={structPic}></Title>
      <ContentLayout>
        <Content>
          {" "}
          <Grid>{presidents}</Grid>
          <Post url="/structure"></Post>
        </Content>
      </ContentLayout>
    </Main>
  );
};

const Display = (props) => {
  const { name, achievement, pic } = props;
  return (
    <DisplayFrame>
      <DisplayPic src={pic}></DisplayPic>
      <DisplayText>
        <h3>主席：{name}</h3>
        <p>重要荣誉：</p>
        <p>{achievement}</p>
      </DisplayText>
    </DisplayFrame>
  );
};

const DisplayText = styled.div`
  margin: 1rem;
`;

const DisplayPic = styled.img`
  width: 100%;
`;

const DisplayFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export default connect(Organization);
