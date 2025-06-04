package com.api.AnimeRun_Backend.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecordDto {
    private Long id;
    private Integer userId;
    private Date date;
    private Double distance;
    private Integer calories_burned;
    private Integer avg_heart_rate;
}
