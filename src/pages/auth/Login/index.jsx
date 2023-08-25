import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  Link,
  Pressable,
  Text,
  VStack,
  View,
} from 'native-base';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import laundry from '@Data/images/background/laundry.svg';

import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Reset the error message when the user starts typing
    setErrors({
      ...errors,
      [field]: '',
    });
  };

  const handleSubmit = () => {
    // Perform your validation here
    console.log('ini');
    const { email, password } = formData;
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate('/');
    }
  };
  return (
    <div className={styles.login}>
      <Box w="100%" zIndex="0" position="relative">
        <div className={styles['masked-image']}></div>
        <Box
          w="100%"
          justifyContent="center"
          alignItems="center"
          display="flex"
          position="absolute"
          top="20%"
        >
          <Box
            w="268px"
            h="34px"
            bgColor="amber.300"
            display="flex"
            justifyContent="center"
            px="24px"
            py="8"
            borderRadius="16px"
            position="relative"
          >
            <Image
              w="100%"
              h="30px"
              source={{
                uri: laundry,
              }}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
      <Box pb="30px">
        <VStack mt="24px">
          <View>
            <Text
              color="amber.300"
              fontSize="36px"
              fontWeight="700"
              lineHeight="45px"
              textAlign="center"
            >
              Login
            </Text>
          </View>
        </VStack>
        <VStack mt="20px">
          <Box px="30px">
            <FormControl isInvalid={!!errors.email}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                placeholder="e.g: name@company.com"
                _focus={{
                  borderColor: 'amber.400',
                }}
                focusOutlineColor="amber.400"
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {!!errors.email && (
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl
              position="relative"
              mt="20px"
              isInvalid={!!errors.password}
            >
              <FormControl.Label>Password</FormControl.Label>
              <Link
                position="absolute"
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'text.500',
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
              <Input
                type="password"
                placeholder="e.g: *****"
                _focus={{
                  borderColor: 'amber.400',
                }}
                focusOutlineColor="amber.400"
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              {!!errors.password && (
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
          </Box>
        </VStack>
        <VStack mt="20px">
          <Box px="30px">
            <Button
              bg="amber.300"
              _text={{ color: 'text.900' }}
              onPress={() => handleSubmit()}
              _pressed={{
                bg: 'amber.400',
              }}
            >
              Masuk
            </Button>
          </Box>
        </VStack>
        <VStack mt="20px">
          <Box px="30px">
            <HStack display="flex" alignItems="center">
              <Text w="fit-content">Belum punya akun?</Text>
              <Pressable
                w="fit-content"
                fontSize="14px"
                ml="2px"
                textDecoration="underline"
                color="info.500"
                fontWeight="600"
              >
                Daftar
              </Pressable>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </div>
  );
};

export default Login;
