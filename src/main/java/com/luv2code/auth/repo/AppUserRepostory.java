package com.luv2code.auth.repo;

import com.luv2code.auth.Entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepostory extends JpaRepository<AppUser,Long> {
    Optional<AppUser>  findByUsername(String username);



}
