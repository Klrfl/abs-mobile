import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import useFetch from "../useFetch";
import { Link } from "expo-router";

export default function Coffee() {
  const { data, isLoading, error } = useFetch("menu?type_id=1")

  const renderMenuItems = ({ item }) => <MenuItem item={item} />
  return (
    <View>
      <Text>Coffee</Text>
      {isLoading ?
        <Text>Loading coffees..</Text>
        : error ?
          (<Text>{error.message}</Text>)
          :
          <FlatList
            style={styles.menuList}
            data={data}
            renderItem={renderMenuItems}
            keyExtractor={item => item.id}
            horizontal
          />
      }
    </View>
  )
}

function MenuItem({ item }) {
  return (
    <View style={styles.menuItem}>
      <Link href={{ pathname: "/menu/[id]", params: { id: item.id } }} asChild>
        <Pressable>
          <Text>{item.name}</Text>
          <Text>{item.type.type}</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  menuList: {
    gap: 2,
    flexDirection: 'row',
  },
  menuItem: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  }
})