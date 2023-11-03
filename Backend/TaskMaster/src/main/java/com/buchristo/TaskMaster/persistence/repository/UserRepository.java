package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.data.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);
}
