package com.example.construction_management_backend.models;

import lombok.Data;

@Data
public class ApiResponse <T>{
    private int status; // 1 for success, 0 for failure
    private String message;
    private T data;

    public ApiResponse(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }


}
