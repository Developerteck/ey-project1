import { createBrowserRouter } from "react-router-dom";
import hoc from "../common/hoc";

// import different components
import DashboardMain from "../component/dashboard";
import UserMain from "../component/user";
import ReportMain from "../component/report";
import settingmain from "../component/setting";
import Rolemain from "../component/role";
import Industrymain from "../component/industry";
import Subindustrymain from "../component/subindustry";
import Companymain from "../component/company";
import Entitymain from "../component/entity";
import Plantmain from "../component/plant";
import Kpimain from "../component/kpi";
import Categorymain from "../component/category";
import Unitmain from "../component/unit";
import UnitGroupmain from "../component/unitgroup";
import Referenlibrarymain from "../component/referencelibrary";
import Agencymain from "../component/agency";
import LoginSignupMain from "../component/loginSignup/login";

// import nav options
import { dashboardnav } from "./navoptions/dashboard";
import { usernav } from "./navoptions/user";
import { reportnav } from "./navoptions/report";
import { settingnav } from "./navoptions/setting";
import { rolenav } from "./navoptions/rolenav";
import { industrynav } from "./navoptions/industrynav";
import { Subindustrynav } from "./navoptions/subindustrynav";
import { companynav } from "./navoptions/companynav";
import { entitynav } from "./navoptions/entity";
import { plantnav } from "./navoptions/plant";
import { kpinav } from "./navoptions/kpi";
import { Categorynav } from "./navoptions/categorynav";
import { Unitnav } from "./navoptions/unitnav";
import { UnitGroupnav } from "./navoptions/unitgroupnav";
import { Referenlibrarynav } from "./navoptions/referencelibrarynav";
import { Agencynav } from "./navoptions/agencynav";

// Hoc wrapper
const Dashboard = hoc(DashboardMain, true, true, dashboardnav);
const User = hoc(UserMain, true, true, usernav);
const Report = hoc(ReportMain, true, true, reportnav);
const setting = hoc(settingmain, true, true, settingnav);
const Role = hoc(Rolemain, true, true, rolenav);
const Industries = hoc(Industrymain, true, true, industrynav);
const SubIndustry = hoc(Subindustrymain, true, true, Subindustrynav);
const Company = hoc(Companymain, true, true, companynav);
const Entity = hoc(Entitymain, true, true, entitynav);
const Plant = hoc(Plantmain, true, true, plantnav);
const kpi = hoc(Kpimain, true, true, kpinav);
const Category = hoc(Categorymain, true, true, Categorynav);
const Unit = hoc(Unitmain, true, true, Unitnav);
const UnitGroup = hoc(UnitGroupmain, true, true, UnitGroupnav);
const Referenlibrary = hoc(Referenlibrarymain, true, true, Referenlibrarynav);
const Agency = hoc(Agencymain, true, true, Agencynav);
const LoginSignup = hoc(LoginSignupMain);

const router = createBrowserRouter([
  {
    path: "/",
    element: LoginSignup,
  },
  {
    path: "/dashboard",
    element: Dashboard,
  },
  {
    path: "/user",
    element: User,
  },
  {
    path: "/Report",
    element: Report,
  },
  {
    path: "/setting",
    element: setting,
  },
  {
    path: "/Role",
    element: Role,
  },
  {
    path: "/Industries",
    element: Industries,
  },
  {
    path: "/SubIndustry",
    element: SubIndustry,
  },
  {
    path: "/Company",
    element: Company,
  },
  {
    path: "/entity",
    element: Entity,
  },
  {
    path: "/plant",
    element: Plant,
  },
  {
    path: "/plant",
    element: Plant,
  },

  {
    path: "/KPI's",
    element: kpi,
  },
  {
    path: "/Categories",
    element: Category,
  },
  {
    path: "/unit",
    element: Unit,
  },

  {
    path: "/Unit Group",
    element: UnitGroup,
  },
  {
    path: "/Reference Library",
    element: Referenlibrary,
  },

  {
    path: "/Agencies",
    element: Agency,
  },
]);

export default Object.freeze(router);
