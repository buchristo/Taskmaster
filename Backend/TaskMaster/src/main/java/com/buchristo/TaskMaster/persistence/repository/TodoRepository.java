package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByProjectId(Long projectId);
}
