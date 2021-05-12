import { connect, Global, css, styled } from "frontity"
import React from "react"
import guidePic from '../assets/img/大会指引.png'
import defaultPic from '../assets/img/默认.png'
import * as common from './common'

const Guide = () => {
  const {Main, Title, UnderLine} = common.components;
  return(
    <Main>
      <Title word='大会指引' png={guidePic}></Title>
      <Menu>
        <ActiveOption>投稿通知</ActiveOption>
        <Option>会议注册</Option>
        <Option>参展赞助</Option>
        <Option>住宿交通</Option>
      </Menu>
      <Content>
        <H1>大会投稿通知</H1>
      </Content>
      <UnderLine></UnderLine>
    </Main>
  )
}

const Menu = styled.div`
  position: relative;
  margin: 0 auto;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 10rem 1.5rem 15rem;
`

const Option = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`

const ActiveOption = styled.div`
  color: #8adbff;
  scale: 1.4;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  border-bottom: 0.06rem #8adbff solid;
`

const Content = styled.div`
  margin: 2rem 4rem;
  padding: 2rem;
  background-color: #efefef;
  width: calc(100vw - 12rem);
  height: 20rem;
  border: 0.04rem #000078 solid;
  overflow-y: scroll;
`

const H1 = styled.h1`
  text-align:center;
`

export default Guide