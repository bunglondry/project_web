import {
  Badge,
  Box,
  Button,
  FlatList,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {
  ArrowLeft,
  PencilSquare,
  Telephone,
  Trash,
  Whatsapp,
} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

import styles from './PelangganDetail.module.scss';

const PelangganDetail = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 'cp-031',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-032',
      transaksiType: 'Lunas',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-033',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-034',
      transaksiType: 'Lunas',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-035',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-036',
      transaksiType: 'Lunas',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-037',
      transaksiType: 'Lunas',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-038',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-039',
      transaksiType: 'Lunas',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-040',
      transaksiType: 'Lunas',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-041',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-042',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-043',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
    {
      id: 'cp-044',
      transaksiType: 'Piutang',
      customerName: 'Sutrisno',
      dueDate: '25/05/2022',
      price: 'Rp45.000',
      type: ['Kilo 3 hari', 'Satuan'],
    },
  ];
  const colorType = ['success', 'error', 'info', 'warning'];
  const randomIndex = Math.floor(4 * Math.random()) + 1;
  return (
    <div className={styles['pelanggan-detail']}>
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
            onPress={() => navigate('/')}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
        </HStack>
        <HStack space="10px" alignItems="center">
          <IconButton
            p="8px"
            icon={<Trash size="16px" color="#F43F5E" />}
            onPress={() => {}}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
          <IconButton
            pl="8px"
            py="8px"
            icon={<PencilSquare size="16px" color="#000000" />}
            onPress={() => {}}
            _hover={{ bg: 'transparent' }}
            _pressed={{ bg: 'transparent' }}
          />
        </HStack>
      </HStack>

      <Box textAlign="center" pb="20px">
        <VStack mb="10px">
          <Text fontSize="24px" fontWeight="700" lineHeight="30px">
            Dika Seva
          </Text>
        </VStack>
        <VStack mb="10px">
          <Text fontSize="20px" fontWeight="700" lineHeight="25px">
            0812 1221 1232
          </Text>
        </VStack>
        <VStack mb="10px">
          <Text fontSize="12px" fontWeight="400" lineHeight="18px">
            Pelanggan sejak 01/03/2021
          </Text>
        </VStack>

        <VStack alignItems="center">
          <HStack >
            <Button w="128px" bgColor="yellow.300" _text={{ color: "text.700" }} rightIcon={<Telephone size="16px" color="#404040" />} onPress={() => {}}>
              Panggil
            </Button>
            <Box w="20px"></Box>
            <Button w="128px" bgColor="#128C7E" _text={{ color: "muted.100" }} rightIcon={<Whatsapp size="16px" color="#F5F5F5" />} onPress={() => {}}>
              Whatsapp
            </Button>
          </HStack>
        </VStack>
      </Box>

      <FlatList
        h="calc(100vh - 226px)"
        pb="10px"
        px="15"
        data={data}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" borderBottomColor="muted.300" py="10px">
            <HStack justifyContent="space-between" mb="8px">
              <HStack justifyContent="space-between">
                <HStack alignItems="center">
                  <Text
                    fontSize="sm"
                    fontWeight="700"
                    lineHegiht="17.5px"
                    color="black"
                    textTransform="uppercase"
                  >
                    {item.id}
                  </Text>
                  <Text mx="2px">-</Text>
                  <Text
                    color={
                      item.transaksiType === 'Piutang'
                        ? 'warning.600'
                        : 'success.500'
                    }
                    fontSize="sm"
                    lineHegiht="17.5px"
                  >
                    {item.transaksiType}
                  </Text>
                </HStack>
              </HStack>
            </HStack>

            <HStack justifyContent="space-between" mb="8px">
              <HStack alignItems="center">
                <Text fontSize="md" fontWeight="700" lineHeight="20px">
                  {item.customerName}
                </Text>
                <Text mx="2px">-</Text>
                <Text fontSize="sm" lineHegiht="17.5px">
                  {item.dueDate}
                </Text>
              </HStack>

              <Text color="text.800" fontSize="sm">
                {item.price}
              </Text>
            </HStack>

            <HStack space="5px">
              {item?.type?.map((type) => (
                <Badge colorScheme={colorType[randomIndex]} variant="subtle">
                  {type}
                </Badge>
              ))}
            </HStack>
          </Box>
        )}
      ></FlatList>
    </div>
  );
};

export default PelangganDetail;
