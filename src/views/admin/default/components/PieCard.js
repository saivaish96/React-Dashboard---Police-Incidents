// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { VSeparator } from "components/separator/Separator";
import React, {useState, useEffect} from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const pieChartOptions = {
    labels: ["Larceny", "Hit and Run", "Simple Assault"],
    colors: ["#777", "#777", "#777"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#F7A435", "#189AD6", "#39B54A"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };
  const [larcenyCount, setLarcenyCount] = useState(null);
  const [hitAndRun, setHitAndRun] = useState(null);
  const [assaultSimple, setAssaultSimple] = useState(null);
  const [totalIncidents, setTotalIncidents] = useState(null);
  // export const pieChartData = [63, 25, 12];
  const [pieChartData, setPieChartData] = useState(null);

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
      let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
      fetch(url)
        .then(res => res.json())
        .then(
          (jsonResult) => {
            setHitAndRun(jsonResult.count);
          },
          (error) => {
          }
        )
    }, []);
    useEffect(() => {
      let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Offense_Description%20IN%20(%27ASSAULT%2C%20SIMPLE%27))';
      fetch(url)
        .then(res => res.json())
        .then(
          (jsonResult) => {
            setAssaultSimple(jsonResult.count);
          },
          (error) => {
          }
        )
    }, []);
    useEffect(() => {
      if (larcenyCount && hitAndRun && assaultSimple) {
        let data = [larcenyCount, hitAndRun, assaultSimple];
        setPieChartData(data);
      }
  
    }, [larcenyCount, hitAndRun, assaultSimple]);
    useEffect(() => {
      let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=1%3D1';
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
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Top Offenses Reported
        </Text>
        {/* <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select> */}
      </Flex>

      {pieChartData && <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />}
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#F7A435' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Larceny
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
          {((larcenyCount/totalIncidents) * 100).toFixed(2) + '%'}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Hit and Run
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
          {((hitAndRun/totalIncidents) * 100).toFixed(2) + '%'}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#39B54A' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Simple Assault
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {((assaultSimple/totalIncidents) * 100).toFixed(2) + '%'}
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
