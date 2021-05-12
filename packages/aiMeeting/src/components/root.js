import { connect, Global, css, styled } from "frontity"
import * as common from './common'
import React from "react"
import bgLayer1 from '../assets/img/bgLayer1.png'
import bgLayer2 from '../assets/img/bgLayer2.png'
import sponsorImg from '../assets/img/赞助logo.png'
import titleImg from '../assets/img/标题.png'
import themeImg from '../assets/img/主题.png'
import positionImg from '../assets/img/时间地点.png'
class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      option: ['组织架构','日程安排','论坛详情','大会指引','云端直播','往届回顾'],
      active: 0,
    }
  }

  optionClick = (index) => {
    this.setState({
      active: index
    })
  }

  render(){
    const {active, option} = this.state
    const {Detail, Guide, Organization, Intro, Routine, Review} = common.pages
    const options = option.map((_, i) => i == active ? <ActiveOption onClick={this.optionClick.bind(this, i)} key={i}>{_}</ActiveOption> : <Option key={i} onClick={this.optionClick.bind(this, i)}>{_}</Option>)
    return(
      <>
        <Global
          styles={css`
            html {
              font-family: system-ui, Verdana, Arial, sans-serif;
              margin: 0;
            }
            body{
              margin: 0;
            }
          `}
        />
        <BgImg src={bgLayer1}></BgImg>
        <BgImg src={bgLayer2}></BgImg>
        <Sponsor src={sponsorImg}></Sponsor>
        <Main>
          <Menu>
            {options}
          </Menu>
          <Title src={titleImg}></Title>
          <Theme src={themeImg}></Theme>
          <Title src={positionImg}></Title>
        </Main>
        <Organization/>
        <Intro/>
        <Routine/>
        <Detail/>
        <Guide/>
        <Review/>
      </>
    )
  }
}

const Main = styled.div`
  width: 100%;
  min-height: calc(100vw / 16 * 9)
`

const BgImg = styled.img`
  width:100%;
  position: absolute;
  top: 0;
`

const Sponsor = styled.img`
  position: absolute;
  top: 0;
  width: 7rem;
`

const Menu = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
`

const Option = styled.div`
  color: white;
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

const Title = styled.img`
  position: relative;
  width: 50%;
  padding: 1.5rem 25% 0 25%;
`

const Theme = styled.img`
  position : relative;
  width: 70%;
  padding: 1.5rem 15%;
`

export default Root