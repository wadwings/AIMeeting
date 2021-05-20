import { connect, Global, css, styled } from "frontity";
import React from "react";
import rontinePic from "../../assets/img/日程安排.png";
import * as common from "./common";

const Rontine = ({preIndex, setIndex}) => {
  const { Main, Title, MainBg2, Post, Content, ContentLayout } = common.components;
  const data = [
    {
      title: "7月23日",
      url: "/dayone",
    },
    {
      title: "7月24日",
      url: "/daytwo",
    },
    {
      title: "7月25日",
      url: "/daythree",
    },
  ];
  const options = data.map((_, i) =>
    i === preIndex ? (
      <ActiveOption onClick={() => setIndex(i)} key={_.title}>
        {_.title}
      </ActiveOption>
    ) : (
      <Option onClick={() => setIndex(i)} key={_.title}>
        {_.title}
      </Option>
    )
  );
  return (
    <Main>
      <div id='item2' css={css`position:absolute;top:-5rem;`}></div>
      <MainBg2 />
      <Title word="日程安排" png={rontinePic}></Title>
      <Menu>{options}</Menu>
      <ContentLayout>
        <Content>
          <Post url={data[preIndex].url}></Post>
        </Content>
      </ContentLayout>
    </Main>
  );
};

const Menu = styled.div({
  position: "relative",
  margin: "0 auto",
  width: "60vw",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Option = styled.div({
  color: 'grey',
  textAlign: "center",
  width: "8rem",
  fontSize: "1.2rem",
  cursor: "pointer",
});

const ActiveOption = styled.div({
  textAlign: "center",
  width: "8rem",
  color: "#042252",
  fontSize: "1.6rem",
  cursor: "pointer",
  borderBottom: "2px #042252 solid",
});

export default Rontine;
