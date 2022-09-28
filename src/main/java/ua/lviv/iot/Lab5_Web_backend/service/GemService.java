package ua.lviv.iot.Lab5_Web_backend.service;

import org.springframework.stereotype.Service;
import ua.lviv.iot.Lab5_Web_backend.entity.GemEntity;
import ua.lviv.iot.Lab5_Web_backend.entity.SortOfPreciousGemEntity;
import ua.lviv.iot.Lab5_Web_backend.exceptions.GemAlreadyExistsException;
import ua.lviv.iot.Lab5_Web_backend.exceptions.GemNotFoundException;
import ua.lviv.iot.Lab5_Web_backend.exceptions.SortNotFoundException;
import ua.lviv.iot.Lab5_Web_backend.repository.GemRepo;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
public class GemService {

    private GemRepo gemRepo;

    public GemService(GemRepo gemRepo){
        this.gemRepo = gemRepo;
    }

    public String addGem(GemEntity gem) throws GemAlreadyExistsException, SortNotFoundException {
        if(gemRepo.findByUniqueName(gem.getUniqueName()) != null){
            throw new GemAlreadyExistsException("Gem with such name already exists!");
        }
        for (SortOfPreciousGemEntity sort : SortOfPreciousGemEntity.values()){
            if(sort.equals(gem.getSort())){
                gemRepo.save(gem);
                return "Gem was saved";
            }
        }
        throw new SortNotFoundException("There is no such sort of precious gem!");
    }

    public GemEntity getGemById(Long id) throws GemNotFoundException {
        Optional<GemEntity> opt = gemRepo.findById(id);
        if(opt.isEmpty()){
            throw new GemNotFoundException("There is no gem with id=" + id);
        }
        GemEntity gem = gemRepo.findById(id).get();
        return gem;
    }

    public Map<Long, GemEntity> getAllGems(){
        List<GemEntity> gemList = (List<GemEntity>) gemRepo.findAll();
        Map<Long, GemEntity> gemMap = new HashMap<>();
        for(GemEntity gem : gemList){
            gemMap.put(gem.getId(), gem);
        }
        return gemMap;
    }

    public String updateGemById(GemEntity gem, Long id) throws GemNotFoundException {

        Optional<GemEntity> opt = gemRepo.findById(id);
        if(opt.isEmpty()){
            throw new GemNotFoundException("There is no gem with such id!");
        }

        GemEntity updatedGem = gemRepo.findById(id).get();
        updatedGem.setId(id);
        updatedGem.setUniqueName(gem.getUniqueName());
        updatedGem.setWeight(gem.getWeight());
        updatedGem.setPrice(gem.getPrice());
        updatedGem.setHardness(gem.getHardness());
        updatedGem.setPurity(gem.getPurity());
        updatedGem.setSort(gem.getSort());
        gemRepo.save(updatedGem);

        return "Gem with id=" + id + " was updated successfully";
    }

    public String deleteGemById(Long id) throws GemNotFoundException {
        Optional<GemEntity> opt = gemRepo.findById(id);

        if(opt.isEmpty()){
            throw new GemNotFoundException("There is no gem with such id!");
        }

        gemRepo.deleteById(id);
        return "Gem with id=" + id + " was successfully deleted";
    }

    public String deleteAllGems(){
        gemRepo.deleteAll();
        return "All gems were successfully deleted";
    }



}
