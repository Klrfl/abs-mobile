import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Coffee() {
  const [menuItems, setMenuItems] = useState([])

  const endpoint = "http://127.0.0.1:8080/api/menu?type_id=1";
  const getMenuItems = async () => {
    try {
      const response = await fetch(endpoint)
      const { data } = await response.json()
      setMenuItems(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMenuItems()
  }, [])

  const renderMenuItems = ({ item }) => <MenuItem item={item} />
  return (
    <View>
      <Text>Coffee</Text>
      <FlatList
        style={styles.menuList}
        data={menuItems}
        renderItem={renderMenuItems}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  )
}

function MenuItem({ item }) {
  return (
    <View style={styles.menuItem}>
      <Text>{item.name}</Text>
      <Text>{item.type.type}</Text>
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