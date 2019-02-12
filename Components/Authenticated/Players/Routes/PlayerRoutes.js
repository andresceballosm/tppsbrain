import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { StackClubProfile } from '../../Admin/Routes/StackClubProfile';
import { CustomDraweComponent } from '../../../Drawer';



const PlayerRoutes = DrawerNavigator({
    'Club/ORG Profile': {
      screen: StackClubProfile,
    },
  },{
    initialRouteName: 'Club/ORG Profile',
    contentComponent : CustomDraweComponent,
    contentOptions:{
      activeTintColor : '#3c681e',
      inactiveTintColor : '#312959'
    }
    
});


export { PlayerRoutes };  