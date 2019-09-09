import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  View
} from "react-native";
import {createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import FloatingActionRightScreen from "./demo/screens/FloatingActionRightScreen";
import FloatingActionLeftScreen from "./demo/screens/FloatingActionLeftScreen";
import FloatingActionCenterScreen from "./demo/screens/FloatingActionCenterScreen";
import FloatingActionOverrideWithActionScreen from "./demo/screens/FloatingActionOverrideWithActionScreen";
import FloatingActionDistanceEdge from "./demo/screens/FloatingActionDistanceEdge";
import FloatingActionOverlayScreen from "./demo/screens/FloatingActionOverlayScreen";
import FloatingActionHexColorScreen from "./demo/screens/FloatingActionHexColorScreen";
import FloatingActionRgbColorScreen from "./demo/screens/FloatingActionRgbColorScreen";
import FloatingActionVisibilityScreen from "./demo/screens/FloatingActionVisibilityScreen";
import FloatingActionOpenMountScreen from "./demo/screens/FloatingActionOpenMountScreen";
import FloatingActionHideBackgroundScreen from "./demo/screens/FloatingActionHideBackgroundScreen";
import FloatingActionActionsDistance from "./demo/screens/FloatingActionActionsDistance";
import FloatingActionStatusProgramatically from "./demo/screens/FloatingActionStatusProgramatically";
import FloatingActionChangeActionColor from "./demo/screens/FloatingActionChangeActionColor";
import FloatingActionCustomActionComponent from "./demo/screens/FloatingActionCustomActionComponent";
import FloatingActionListenKeyboard from "./demo/screens/FloatingActionListenKeyboard";
import FloatingActionShadow from "./demo/screens/FloatingActionShadow";


class App extends React.Component {
  static navigationOptions = {
    title: "Floating Action"
  };

  renderRow = highlighted => {
    if (Platform.OS !== "android") {
      return (
        <View
          style={[
            { backgroundColor: "#f0f0f0", height: 1 },
            highlighted && { marginLeft: 0 }
          ]}
        />
      );
    }

    return null;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ItemSeparatorComponent={this.renderRow}
          style={styles.container}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
          data={[
            {
              key: "row_1",
              text: "Right position",
              screen: "FloatingActionRightScreen"
            },
            {
              key: "row_2",
              text: "Left position",
              screen: "FloatingActionLeftScreen"
            },
            {
              key: "row_3",
              text: "Center position",
              screen: "FloatingActionCenterScreen"
            },
            {
              key: "row_4",
              text: "No list of actions",
              screen: "FloatingActionOverrideWithActionScreen"
            },
            {
              key: "row_5",
              text: "Set distance from edges",
              screen: "FloatingActionDistanceEdge"
            },
            {
              key: "row_6",
              text: "Set overlay color",
              screen: "FloatingActionOverlayScreen"
            },
            {
              key: "row_7",
              text: "Set button HEX color",
              screen: "FloatingActionHexColorScreen"
            },
            {
              key: "row_8",
              text: "Set button RGB color",
              screen: "FloatingActionRgbColorScreen"
            },
            {
              key: "row_9",
              text: "Set visibility",
              screen: "FloatingActionVisibilityScreen"
            },
            {
              key: "row_10",
              text: "Open on mount",
              screen: "FloatingActionOpenMountScreen"
            },
            {
              key: "row_11",
              text: "Hide background",
              screen: "FloatingActionHideBackgroundScreen"
            },
            {
              key: "row_12",
              text: "Change Actions Distance",
              screen: "FloatingActionActionsDistance"
            },
            {
              key: "row_13",
              text: "Change visibility programatically",
              screen: "FloatingActionStatusProgramatically"
            },
            {
              key: "row_14",
              text: "Change Action Text Container colors",
              screen: "FloatingActionChangeActionColor"
            },
            {
              key: "row_15",
              text: "Custom Action Component",
              screen: "FloatingActionCustomActionComponent"
            },
            {
              key: "row_16",
              text: "Listen Keyboard",
              screen: "FloatingActionListenKeyboard"
            },
            {
              key: "row_17",
              text: "Change Shadow",
              screen: "FloatingActionShadow"
            }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                this.props.navigation.navigate(item.screen); // eslint-disable-line
              }}
            >
              <Text>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  FloatingActionRightScreen: {
    screen: FloatingActionRightScreen
  },
  FloatingActionCenterScreen: {
    screen: FloatingActionCenterScreen
  },
  FloatingActionLeftScreen: {
    screen: FloatingActionLeftScreen
  },
  FloatingActionOverrideWithActionScreen: {
    screen: FloatingActionOverrideWithActionScreen
  },
  FloatingActionDistanceEdge: {
    screen: FloatingActionDistanceEdge
  },
  FloatingActionOverlayScreen: {
    screen: FloatingActionOverlayScreen
  },
  FloatingActionHexColorScreen: {
    screen: FloatingActionHexColorScreen
  },
  FloatingActionRgbColorScreen: {
    screen: FloatingActionRgbColorScreen
  },
  FloatingActionVisibilityScreen: {
    screen: FloatingActionVisibilityScreen
  },
  FloatingActionOpenMountScreen: {
    screen: FloatingActionOpenMountScreen
  },
  FloatingActionHideBackgroundScreen: {
    screen: FloatingActionHideBackgroundScreen
  },
  FloatingActionActionsDistance: {
    screen: FloatingActionActionsDistance
  },
  FloatingActionStatusProgramatically: {
    screen: FloatingActionStatusProgramatically
  },
  FloatingActionChangeActionColor: {
    screen: FloatingActionChangeActionColor
  },
  FloatingActionCustomActionComponent: {
    screen: FloatingActionCustomActionComponent
  },
  FloatingActionListenKeyboard: {
    screen: FloatingActionListenKeyboard
  },
  FloatingActionShadow: {
    screen: FloatingActionShadow
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 20
  }
});

export default createAppContainer(AppNavigator);

