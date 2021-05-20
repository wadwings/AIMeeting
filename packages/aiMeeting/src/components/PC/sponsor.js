import { connect, Global, css, styled } from "frontity"
import React from "react"
import sponsorPic from '../../assets/img/参展赞助.png'
import * as common from './common'

const Sponsor = () => {
  const {Main, Title, MainBg1, Post, Content, ContentLayout} = common.components;
  return(
    <Main>
      <div id='sponsor' css={css`position:absolute;top:-5rem;`}></div>
      <MainBg1/>
      <Title word='参展赞助' png={sponsorPic}></Title>
      <ContentLayout>
        <Content>
          <Post url='/sponsor' />
        </Content>
      </ContentLayout>
    </Main>
  )
}

export default connect(Sponsor)