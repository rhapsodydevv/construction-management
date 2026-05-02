package com.example.construction_management_backend.controllers;

import com.example.construction_management_backend.models.ApiResponse;
import com.example.construction_management_backend.models.Users;
import com.example.construction_management_backend.services.UserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Data
    public static class SignUpRequest {
        private String email;
        private String firstName;
        private String lastName;
        private String phoneNumber;
        private String password;
        private String role;
    }

    //Register
    @PostMapping("/sign-up")
    public ResponseEntity<ApiResponse> signUp(@RequestBody SignUpRequest request){
        try {
            Users user = new Users();
            user.setEmail(request.getEmail());
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setPassword(request.getPassword());
            user.setPhoneNumber(request.getPhoneNumber());
            user.setRole(request.getRole());
            Users savedUser = userService.signUp(user);

            return ResponseEntity.ok(
                    new ApiResponse<>(1, "User registered successfully", savedUser)
            );
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(
                    new ApiResponse<>(0, e.getMessage(), null));
        }

    }
}
