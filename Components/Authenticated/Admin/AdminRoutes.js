import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { StackClubProfile } from './StackClubProfile';
import { AdminPlayers } from './AdminPlayers';
import Payments from '../PaymentsGeneric';
import { CustomDraweComponent } from '../../Drawer';


const AdminRoutes = DrawerNavigator({
    Profile: {
      screen: StackClubProfile,

    },
    Players: {
      screen: AdminPlayers,
    },
    Payments: {
      screen: Payments,
    },
  },{
    initialRouteName: 'Profile',
    contentComponent : CustomDraweComponent,
    contentOptions:{
      activeTintColor : 'orange'
    }
});


export { AdminRoutes };  