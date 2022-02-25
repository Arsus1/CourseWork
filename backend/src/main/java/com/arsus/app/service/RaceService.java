package com.arsus.app.service;

import com.arsus.app.model.Race;

import java.util.List;

public interface RaceService {
    public Race saveRaces(Race races);
    public List<Race> getAllRaces();
}

