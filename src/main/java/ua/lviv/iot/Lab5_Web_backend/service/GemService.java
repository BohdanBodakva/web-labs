package ua.lviv.iot.Lab5_Web_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.lviv.iot.Lab5_Web_backend.entity.GemEntity;
import ua.lviv.iot.Lab5_Web_backend.entity.SortOfPreciousGemEntity;
import ua.lviv.iot.Lab5_Web_backend.exceptions.GemAlreadyExistsException;
import ua.lviv.iot.Lab5_Web_backend.exceptions.GemNotFoundException;
import ua.lviv.iot.Lab5_Web_backend.exceptions.SortNotFoundException;
import ua.lviv.iot.Lab5_Web_backend.repository.GemRepo;


import javax.swing.text.html.parser.Entity;
import java.util.*;
import java.util.stream.Collectors;


@Service
public class GemService {

    private GemRepo gemRepo;

    @Autowired
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
        return gemRepo.findById(id).get();
    }

    public Map<Long, GemEntity> getAllGems(){
        List<GemEntity> gemList = gemRepo.findAll();
        Map<Long, GemEntity> gemMap = new HashMap<>();
        for(GemEntity gem : gemList){
            gemMap.put(gem.getId(), gem);
        }
        return gemMap;
    }

    public Map<Long, GemEntity> getAllGemsBySort(String sort){
        List<GemEntity> gemList = gemRepo.findAll()
                .stream()
                .filter((gem) -> gem.getSort().toString().equals(sort))
                .toList();
        Map<Long, GemEntity> gemMap = new HashMap<>();
        for(GemEntity gem : gemList){
            gemMap.put(gem.getId(), gem);
        }
        return gemMap;
    }

//    public Map<Long, GemEntity> getAllGemsSorted(List<GemEntity> gems, String sorted){
//        List<GemEntity> gemList = null;
//        if(Objects.equals(sorted, "Descending")){
//            gemList = gems.stream()
//                    .sorted((g1, g2) -> (int) (g1.getPrice() - g2.getPrice())).toList();
//        }else if(Objects.equals(sorted, "Ascending")){
//            gemList = gems.stream()
//                    .sorted((g1, g2) -> (int) (g2.getPrice() - g1.getPrice())).toList();
//        }
//        if(gemList == null){
//            gemList = gems;
//        }
//        Map<Long, GemEntity> gemMap = new HashMap<>();
//        for(GemEntity gem : gemList){
//            gemMap.put(gem.getId(), gem);
//        }
//        return gemMap;
//    }

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
