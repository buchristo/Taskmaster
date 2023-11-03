package com.buchristo.TaskMaster.persistence.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private PriorityType priorityType;
    @ManyToOne
    private Project project;
    private boolean isCompleted;

    public Todo() {
    }

    public Todo(Long id, String title, String description, PriorityType priorityType, Project project, boolean isCompleted) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priorityType = priorityType;
        this.project = project;
        this.isCompleted = isCompleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public PriorityType getPriorityType() {
        return priorityType;
    }

    public void setPriorityType(PriorityType priorityType) {
        this.priorityType = priorityType;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setisCompleted(boolean completed) {
        isCompleted = completed;
    }
}
