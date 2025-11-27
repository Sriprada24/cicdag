package klu.controller;

import klu.model.JwtUtil;
import klu.model.User;
import klu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private JwtUtil jwtUtil;


    // ✅ Register
    @PostMapping("/users/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        Optional<User> existing = userRepository.findByEmail(user.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.status(409).body("Email already registered.");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully.");
    }
    

    // ✅ Login
    @PostMapping("/users/login")
    public Object login(@RequestBody User loginUser) {
        Optional<User> userOpt = userRepository.findByEmail(loginUser.getEmail());
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(loginUser.getPassword())) {
                return user;
            } else {
                return "Invalid password";
            }
        } else {
            return "User not found";
        }
    }

    // ✅ Forgot Password
    @PostMapping("/users/forgot-password")
    public String forgotPassword(@RequestParam String email) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("Your Password - AgriConnect");
            message.setText("Hello " + user.getName() + ",\n\nYour password is: " + user.getPassword());
            mailSender.send(message);
            return "Password sent to your email.";
        } else {
            return "No user found with that email.";
        }
    }

    // ✅ Get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ Delete user by email
    @DeleteMapping("/users/{email}")
    public ResponseEntity<String> deleteUserByEmail(@PathVariable String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            userRepository.delete(user.get());
            return ResponseEntity.ok("Deleted user: " + email);
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

   
    @PutMapping("/users/{email}")
    public ResponseEntity<String> updateUser(@PathVariable String email, @RequestBody User updatedUser) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setName(updatedUser.getName());
            user.setPhone(updatedUser.getPhone());
            user.setPassword(updatedUser.getPassword());
            user.setRole(updatedUser.getRole().toLowerCase());
            userRepository.save(user);
            return ResponseEntity.ok("User updated successfully.");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
}
