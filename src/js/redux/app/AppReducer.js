// Import Actions
import { TOGGLE_ABOUT, TOGGLE_USER_PREFERENCE } from './AppActions';

// Initial State
const initialState = {
  showAbout: false,
  showUserPreference: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ABOUT:
      return {
        showAbout: !state.showAbout,
      };
    case TOGGLE_USER_PREFERENCE:
      return {
        showUserPreference: !state.showUserPreference,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAbout = state => state.app.showAbout;
export const getShowUserPreference = state => state.app.showUserPreference;

// Export Reducer
export default AppReducer;
