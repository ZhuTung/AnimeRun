package com.api.AnimeRun_Backend.mapper;

import com.api.AnimeRun_Backend.dto.AccountDto;
import com.api.AnimeRun_Backend.entity.Account;

public class AccountMapper {
    public static AccountDto mapToDto(Account account){
        if(account == null){
            return null;
        }

        return AccountDto.builder()
                .id(account.getId())
                .first_name(account.getFirst_name())
                .last_name(account.getLast_name())
                .age(account.getAge())
                .gender(account.getGender())
                .email(account.getEmail())
                .build();
    }

    public static Account mapToEntity(AccountDto dto){
        if(dto == null){
            return null;
        }

        return Account.builder()
                .id(dto.getId())
                .first_name(dto.getFirst_name())
                .last_name(dto.getLast_name())
                .age(dto.getAge())
                .gender(dto.getGender())
                .email(dto.getEmail())
                .password(dto.getPassword())
                .build();
    }
}
