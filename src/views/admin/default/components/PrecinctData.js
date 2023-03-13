// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React, { useState, useEffect } from "react";
import { MdBarChart } from "react-icons/md";

export default function PrecinctData(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("#189AD6", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  const [precinct1pending, setPrecinct1pending] = useState(null);
  const [precinct1cleared, setPrecinct1cleared] = useState(null);
  const [precinct1review, setPrecinct1review] = useState(null);

  const [precinct2pending, setPrecinct2pending] = useState(null);
  const [precinct2cleared, setPrecinct2cleared] = useState(null);
  const [precinct2review, setPrecinct2review] = useState(null);

  const [precinct3pending, setPrecinct3pending] = useState(null);
  const [precinct3cleared, setPrecinct3cleared] = useState(null);
  const [precinct3review, setPrecinct3review] = useState(null);

  const [barChartDataConsumption, setBarChartDataConsumption] = useState(null);
  const barChartOptionsConsumption = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: ["PENDING", "CLEARED", "UNDER REVIEW"],
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: "black",
      labels: {
        show: false,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },
  
    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#F7A435", "#189AD6", "#39B54A"],
    },
    legend: {
      show: false,
    },
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "20px",
      },
    },
  };
  //Precinct 1
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27PENDING%20-%20WARRANTS%20ISSUED%27%2C%20%27PENDING%20-%20ACTIVE%27%2C%20%27PENDING%20-%20INACTIVE%27))%20AND%20(Precinct%20IN%20(%271%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct1pending(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27CLEARED%20BY%20ARREST%27%2C%20%27EXCEPTIONALLY%20CLEARED%27))%20AND%20(Precinct%20IN%20(%271%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct1cleared(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27UNDER%20REVIEW%27))%20AND%20(Precinct%20IN%20(%271%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct1review(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);

  //Precinct 2
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27PENDING%20-%20INACTIVE%27%2C%20%27PENDING%20-%20ACTIVE%27%2C%20%27PENDING%20-%20WARRANTS%20ISSUED%27))%20AND%20(Precinct%20IN%20(%272%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct2pending(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27CLEARED%20BY%20ARREST%27%2C%20%27EXCEPTIONALLY%20CLEARED%27))%20AND%20(Precinct%20IN%20(%272%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct2cleared(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27UNDER%20REVIEW%27))%20AND%20(Precinct%20IN%20(%272%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct2review(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);

  //Precinct 3
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27PENDING%20-%20INACTIVE%27%2C%20%27PENDING%20-%20ACTIVE%27%2C%20%27PENDING%20-%20WARRANTS%20ISSUED%27))%20AND%20(Precinct%20IN%20(%273%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct3pending(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27CLEARED%20BY%20ARREST%27%2C%20%27EXCEPTIONALLY%20CLEARED%27))%20AND%20(Precinct%20IN%20(%273%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct3cleared(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Case_Status%20IN%20(%27UNDER%20REVIEW%27))%20AND%20(Precinct%20IN%20(%273%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setPrecinct3review(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);

  useEffect(() => {
    if (precinct1pending && precinct1review && precinct1cleared && precinct2pending && precinct2cleared && precinct1review && precinct3pending && precinct3review && precinct3cleared) {
      let p1 = [precinct1pending, precinct1cleared, precinct1review];
      let p2 = [precinct2pending, precinct2cleared, precinct2review];
      let p3 = [precinct3pending, precinct3cleared, precinct3review];
      let obj1 = {name: 'PRECINCT 1', data: p1};
      let obj2 = {name: 'PRECINCT 2', data: p2};
      let obj3 = {name: 'PRECINCT 3', data: p3};
      let data = [obj1, obj2, obj3];
      setBarChartDataConsumption(data);
    }

  }, [precinct1pending, precinct1review, precinct1cleared, precinct2pending, precinct2review, precinct2cleared, precinct3pending, precinct3review, precinct3cleared]);

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Status of cases in Precincts 1, 2, and 3
        </Text>
        <Button
          align='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          {...rest}>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='240px' mt='auto'>
        {barChartDataConsumption && <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />}
      </Box>
    </Card>
  );
}
