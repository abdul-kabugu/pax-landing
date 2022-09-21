import { Box, Heading, Highlight, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

export default function MainView() {
  return (
    <Box w="100%" >
     <Navbar  />
       <Box w="100%"   display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Heading fontSize={130}>Create. </Heading>
          <Heading fontSize={130}>Collect. </Heading>
          <Heading fontSize={130}>Connect. </Heading>

           <Box>
            <Text fontSize={50} textAlign="center"
              bgGradient="linear(to-l, #7CD2EA, #F3869D, cyan.100)"
              bgClip="text"
            >The simplest way to <br />
              create & collect Social NFTs.</Text>
           </Box>

           
       </Box>

        <Box bgColor="#05182B" w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Text fontSize={65} textAlign="center" bgGradient="linear(to-l, #FFFFFF, #2E9CF7)" bgClip="text">It's Like  Tik-Tok, </Text>
            <Text fontSize={65} textAlign="center" bgGradient="linear(to-l, #FFFFFF, #2E9CF7)" bgClip="text">But  You  Own Your Content  </Text>
             <Text fontSize={65} textAlign="center" bgGradient="linear(to-l, #FD839B, #BD63E3, #9479F6, #72A4E4)" bgClip="text"> &   You  Can Sell Your <br /> Content   to  Your  Fans </Text>
             
        
        </Box>

         <Box w="100%"  display="flex" flexDirection="column" justifyContent="center"  alignItems="center">
            <Heading fontSize={180}
              bgGradient="linear(to-l, #7CD2EA, #F3869D, cyan.100)"
              bgClip="text"
            >Creators.</Heading>
            <Box w="90%" display="flex" alignItems="center" justifyContent="space-between"  p={5}>
            <Image    src='img/banner-1.png' alt='creator  banner' />
            <Box w={400}  textAlign="center" >
              
                <Heading fontSize={80}>Share.</Heading>
                <Text fontSize={27} color="whiteAlpha.600">Share exclusive content with your fans and sell it
                     to unlock rewards, perks and experiences.</Text>
            </Box>
            </Box>

            <Box w="90%" display="flex" alignItems="center" justifyContent="space-between"  p={5}>
            
            <Box w={400}  textAlign="center" >
              
                <Heading fontSize={80}>Sell.</Heading>
                <Text fontSize={27} color="whiteAlpha.600">Sell limited editions or individual moments either through auction or a fixed price.</Text>
            </Box>
            <Image    src='img/banner-2.png' alt='creator  banner' />
            </Box>

            <Box w="90%" display="flex" alignItems="center" justifyContent="space-between"  p={5}>
            <Image    src='img/banner-3.png' alt='creator  banner' />
            <Box w={400}  textAlign="center" >
              
                <Heading fontSize={80}>Reward.</Heading>
                <Text fontSize={27} color="whiteAlpha.600">Reward Your  Fans  By Setting  Referral  Fee  so they % on each Purchase</Text>
            </Box>
           
            </Box>
         </Box >

          {/*} <Box w="100%" height="100vh" bgColor="whiteAlpha.900" color="blackAlpha.900">
             <Heading>You</Heading>
  </Box>*/}

         <Box  w="100%"  display="flex" flexDirection="column" justifyContent="center"  alignItems="center">
         <Heading fontSize={180}
              bgGradient="linear(to-l, #7CD2EA, #F3869D, cyan.100)"
              bgClip="text"
            >Fans.</Heading>

<Box w="90%" display="flex" alignItems="center" justifyContent="space-between"  p={5}>
           
            <Box w={400}  textAlign="center" >
              
                <Heading fontSize={80}>Collect.</Heading>
                <Text fontSize={27} color="whiteAlpha.600">Collect moments from all your favorite creators and transfer them out at any time.</Text>
            </Box>
            <Image    src='img/banner-4.png' alt='creator  banner' style={{width: "600px"}}/>
            </Box>

            <Box w="90%" display="flex" alignItems="center" justifyContent="space-between"  p={5}>
            <Image    src='img/banner-5.png' alt='creator  banner' style={{width: "400px"}}/>
            <Box w={400}  textAlign="center" >
            
                <Heading fontSize={80}>Mirror .</Heading>
                <Text fontSize={27} color="whiteAlpha.600">Earn By Re-amplifying Your  Favorite  creators posts</Text>
            </Box>
          
            </Box>
         </Box>

          <Box bgColor="#05182B" width="100%" h="100vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
             
             <Heading textAlign="center" fontSize={55}
              bgGradient="linear(to-l, #7CD2EA, #F3869D, cyan.100)"
              bgClip="text"
             >Make money <br />
            on the platform,<br />
               not for the platform.</Heading>
                <Box mt={5}>
               <Text textAlign="center" fontSize={25}>Apps like-Tik Tok and Instagram help creators <br /> connect with fans but when it comes to making <br /> money, only they win.</Text>
               </Box>

               <Box mt={3}>
              <Text textAlign="center" fontSize={25}color="whiteAlpha.700">At  PaxFi Our  Goal Is  To  Build  a  platform 
                That  Empowers  creators <br /> and fans  
                to  all benefit  from the communities they  build <br /> through  shared experience and <br /> profit. Everybody wins.
              
              </Text>
               </Box>
          </Box>

          <Box w="100%" py={6}>
            <Text fontSize={25}
             bgGradient="linear(to-l, #F18292, #AA6DEB, #6EADE0)"
             bgClip="text"
              textAlign="center"
               >
              We're Buidling On   Polygon  lens-protocol  and  Moralis 
            </Text>
          </Box>
    </Box>
  )
}
