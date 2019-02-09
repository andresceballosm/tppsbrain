import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { StackClubProfile } from './StackClubProfile';
import Payments from '../../PaymentsGeneric';
import { CustomDraweComponent } from '../../../Drawer';
import { StackPlayers } from './StackPlayers';


const AdminRoutes = DrawerNavigator({
    'Club/ORG Profile': {
      screen: StackClubProfile,

    },
    'Players': {
      screen: StackPlayers,
    },
    Payments: {
      screen: Payments,
    },
  },{
    initialRouteName: 'Club/ORG Profile',
    contentComponent : CustomDraweComponent,
    contentOptions:{
      activeTintColor : '#3c681e',
      inactiveTintColor : '#312959'
    }
    
});


export { AdminRoutes };  