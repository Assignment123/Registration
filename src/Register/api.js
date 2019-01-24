export const callApi = (
  first_name,
  last_name,
  email,
  password,
  confirm_password,
  referral_code
) => {
  console.log(first_name, last_name, email, password, "akjasdkjas");
  const url = "http://192.168.31.50:8000/api/user";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      confirm_password: confirm_password,
      referral_code: referral_code
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => JSON.stringify(response))
    .catch(error => error);
};
