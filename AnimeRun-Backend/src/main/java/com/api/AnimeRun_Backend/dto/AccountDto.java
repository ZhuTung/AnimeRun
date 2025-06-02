package com.api.AnimeRun_Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountDto {
    private Long id;
    private String first_name;
    private String last_name;
    private Integer age;
    private String gender;
    private String email;
    private String username;
    private String password;
}
