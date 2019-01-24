function submitLogin(login) {
  return fetch(
    "http://xclassets.com/api/login",
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: login.email, password: login.password })
    }
  )
    .then(res => res.json())
    .then(res => {
      console.log("data is set in localstorage", res);
      localStorage.setItem("token", res.data.token);
      return res.data;
    });
}
export default submitLogin;