package com.api.AnimeRun_Backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.api.AnimeRun_Backend.dto.AccountDto;
import com.api.AnimeRun_Backend.entity.Account;
import com.api.AnimeRun_Backend.mapper.AccountMapper;
import com.api.AnimeRun_Backend.repository.AccountRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AccountDto register(AccountDto dto) {
        Account account = AccountMapper.mapToEntity(dto);
        String hashedPassword = passwordEncoder.encode(account.getPassword());

        account.setPassword(hashedPassword);

        Account saved = accountRepository.save(account);
        return AccountMapper.mapToDto(saved);
    }

    public List<AccountDto> getAllAccounts() {
        return accountRepository.findAll()
                .stream()
                .map(AccountMapper::mapToDto)
                .collect(Collectors.toList());
    }

    public AccountDto login(String username, String password) {
        Account account = accountRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(password, account.getPassword())) {
            throw new RuntimeException("Invalid password");
        } else {
            return AccountMapper.mapToDto(account);
        }
    }

    public String changePassword(Long userId, String currentPassword, String newPassword, String confirmPassword) {
        Account account = accountRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(currentPassword, account.getPassword())) {
            throw new RuntimeException("Wrong Current Password");
        } else if (!newPassword.equals(confirmPassword)) {
            throw new RuntimeException("New and Confirm Password does not match");
        } else {
            String hashedNewPassword = passwordEncoder.encode(newPassword);
            account.setPassword(hashedNewPassword);

            accountRepository.save(account);

            return "Password updated successfully";
        }

    }
}
