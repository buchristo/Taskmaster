package com.buchristo.TaskMaster.logic;

import com.buchristo.TaskMaster.persistence.data.Project;
import com.buchristo.TaskMaster.persistence.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Project create(Project project) {
        return projectRepository.save(project);
    }

    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    public Optional<Project> findById(Long id) {
        return projectRepository.findById(id);
    }

    public List<Project> findByUserId(Long id) {
        return projectRepository.findByUserId(id);
    }

    public void delete(Long id) {
        projectRepository.deleteById(id);
    }

}
