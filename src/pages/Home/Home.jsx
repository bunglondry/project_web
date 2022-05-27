import React from 'react'
import { Box, ScrollView, Input, Icon, Avatar, HStack, Text, View, VStack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import image from '../../data/images/avatar/Artboard.png'

const Home = () => {
  return (
    <div className='main-bg'>
      <Box alignItems="center" px="8.5px" mt="10px" w="full">
        <Input active w="full" placeholder="Cari transaksi (nama / nomor bon)" bg="muted.100" h="40px" InputRightElement={
          <Icon as={<MaterialCommunityIcons name="qrcode-scan" />} size="20px" color="black" mr="2" onPress={() => {}} />
        } />
      </Box>
      <ScrollView minH="100%">
        <Box px="8.5px" mt="20px">
          <HStack space="10px">
            <Avatar className="avatar" bg="white" w="48px" h="48px" borderColor="muted.200" borderWidth="1px"><Text color="black">BL</Text></Avatar>
            <View>
              <Text mb="4px" color="black" fontWeight="700" lineHeight="25px" fontSize="20px" >Bunglondry - Cipete</Text>
              <Text color="text.500" fontWeight={500} fontSize="10px" lineHeight="15px">Kas hari ini</Text>
              <HStack space="2px">
                <Text color="text.500" fontWeight={500} fontSize="10px" lineHeight="15px">Rp</Text>
                <Text color="text.700" fontWeight={500} fontSize="16px" lineHeight="24px">200.000</Text>
              </HStack>
            </View>
          </HStack>
        </Box>
        <Box pl="8.5px" mt="30px">
          <VStack space="10px">
            <HStack space={10}>
              <Text>Transaksi</Text>
              <View>
                {/* <Icon>

                </Icon> */}
              </View>
            </HStack>
          </VStack>
        </Box>
      </ScrollView>
    </div>
  )
}

export default Home