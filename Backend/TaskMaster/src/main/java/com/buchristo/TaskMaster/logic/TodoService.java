package com.buchristo.TaskMaster.logic;

import com.buchristo.TaskMaster.persistence.data.Todo;
import com.buchristo.TaskMaster.persistence.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public Todo create(Todo todo) {
        return todoRepository.save(todo);
    }

    public List<Todo> findByProjectId(Long id) {
        return todoRepository.findByProjectId(id);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
}
