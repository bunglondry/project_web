import React from "react";
import {
  Box,
  ScrollView,
  Input,
  Icon,
  Avatar,
  HStack,
  Text,
  View,
  VStack,
  Fab,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {
  JournalArrowDown,
  JournalArrowUp,
  ClockHistory,
  Plus
} from "react-bootstrap-icons";

import OtherMenu from "./components/OtherMenu";
import { HomeOthersMenu } from "@Data/Menus";

const Home = () => {
  return (
    <div className="main-bg">
      <Box alignItems="center" px="15px" mt="10px" w="full">
        <Input
          active
          w="full"
          placeholder="Cari transaksi (nama / nomor bon)"
          bgColor="muted.100"
          h="40px"
          InputRightElement={
            <Icon
              as={<MaterialCommunityIcons name="qrcode-scan" />}
              size="20px"
              color="black"
              mr="2"
              onPress={() => {}}
            />
          }
          _focus={{
            outlineColor: "muted.200",
            borderColor: "muted.200"
          }}
          _input={{
            outlineColor: "muted.200",
            borderColor: "muted.200"
          }}
        />
      </Box>
      <ScrollView h="calc(100vh - 170px)">
        <Box px="15px" mt="20px">
          <HStack space="10px">
            <Avatar
              className="avatar"
              bg="white"
              w="48px"
              h="48px"
              borderColor="muted.200"
              borderWidth="1px"
            >
              <Text color="black">BL</Text>
            </Avatar>
            <View>
              <Text
                mb="4px"
                color="black"
                fontWeight="700"
                lineHeight="25px"
                fontSize="20px"
              >
                Bunglondry - Cipete
              </Text>
              <Text
                color="text.500"
                fontWeight={500}
                fontSize="10px"
                lineHeight="15px"
              >
                Kas hari ini
              </Text>
              <HStack space="2px">
                <Text
                  color="text.500"
                  fontWeight={500}
                  fontSize="10px"
                  lineHeight="15px"
                >
                  Rp
                </Text>
                <Text
                  color="text.700"
                  fontWeight={500}
                  fontSize="16px"
                  lineHeight="24px"
                >
                  200.000
                </Text>
              </HStack>
            </View>
          </HStack>
        </Box>
        <Box pl="15px" mt="30px">
          <VStack space="10px">
            <HStack
              space={10}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                color="text.800"
                fontWeight="700"
                fontSize="20px"
                lineHeight="25px"
              >
                Transaksi
              </Text>
              <View
                py="16px"
                pr="40px"
                pl="50px"
                bgColor="info.100"
                borderLeftRadius="48px"
              >
                <JournalArrowDown size={48} color="#0EA5E9" />
              </View>
            </HStack>
            <HStack
              space={10}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                color="text.800"
                fontWeight="700"
                fontSize="20px"
                lineHeight="25px"
              >
                Pengambilan
              </Text>
              <View
                py="16px"
                pr="40px"
                pl="50px"
                bgColor="success.100"
                borderLeftRadius="48px"
              >
                <JournalArrowUp size={48} color="#22C55E" />
              </View>
            </HStack>
            <HStack
              space={10}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                color="text.800"
                fontWeight="700"
                fontSize="20px"
                lineHeight="25px"
              >
                Status
              </Text>
              <View
                py="16px"
                pr="40px"
                pl="50px"
                bgColor="orange.100"
                borderLeftRadius="48px"
              >
                <ClockHistory size={48} color="#F97316" />
              </View>
            </HStack>
          </VStack>
        </Box>

        <Box px="15px" mt="30px">
          {HomeOthersMenu.map((colMenu, index) => (
            <HStack
              space="7.5px"
              flexWrap="wrap"
              key={`col-${index}`}
              mt={index > 0 ? "7.5px" : "0"}
            >
              {colMenu.map((menu, idx) => (
                <OtherMenu
                  key={`menu-${idx}`}
                  icon={menu.icon}
                  label={menu.label}
                  path={menu.path}
                />
              ))}
            </HStack>
          ))}
        </Box>
      </ScrollView>
      <Box w="full" h="120px">
        <Fab
          renderInPortal={false}
          bgColor="yellow.300"
          shadow={2}
          bottom="50%"
          right="50%"
          size="sm"
          icon={
            <Plus size={24} />
          }
          style={{
            transform: 'translate(50%, 50%)'
          }}
          label="Tambah Transaksi"
          _text={{
            color: "black"
          }}
          _hover={{
            shadow: 3
          }}
        />
      </Box>
    </div>
  );
};

export default Home;
