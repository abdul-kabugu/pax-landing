import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { GiGroupedDrops } from 'react-icons/gi'

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between"  alignItems="center" h={75}  py={7} px={5} maxWidth="1400px">
        <Box>
           {/*} <Text fontSize="lg" cursor="pointer">Pax-Fi</Text>*/}
           <GiGroupedDrops  size={40} color="#6874F2" cursor="pointer"/>
        </Box>
        <Box>
            <Button leftIcon={<AiOutlineUserAdd  />} rightIcon= {<BsArrowRight  />} color="blackAlpha.900" size="lg" mr={6}>
            <a
        target="_blank"
         rel="noreferrer"
        href='https://testnet.lenster.xyz/'>
        Create  Profile
</a>
              
              
              </Button>
             <Button rightIcon={<BsArrowRight />} color="whiteAlpha.900" size="lg" bgColor="#5865F2">
             <a
        target="_blank"
         rel="noreferrer"
        href='https://pax-fi.vercel.app/'>
          Launch App 
         </a>
             
              </Button>
        </Box>
    </Box>
  )
}
