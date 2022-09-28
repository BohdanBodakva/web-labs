package ua.lviv.iot.Lab5_Web_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.Lab5_Web_backend.entity.GemEntity;

@Repository
public interface GemRepo extends JpaRepository<GemEntity, Long> {
    GemEntity findByUniqueName(String uniqueName);
}
