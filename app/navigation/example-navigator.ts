import { createStackNavigator } from "react-navigation"
import { IndexScreen } from "../views/example/index-screen"
import { ToDoListScreen } from "../views/example/to-do-list"
import { DrawerScreens } from "./drawer-navigator";

export const ExampleNavigator = createStackNavigator({
         index: { screen: IndexScreen },
         toDoList: { screen: ToDoListScreen },
         drawerStack: { screen: DrawerScreens },
       })
