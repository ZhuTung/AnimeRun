package com.api.AnimeRun_Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.api.AnimeRun_Backend.entity.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
