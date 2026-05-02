package com.example.construction_management_backend.controllers;

import com.example.construction_management_backend.models.ApiResponse;
import com.example.construction_management_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<ApiResponse> getAllUsers(){
        return ResponseEntity.ok(
                new ApiResponse<>(1, "Users retrieved successfully", userService.getAllUsers())
        );
    }
}
