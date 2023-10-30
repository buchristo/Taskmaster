package com.buchristo.TaskMaster.persistence.entity;

import com.buchristo.TaskMaster.model.PriorityType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private PriorityType priorityType;
    private Long ProjectId;

    public Todo(Long id, String title, String description, PriorityType priorityType, Long projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priorityType = priorityType;
        ProjectId = projectId;
    }

    public Todo() {
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
}
