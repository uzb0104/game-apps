import React from "react";
import Asosiy from "../pages/Home/Home";
import Program from "../pages/Program/program";

import { PATH } from "../types/path";
import GymInformation from "../component/GymsLink/GymInformation";
import AboutSport from "../pages/AboutSport/AboutSport";
import Fitnes from "../pages/FitnesLink/Fitnes";
import SignUp from "../component/Navbar/SignUp";
import LogReg from "../component/Navbar/LogReg";
import Login from "../component/Navbar/Login";
import AdminNavbar from "../component/Admin/AdminNavbar";
import SportDetail from "../pages/AboutSport/SportDetail";

type RouteType = {
  path: string;
  element: JSX.Element;
};

export const ROUTES: readonly RouteType[] = [
  {
    path: PATH.HOME,
    element: <Asosiy />,
  },
  {
    path: PATH.PROGRAM,
    element: <Program />,
  },
  {
    path: PATH.ABOUT_SPORT,
    element: <AboutSport />,
  },
  {
    path: PATH.FITNES,
    element: <Fitnes />,
  },

  {
    path: PATH.GYM_INFORMATION + "/:id",
    element: <GymInformation />,
  },
  {
    path: PATH.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.LOG_REG,
    element: <LogReg />,
  },
  {
    path: PATH.ADMINNAVBAR,
    element: <AdminNavbar />,
  },
  {
    path: PATH.SPORTDETAIL + "/:sportId",
    element: <SportDetail />,
  },
];
