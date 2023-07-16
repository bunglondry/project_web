import React, { useRef } from "react";
import {
  Badge,
  Box,
  FlatList,
  HStack,
  IconButton,
  Text,
} from "native-base";
import {
  ArrowLeft,
  SortDown,
  Filter,
  Search,
  QrCodeScan,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import ActionSheet from "actionsheet-react"

import styles from "./Transaksi.module.scss";

const animals = ["🦁 Lion", "🦊 Fox", "🐻 Bear", "🐼 Panda", "🐵 Monkey"];

const Transaksi = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const handleOpen = () => {
    ref.current.open();
  };

  const handleClose = () => {
    ref.current.close();
  }

  const data = [
    {
      id: "cp-031",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-032",
      transaksiType: "Lunas",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-033",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-034",
      transaksiType: "Lunas",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-035",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-036",
      transaksiType: "Lunas",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-037",
      transaksiType: "Lunas",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-038",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-039",
      transaksiType: "Lunas",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-040",
      transaksiType: "Lunas",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-041",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-042",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-043",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
    {
      id: "cp-044",
      transaksiType: "Piutang",
      customerName: "Sutrisno",
      dueDate: "25/05/2022",
      price: "Rp45.000",
      type: ["Kilo 3 hari", "Satuan"],
    },
  ];
  const colorType = ["success", "error", "info", "warning"];
  const randomIndex = Math.floor(4 * Math.random()) + 1;
  return (
    <div className={styles.transaksi}>
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
            _hover={{ bg: "transparent" }}
            _pressed={{ bg: "transparent" }}
          />
          <Text
            fontSize="20px"
            fontWeight="700"
            lineHeight="22px"
            color="black"
          >
            Transaksi
          </Text>
        </HStack>
        <HStack space="10px" alignItems="center">
          <IconButton
            p="8px"
            icon={<SortDown size="16px" color="#000000" />}
            onPress={() => {}}
            _hover={{ bg: "transparent" }}
            _pressed={{ bg: "transparent" }}
          />
          <IconButton
            p="8px"
            icon={<Filter size="16px" color="#000000" />}
            onPress={handleOpen}
            _hover={{ bg: "transparent" }}
            _pressed={{ bg: "transparent" }}
          />
          <IconButton
            p="8px"
            icon={<Search size="16px" color="#000000" />}
            onPress={() => {}}
            _hover={{ bg: "transparent" }}
            _pressed={{ bg: "transparent" }}
          />
          <IconButton
            pl="8px"
            py="8px"
            icon={<QrCodeScan size="16px" color="#000000" />}
            onPress={() => {}}
            _hover={{ bg: "transparent" }}
            _pressed={{ bg: "transparent" }}
          />
        </HStack>
      </HStack>

      <FlatList
        h="calc(100vh - 72px)"
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
                      item.transaksiType === "Piutang"
                        ? "warning.600"
                        : "success.500"
                    }
                    fontSize="sm"
                    lineHegiht="17.5px"
                  >
                    {item.transaksiType}
                  </Text>
                </HStack>
              </HStack>

              <IconButton
                p="8px"
                icon={<ThreeDotsVertical size="12px" color="#000000" />}
                onPress={() => {}}
                _hover={{ bg: "transparent" }}
                _pressed={{ bg: "transparent" }}
              />
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
      
      <ActionSheet
        ref={ref}>
        <div className={styles['action-bar']} />
        {animals.map((a, i) => (
          <div
            className="label" 
            onClick={handleClose}
            key={i}>
            {a}
          </div>
          )
        )}
      </ActionSheet>
    </div>
  );
};

export default Transaksi;
