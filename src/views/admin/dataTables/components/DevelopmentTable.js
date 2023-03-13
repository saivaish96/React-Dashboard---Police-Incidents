/* eslint-disable */
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";

export default function DevelopmentTable(props) {
  const { columnsData, tableData } = props;
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 25;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const convertEpochToDate = (ts) => {
    return new Date(ts).toString();
  }
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "scroll" }}>
      {/* <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Police Calls For Service 2019
        </Text>
        <Menu />
      </Flex> */}
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px' size='sm'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "Date Occurred" || cell.column.Header === "Date Found") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {convertEpochToDate(cell.value)}
                      </Text>
                    );
                  }
                  else if (cell.column.Header === "Case Status") {
                    data = (
                      <Flex align='center'>
                      <Icon
                        w='24px'
                        h='24px'
                        me='5px'
                        color={
                          (cell.value === "CLEARED BY ARREST" || cell.value === "EXCEPTIONALLY CLEARED")
                            ? "green.500"
                            : (cell.value === "UNDER REVIEW" || cell.value === "UNFOUNDED")
                            ? "orange.500"
                            : (cell.value === "PENDING - INACTIVE" || cell.value === "PENDING - ACTIVE"|| cell.value === "PENDING - WARRANTS ISSUED")
                            ? "red.500"
                            : null
                        }
                        as={
                          (cell.value === "CLEARED BY ARREST" || cell.value === "EXCEPTIONALLY CLEARED")
                            ? MdCheckCircle
                            : (cell.value === "UNDER REVIEW" || cell.value === "UNFOUNDED")
                            ? MdCancel
                            : (cell.value === "PENDING - INACTIVE" || cell.value === "PENDING - ACTIVE"|| cell.value === "PENDING - WARRANTS ISSUED")
                            ? MdOutlineError
                            : null
                        }
                      />
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    </Flex>
                    );
                  }
                  else {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value === null? "-":cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
