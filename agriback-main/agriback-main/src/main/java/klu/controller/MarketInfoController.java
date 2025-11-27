package klu.controller;


import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/market")
@CrossOrigin(origins = "http://localhost:5173")
public class MarketInfoController {

    @GetMapping("/seasonal-prices")
    public List<Map<String, Object>> getSeasonalPrices() {
        List<Map<String, Object>> prices = new ArrayList<>();

        prices.add(Map.of("crop", "Tomato", "season", "Summer", "avgPrice", 35));
        prices.add(Map.of("crop", "Potato", "season", "Winter", "avgPrice", 25));
        prices.add(Map.of("crop", "Onion", "season", "Rainy", "avgPrice", 30));
        prices.add(Map.of("crop", "Cabbage", "season", "Winter", "avgPrice", 20));
        prices.add(Map.of("crop", "Mango", "season", "Summer", "avgPrice", 80));

        return prices;
    }

    @GetMapping("/calendar")
    public List<Map<String, Object>> getHarvestCalendar() {
        List<Map<String, Object>> calendar = new ArrayList<>();

        calendar.add(Map.of("month", "June", "crops", List.of("Corn", "Cucumber")));
        calendar.add(Map.of("month", "July", "crops", List.of("Rice", "Tomato")));
        calendar.add(Map.of("month", "August", "crops", List.of("Brinjal", "Bitter Gourd")));
        calendar.add(Map.of("month", "September", "crops", List.of("Carrot", "Beetroot")));

        return calendar;
    }
}
