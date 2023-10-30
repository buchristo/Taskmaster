package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
