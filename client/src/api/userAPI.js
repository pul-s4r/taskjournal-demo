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
};

export default UserAPI;
