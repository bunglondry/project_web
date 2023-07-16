import { Badge, Box, FlatList, HStack, IconButton, Pressable, Text } from 'native-base';
import React, { useRef } from 'react';
import {
  ArrowLeft,
  Filter,
  QrCodeScan,
  Search,
  SortDown
} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

import styles from './Pelanggan.module.scss';

const Pelanggan = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const handleOpen = () => {
    ref.current.open();
  };

  const handleClose = () => {
    ref.current.close();
  };

  const data = [
    {
      id: 'cs-031',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-032',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-033',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-034',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-035',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-036',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-037',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-038',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-039',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-040',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-041',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-042',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-043',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
    {
      id: 'cs-044',
      name: 'Amanada',
      phone: '0885832378',
      totalTransaction: 30,
    },
  ];

  return (
    <div className={styles.pelanggan}>
      <HStack
        space="63px"
        alignItems="center"
        justifyContent="space-between"
        px="15px"
        my="15px"
        w="full"
      >
        <HStack space="10px" alignItems="center">
          <IconButton
            p="8px"
            icon={<ArrowLeft size="16px" color="#000000" />}
            onPress={() => navigate(-1)}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
          <Text
            fontSize="20px"
            fontWeight="700"
            lineHeight="22px"
            color="black"
          >
            Pelanggan
          </Text>
        </HStack>
        <HStack space="10px" alignItems="center">
          <IconButton
            p="8px"
            icon={<SortDown size="16px" color="#000000" />}
            onPress={() => {}}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
          <IconButton
            p="8px"
            icon={<Filter size="16px" color="#000000" />}
            onPress={handleOpen}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
          <IconButton
            pl="8px"
            py="8px"
            icon={<Search size="16px" color="#000000" />}
            onPress={() => {}}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
        </HStack>
      </HStack>

      <FlatList
        h="calc(100vh - 72px)"
        pb="10px"
        px="15"
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/pelanggan/${item.id}`)}>
            <Box borderBottomWidth="1" borderBottomColor="muted.300" py="10px">
              <HStack justifyContent="space-between" mb="5px">
                <HStack justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      lineHegiht="17.5px"
                      color="black"
                      textTransform="uppercase"
                    >
                      {item.name}
                    </Text>
                  </HStack>
                </HStack>

                <Badge flexDirection="initial" color>
                  <Text fontSize="xs" fontWeight="500" lineHeight="18px">
                    {item.totalTransaction}x transaksi
                  </Text>
                </Badge>
              </HStack>

              <HStack justifyContent="space-between" mb="8px">
                <HStack alignItems="center">
                  <Text fontSize="sm" lineHegiht="17.5px">
                    {item.phone}
                  </Text>
                </HStack>

                <Text color="text.800" fontSize="sm">
                  {item.price}
                </Text>
              </HStack>
            </Box>
          </Pressable>
        )}
      ></FlatList>
    </div>
  );
};

export default Pelanggan;
