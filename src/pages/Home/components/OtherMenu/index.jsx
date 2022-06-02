import React from "react";
import { Pressable, Center, Text, useMediaQuery } from "native-base";

const OtherMenu = ({ icon, label, path }) => {
  const [isMaxScreen] = useMediaQuery({
    minWidth: 400
  });

  const width = (100 / 3) - 2

  return (
    <Pressable
      w={`${width}%`}
      h={isMaxScreen ? '135px' : '105px'}
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="4px"
      borderColor="muted.100"
      onPress={() => {}}
    >
      <Center w={isMaxScreen ? '135px' : '105px'} h={isMaxScreen ? '135px' : '105px'}>
        {icon}
        <Text
          color="text.600"
          fontSize="14px"
          lineHeight="21px"
          fontWeight="500"
          mt="13px"
        >
          {label}
        </Text>
      </Center>
    </Pressable>
  );
};

export default OtherMenu;
