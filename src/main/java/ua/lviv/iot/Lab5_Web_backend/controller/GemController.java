package ua.lviv.iot.Lab5_Web_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ua.lviv.iot.Lab5_Web_backend.entity.GemEntity;
import ua.lviv.iot.Lab5_Web_backend.exceptions.GemAlreadyExistsException;
import ua.lviv.iot.Lab5_Web_backend.exceptions.GemNotFoundException;
import ua.lviv.iot.Lab5_Web_backend.exceptions.SortNotFoundException;
import ua.lviv.iot.Lab5_Web_backend.service.GemService;

import java.util.Map;



@CrossOrigin
@RestController
@RequestMapping("/api/gems")
public class GemController {

    private GemService gemService;

    @Autowired
    public GemController(GemService gemService){
        this.gemService = gemService;
    }

    @PostMapping("/")
    public String saveGem(@RequestBody GemEntity gem) throws SortNotFoundException, GemAlreadyExistsException {
        return gemService.addGem(gem);
    }

    @GetMapping("/{id}")
    public GemEntity showGemById(@PathVariable Long id) throws GemNotFoundException {
        return gemService.getGemById(id);
    }

    @GetMapping("/")
    public Map<Long, GemEntity> showAllGems(){
        return gemService.getAllGems();
    }

    @PutMapping("{id}")
    public String updateGemById(@RequestBody GemEntity gem, @PathVariable Long id) throws GemNotFoundException {
        return gemService.updateGemById(gem, id);
    }

    @DeleteMapping("/{id}")
    public String deleteGem(@PathVariable Long id) throws GemNotFoundException {
        return gemService.deleteGemById(id);
    }

    @DeleteMapping("/")
    public String deleteAllGems(){
        return gemService.deleteAllGems();
    }
}
