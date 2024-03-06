import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Account from '../screens/app/account/Account';
import Dashboard from '../screens/app/dashboard/Dashboard';
import Notification from '../screens/app/Notification/Notification';
import Colors from '../theme/colors/Colors';

import SearchScreen from '../../SearchScreen/SearchScreen';
import RoundTrip from '../screens/Search/RoundTrip/RoundTrip';
import OneWayTrip from '../screens/Search/OneWayTrip/OneWayTrip';
import MultiWayTrip from '../screens/Search/MultiWayTrip/MultiWayTrip';
import Bookmark from '../screens/app/Bookmark/Bookmark';
import { GlobalStyles } from '../utils/constants';
const Tab = createMaterialTopTabNavigator();
const Tabs = createBottomTabNavigator();

const TopTabScreens = ({ navigation }) => (
  <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
    <Tab.Screen name="Round-Trip" component={RoundTrip} />
    <Tab.Screen name="One-Way" component={OneWayTrip} />
    <Tab.Screen name="Multi-City" component={MultiWayTrip} />
  </Tab.Navigator>
);

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={styles.container}>
      
      <View style={[styles.backButtonContainer , GlobalStyles.marginMedium]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          style={styles.backButton}
        >
        
           <Feather name="arrow-left" size={20}  color="LightBlue" />
            <Text style={[styles.backButtonText,{}]}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={[GlobalStyles.marginHorizontalMedium ,  styles.tabButtonsContainer]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabButton,
              isFocused && styles.tabButtonSelected,
              { borderBottomWidth: 3, borderBottomColor: isFocused ? 'red' : 'transparent' },
            ]}
          >
              <Text style={[styles.tabButtonText, { fontWeight: isFocused ? 'bold' : 'normal' }]}>
              {label}
            </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    
    borderBottomWidth: 1,
    borderBottomColor: Colors.LightBlack,
    backgroundColor:Colors.White
  },
  backButtonContainer: {
    // alignItems: 'flex-start',
    // marginRight:25
  },
  backButton: {
    flexDirection: 'row', 
    alignItems: 'center',
    opacity: 0.5,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.LightBlue,
  },
  tabButtonsContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderBottomWidth: 2, 
    borderBottomColor: 'transparent', 
  },

  tabButtonSelected: {
    borderBottomColor: 'red', 
  },

  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

const DashboardStack = createNativeStackNavigator();
const DashboardStackScreens = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name={'Dashboard'}
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <DashboardStack.Screen
      name={'TopTabScreens'}
      component={TopTabScreens}
      options={{ headerShown: false }}
    />
    <DashboardStack.Screen
      name={'SearchScreen'}
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    
  </DashboardStack.Navigator>
);

const SearchStack = createNativeStackNavigator();
const SearchStackScreens = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name={'TopTabScreens'}
      component={TopTabScreens}
      options={{ headerShown: false }}
    />
  </SearchStack.Navigator>
);

const AccountStack = createNativeStackNavigator();
const AccountStackScreens = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen
      name={'Account'}
      component={Account}
      options={{
        headerShown: false,
      }}
    />
  </AccountStack.Navigator>
);

const BookmarkStack = createNativeStackNavigator();
const BookmarkStackScreens = () => (
  <BookmarkStack.Navigator>
    <BookmarkStack.Screen
      name={'Bookmark'}
      component={Bookmark}
      options={{
        headerShown: false,
      }}
    />
  </BookmarkStack.Navigator>
);
const NotificationStack = createNativeStackNavigator();
const NotificationStackScreens = () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen
      name={'Notification'}
      component={Notification}
      options={{
        headerShown: false,
      }}
    />
  </NotificationStack.Navigator>
);
function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName === 'Announcements' ||
    routeName === 'TopTabScreens' ||
    routeName === 'Round-Trip' ||
    routeName === 'DashboardStack' ||
    routeName === 'Announcement'
  ) {
    return 'none';
  }

  return 'flex';
}

export default () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { display: getTabBarVisibility(route) },
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.LightSecondary,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
         
          let IconComponent = Feather;
         
          switch (route.name) {
            case 'DashboardStack':
              iconName = 'home';
              break;

            case 'BookmarkStack':
              iconName = 'bookmark';
              break;

            case 'NotificationStack':
              iconName = 'notifications-outline';
              IconComponent=Ionicons;

              break;
              case 'SearchStack':
                iconName = 'search';
                break;
            case 'AccountStack':
              iconName = 'user';
              break;
           
          }
          return (
            <IconComponent
              name={iconName}
              size={20}

              color={focused ? Colors.Primary : Colors.LightestWhite}
            />
            
          );
        }, tabBarLabel: () => null, 
      })}
    >
      <Tabs.Screen
        name={'DashboardStack'}
        options={{ headerShown: false, }}
        component={DashboardStackScreens}
      />
      <Tabs.Screen
        name={'BookmarkStack'}
        options={{ headerShown: false, }}
        component={BookmarkStackScreens}
      />
      <Tabs.Screen
        name={'SearchStack'}
        options={{ headerShown: false, }}
        component={SearchStackScreens}
      />
      <Tabs.Screen
        name={'NotificationStack'}
        options={{ headerShown: false, }}
        component={NotificationStackScreens}
      />
      <Tabs.Screen
        name={'AccountStack'}
        options={{ headerShown: false, }}
        component={AccountStackScreens}
      />
      
    </Tabs.Navigator>
  );
};
