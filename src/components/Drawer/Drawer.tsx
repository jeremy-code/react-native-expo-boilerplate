import { withLayoutContext } from "expo-router";
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";

const { Navigator } = createDrawerNavigator();

const Drawer = withLayoutContext<DrawerNavigationOptions, typeof Navigator>(Navigator);

export default Drawer;
