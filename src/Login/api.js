function submitLogin(login) {
  return fetch("http://xclassets.com/api/login", {
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
      mode: "no-cors",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: login.email, password: login.password })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.token);
      return res;
    });
}
export default submitLogin;
