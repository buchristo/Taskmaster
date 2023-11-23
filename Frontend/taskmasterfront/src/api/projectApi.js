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
      priorityType: priority,
      isCompleted: false
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

export function deleteTask(taskId){
  const jwtToken = localStorage.getItem("jwt")

  return fetch(`${TODOSERVER}/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return console.log("deleted");
  })
  .catch((error) => {
    console.error("Error while making the DELETE request:", error);
  });
}

export function findTaskById(taskId){
  const jwtToken = localStorage.getItem("jwt")

  return fetch(`${TODOSERVER}/${taskId}`, {
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

export function updateTaskFromProject(projectId, todoId, title, description, priority, completed){
  const jwtToken = localStorage.getItem("jwt")

  return fetch(`${TODOSERVER}/update/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      id: todoId,
      title: title,
      description: description,
      priorityType: priority,
      isCompleted: completed
    })
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Error while making the PUT request:", error);
  });
}

export function deleteProject(projectId){
  const jwtToken = localStorage.getItem("jwt")

  return fetch(`${PROJECTSERVER}/${projectId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return console.log("deleted");
  })
  .catch((error) => {
    console.error("Error while making the DELETE request:", error);
  });
}