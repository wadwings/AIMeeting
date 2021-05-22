import { connect, Global, css, styled } from "frontity";
import React, { useState } from "react";
import rontinePic from "../../assets/img/日程安排.png";
import * as common from "./common";

const Rontine = () => {
  const { Main, Title, MainBg2, Post, Content, ContentLayout, Menu, Option, ActiveOption, ActiveImg } = common.components;
  const [active, setActive] = useState(0);
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
    i === active ? (
      <ActiveOption onClick={() => setActive(i)} key={_.title}>
        {_.title}
      </ActiveOption>
    ) : (
      <Option onClick={() => setActive(i)} key={_.title}>
        {_.title}
      </Option>
    )
  );
  return (
    <Main  id='item2'>
      <MainBg2 />
      <Title word="日程安排" png={rontinePic}></Title>
      <Menu>{options}</Menu>
      <ContentLayout>
        <Content>
          <Post url={data[active].url}></Post>
        </Content>
      </ContentLayout>
    </Main>
  );
};

export default Rontine;
