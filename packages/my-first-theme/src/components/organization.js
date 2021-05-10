import { connect, Global, css, styled } from "frontity"
import React from "react"
import structPic from '../assets/img/组织架构.png'
import defaultPic from '../assets/img/默认.png'
import * as common from './common'

const organization = () => {
  const {Main, Title, UnderLine} = common.components;
  return(
    <Main>
      <Title word="组织架构" png={structPic}></Title>
      <Menu>
        <ActiveOption>大会主席</ActiveOption>
        <Option>执行主席</Option>
        <Option>推广主席</Option>
        <Option>秘书组</Option>
      </Menu>
      <Grid>
        <Display></Display>
        <Display></Display>
      </Grid>
      <Deputy></Deputy>
      <Deputy></Deputy>
      <Deputy></Deputy>
      <UnderLine></UnderLine>
    </Main>
  )
}

const Deputy = () => {
  return(
    <DeputyFrame>
      <div>副主席：XXXX</div>
      <div>职位：XXX</div>
      <div>职位：XXX</div>
      <div>职位：XXX</div>
    </DeputyFrame>
  )
}

const DeputyFrame = styled.div`
  margin: 0 15vw 1rem 15vw;
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Display = () => {
  return(
    <DisplayFrame>
      <DisplayPic src={defaultPic}></DisplayPic>
      <DisplayText>
        <h3>主席：XXX</h3>
        <p>重要荣誉：</p>
        <p>荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉荣誉</p>
      </DisplayText>
    </DisplayFrame>
  )
}

const DisplayText = styled.div`
  margin: 1rem;
`

const DisplayPic = styled.img`
  height: inherit;
  max-width: 100%;
`


const DisplayFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vw *9 / 32)
`

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 2rem;
`

export default Organization