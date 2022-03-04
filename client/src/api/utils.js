const Utils = {
  getToken: () => {
    const auth = JSON.parse(window.sessionStorage.getItem("auth"));
    return auth.hasOwnProperty("token") ? auth.token : null;
  },
};

export default Utils;
