package com.api.AnimeRun_Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.api.AnimeRun_Backend.entity.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {
    List<Record> findByUserId(Integer userId);
}
