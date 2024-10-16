const url = "http://localhost:3000/";
const session = localStorage.getItem("token");
const CreateAddress = async (data, id) => {
  return fetch(url + `api/contacts/${id}/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: session,
    },
    body: JSON.stringify(data),
  })
    .then((Response) => {
      console.log(Response);
      return Response.json();
    })
    .catch((error) => {
      throw error;
    });
};

const GetAddress = async (contactId) => {
  return fetch(url + `api/contacts/${contactId}/addresses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: session,
    },
  }).then((Response) => {
    return Response.json();
  });
};

const DeleteAddress = async (addressId, contactId) => {
  return fetch(url + `api/contacts/${contactId}/addresses/${addressId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: session,
    },
  }).then((Response) => {
    return Response.json();
  });
};

export { CreateAddress, GetAddress, DeleteAddress };
