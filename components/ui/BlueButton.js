import React from "react";
import {
    Button
} from "@chakra-ui/core";


export default function BlueButton(props) {
    return (
        <Button variantColor="blue" boxShadow="sm" borderColor="blue.600" borderWidth="1px" borderRadius="12px" {...props} />
    );
}