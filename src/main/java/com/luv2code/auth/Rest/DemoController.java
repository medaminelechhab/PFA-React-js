package com.luv2code.auth.Rest;

import com.luv2code.auth.Dao.AccountService;
import com.luv2code.auth.Entity.AppRole;
import com.luv2code.auth.Entity.AppUser;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Enumeration;
import java.util.List;

@RestController
public class DemoController {
 //@PreAuthorize("hasAuthority('USER')")
    @GetMapping("/demo")
    public String demo() {
        return "Hello from secured url";
    }

    @GetMapping("/admin_only")
    public ResponseEntity<String> adminOnly() {
        return ResponseEntity.ok("Hello from admin only url");
    }

}