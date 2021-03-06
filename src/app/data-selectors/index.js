export const getApp = (state) => state.app;

export const getAppData = (state) => getApp(state).data;
export const getAppAuth = (state) => getApp(state).auth;

export const getAppLogin = (state) => getAppAuth(state).login;
export const getAppUser = (state) => getAppLogin(state).payload;

export const getRooms = (state) => getAppData(state).rooms;
export const getLogin = (state) => getAppAuth(state).login;

export const getTables = (state) => getRooms(state).tables;
