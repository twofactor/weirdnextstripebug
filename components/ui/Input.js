import React from "react";
import {
    Input as ChakraInput
} from "@chakra-ui/core";


export default function Input(props) {
    return (
        <ChakraInput borderRadius="12px" {...props} />
    );
}