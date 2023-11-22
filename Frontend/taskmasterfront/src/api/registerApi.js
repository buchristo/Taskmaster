const SERVER = "http://localhost:8080/register"

export function newUser(username, email, password){
    return fetch(SERVER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        projects: [],
      })
    })
}
