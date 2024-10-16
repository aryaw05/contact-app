const CreateContact = async (data) => {
  return fetch("http://localhost:3000/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  }).then((Response) => {
    console.log(Response);
    return Response.json();
  });
};

const GetContacts = async (data) => {
  if (data) {
    return (
      fetch(`http://localhost:3000/api/contacts?name=${data}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        //   Return Response.json(): Di dalam .then(), Anda perlu mengembalikan Response.json() agar data JSON bisa diteruskan ke .then() berikutnya.
        .then((Response) => {
          return Response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
        })
    );
  } else {
    return fetch(`http://localhost:3000/api/contacts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  }
};

const GetContactsById = async (id) => {
  return fetch(`http://localhost:3000/api/contacts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const EditContact = async (id, data) => {
  return fetch(`http://localhost:3000/api/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  }).then((Response) => {
    // console.log(Response);
    return Response.json();
  });
};

const DeleteContact = async (id) => {
  return fetch(`http://localhost:3000/api/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).then((Response) => {
    // console.log(Response);
    return Response.json();
  });
};

export {
  CreateContact,
  GetContacts,
  EditContact,
  GetContactsById,
  DeleteContact,
};
