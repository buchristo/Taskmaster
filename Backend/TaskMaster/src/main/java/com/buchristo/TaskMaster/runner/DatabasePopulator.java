package com.buchristo.TaskMaster.runner;

import com.buchristo.TaskMaster.persistence.data.PriorityType;
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
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Set;

@Configuration
@ConfigurationProperties("datasets")
public class DatabasePopulator {

    @Bean
    ApplicationRunner populator(UserRepository userRepository, PasswordEncoder passwordEncoder, ProjectRepository projectRepository, TodoRepository todoRepository) {
        return args -> {
            User testuser = new User(0,
                    "test",
                    "test@testington@gmail.com",
                    passwordEncoder.encode("password123"),
                    Set.of(),
                    Set.of("USER"));
            userRepository.save(testuser);

            Project project = new Project(null,
                    "testProject",
                    Set.of(),
                    testuser);
            projectRepository.save(project);

            Todo todo1 = new Todo(null,
                    "testTitle",
                    "ultra description",
                    PriorityType.HIGH,
                    project,
                    false);
            Todo todo2 = new Todo(null,
                    "second one",
                    "ultra description",
                    PriorityType.HIGH,
                    project,
                    true);
            Todo todo3 = new Todo(null,
                    "third todo",
                    "ultra description",
                    PriorityType.MEDIUM,
                    project,
                    false);
            todoRepository.saveAll(List.of(todo1, todo2, todo3));

            testuser.setProjects(Set.of(project));
            userRepository.save(testuser);
        };
    }
}
