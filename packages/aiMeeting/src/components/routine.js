import { connect, Global, css, styled } from "frontity"
import React from "react"
import rontinePic from '../assets/img/日程安排.png'
import * as common from './common'

const Rontine = () => {
  const {Main, Title, UnderLine} = common.components;
  return(
    <Main>
      <Title word='日程安排' png={rontinePic}></Title>
      <Menu>
        <ActiveOption>7月23日</ActiveOption>
        <Option>7月24日</Option>
        <Option>7月25日</Option>
      </Menu>
      <TableFrame>
        <Table>
        <tbody>
        <Thead>
          <Th>活动类别</Th>
          <Th>活动类别</Th>
          <Th>活动类别</Th>
          <Th>活动类别</Th>
        </Thead>
        <Tr>
          <Th>大会开幕</Th>
          <Th>领导致辞</Th>
          <Th>活动类别</Th>
          <Th>时间</Th>
        </Tr>
        <Tr>
          <Th>活动类别</Th>
          <Th>活动类别</Th>
          <Th>活动类别</Th>
          <Th>活动类别</Th>
        </Tr>
        </tbody>
        </Table>
      </TableFrame>
      <UnderLine></UnderLine>
    </Main>
  )
}

const TableFrame = styled.div`
  padding: 0 3rem 2rem 3rem;
`

const Table = styled.table`
  width: 80vw;
  border-collapse: collapse;
  margin: 2rem;
  margin-bottom: 0;
  border: #000078 0.04rem solid;
`

const Thead = styled.tr`
  height: 1.5rem;
  border: #000078 0.04rem solid;
`

const Tr = styled.tr`
  height: 4rem;
  border: #000078 0.04rem solid;
`

const Th = styled.th`
  border: #000078 0.04rem solid;
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

export default Rontine;