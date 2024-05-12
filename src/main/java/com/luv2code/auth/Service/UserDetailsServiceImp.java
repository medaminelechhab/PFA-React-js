package com.luv2code.auth.Service;

import com.luv2code.auth.Entity.AppUser;
import com.luv2code.auth.repo.AppUserRepostory;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service

public class UserDetailsServiceImp  implements UserDetailsService {

    private final AppUserRepostory appUserRepostory;

    public UserDetailsServiceImp(AppUserRepostory appUserRepostory) {
        this.appUserRepostory = appUserRepostory;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepostory.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

                    return new User(appUser.getUsername(), appUser.getPassword(), appUser.getAuthorities());

    }
}
