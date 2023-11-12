package com.buchristo.TaskMaster.api.endpoint;

import com.buchristo.TaskMaster.api.exception.ElementNotFoundException;
import com.buchristo.TaskMaster.logic.UserService;
import com.buchristo.TaskMaster.persistence.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserEndpoint {

    private final UserService userService;

    public UserEndpoint(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    User getById(@PathVariable Long id) throws ElementNotFoundException {
        return userService.findById(id)
                .orElseThrow(ElementNotFoundException::new);
    }

    @GetMapping("/filter")
    User getByName(@RequestParam String name) throws ElementNotFoundException {
        return userService.findByUsername(name)
                .orElseThrow(ElementNotFoundException::new);
    }

    @DeleteMapping("/{id}")
    void deleteById(@PathVariable Long id) {
        userService.delete(id);
    }
}
