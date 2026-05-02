package com.example.construction_management_backend.repositories;

import com.example.construction_management_backend.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, String> {
    Optional<Users> findByPhoneNumber(String phoneNumber);
}
