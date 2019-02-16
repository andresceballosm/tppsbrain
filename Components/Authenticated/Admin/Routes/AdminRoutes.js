import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { StackClubProfile } from './StackClubProfile';
import Payments from '../../PaymentsGeneric';
import { CustomDraweComponent } from '../../../Drawer';
import { StackPlayers } from './StackPlayers';
import { StackAboutProfile } from './StackAboutProfile';


const AdminRoutes = DrawerNavigator({
    'About': {
      screen: StackAboutProfile,
    },
    'Club/ORG Profile': {
      screen: StackClubProfile,
    },
    'Players': {
      screen: StackPlayers,
    },
    'Payments': {
      screen: Payments,
    },
  },{
    initialRouteName: 'About',
    contentComponent : CustomDraweComponent,
    contentOptions:{
      activeTintColor : '#3c681e',
      inactiveTintColor : '#312959'
    }
    
});


export { AdminRoutes };  