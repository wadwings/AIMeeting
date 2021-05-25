import { connect, Global, css, styled } from "frontity";
import React, { useEffect, useState } from "react";
import guestPic from "../../assets/img/主要嘉宾.png";
import defaultPic from "../../assets/img/默认.png";
import * as common from "./common";

const Guest = ({ state, actions }) => {
  const { Main, Title, MainBg1, Content, ContentLayout } = common.components;
  const { fetch } = common;
  const [guest, setGuest] = useState([]);
  useEffect(async () => {
    await fetch( "/organization/guest");
    setGuest(
      state.source
        .get("/organization/guest")
        .items.map(({ type, id }) => state.source[type][id])
        .map(({ photo, person_name: name, position }) => (
          <GuestSingle
            key={name}
            src={photo.guid}
            name={name}
            position={position}
          ></GuestSingle>
        ))
    );
  }, []);
  return (
    <Main>
      <MainBg1 />
      <Title word="主要嘉宾" png={guestPic}></Title>
      <ContentLayout>
        <Content>
          <GuestLayout>{guest}</GuestLayout>
        </Content>
      </ContentLayout>
    </Main>
  );
};

const GuestSingle = (props) => {
  const { src, name, position } = props;
  return (
    <GuestFrame>
      <GuestPic src={src} />
      <h3>{name}</h3>
      <p>{position}</p>
    </GuestFrame>
  );
};

const GuestLayout = styled.div({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "2rem",
});

const GuestFrame = styled.div({
  display: "flex",
  flexFlow: "column",
  maxHeight: "100%",
});

const GuestPic = styled.img({
  maxWidth: "100%",
});

const GuestName = styled.div({
  paddingLeft: "1rem",
  fontSize: "1.5rem",
});

const GuestPosition = styled.div({
  paddingLeft: "1rem",
  fontSize: "1rem",
});

export default connect(Guest);
