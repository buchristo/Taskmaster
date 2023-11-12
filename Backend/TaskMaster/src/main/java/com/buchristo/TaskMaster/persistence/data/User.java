package com.buchristo.TaskMaster.persistence.data;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "_user")
public class User {

    @Id
    @GeneratedValue
    private long id;
    private String username;
    private String email;
    private String password;
    @OneToMany(mappedBy = "user")
    private Set<Project> projects;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> authorities;

    public User() {
    }

    public User(long id, String username, String email, String password, Set<Project> projects, Set<String> authorities) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.projects = projects;
        this.authorities = authorities;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String name) {
        this.username = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }
}
