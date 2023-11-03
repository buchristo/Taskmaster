package com.buchristo.TaskMaster.api.endpoint;

import com.buchristo.TaskMaster.api.exception.ElementNotFoundException;
import com.buchristo.TaskMaster.logic.ProjectService;
import com.buchristo.TaskMaster.persistence.data.Project;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("projects")
public class ProjectEndpoint {

    private final ProjectService projectService;

    public ProjectEndpoint(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping
    Project createProject(@RequestBody Project project) {
        return projectService.create(project);
    }

    @GetMapping
    List<Project> findAllProjects() {
        return projectService.findAll();
    }

    @GetMapping("/{id}")
    Project findProjectById(@PathVariable Long id) throws ElementNotFoundException {
        return projectService.findById(id)
                .orElseThrow(ElementNotFoundException::new);
    }

    @GetMapping("/userId/{id}")
    List<Project> findProjectsFromUser(@PathVariable Long id) {
        return projectService.findByUserId(id);
    }

    @DeleteMapping("/{id}")
    void deleteProject(@PathVariable Long id) {
        projectService.delete(id);
    }
}
