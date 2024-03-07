import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function NavIcon({ iconName, iconLabel }) {
  return (
    <View style={styles.icon}>
      <FontAwesome5 name={iconName} size={16} />
      <Text>{iconLabel}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  }
})