const getIsLoggedIn = state => state.auth.isLoggedIn;
const getEmailUser = state => state.auth.user.email;

const selectors = { getIsLoggedIn, getEmailUser };
export default selectors;
