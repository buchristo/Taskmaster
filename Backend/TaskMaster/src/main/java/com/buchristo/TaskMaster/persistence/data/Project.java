package com.buchristo.TaskMaster.persistence.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Project {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(mappedBy = "project")
    private Set<Todo> tasks;
    @ManyToOne
    @JsonIgnore
    private User user;

    public Project() {
    }

    public Project(Long id, String name, Set<Todo> tasks, User user) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Todo> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Todo> tasks) {
        this.tasks = tasks;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
