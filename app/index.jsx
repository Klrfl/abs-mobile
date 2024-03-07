import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import Coffee from "../components/home/Coffee"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to ABS App</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="craving some coffee today?"
            onChange={setSearchTerm}
            value={searchTerm}
          />
          <TouchableOpacity style={styles.searchButton}>
            <MaterialIcons name="search" size={26}></MaterialIcons>
          </TouchableOpacity>
        </View>

        <Coffee />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  input: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  searchButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 15
  }
})