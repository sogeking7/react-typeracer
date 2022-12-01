import {Box, Container, useColorModeValue} from '@chakra-ui/react'

import ScoreBoard from './ScoreBoard/ScoreBoard';

export default function NavBar() {
	const bg = useColorModeValue("white", "black")
  return (
    <Box bgColor={bg} mb='2rem'>
			<Container maxW="1440px" px='1rem' py='.5rem' display ='flex' justifyContent='flex-end'>
				<ScoreBoard />
			</Container>
    </Box>
  );
}
