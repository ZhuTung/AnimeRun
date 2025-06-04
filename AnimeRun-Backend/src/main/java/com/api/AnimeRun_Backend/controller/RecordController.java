package com.api.AnimeRun_Backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.api.AnimeRun_Backend.service.RecordService;
import com.api.AnimeRun_Backend.dto.RecordDto;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/record")
@RequiredArgsConstructor
public class RecordController {
    private final RecordService recordService;

    @GetMapping("/getRecord/{id}")
    public List<RecordDto> getAllAccounts(@PathVariable("id") Integer id) {
        return recordService.getAllRecords(id);
    }

    @GetMapping("/test")
    public String test() {
        return "Testing from record";
    }

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("userId") Integer userId) {
        recordService.uploadFile(file, userId);
    }
}
