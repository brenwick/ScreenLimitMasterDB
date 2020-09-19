import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MasterScreen from './src/screens/MasterScreen';
import LoginScreen from './src/screens/LoginScreen';
import NewUserScreen from './src/screens/NewUserScreen';
import NewProfileScreen from './src/screens/NewProfileScreen';
import TrialScreen from './src/screens/TrialScreen';
import UserScreen from './src/screens/UserScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SettingScreen from './src/screens/SettingScreen';
import AppPrepScreen from './src/screens/AppPrepScreen';

const navigator = createStackNavigator(
  {
    Master: MasterScreen,
    Login: LoginScreen,
    NUser: NewUserScreen,
    NProfile: NewProfileScreen,
    Trial: TrialScreen,
    User: UserScreen,
    History: HistoryScreen,
    Settings: SettingScreen,
    Apps: AppPrepScreen,
  },
  {
    initialRouteName: 'Master',
    defaultNavigationOptions: {
      title: 'ScreenLimit',
    },
  }
);

export default createAppContainer(navigator);
