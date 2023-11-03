package com.buchristo.TaskMaster.api.endpoint;

import com.buchristo.TaskMaster.logic.TodoService;
import com.buchristo.TaskMaster.persistence.data.Todo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("todos")
public class TodoEndpoint {
    private final TodoService todoService;

    public TodoEndpoint(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    Todo create(@RequestBody Todo todo) {
        return todoService.create(todo);
    }

    @GetMapping("/projectId/{id}")
    List<Todo> findByProjectId(@PathVariable Long id) {
        return todoService.findByProjectId(id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {

    }
}
