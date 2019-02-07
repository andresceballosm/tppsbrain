import { StackNavigator } from 'react-navigation';
import ClubProfile from './ClubProfile';

const StackClubProfile = StackNavigator({
    Profile: {
        screen: ClubProfile,
        
    },
});

export { StackClubProfile };

