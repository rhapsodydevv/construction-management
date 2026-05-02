package com.example.construction_management_backend.services;

import com.example.construction_management_backend.models.Users;
import com.example.construction_management_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    public Users signUp(Users user){
        if (user.getEmail() == null || user.getPassword() == null) {
            throw new IllegalArgumentException("Email and password must not be null");
        }

        if (userRepository.findById(user.getEmail()).isPresent()){
            throw new IllegalArgumentException("Email already exists");
        }

        if (userRepository.findByPhoneNumber(user.getPhoneNumber()).isPresent()){
            throw new IllegalArgumentException("Phone number already exists");
        }

        return userRepository.save(user);

    }

}
