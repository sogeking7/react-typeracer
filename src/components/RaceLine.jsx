import React from "react";
import { useEffect } from "react";

import { Box, Image, Container, Flex } from "@chakra-ui/react";
import carImg from "./../img/car.svg";


function RaceLine({ wpm, cur, setWpm, seconds, minutes, colorMode, car }) {
  
  useEffect(() => {
    const s = 180 - (60 * minutes + seconds);
    setWpm(Math.round(cur / 5 / (s / 60)));
  }, [seconds]);

  return (
    <Box mb="1rem" h="40px">
      <Container
        h="25px"
        display="flex"
        maxW="800px"
        p="0"
        gap="1rem"
        fontSize="1.2rem"
        position="relative"
      >
        <Flex
          position="absolute"
          h="30px"
          top="-15px"
          gap=".5rem"
          left={car + "px"}
        >
          <Box
            fontSize="12px"
            w="54px"
            textAlign="right"
            position="relative"
            top="-5px"
          >
            User <br></br>
            You
          </Box>
          <Image src={carImg} alt="car" h="100%" />
        </Flex>
        <Box
          w="100%"
          borderBottomWidth="2px"
          borderBottomStyle="dashed"
          borderBottomColor={colorMode === "dark" ? "white" : "black"}
        ></Box>
        <Box fontSize="1rem" w="70px">
          {wpm} wpm
        </Box>
      </Container>
    </Box>
  );
}

export default RaceLine;
