package klu.controller;


import klu.model.Product;
import klu.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // Adjust for your frontend
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    // 1. Add crop (Farmer)
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepo.save(product);
    }

    // 2. Get all products (Buyer)
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    // 3. Get crops by farmer email (Farmer dashboard)
    @GetMapping("/farmer/{email}")
    public List<Product> getProductsByFarmer(@PathVariable String email) {
        return productRepo.findByFarmerEmail(email);
    }

    // 4. Delete a product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
    }

    // 5. Update a product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updated) {
        Product product = productRepo.findById(id).orElseThrow();
        product.setName(updated.getName());
        product.setPrice(updated.getPrice());
        product.setQuantity(updated.getQuantity());
        product.setDescription(updated.getDescription());
        product.setCategory(updated.getCategory());
        product.setUnit(updated.getUnit());
        product.setImageUrl(updated.getImageUrl());
        return productRepo.save(product);
    }
}
