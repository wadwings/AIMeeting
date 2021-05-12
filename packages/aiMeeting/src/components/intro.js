import { connect, Global, css, styled } from "frontity"
import React from "react"
import introPic from '../assets/img/intro.png'
import * as common from './common'

const Intro = () => {
  const {Main, Title, UnderLine} = common.components;
  return(
    <Main>
      <Title word='大会介绍' png={introPic}></Title>
      <Word>为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供重要</Word>
      <UnderLine></UnderLine>
    </Main>
  )
}

const Word = styled.div`
  padding: 5rem 3rem 2rem 3rem;
  font-size: 1.2rem;
`

export default Intro