import { Button, StyleSheet, Text, View } from "react-native";

import { getString } from "~/utils/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Click me"
        onPress={() => {
          // eslint-disable-next-line no-console
          console.log(getString());
        }}
      />
    </View>
  );
}
