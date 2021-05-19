import { connect, Global, css, styled } from "frontity";
import React, { useEffect, useState } from "react";
import structPic from "../../assets/img/组织架构.png";
import defaultPic from "../../assets/img/默认.png";
import * as common from "./common";

const Organization = ({ state, actions }) => {
  const { Main, Title, MainBg2, UnderLine } = common.components;
  const { fetch } = common;
  const [presidents, setPresidents] = useState([]);
  const [committee, setCommittee] = useState([]);
  const [executive, setExecutive] = useState([]);
  const [promotion, setPromotion] = useState([]);
  const [secretary, setSecretary] = useState([]);
  useEffect(async () => {
      await fetch( "/orgaization");
      await fetch( "/organization/president");
      await fetch( "/organization/committee");
      await fetch( "/organization/executive");
      await fetch( "/organization/promotion");
      await fetch( "/organization/secretary");
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
      setCommittee(
        state.source
          .get("/organization/committee")
          .items.map(({ type, id }) => state.source[type][id])
          .map(
            ({ person_name: name, position, school }) =>
              `${name}（${position}，${school}）`
          )
      );
      setExecutive(
        state.source
          .get("/organization/executive")
          .items.map(({ type, id }) => state.source[type][id])
          .map(
            ({ person_name: name, position, school }) =>
              `${name}（${position}，${school}）`
          )
      );
      setPromotion(
        state.source
          .get("/organization/promotion")
          .items.map(({ type, id }) => state.source[type][id])
          .map(({ person_name: name }) => `${name}`)
      );
      setSecretary(
        state.source
          .get("/organization/secretary")
          .items.map(({ type, id }) => state.source[type][id])
          .map(({ person_name: name }) => `${name}`)
      );
    }, []);
  return (
    <Main id="item1">
      <MainBg2 />
      <Title word="组织架构" png={structPic}></Title>
      <OrganizationLayout>
        <Grid>{presidents}</Grid>
        <UnderLine />
        <Deputy title="执行主席" content={committee}></Deputy>
        <Deputy title="程序委员会主席" content={executive}></Deputy>
        <Deputy title="推广主席" content={promotion}></Deputy>
        <Deputy title="大会秘书组" content={secretary}></Deputy>
      </OrganizationLayout>
    </Main>
  );
};

const OrganizationLayout = styled.div({
  margin: "2rem",
  maxHeight: "calc(100% - 8rem)",
  overflowY: "auto",
});

const Deputy = (props) => {
  const { title, content } = props;
  const showLines = title === "执行主席" || title === "程序委员会主席";
  const Deputys = showLines ? (
    content.map((_) => <DeputySingle key={_}>{_}</DeputySingle>)
  ) : (
    <DeputySingle>{content.join("，")}</DeputySingle>
  );
  return (
    <DeputyFrame>
      <DeputyTitle>{title}</DeputyTitle>
      {Deputys}
    </DeputyFrame>
  );
};

const DeputyFrame = styled.div({
  maring: "1rem",
});

const DeputyTitle = styled.div({
  margin: "0.5rem",
  marginLeft: "5%",
});

const DeputySingle = styled.div({
  margin: "0.25rem",
  marginLeft: "10%",
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
  fontWeight: 'bold',
  ':last-child':{
    marginBottom: '1rem'
  }
})
const DisplayText = styled.div({
  margin: '1rem',
  marginTop: 0,
})

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
