// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React, {useEffect, useState} from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
export default function TotalCases(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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
  const [larcenySep, setLarcenySep] = useState(null);
  const [larcenyOct, setLarcenyOct] = useState(null);
  const [larcenyNov, setLarcenyNov] = useState(null);
  const [larcenyDec, setLarcenyDec] = useState(null);
  const [larcenyJan, setLarcenyJan] = useState(null);
  const [larcenyFeb, setLarcenyFeb] = useState(null);
  const [hitSep, setHitSep] = useState(null);
  const [hitOct, setHitOct] = useState(null);
  const [hitNov, setHitNov] = useState(null);
  const [hitDec, setHitDec] = useState(null);
  const [hitJan, setHitJan] = useState(null);
  const [hitFeb, setHitFeb] = useState(null);

  const [totalCases, setTotalCases] = useState(null);
  const [allTotal, setAllTotal] = useState(null);
  const [lineChartDataConsumption, setLineChartDataConsumption] = useState(null);
  //Larceny
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-09-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-09-30%27)%20AND%20(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenySep(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-10-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-10-31%27)%20AND%20(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenyOct(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-11-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-11-30%27)%20AND%20(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenyNov(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-12-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-12-31%27)%20AND%20(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenyDec(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272023-01-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272023-01-31%27)%20AND%20(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenyJan(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272023-02-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272023-02-28%27)%20AND%20(Offense_Description%20IN%20(%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setLarcenyFeb(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);

  //Hit and Run
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-09-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-09-30%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setHitSep(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-10-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-10-31%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setHitOct(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-11-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-11-30%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setHitNov(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-12-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272022-12-31%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setHitDec(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272023-01-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272023-01-31%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setHitJan(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);
  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272023-02-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272023-02-28%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setHitFeb(jsonResult.count);
        },
        (error) => {
        }
      )
  }, []);

  useEffect(() => {
    if (larcenySep && larcenyOct && larcenyNov && larcenyDec && larcenyJan && larcenyFeb && hitJan && hitFeb && hitSep && hitOct && hitNov && hitDec) {
      let p1 = [larcenySep, larcenyOct, larcenyNov, larcenyDec, larcenyJan, larcenyFeb,];
      let p2 = [hitJan, hitFeb, hitSep, hitOct, hitNov, hitDec];
      let obj1 = { name: 'Larceny', data: p1 };
      let obj2 = { name: 'Hit and Run', data: p2 };
      let data = [obj1, obj2];
      setLineChartDataConsumption(data);
    }

  }, [larcenySep, larcenyOct, larcenyNov, larcenyDec, larcenyJan, larcenyFeb, hitJan, hitFeb, hitSep, hitOct, hitNov, hitDec]);

  useEffect(() => {
    let url = 'https://services2.arcgis.com/CyVvlIiUfRBmMQuu/arcgis/rest/services/Police_Incident_Reports_view/FeatureServer/0/query?f=json&returnIdsOnly=true&returnCountOnly=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Date_Occurred%20%3E%3D%20DATE%20%272022-09-01%27%20AND%20Date_Occurred%20%3C%3D%20DATE%20%272023-02-28%27)%20AND%20(Offense_Description%20IN%20(%27HIT%20%26%20RUN%27%2C%20%27LARCENY%2C%20FROM%20MOTOR%20VEHICLE%27))';
    fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
          setTotalCases(jsonResult.count);
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

  const lineChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: ["#F7A435", "#189AD6"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#777",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
    },
    xaxis: {
      type: "numeric",
      categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
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
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      column: {
        color: ["#7551FF", "#39B8FF"],
        opacity: 0.5,
      },
    },
    color: ["#7551FF", "#39B8FF"],
  };
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'>
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me='4px'
            />
            September 2022 - February 2023
          </Button>
          <Button
            ms='auto'
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
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'>
            {totalCases}
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='12px'
              fontWeight='500'
              mt='4px'
              me='12px'>
              Total Cases
            </Text>
            <Flex align='center'>
              <Text color='green.500' fontSize='sm' fontWeight='700'>
                {((totalCases/allTotal) * 100).toFixed(2)}%
              </Text>
            </Flex>
          </Flex>

          {/* <Flex align='center'>
            <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
            <Text color='green.500' fontSize='md' fontWeight='700'>
              On track
            </Text>
          </Flex> */}
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          {lineChartDataConsumption && <LineChart
            chartData={lineChartDataConsumption}
            chartOptions={lineChartOptions}
          />}
        </Box>
      </Flex>
    </Card>
  );
}
