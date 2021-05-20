import { connect, Global, css, styled } from "frontity"
import React from "react"
import introPic from '../../assets/img/intro.png'
import * as common from './common'

const Intro = () => {
  const {Main, Title, MainBg1, Post, Content, ContentLayout} = common.components;
  return(
    <Main>
      <div id='intro' css={css`position:absolute;top:-5rem;`}></div>
      <MainBg1/>
      <Title word='大会介绍' png={introPic}></Title>
      <ContentLayout>
        <Content>
          <Post url='/introduction' />
        </Content>
      </ContentLayout>
    </Main>
  )
}

export default Intro