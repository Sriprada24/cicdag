package klu.controller;


import klu.model.Order;
import klu.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderRepository orderRepo;

   
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        System.out.println("🚀 Incoming order: " + order); // this prints object hash
        System.out.println("Product: " + order.getProductName());
        System.out.println("Buyer: " + order.getBuyerEmail());
        System.out.println("Qty: " + order.getQuantity());

        order.setOrderDate(LocalDateTime.now());
        order.setStatus("Pending");
        order.setTotalPrice(order.getPricePerUnit() * order.getQuantity());
        return orderRepo.save(order);
    }

  
    @GetMapping("/buyer/{email}")
    public List<Order> getOrdersForBuyer(@PathVariable String email) {
        return orderRepo.findByBuyerEmail(email);
    }

    @GetMapping("/farmer/{email}")
    public List<Order> getOrdersForFarmer(@PathVariable String email) {
        return orderRepo.findByFarmerEmail(email);
    }
    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }



    @PutMapping("/{id}/status")
    public String updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        Order order = orderRepo.findById(id).orElseThrow();
        order.setStatus(status);
        orderRepo.save(order);
        return "Order status updated to " + status;
    }
}
