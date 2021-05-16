import { connect, Global, css, styled } from "frontity"
import React from "react"
import sponsorPic from '../assets/img/参展赞助.png'
import * as common from './common'

const Sponsor = () => {
  const {Main, Title, MainBg1} = common.components;
  return(
    <Main>
      <MainBg1/>
      <Title word='参展赞助' png={sponsorPic}></Title>
    </Main>
  )
}

export default Sponsor