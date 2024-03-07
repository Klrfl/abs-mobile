import { StyleSheet, Text, View } from "react-native";
import useFetch from "../../components/useFetch";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuPage() {
  const { id } = useLocalSearchParams()
  const { data, isLoading, error } = useFetch(`menu/${id}`)

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      )
        : error ? (
          <Text>Something went wrong</Text>
        )
          : (
            <View>
              <Text style={styles.heading}>{data?.name}</Text>
              <Text>{data?.type.type}</Text>
              <View style={styles.priceChipContainer}>
                {data?.variant_values.map((variant_value) => (
                  <Text key={`${variant_value.option_id}_${variant_value.option_value_id}`} style={styles.priceChip}>{variant_value.option_value.value} - {variant_value.price}</Text>
                ))}
              </View>
            </View>
          )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  priceChipContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  priceChip: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  }
})