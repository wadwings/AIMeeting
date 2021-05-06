import { connect, Global, css, styled } from "frontity"
import React from "react"
import detailPic from '../assets/img/论坛详情.png'
import defaultPic from '../assets/img/默认.png'
import * as common from './common'

class Detail extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      status: 0
    }
  }
  
  display = () =>{
    this.setState({
      status: 1
    })
  }
  render(){
    const {Main, Title, UnderLine} = common.components;
    const {status} = this.state;
    if(status === 0){
      const displays = Array(4).fill(null).map((_, i) => <Display key={i} pic={defaultPic} name='XXX' position='XXXX职称' click={this.display}></Display>)
      return (
        <Main>
          <Title word='论坛详情' png={detailPic}></Title>
          <Center>
          <Select>
            <option value='论坛主会场'>论坛主会场</option>
            <option value='第一分会场'>第一分会场</option>
            <option value='第二分会场'>第二分会场</option>
            <option value='第三分会场'>第三分会场</option>
          </Select>
          </Center>
          <Grid>
            {displays}
          </Grid>
          <UnderLine></UnderLine>
        </Main>
      )
    }else{
      return (
        <Main>
          <Title word='论坛详情' png={detailPic}></Title>
          <Center>
          <Select>
            <option value='论坛主会场'>论坛主会场</option>
            <option value='第一分会场'>第一分会场</option>
            <option value='第二分会场'>第二分会场</option>
            <option value='第三分会场'>第三分会场</option>
          </Select>
          </Center>
          <Content pic={defaultPic} name='XXX' position='XXX' content={{
            title: 'XXXXXXX',
            report: 'XXXXXXXXXXXXXXXXXXX',
            person: 'XXXXXXXXXXXXXXXXXXX'
          }}></Content>
          <UnderLine></UnderLine>
        </Main>
      )
    }
    
  }
  
}

const Content = (props) => {
  const {pic, name, position, content} = props;
  return(
    <ContentFrame>
      <ContentImg src={pic}></ContentImg>
      <H3>{name}</H3>
      <P>{position}</P>
      <p>报告主题：{content.title}</p>
      <p>报告简介：{content.report}</p>
      <p>个人简介：{content.report}</p>
    </ContentFrame>
  )
}
const ContentFrame = styled.div`
  padding: 3rem;
`

const ContentImg = styled.img`
  height: 10rem;
  display: block;
  margin: 0 auto;
`

const H3 = styled.h3`
  margin-bottom: 0;
  text-align: center;
`

const P = styled.p`
margin-top: 0;
  text-align: center;
`

const Display = (props) => {
  const {pic, name, position, click} = props;
  return(
    <div onClick={click}>
      <DisplayImg src={pic}></DisplayImg>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  )
}

const DisplayImg = styled.img`
  width: 100%;
`


const Center = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`

const Select = styled.select`
  display:flex;
  justify-content: center;
  text-align: center;
  width: 7rem;
  margin: 1rem auto;
  margin-top: 2rem;
  font-size: 3rem;
  height: 3rem;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 3rem;
`

export default Detail;