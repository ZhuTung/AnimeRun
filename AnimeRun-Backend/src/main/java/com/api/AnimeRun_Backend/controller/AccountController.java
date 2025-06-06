package com.api.AnimeRun_Backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.AnimeRun_Backend.dto.AccountDto;
import com.api.AnimeRun_Backend.service.AccountService;
import com.api.AnimeRun_Backend.utils.ErrorResponse;

import lombok.RequiredArgsConstructor;

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
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        try {
            AccountDto response = accountService.login(username, password);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse(e.getMessage()));
        }
    }

    @PatchMapping("/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, Object> body) {
        Object id = body.get("userId");
        Long userId = ((Number) id).longValue();
        String currentPassword = (String) body.get("currentPassword");
        String newPassword = (String) body.get("newPassword");
        String confirmPassword = (String) body.get("confirmPassword");

        try {
            String response = accountService.changePassword(userId, currentPassword, newPassword, confirmPassword);

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse(e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<List<AccountDto>> getAllAccounts() {
        return ResponseEntity.ok(accountService.getAllAccounts());
    }
}
