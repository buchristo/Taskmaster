package com.buchristo.TaskMaster.runner;

import com.buchristo.TaskMaster.persistence.data.Project;
import com.buchristo.TaskMaster.persistence.data.Todo;
import com.buchristo.TaskMaster.persistence.data.User;
import com.buchristo.TaskMaster.persistence.repository.ProjectRepository;
import com.buchristo.TaskMaster.persistence.repository.TodoRepository;
import com.buchristo.TaskMaster.persistence.repository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Set;

@Configuration
@ConfigurationProperties("datasets")
public class DatabasePopulator {

    private List<User> users;
    private List<Project> projects;
    private List<Todo> todos;

    @Bean
    ApplicationRunner populator(UserRepository userRepository, ProjectRepository projectRepository, TodoRepository todoRepository) {
        return args -> {

            userRepository.saveAll(users);
            projectRepository.saveAll(projects);
            todoRepository.saveAll(todos);

            User testUser = users.get(0);
            User ralph = users.get(1);

            Project testMaster = projects.get(0);
            Project ralphsProject = projects.get(1);

            Todo test1 = todos.get(0);
            Todo test2 = todos.get(1);
            Todo test3 = todos.get(2);
            Todo ralphTodo1 = todos.get(3);
            Todo ralphTodo2 = todos.get(4);

            testMaster.setTasks(Set.of(test1, test2, test3));
            test1.setProject(testMaster);
            test2.setProject(testMaster);
            test3.setProject(testMaster);

            ralphsProject.setTasks(Set.of(ralphTodo1, ralphTodo2));
            ralphTodo1.setProject(ralphsProject);
            ralphTodo2.setProject(ralphsProject);

            testUser.setProjects(Set.of(testMaster));
            testMaster.setUser(testUser);

            ralph.setProjects(Set.of(ralphsProject));
            ralphsProject.setUser(ralph);

            todoRepository.save(test1);
            todoRepository.save(test2);
            todoRepository.save(test3);
            todoRepository.save(ralphTodo1);
            todoRepository.save(ralphTodo2);

            projectRepository.save(testMaster);
            projectRepository.save(ralphsProject);

            userRepository.save(testUser);
            userRepository.save(ralph);
        };
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void setTodos(List<Todo> todos) {
        this.todos = todos;
    }
}
