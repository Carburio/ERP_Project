'use client';

import React from "react";


// Components
import {
  Box,
  Flex,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";

// Custom componenets
import ComplexTable from 'views/admin/clients/components/ComplexTable';
// Table data
import tableData from 'views/admin/clients/variables/tableDataCheck';


export default function Default() {

  // Chakra color mode config
  const brandColor = useColorModeValue('brand.500', 'navy.100');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');


  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
    
    <ComplexTable tableData={tableData} />

    </ Box>
  );
};
