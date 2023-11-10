package com.buchristo.TaskMaster.api.endpoint;

import com.buchristo.TaskMaster.api.exception.ElementNotFoundException;
import com.buchristo.TaskMaster.logic.ProjectService;
import com.buchristo.TaskMaster.logic.UserService;
import com.buchristo.TaskMaster.persistence.data.Project;
import com.buchristo.TaskMaster.persistence.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("projects")
public class ProjectEndpoint {

    private final ProjectService projectService;
    private final UserService userService;

    public ProjectEndpoint(ProjectService projectService, UserService userService) {
        this.projectService = projectService;
        this.userService = userService;
    }

    @PostMapping("/addToUser/{userId}")
    Project assignProjectToUser(@RequestBody Project project, @PathVariable Long userId) throws ElementNotFoundException {
        User user = userService.findById(userId)
                .orElseThrow(ElementNotFoundException::new);
        projectService.addProjectToUser(project, user);
        return project;
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

    @PutMapping("/update/{userId}")
    Project updateProjectFromUser(@RequestBody Project project, @PathVariable Long userId) throws Exception {
        User user = userService.findById(userId)
                .orElseThrow(ElementNotFoundException::new);
        projectService.updateProjectFromUser(project, user);
        return project;
    }

    @DeleteMapping("/{id}")
    void deleteProject(@PathVariable Long id) {
        projectService.delete(id);
    }
}
