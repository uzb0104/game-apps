import React from "react";
import Asosiy from "../pages/Home/Home";
import Program from "../pages/Program/program";

import { PATH } from "../types/path";
import GymInformation from "../component/GymsLink/GymInformation";
import AboutSport from "../pages/AboutSport/AboutSport";
import Fitnes from "../pages/FitnesLink/Fitnes";
import SignUp from "../component/Navbar/SignUp";

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
];
