import { connect, Global, css, styled } from "frontity"
import React from "react"
import reviewPic from '../assets/img/往届回顾.png'
import groupPic from '../assets/img/2019人工智能大会合影.png'
import defaultPic from '../assets/img/默认.png'
import * as common from './common'

const Review = () => {
  const {Main, Title, MainBg2} = common.components;
  return(
    <Main>
      <MainBg2/>
      <Title word='往届回顾' png={reviewPic}></Title>
      <ReviewLayout>
      <Header>首届中国光谷人工智能大会暨企业家高峰论坛（2019）
      </Header>
      <Img src={groupPic}></Img>
      <P>2019人工智能大会全体人员合影</P>
      <Grid>
        <MagicImg src={defaultPic} word='文字'></MagicImg>
        <MagicImg src={defaultPic} word='文字'></MagicImg>
        <MagicImg src={defaultPic} word='文字'></MagicImg>
      </Grid>
      </ReviewLayout>
    </Main>
  )
}

const ReviewLayout = styled.div({
  margin: '2rem',
  maxHeight: 'calc(100% - 8rem)',
  overflowY: 'auto'
})

class MagicImg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 0
    }
  }

  showText = () => {
    this.setState({
      status: 1
    }, () => console.log(this.state))
  }

  closeText = () => {
    this.setState({
      status: 0
    }, () => console.log(this.state))
  }
  render(){
    const {src, word} = this.props
    const {status} = this.state
    if(status === 0){
      return(
        <MagicDiv onMouseEnter={this.showText} onMouseLeave={this.closeText}>
          <Img src={src}></Img>
          <Text show={0}>{word}</Text>
        </MagicDiv>
      )
    }else{
      return(
        <MagicDiv onMouseEnter={this.showText} onMouseLeave={this.closeText}>
          <Img src={src}></Img>
          <Text show={1}>{word}</Text>
        </MagicDiv>
      )
    }
  }
}

const Text = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.5s; 
  position: absolute;
  transform: ${props => props.show === 1 ? 'none': 'translate(0, 100%)'};
  bottom: 0;
  opacity: ${props => props.show};
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
`

const MagicDiv = styled.div`
  position:relative;
  overflow:hidden;
  width: 100%;
`

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-size: 1.5rem;
`

const Img = styled.img`
  width: 100%;
`

const P = styled.p`
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem;
  grid-gap: 2rem;
`

export default Review