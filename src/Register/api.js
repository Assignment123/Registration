const callApi = data => {
  console.log(data, "data");
  const url = "http://www.xclassets.com/api/customer";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log("response", response);
      JSON.stringify(response);
    })
    .catch(error => error);
};

export default callApi;
