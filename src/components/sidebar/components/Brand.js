import React from "react";
import logo from "../../../assets/img/dashboards/VB.png"
import { Flex, Image, Text } from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  return (
    <Flex align='center' direction='column'>
      <Image src={logo} w='150px' h='100px' mr='30px' mt='10px'/>
      <Text fontSize='xl' as = 'b'  align='center' mr='20px' mt='20px' color="#424040">Virginia Beach Police Department</Text>
      <HSeparator mb='20px' mt='20px'/>
    </Flex>
  );
}

export default SidebarBrand;
