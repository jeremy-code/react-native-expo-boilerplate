import * as eva from "@eva-design/eva";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { ApplicationProvider, Icon, IconRegistry, Layout } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { useColorScheme } from "react-native";

import { Drawer } from "~/components/Drawer";
import { default as theme } from "~/utils/theme.json";

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? "light";
  const evaTheme = { ...eva[colorScheme], ...theme };
  const navigationTheme =
    colorScheme === "dark" ? { ...DarkTheme, ...evaTheme } : { ...DefaultTheme, ...evaTheme };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[colorScheme], ...theme }}>
        <ThemeProvider value={navigationTheme}>
          <Drawer>
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "Home",
                title: "Home",
                drawerIcon: (props) => (
                  <Layout>
                    <Icon name="facebook" {...props} />
                  </Layout>
                ),
              }}
            />
          </Drawer>
        </ThemeProvider>
      </ApplicationProvider>
    </>
  );
};

export default RootLayout;
