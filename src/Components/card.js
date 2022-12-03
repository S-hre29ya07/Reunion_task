import React from 'react'
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { IoBedOutline } from "react-icons/io5";
import { BiArea, BiBath } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import "../styles/Card.css"

export const card = ({details}) => {
    return (
        <Box w="310px" borderRadius="10px" bg="white" mt="30px" pos="relative"
        >
            <Image 
                src={details.image}
                w="100%"
                h="170px"
                objectFit="cover"
                borderTopRadius="10px"
            />
            {details.popular &&
                <>
                    <Box pos="absolute" bg="#4e4494" w="12px" h="15px" left={"-12px"} top="180px" zIndex={0} transform="skewY(30deg)"></Box>
                    <Box pos="absolute" top="160px" left="-12px" width="110px" height="30px" bg="#7265f5" color="white"
                        borderRadius="8px" borderBottomLeftRadius="0px">
                        <Text ml="20px" mt="3px" fontWeight={600}>POPULAR</Text>
                    </Box>
                </>
            }
            <Box p={4} pos="relative" zIndex={1}>
                <Flex mt="10px" justifyContent="space-between">
                    <Box>
                        <Text color={"#696298"}><span id="Price-styling">${details.rent}</span>/month</Text>
                        <Text fontSize={22} fontWeight={500}>{details.name}</Text>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" w="35px" h="35px" 
                        borderRadius="50%" border="1px solid #bbb" cursor="pointer"
                    >
                        <AiOutlineHeart />
                    </Flex>
                </Flex>
                <Text color="#949390">{details.address}</Text>
                <Divider mt="15px" mb="10px" />
                <Flex justifyContent="space-between">
                    <Flex gap="4px" alignItems="center">
                        <IoBedOutline color='#696298' fontSize={18} />
                        <Text color="#747370">{details.props.beds} Beds</Text>
                    </Flex>
                    <Flex gap="4px" alignItems="center">
                        <BiBath color='#696298' fontSize={18} />
                        <Text color="#747370">{details.props.bathrooms} Bathrooms</Text>
                    </Flex>
                    <Flex gap="4px" alignItems="center">
                        <BiArea color='#696298' fontSize={18} />
                        <Text color="#747370">{details.props.size} m<sup>2</sup></Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
 export default card;