package klu.repository;

import klu.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByBuyerEmail(String buyerEmail);
    List<Order> findByFarmerEmail(String farmerEmail);
}
