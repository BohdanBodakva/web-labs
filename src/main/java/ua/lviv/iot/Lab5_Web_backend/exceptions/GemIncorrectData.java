package ua.lviv.iot.Lab5_Web_backend.exceptions;

public class GemIncorrectData {
    private String info;

    public GemIncorrectData(String info) {
        this.info = info;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
