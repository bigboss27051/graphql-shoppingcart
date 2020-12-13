import React from 'react';
import {
	Flex,
	Text,
} from 'rebass'

const Header = () => {
	return <Flex
		px={2}
		color='white'
		bg='black'
		alignItems='center'>
		<Text p={2} fontWeight='bold'>Shopping Cart</Text>
	</Flex>
}

export default Header