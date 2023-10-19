'use client';

import React from "react";


// Components
import {
    Box,
    useColorModeValue
} from "@chakra-ui/react";

// Custom componenets
import ComplexTable from 'components/table/ComplexTable';
// Table data
import Providers from 'views/admin/providers/variables/tableDataProviders';


export default function Default() {

    // Chakra color mode config
    const brandColor = useColorModeValue('brand.500', 'navy.100');
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');


    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <ComplexTable tableData={Providers} />
        </ Box>
    );
};
