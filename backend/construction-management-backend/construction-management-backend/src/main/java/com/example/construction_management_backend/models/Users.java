package com.example.construction_management_backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Users {
    @Id
    private String email;

    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String password;
    private String role;
}
