package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.data.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByUserId(Long userId);
}
