package com.luv2code.auth.Dao;

import com.luv2code.auth.Entity.AppRole;
import com.luv2code.auth.Entity.AppUser;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AccountService {
    AppUser addNewUser(AppUser appUser);
    AppRole addNewRole(AppRole appRole);
    void addUserToRole(String username, String roleName); // Correction du paramètre usernmae en username
    AppUser loadUserByUsername(String username); // Correction du nom de la méthode
    List<AppUser> listUsers();
}
