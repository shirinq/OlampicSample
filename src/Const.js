export const LOGIN_PAGE = 'login';
export const SIGN_IN_PAGE = 'signin';
export const SIGN_UP_PAGE = 'signup';
export const TERMS_PAGE = 'terms';
export const CHOOSE_LANG_PAGE = 'chooseLang';
export const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
export const usernameRegex = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){6,18}[a-zA-Z0-9]$');