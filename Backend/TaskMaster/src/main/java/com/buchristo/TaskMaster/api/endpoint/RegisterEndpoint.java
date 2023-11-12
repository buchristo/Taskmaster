package com.buchristo.TaskMaster.api.endpoint;

import com.buchristo.TaskMaster.logic.UserService;
import com.buchristo.TaskMaster.persistence.data.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("register")
public class RegisterEndpoint {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public RegisterEndpoint(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    User create(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setAuthorities(Set.of("USER"));
        return userService.create(user);
    }
}
