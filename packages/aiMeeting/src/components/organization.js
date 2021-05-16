import { connect, Global, css, styled } from "frontity";
import React from "react";
import structPic from "../assets/img/组织架构.png";
import defaultPic from "../assets/img/默认.png";
import * as common from "./common";

const Organization = () => {
  const { Main, Title, MainBg2} = common.components;
  return (
    <Main>
      <MainBg2 />
      <Title word="组织架构" png={structPic}></Title>
      <OrganizationLayout>
        <Grid>
          <Display></Display>
          <Display></Display>
        </Grid>
        <Deputy title='执行主席' content={['曾志刚', '更原名']}></Deputy>
        <Deputy title='执行主席' content={['曾志刚', '更原名']}></Deputy>
        <Deputy title='执行主席' content={['曾志刚', '更原名']}></Deputy>
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
  const {title, content} = props

  const Deputys = content.map(_ => <DeputySingle key={_}>{_}</DeputySingle>)
  return (
    <DeputyFrame>
      <DeputyTitle>{title}</DeputyTitle>
      {Deputys}
    </DeputyFrame>
  );
};

const DeputyFrame = styled.div({
  maring: '1rem'
})

const DeputyTitle = styled.div({
  margin: '0.5rem',
  marginLeft: "15%",
});

const DeputySingle = styled.div({
  margin: '0.25rem',
  marginLeft: "30%",
});

const Display = () => {
  return (
    <DisplayFrame>
      <DisplayPic src={defaultPic}></DisplayPic>
      <DisplayText>
        <h3>主席：XXX</h3>
        <p>重要荣誉：</p>
        <p>荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉</p>
      </DisplayText>
    </DisplayFrame>
  );
};

const DisplayText = styled.div`
  margin: 1rem;
`;

const DisplayPic = styled.img`
  height: inherit;
  max-width: 100%;
`;

const DisplayFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vw * 9 / 32);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export default Organization;
