package com.api.AnimeRun_Backend.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.api.AnimeRun_Backend.dto.RecordDto;
import com.api.AnimeRun_Backend.mapper.RecordMapper;
import com.api.AnimeRun_Backend.repository.RecordRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RecordService {
    private final RecordRepository recordRepository;

    public List<RecordDto> getAllRecords() {
        return recordRepository.findAll()
                .stream()
                .map(RecordMapper::mapToDto)
                .collect(Collectors.toList());
    }

    public void uploadFile(MultipartFile file) {
        if (file != null && !file.isEmpty()) {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
                String line;
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

                reader.readLine();

                while ((line = reader.readLine()) != null) {
                    String[] data = line.split(",");
                    try {
                        RecordDto recordDto = RecordDto.builder()
                                .date(dateFormat.parse(data[0].trim()))
                                .distance(Double.parseDouble(data[1].trim()))
                                .calories_burned(Integer.parseInt(data[2].trim()))
                                .avg_heart_rate(Integer.parseInt(data[3].trim()))
                                .build();

                        recordRepository.save(RecordMapper.mapToEntity(recordDto));

                        System.out.println("Record saved: " + recordDto);
                    } catch (ParseException e) {
                        System.err.println("Error parsing date: " + data[0]);
                        e.printStackTrace();
                    } catch (NumberFormatException e) {
                        System.err.println("Error parsing numeric values");
                        e.printStackTrace();
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
