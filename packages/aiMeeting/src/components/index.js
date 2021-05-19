import Mobile from './Mobile/root'
import PC from './PC/root'
import { connect, Global, css, styled } from "frontity";
import React, {useState} from 'react'
const root = () => {
	const [isPC, setIsPC] = useState(false)
	return(
		<>
			<Global styles={css`
				@media screen and (max-width: 769px) {
					#PC {
						display: none;
					}
				}
				
				@media screen and (min-width: 768px) {
					#mobile {
						display: none;
					}
				}
			`}></Global>
			<PC />
			<Mobile />
		</>
	)
}

export default root;
