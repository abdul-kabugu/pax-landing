import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between"  alignItems="center" h={75}  py={7} px={5} maxWidth="1400px">
        <Box>
            <Text fontSize="lg" cursor="pointer">Pax-Fi</Text>
        </Box>
        <Box>
            <Button leftIcon={<AiOutlineUserAdd  />} rightIcon= {<BsArrowRight  />} color="blackAlpha.900" size="lg" mr={6}>Create  Profile</Button>
             <Button rightIcon={<BsArrowRight />} color="whiteAlpha.900" size="lg" bgColor="#5865F2">Launch this  App </Button>
        </Box>
    </Box>
  )
}
