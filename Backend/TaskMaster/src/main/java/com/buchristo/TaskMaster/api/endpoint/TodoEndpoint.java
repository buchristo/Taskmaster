package com.buchristo.TaskMaster.api.endpoint;

import com.buchristo.TaskMaster.api.exception.ElementNotFoundException;
import com.buchristo.TaskMaster.logic.ProjectService;
import com.buchristo.TaskMaster.logic.TodoService;
import com.buchristo.TaskMaster.persistence.data.Project;
import com.buchristo.TaskMaster.persistence.data.Todo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("todos")
public class TodoEndpoint {
    private final TodoService todoService;
    private final ProjectService projectService;

    public TodoEndpoint(TodoService todoService, ProjectService projectService) {
        this.todoService = todoService;
        this.projectService = projectService;
    }

    @GetMapping
    List<Todo> findAllTodos() {
        return todoService.findAll();
    }

    @PostMapping("/addToProject/{projectId}")
    Todo assignTodoToProject(@RequestBody Todo todo, @PathVariable Long projectId) throws ElementNotFoundException {
        Project project = projectService.findById(projectId)
                .orElseThrow(ElementNotFoundException::new);
        todoService.addTodoToProject(todo, project);
        return todo;
    }

    @GetMapping("/projectId/{id}")
    List<Todo> findByProjectId(@PathVariable Long id) {
        return todoService.findByProjectId(id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        todoService.delete(id);
    }
}
