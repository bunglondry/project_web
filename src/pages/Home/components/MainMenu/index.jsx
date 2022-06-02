import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HStack, Pressable, Text, View } from 'native-base'


const MainMenu = ({ label, bgColor, icon, path }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(path)}>
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
          { label }
        </Text>
        <View
          py="16px"
          pr="40px"
          pl="50px"
          bgColor={bgColor}
          borderLeftRadius="48px"
        >
          {icon}
        </View>
      </HStack>
    </Pressable>
  )
}

export default MainMenu