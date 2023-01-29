import { IRoute } from "../common/interfaces/route.interface";
import Home from "../pages/home/home.page";

export const routes: Array<IRoute> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home
  }
];
