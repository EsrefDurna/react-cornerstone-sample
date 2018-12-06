// Export Constants
export const TOGGLE_ABOUT = 'TOGGLE_ABOUT';
export const TOGGLE_USER_PREFERENCE = 'TOGGLE_USER_PREFERENCE';
// Export Actions
export function toggleSectionAbout() {
  return {
    type: TOGGLE_ABOUT,
  };
}
export function toggleSectionuserPreferences() {
  return {
    type: TOGGLE_USER_PREFERENCE,
  };
}

