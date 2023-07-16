import React from 'react';
import { Box, Image, Text, VStack, View } from 'native-base';

import laundry from '@Data/images/background/laundry.svg';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <Box w="100%" zIndex="0">
        <div className={styles['masked-image']}></div>

        <Box
          w="268px"
          h="34px"
          bgColor="#FFCE07"
          justifyContent="center"
          display="flex"
          px="24px"
          py="8"
          borderRadius="16px"
          top="64px"
          left="20%"
          textTransform="translateX(-50%)"
        >
          <Image
            w="100%"
            h="30px"
            source={{
              uri: laundry,
            }}
            alt="Alternate Text"
          />
        </Box>
      </Box>
      <VStack mt="24px">
        <Text
          color="amber.300"
          fontSize="36px"
          fontWeight="700"
          lineHeight="45px"
          textAlign="center"
        >
          Login
        </Text>
      </VStack>
    </div>
  );
};

export default Login;
