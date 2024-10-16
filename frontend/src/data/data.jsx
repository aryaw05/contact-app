// const UserLogin = () => {
//   try {
//     fetch("http://localhost:3000/api/users/login", {
//       method: "GET",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: localStorage.getItem("token"),
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => console.log(response));
//   } catch (error) {
//     console.log(error);
//   }
// };

const UserLogin = async (data) => {
  return fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.data.token);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
};

const UserRegister = async (data) => {
  return fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
};

const GetUser = async () => {
  return fetch("http://localhost:3000/api/users/current", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // console.error("Fetch error:", error);
      throw error;
    });
};

const Logout = async () => {
  return fetch("http://localhost:3000/api/users/logout", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).then((response) => {
    localStorage.removeItem("token");
    return response.json();
  });
};
export { UserLogin, UserRegister, GetUser, Logout };
