package com.api.AnimeRun_Backend.mapper;

import com.api.AnimeRun_Backend.dto.RecordDto;
import com.api.AnimeRun_Backend.entity.Record;

public class RecordMapper {
    public static RecordDto mapToDto(Record record) {
        if (record == null) {
            return null;
        }

        return RecordDto.builder()
                .id(record.getId())
                .date(record.getDate())
                .distance(record.getDistance())
                .calories_burned(record.getCalories_burned())
                .avg_heart_rate(record.getAvg_heart_rate())
                .build();
    }

    public static Record mapToEntity(RecordDto dto) {
        if (dto == null) {
            return null;
        }

        return Record.builder()
                .id(dto.getId())
                .date(dto.getDate())
                .distance(dto.getDistance())
                .calories_burned(dto.getCalories_burned())
                .avg_heart_rate(dto.getAvg_heart_rate())
                .build();
    }
}
