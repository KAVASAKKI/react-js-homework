const getIsLoggedIn = state => state.auth.isLoggedIn;
const getEmailUser = state => state.auth.user.email;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const selectors = { getIsLoggedIn, getEmailUser, getIsFetchingCurrentUser };
export default selectors;
