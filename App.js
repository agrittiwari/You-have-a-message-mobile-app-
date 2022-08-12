import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";


export default function App() {
  const DATA = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
  ];
  return (
    <View >
      <Text>Okay
         
      </Text>
      <FlashList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={20}
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
