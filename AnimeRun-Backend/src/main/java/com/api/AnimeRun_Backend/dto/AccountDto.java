package com.api.AnimeRun_Backend.dto;

import lombok.*;

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
    private String password;
}
