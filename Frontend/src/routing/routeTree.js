import { rootRoute } from './rootRoute';
import { authRoute } from './authRoute';
import { homePageRoute } from './homePageRoute';
import { dashboardRoute } from './dashboardRoute';

export const routeTree = rootRoute.addChildren([
  authRoute,
  homePageRoute,
  dashboardRoute,
]);
