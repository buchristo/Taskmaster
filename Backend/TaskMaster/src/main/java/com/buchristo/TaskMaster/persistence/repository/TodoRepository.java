package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.data.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByProjectId(Long projectId);
}
