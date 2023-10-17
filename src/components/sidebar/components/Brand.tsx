// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Heading } from "@chakra-ui/react";
// Custom components
import { ArLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<ArLogo h='111px' w='200px' my='32px' color={logoColor} />
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
