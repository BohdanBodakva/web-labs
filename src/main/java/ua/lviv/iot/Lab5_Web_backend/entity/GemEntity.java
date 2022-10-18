package ua.lviv.iot.Lab5_Web_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


@Entity
@Table(name = "gem_entity")
public class GemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String uniqueName;
    private String imageUrl;

    @Override
    public String toString() {
        return "GemEntity{" +
                "id=" + id +
                ", uniqueName='" + uniqueName + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", sort=" + sort +
                ", weight=" + weight +
                ", price=" + price +
                ", hardness=" + hardness +
                ", purity=" + purity +
                '}';
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public GemEntity(String uniqueName) {
        this.uniqueName = uniqueName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Enumerated(EnumType.STRING)
    private SortOfPreciousGemEntity sort;

    public SortOfPreciousGemEntity getSort() {
        return sort;
    }

    public void setSort(SortOfPreciousGemEntity sort) {
        this.sort = sort;
    }


    public String getUniqueName() {
        return uniqueName;
    }


    public void setUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
    }

    private double weight;
    private double price;
    private double hardness;
    private double purity;
    public double getPurity() {
        return purity;
    }

    public void setPurity(double purity) {
        this.purity = purity;
    }

    public GemEntity() {
    }

    public double getHardness() {
        return hardness;
    }

    public void setHardness(double hardness) {
        this.hardness = hardness;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
