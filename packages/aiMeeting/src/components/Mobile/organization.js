import { connect, Global, css, styled } from "frontity";
import React, { useEffect, useState } from "react";
import structPic from "../../assets/img/组织架构.png";
import defaultPic from "../../assets/img/默认.png";
import * as common from "./common";

const Organization = ({ state, actions }) => {
  const { Main, Title, MainBg2, UnderLine, Post, Content, ContentLayout } =
    common.components;
  const { fetch } = common;
  const [presidents, setPresidents] = useState([]);
  useEffect(async () => {
    await fetch("/orgaization");
    await fetch("/orgaization/president");
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
    <Main id="item1">
      <MainBg2 />
      <Title word="组织架构" png={structPic}></Title>
      <ContentLayout>
        <Content>
          {" "}
          <Grid>{presidents}</Grid>
          <UnderLine />
          <Post url="/structure"></Post>
        </Content>
      </ContentLayout>
    </Main>
  );
};

const OrganizationLayout = styled.div({
  margin: "2rem",
  maxHeight: "calc(100% - 8rem)",
  overflowY: "auto",
});

const Display = (props) => {
  const { name, achievement, pic } = props;
  return (
    <DisplayFrame>
      <DisplayPic src={pic}></DisplayPic>
      <DisplayText>
        <DisplayName>主席：</DisplayName>
        <DisplayName>{name}</DisplayName>
        <p>重要荣誉：</p>
        <p>{achievement}</p>
      </DisplayText>
    </DisplayFrame>
  );
};

const DisplayName = styled.div({
  fontSize: "1.2rem",
  fontWeight: "bold",
  ":last-child": {
    marginBottom: "1rem",
  },
});
const DisplayText = styled.div({
  margin: "1rem",
  marginTop: 0,
});

const DisplayPic = styled.img`
  height: inherit;
  max-width: 100%;
`;

const DisplayFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
`;

export default connect(Organization);
