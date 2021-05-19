import { connect, Global, css, styled } from "frontity"
import React from "react"
import Detail from './detail'
import Guide from './guide'
import Organization from './organization'
import Review from './review'
import Intro from './intro'
import Routine from './routine'
import Guest from './guest'
import Sponsor from './sponsor'
import Broadcast from './broadcast'
import backgroundType1 from '../../assets/img/backgroundType1.png'
import backgroundType2 from '../../assets/img/backgroundType2.png'
import {fetch} from '../PC/common'

const Title = (props) => {
  const {word, png} = props
  return(
    <TitleFrame>
      <TitleImg src={png}></TitleImg>
      <TitleText >{word}</TitleText>
    </TitleFrame>
  )
}

const TitleText = styled.p({
  whiteSpace: 'nowrap',
  fontSize: '1.5rem'
})

const TitleImg = styled.img`
  height: 1.5rem;
  padding: 0 0.8rem 0 0.2rem;
`

const TitleFrame = styled.div({
  height: '2rem',
  padding: '0.5rem',
  position: 'relative',
  fontSize: '1.5rem',
  color: 'black',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.5rem auto',
  border: '2px solid #041c45',
  borderRadius: '3rem',
})

const UnderLine = styled.div`
  width: 80%;
  margin: 1rem auto;
  border: 0.04rem #041c45 solid;
`

const Main = styled.div({
  position: 'relative',
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  minHeight: 'calc(100vw * 1.48)',
  maxHeight: '90vh',
  overflow: 'hidden'
})

const BgImg = styled.img({
  position: 'absolute',
  top: '0',
  width:'100%',
  height: '100%',
  opacity: 0.4,
  zIndex: -1,
})

const MainBg1 = () => {
  return <BgImg src={backgroundType1} />
}

const MainBg2 = () => {
  return <BgImg src={backgroundType2} />
}


const PostUnconnect = (props) => {
  const {url, state} = props
  const data = state.source.get(url)
  const post = state.source[data.type][data.id]
  return (
    <PostFrame>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </PostFrame>
  )
}

const PostFrame = styled.div({
  backgroundColor: 'white',
  height: '100%',
  width:'100%',
  overflowY: 'auto'
})

const ContentLayout = styled.div({
  margin: "2rem 1rem",
  flex: 1,
  overflowY: "auto",
});

const Content = styled.div({
  minHeight: 'calc(100% - 4rem)',
  padding: "2rem",
  position: 'relative',
  backgroundColor: "rgba(255,255,255, 0.6)",

})

const Menu = styled.div({
  position: "relative",
  margin: "0 auto",
  width: "80vw",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Option = styled.div({
  color: 'grey',
  textAlign: "center",
  width: "7rem",
  fontSize: "1.2rem",
  cursor: "pointer",
});

const ActiveOption = styled.div({
  textAlign: "center",
  width: "7rem",
  color: "#042252",
  fontSize: "1.4rem",
  cursor: "pointer",
  borderBottom: "2px #042252 solid",
});

const Post = connect(PostUnconnect)

const components = {
  Title,
  UnderLine,
  Main,
  MainBg1,
  MainBg2,
  Post,
  ContentLayout,
  Content,
  Menu,
  Option,
  ActiveOption
}

const pages = {
  Detail,
  Guide,
  Organization,
  Review,
  Intro,
  Routine,
  Guest,
  Sponsor,
  Broadcast
}

export {
  components,
  pages,
  fetch
}