import Utils from "../api/utils.js";

export const isLoggedIn = () => Utils.getToken() !== null;
