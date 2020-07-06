//a little design system extention on chakra for my side projects and etc
import React from "react";
import { Button, Box, Input as ChakraInput } from "@chakra-ui/core";

export function BlueButton(props) {
  return (
    <Button
      variantColor="blue"
      boxShadow="sm"
      borderColor="blue.600"
      borderWidth="1px"
      borderRadius="12px"
      {...props}
    />
  );
}

export function Card(props) {
  return (
    <Box
      backgroundColor="white"
      boxShadow="sm"
      p="16px"
      pb="20px"
      pt="20px"
      borderRadius="16px"
      borderWidth="1px"
      borderColor="#dddddd"
      {...props}
    />
  );
}

export function Input(props) {
  return <ChakraInput borderRadius="12px" {...props} />;
}
