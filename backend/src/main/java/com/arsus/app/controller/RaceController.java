package com.arsus.app.controller;

import com.arsus.app.model.Race;
import com.arsus.app.service.RaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/races")
@CrossOrigin
public class RaceController {
    @Autowired
    private RaceService raceService;

    @PostMapping("/add")
    public String add(@RequestBody Race race){
        System.out.println(race.toString());
        raceService.saveRaces(race);
        return "New race is added";
    }

    @GetMapping("/getAll")
    public List<Race> getAllOrders(){
        return raceService.getAllRaces();
    }
}
