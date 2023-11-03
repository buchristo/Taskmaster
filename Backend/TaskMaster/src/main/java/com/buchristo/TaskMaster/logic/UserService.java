package com.buchristo.TaskMaster.logic;

import com.buchristo.TaskMaster.persistence.data.User;
import com.buchristo.TaskMaster.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByName(String name) {
        return Optional.ofNullable(userRepository.findByName(name));
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
