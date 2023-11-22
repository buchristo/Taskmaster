const PROJECTSERVER = "http://localhost:8080/projects";
const TODOSERVER = "http://localhost:8080/todos";

export function createProject(projectName, id){ 
  const jwtToken = localStorage.getItem("jwt")
  
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

export function findProjectById(id){
  const jwtToken = localStorage.getItem("jwt")

  return fetch(`${PROJECTSERVER}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Error while making the GET request:", error);
  });
}

export function addTaskToProject(projectId ,title, description, priority){
  const jwtToken = localStorage.getItem("jwt")
  
  return fetch(`${TODOSERVER}/addToProject/${projectId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      priorityType: priority
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