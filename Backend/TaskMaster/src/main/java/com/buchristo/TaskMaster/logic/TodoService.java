package com.buchristo.TaskMaster.logic;

import com.buchristo.TaskMaster.persistence.data.Project;
import com.buchristo.TaskMaster.persistence.data.Todo;
import com.buchristo.TaskMaster.persistence.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Optional<Todo> findById(Long id) { return todoRepository.findById(id); }

    public Todo addTodoToProject(Todo todo, Project project) {
        todo.setProject(project);
        return todoRepository.save(todo);
    }

    public List<Todo> findByProjectId(Long id) {
        return todoRepository.findByProjectId(id);
    }

    public Todo updateTodoFromProject(Todo todo, Project project) {
        todo.setProject(project);
        return todoRepository.save(todo);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
}
