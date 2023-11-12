package com.buchristo.TaskMaster.runner;

import com.buchristo.TaskMaster.persistence.data.User;
import com.buchristo.TaskMaster.persistence.repository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
@ConfigurationProperties("datasets")
public class DatabasePopulator {

    @Bean
    ApplicationRunner populator(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            User testuser = new User(0, "test", "test@testington@gmail.com", passwordEncoder.encode("password123"), Set.of(), Set.of("USER"));
            userRepository.save(testuser);
        };
    }
}
