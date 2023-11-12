package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.data.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String name);
}
