const SERVER = "http://localhost:8080/users"

export function getUserByName(username){
    const jwt = localStorage.getItem("jwt");
    if (!jwt){
        console.log("no jwt provided!")
      return;
    }
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${jwt}`);
    return fetch(SERVER + `/find/${username}`, {method: "GET", headers: headers })
      .then((res) => res.json())
      .catch((error) => console.log("ERROR: " + error));
}
