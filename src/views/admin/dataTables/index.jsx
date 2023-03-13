import { Box, SimpleGrid, Flex, useColorModeValue } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import Pagination from "views/admin/dataTables/components/Pagination";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import {
  columnsDataDevelopment,
} from "views/admin/dataTables/variables/columnsData";
import React, { useEffect, useState } from "react";


export default function Settings() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(25);

  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json&' + 'resultOffset=' + currentPage * offset + '&resultRecordCount=' + offset;
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setIsLoaded(true);
          let realTableData;
          if (jsonResult && Object.keys(jsonResult).length !== 0) {
            if ("features" in jsonResult && jsonResult['features'] !== undefined) {
              realTableData = [];
              jsonResult['features'].forEach(element => {
                if ("attributes" in element && element['attributes'] !== undefined) {
                  realTableData.push(element.attributes);
                }
              });
            }
          }
          setItems(realTableData);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json&' + 'resultOffset=' + currentPage * offset + '&resultRecordCount=' + offset;
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setIsLoaded(true);
          let realTableData;
          if (jsonResult && Object.keys(jsonResult).length !== 0) {
            if ("features" in jsonResult && jsonResult['features'] !== undefined) {
              realTableData = [];
              jsonResult['features'].forEach(element => {
                if ("attributes" in element && element['attributes'] !== undefined) {
                  realTableData.push(element.attributes);
                }
              });
            }
          }
          setItems(realTableData);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [currentPage]);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=1%3D1';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setCount(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  const changePage = n => {
    setCurrentPage(n);
  };

  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );
  let menuBg = useColorModeValue('white', 'navy.800');
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb='20px'
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}>
          <Flex
            w={{ sm: '100%', md: 'auto' }}
            alignItems="center"
            flexDirection="row"
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            p="10px"
            borderRadius="30px">
            <Pagination
              pages={Math.ceil(count / offset)}
              current={currentPage}
              onChangePage={changePage}
              margin={5}
            />
            {/* <SearchBar mb={{ base: '10px', md: 'unset' }} me="10px" borderRadius="10px" onSearch={changeSearch} searchText={searchText} /> */}
          </Flex>
          <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={items}
          />
        </SimpleGrid>
      </Box>
    );
  }
}
