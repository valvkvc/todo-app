export default new (class Api {
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // { username, password }
    });
    if (response.status === 200) {
      const responseBody = await response.json();
      console.log(responseBody);
      return responseBody;
    } else {
      const responseBody = await response.text();
      return responseBody;
    }
  }

  async get(url) {
    const token = localStorage.getItem("token");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    const responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
  }

  async postFormData(url, data) {
    const token = localStorage.getItem("token");

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { token: token },
      referrer: "no-referrer",
      body: data,
    });

    if (response.status == 200) {
      const responseBody = response.json();
      console.log(responseBody);
      return responseBody;
    } else {
      return response;
    }
  }
})();
