import { Button, Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";

// import { getString } from "~/utils/api";

export const FacebookIcon = (props) => <Icon name="facebook" {...props} />;

const App = () => {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <Button
        title="Click me"
        onPress={() => {
          // eslint-disable-next-line no-console
          console.log(getString());
        }}
      /> */}
      <Text>Text goes here</Text>

      <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
    </View>
  );
};

export default App;
