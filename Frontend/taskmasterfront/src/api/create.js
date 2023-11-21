const PROJECTSERVER = "http://localhost:8080/projects";
const jwtToken = localStorage.getItem("jwt");

export function createProject(projectName, id){
    return fetch(`${PROJECTSERVER}/addToUser/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: projectName,
        tasks: [],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error while making the POST request:", error);
      });
}