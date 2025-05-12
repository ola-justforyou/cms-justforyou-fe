import { HomePage,UnderMaintenancePage, LoginPage, NotFoundPage, ServerErrorPage,PartnershipPage,Master } from "../pages";
import  {FullLayout, DashboardLayout}  from "../layouts";
import PATH_URL from "./path";

export const routes = [
  {
    path: PATH_URL.LOGIN,
    element: LoginPage,
    needAuthenticated: false,
    exact: true,
    layout: FullLayout,
  },
  {
    path: PATH_URL.LOGIN2,
    element: LoginPage,
    needAuthenticated: false,
    exact: true,
    layout: FullLayout,
  },
  {
    path: PATH_URL.HOME,
    element: HomePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_ACCOUNTS,
    element: Master.AccountPage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_ROLES,
    element: Master.RolePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_PERMISSIONS,
    element: Master.PermissionPage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_INVITATION_PACKAGES,
    element: Master.InvitationPackagePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_INVITATION_SERVICES,
    element: Master.InvitationServicePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_INVITATION_TAGS,
    element: Master.InvitationTagPage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_INVITATION_TEMPLATES,
    element: Master.InvitationTemplatePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_REGEION_PROVINCES,
    element: Master.ProvincePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_REGEION_DISTRICTS,
    element: Master.DistrictPage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_REGEION_CITIES,
    element: Master.CityPage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.MASTER_REGEION_VILLAGES,
    element: Master.VillagePage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.PARTNERSHIPS,
    element: PartnershipPage,
    needAuthenticated: false,
    layout: DashboardLayout,
  },
  {
    path: PATH_URL.NOT_FOUND,
    element: NotFoundPage,
    needAuthenticated: false,
    layout: FullLayout,
  },
  {
    path: PATH_URL.SERVER_ERROR,
    element: ServerErrorPage,
    needAuthenticated: false,
    layout: FullLayout,
  },
  {
    path: PATH_URL.UNDER_MAINTENANCE,
    element: UnderMaintenancePage,
    needAuthenticated: false,
    layout: FullLayout,
  },
];
