import { Tabs } from "expo-router";
import NavIcon from "../../components/bottomNav/navIcon"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: () => (
            <NavIcon iconName="home" iconLabel="Home" />
          )
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "",
          tabBarIcon: () => (
            <NavIcon iconName="utensils" iconLabel="Menu" />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: () => (
            <NavIcon iconName="user" iconLabel="Profile" />
          )
        }} />
      <Tabs.Screen
        name="about"
        options={{
          title: "",
          tabBarIcon: () => (
            <NavIcon iconName="question" iconLabel="About" />
          )
        }} />
    </Tabs>
  )
}
