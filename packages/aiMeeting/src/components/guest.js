import { connect, Global, css, styled } from "frontity"
import React from "react"
import guestPic from '../assets/img/主要嘉宾.png'
import defaultPic from '../assets/img/默认.png'
import * as common from './common'

const Guest = () => {
  const {Main, Title, UnderLine, MainBg1} = common.components;
  return(
    <Main>
      <MainBg1/>
      <Title word='主要嘉宾' png={guestPic}></Title>
      <GuestLayout>
        <GuestSingle src={defaultPic} name='XXX' position='XXXXXX职位'/>
        <GuestSingle src={defaultPic} name='XXX' position='XXXXXX职位'/>
        <GuestSingle src={defaultPic} name='XXX' position='XXXXXX职位'/>
      </GuestLayout>
    </Main>
  )
}

const GuestSingle = (props) => {
  const {src, name, position} = props
  return(
    <GuestFrame>
      <GuestPic src={src}/>
      <GuestName>{name}</GuestName>
      <GuestPosition>{position}</GuestPosition>
    </GuestFrame>
  )
}

const GuestLayout = styled.div({
  position: 'relative',
  margin: '5rem',
  height: 'calc(100% - 14rem)',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '100%',
  overflowY: 'auto',
  gridGap: '2rem'
})

const GuestFrame = styled.div({
  display: 'flex',
  flexFlow: 'column',
  maxHeight: '100%'
})

const GuestPic = styled.img({
  height: '70%',
  maxWidth: '100%'
})

const GuestName = styled.div({
  paddingLeft: '1rem',
  fontSize: '1.5rem'
})

const GuestPosition = styled.div({
  paddingLeft: '1rem',
  fontSize: '1rem'
})

export default Guest