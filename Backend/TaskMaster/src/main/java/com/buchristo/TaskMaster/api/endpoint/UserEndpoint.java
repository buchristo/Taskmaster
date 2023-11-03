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

    @PostMapping
    User create(@RequestBody User user) {
        return userService.create(user);
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

    @GetMapping("/name")
    User getByName(@RequestParam String name) throws ElementNotFoundException {
        return userService.findByName(name)
                .orElseThrow(ElementNotFoundException::new);
    }

    @DeleteMapping
    void deleteById(@PathVariable Long id) {
        userService.delete(id);
    }
}
