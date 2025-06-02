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

    public AccountDto register(AccountDto dto){
        Account account = AccountMapper.mapToEntity(dto);
        String hashedPassword = passwordEncoder.encode(account.getPassword());

        account.setPassword(hashedPassword);

        Account saved = accountRepository.save(account);
        return AccountMapper.mapToDto(saved);
    }

    public List<AccountDto> getAllAccounts(){
        return accountRepository.findAll()
                .stream()
                .map(AccountMapper::mapToDto)
                .collect(Collectors.toList());
    }

    public AccountDto login(String username, String password){
        Account account = accountRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return AccountMapper.mapToDto(account);
    }
}
