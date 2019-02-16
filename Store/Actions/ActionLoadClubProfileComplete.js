import CONSTANTS from '../CONSTANTS';

export const ActionLoadClubProfileComplete = load => {
    return {
    type: CONSTANTS.LOAD_CLUB_PROFILE_COMPLETE,
    load: load,
    }
};