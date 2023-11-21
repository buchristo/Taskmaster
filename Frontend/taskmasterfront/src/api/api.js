const SERVER = "http://localhost:8080"

export function login(username, password){
    const headers = new Headers();
    const auth = btoa(`${username}:${password}`);
    headers.set("Authorization", "Basic " + auth);

    return fetch(SERVER + "/login", {method: "GET", headers: headers })
      .then((res) => res.text())
      .then(jwt => {
        localStorage.setItem("jwt", jwt);
        console.log(jwt);
      })
      .catch((error) => console.log("ERROR: " + error));
}