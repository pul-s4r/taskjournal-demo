import Utils from './utils.js';

const serverurl = 'http://localhost:8000';

const UserAPI = {
  login: (email, password) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    };

    var result = fetch(`${serverurl}${"/auth/login"}`, options)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
      });
    return result;
  },
  register: (email, password, accountType) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "accountType": accountType,
      }),
    };

    var result = fetch(`${serverurl}${"/auth/register"}`, options)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
      });
    return result;
  },
  get: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${`/auth`}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error in call to get users: ${res.json()}`);
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
      });
    return result;
  }
};

export default UserAPI;
