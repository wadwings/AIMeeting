import Mobile from './Mobile/root'
import PC from './PC/root'
import { connect, Global, css, styled } from "frontity";
import React, {useState} from 'react'
const root = () => {
	return<Main>
		<div>2021中国光谷人工智能大会暨企业家高峰论坛</div>
		<A href='http://aic.hust.edu.cn'>【点击进入】</A>
	</Main>
}

const Main = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content:center;
`

const A = styled.a`
	color: black;
`

export default root;
