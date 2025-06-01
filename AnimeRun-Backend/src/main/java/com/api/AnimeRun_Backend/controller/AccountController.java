package com.api.AnimeRun_Backend.controller;

import com.api.AnimeRun_Backend.dto.AccountDto;
import com.api.AnimeRun_Backend.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService accountService;

    @PostMapping
    public ResponseEntity<AccountDto> register(@RequestBody AccountDto dto) {
        return ResponseEntity.ok(accountService.register(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        // String message = "";

        Boolean response = accountService.login(email, password);

        if (response) {
            return ResponseEntity.ok("Login Successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Login failed");
        }
    }

    @GetMapping
    public ResponseEntity<List<AccountDto>> getAllAccounts() {
        return ResponseEntity.ok(accountService.getAllAccounts());
    }
}
