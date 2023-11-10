package com.buchristo.TaskMaster.logic;

import com.buchristo.TaskMaster.persistence.data.Project;
import com.buchristo.TaskMaster.persistence.data.User;
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

    public Project addProjectToUser(Project project, User user){
        project.setUser(user);
        return projectRepository.save(project);
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
