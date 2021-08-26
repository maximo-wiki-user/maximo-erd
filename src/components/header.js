import * as React from "react"
import { Box } from "@chakra-ui/react"
import logo from "../images/icon.png";
import { Flex, Image} from "@chakra-ui/react"

export const Header = () => {

  return (
    <>
        <Box w="100%" h="8em" bgGradient="linear(to-b,blue.900,blue.500)">
        <Flex align="center">
        <Image
              borderRadius="full"
              boxSize="2em"
              size="1em"
              src={logo}
              alt="Maximo Icon"
            />
        </Flex>   
        </Box>
    </>
  )
};