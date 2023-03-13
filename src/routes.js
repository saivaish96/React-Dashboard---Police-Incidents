import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdHome,
} from "react-icons/md";

import MainDashboard from "views/admin/default";
import DataTables from "views/admin/dataTables";


const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },

  {
    name: "Police Incident Report",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
];

export default routes;
