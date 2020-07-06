import React from "react";
import {
    Box
} from "@chakra-ui/core";


export default function Card(props) {
    return (
        <Box backgroundColor="white" boxShadow="sm" p="16px" pb="20px" pt="20px" borderRadius="16px" borderWidth="1px" borderColor="#dddddd" {...props} />
    );
}