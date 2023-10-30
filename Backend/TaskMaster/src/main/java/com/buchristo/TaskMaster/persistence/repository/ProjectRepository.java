package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
