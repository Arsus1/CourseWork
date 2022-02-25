package com.arsus.app.service;

import com.arsus.app.model.Race;
import com.arsus.app.repository.RaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RaceServiceImpl implements RaceService {
    @Autowired
    private RaceRepository raceRepository;

    @Override
    public Race saveRaces(Race races) {
        return raceRepository.save(races);
    }

    @Override
    public List<Race> getAllRaces() {
        return raceRepository.findAll();
    }
}