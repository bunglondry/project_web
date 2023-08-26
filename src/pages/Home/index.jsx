import {
  Avatar,
  Box,
  Button,
  Fab,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import React from 'react';
import {
  ClockHistory,
  JournalArrowDown,
  JournalArrowUp,
  Plus,
  QrCodeScan,
} from 'react-bootstrap-icons';

import { HomeOthersMenu } from '@Data/Menus';
import { MainMenu, OtherMenu } from './components';

const Home = () => {
  return (
    <View h="100%" overflowY="hidden">
      <VStack>
        <Box alignItems="center" px="15px" my="10px" w="full">
          <Input
            active
            w="full"
            placeholder="Cari transaksi (nama / nomor bon)"
            bgColor="muted.100"
            h="40px"
            InputRightElement={
              <Pressable mr="16px" onPress={() => console.log('press')}>
                <QrCodeScan size="16px" color="#000000" />
              </Pressable>
            }
            _focus={{
              outlineColor: 'muted.200',
              borderColor: 'muted.200',
            }}
            _input={{
              outlineColor: 'muted.200',
              borderColor: 'muted.200',
            }}
          />
        </Box>
      </VStack>
      <VStack h="calc(100vh - 12rem)" overflowY="auto">
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
            <MainMenu
              label="Transaksi"
              bgColor="info.100"
              icon={<JournalArrowDown size={48} color="#0EA5E9" />}
              path="/transaksi"
            />
            <MainMenu
              label="Pengambilan"
              bgColor="success.100"
              icon={<JournalArrowUp size={48} color="#22C55E" />}
              path="/pengambilan"
            />
            <MainMenu
              label="Status"
              bgColor="orange.100"
              icon={<ClockHistory size={48} color="#F97316" />}
              path="/status"
            />
          </VStack>
        </Box>

        <Box px="15px" mt="30px">
          {HomeOthersMenu.map((colMenu, index) => (
            <HStack
              space="8px"
              display="flex"
              key={`col-${index}`}
              mt={index > 0 ? '7.5px' : '0'}
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
      </VStack>

      <VStack my="16px">
        <Box px="15px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="solid"
              w="fit-content"
              borderRadius="42px"
              bg="amber.300"
              shadow='3'
              _text={{ color: 'text.900' }}
              onPress={() => {}}
              _pressed={{
                bg: 'amber.400',
              }}
            >
              <HStack>
                <View>
                  <Plus size="22px" />
                </View>
                <Text>Transaksi Baru</Text>
              </HStack>
            </Button>
          </Box>
        </Box>
        {/* <Fab
        renderInPortal={false}
        bgColor="yellow.300"
        shadow={2}
        bottom="7%"
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
      /> */}
      </VStack>
    </View>
  );
};

export default Home;
