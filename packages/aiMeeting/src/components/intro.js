import { connect, Global, css, styled } from "frontity"
import React from "react"
import introPic from '../assets/img/intro.png'
import * as common from './common'

const Intro = () => {
  const {Main, Title, UnderLine, MainBg1} = common.components;
  return(
    <Main>
      <MainBg1/>
      <Title word='大会介绍' png={introPic}></Title>
      <Word>为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要为进一步落实习总书记和国务院政府工作报告关于大力推进人工智能发展的部署，把握战略机遇，为我国人工智能领域的学者和企业家提供要</Word>
    </Main>
  )
}

const Word = styled.div({ 
  margin: '5rem',
  fontSize: '1.5rem',
  maxHeight: 'calc(100% - 14rem)',
  overflowY: 'auto'
})

export default Intro