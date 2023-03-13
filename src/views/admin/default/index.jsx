
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useState, useEffect } from "react";
import {
  MdBarChart,
} from "react-icons/md";
import PieCard from "views/admin/default/components/PieCard";
import TotalCases from "views/admin/default/components/TotalCases";
import PrecinctData from "views/admin/default/components/PrecinctData";


export default function UserReports() {
  const [clearedCount, setClearedCount] = useState(0);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [precinct, setPrecinct] = useState(0);
  const [inactiveCases, setInactiveCases] = useState(0);
  const [larcenyCount, setLarcenyCount] = useState(0);
  const [zone, setZone] = useState(0);
  const [allTotal, setAllTotal] = useState(null);

  const brandColor = useColorModeValue("#F7A435", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnCountOnly=true&outSR=4326&where=(Case_Status%20IN%20(%27CLEARED%20BY%20ARREST%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setClearedCount(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = ' https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?where=1%3D1&outFields=Date_Occurred,Date_Found,Offense_Code,Offense_Description,Block,Street,Precinct,Subdivision,Zone_ID,Case_Status&returnCountOnly=true&outSR=4326&f=json';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setTotalIncidents(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnCountOnly=true&outSR=4326&where=(Precinct%20IN%20(%273%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27PENDING%20-%20INACTIVE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setInactiveCases(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenyCount(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Subdivision%20IN%20(%27OCEANFRONT%20-%2031ST%20ST%20SOUTH%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setZone(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=1%3D1';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setAllTotal(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Total Incidents'
          value={totalIncidents}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Total Incidents Cleared by Arrests'
          value={clearedCount}
        />
        <MiniStatistics growth={((larcenyCount/allTotal) * 100).toFixed(2) + '%'} name='Top offense reported is Larceny, from motor vehicles' value={larcenyCount + ' cases'} />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Total Pending Inactive Cases'
          value={inactiveCases}
        />
        <MiniStatistics growth={((precinct/allTotal) * 100).toFixed(2) + '%'} name='Precinct 3 reported the highest number of incidents' value={precinct + ' cases'} />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Oceanfront - 31st ST South reported the highest number of incidents'
          value={zone + ' cases'}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <PieCard />
        <PrecinctData />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <TotalCases />
      </SimpleGrid>
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
    </Box>
  );
}
