import { connect, Global, css, styled } from "frontity"
import React from "react"
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

const TitleFrame = styled.div`
  height: 2rem;
  padding: 0.5rem;
  background-color: #041b43;
  border-radius: 1.5rem;
  position: absolute;
  font-size: 1.5rem;
  color: white;
  display:flex;
  top: 1rem;
  left: 1rem;
`

const UnderLine = styled.div`
  width: 80vw;
  margin: 0 auto 1rem auto;
  border: 0.04rem #041c45 solid;
`

const Main = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vw / 16);
`
const components = {
  Title: Title,
  UnderLine: UnderLine,
  Main: Main
}

export {
  components
}