import React from 'react';
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";

class Pagination extends React.Component {
  onChangePage = e => {
    const id = e.target.value;
    this.props.onChangePage(id);

  };
  render() {
    const { pages, current, margin } = this.props;
    let a = [];
    for (let i = 0; i < pages; i++) {
      a.push(

        <option
          value={i}
          key={i}
        >
          Page {i + 1}
        </option>


      );
    }
    // a.unshift(<li
    //   data-page='back'
    //   onClick={this.onChangePage}
    //   key={9090}
    //   className={"item"}
    // >-

    // </li>);
    // a.push(<li
    //   data-page='front'
    //   onClick={this.onChangePage}
    //   key={90190}
    //   className={"item"}
    // >+

    // </li>)
    return <Flex
      px={{ base: "0px", "2xl": "10px" }}
      justifyContent='space-between'
      alignItems='center'
      w='100%'
      mb='8px'>
      <Select variant='filled' onChange={this.onChangePage} fontSize='sm'
        width='unset'
        fontWeight='700'>{a}</Select>
    </Flex>
  }
}
export default Pagination;

//    <li
//    data-page={i}
//    onClick={this.onChangePage}
//    key={i}
//    className={"item" + (i == current ? " active" : "")}
//  >
//    {i}
//  </li>
