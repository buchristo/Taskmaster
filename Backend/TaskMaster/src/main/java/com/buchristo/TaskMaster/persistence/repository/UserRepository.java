package com.buchristo.TaskMaster.persistence.repository;

import com.buchristo.TaskMaster.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);
}
