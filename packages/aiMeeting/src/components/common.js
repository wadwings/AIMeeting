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
import backgroundType1 from '../assets/img/backgroundType1.png'
import backgroundType2 from '../assets/img/backgroundType2.png'

const Title = (props) => {
  const {word, png} = props
  return(
    <TitleFrame>
      <TitleImg src={png}></TitleImg>
      {word}
    </TitleFrame>
  )
}

const TitleImg = styled.img`
  height: inherit;
  padding: 0 0.8rem 0 0.2rem;
`

const TitleFrame = styled.div({
  height: '2rem',
  padding: '0.5rem',
  position: 'relative',
  fontSize: '1.5rem',
  color: 'grey',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UnderLine = styled.div`
  width: 80vw;
  margin: 0 auto 1rem auto;
  border: 0.04rem #041c45 solid;
`

const Main = styled.div({
  position: 'relative',
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  height: 'calc(100vw / 16 * 9)',
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
  margin: "2rem 4rem",
  flex: 1,
});

const Content = styled.div({
  height: '100%',
  padding: "2rem",
  backgroundColor: "rgba(255,255,255, 0.6)",
  overflowY: "auto",
})

const Post = connect(PostUnconnect)

const components = {
  Title,
  UnderLine,
  Main,
  MainBg1,
  MainBg2,
  Post,
  ContentLayout,
  Content
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
  pages
}