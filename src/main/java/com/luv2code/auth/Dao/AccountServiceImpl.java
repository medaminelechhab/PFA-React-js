//package com.luv2code.auth.Dao;
//
//import com.luv2code.auth.Entity.AppRole;
//import com.luv2code.auth.Entity.AppUser;
//import com.luv2code.auth.repo.TokenRepository;
//import com.luv2code.auth.repo.AppUserRepostory;
//import jakarta.transaction.Transactional;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//@Service
//@Transactional
//public class AccountServiceImpl implements AccountService {
//    private AppUserRepostory appUserRepostory;
//    private TokenRepository appRoleRepostory;
//
//
//    public AccountServiceImpl(AppUserRepostory appUserRepostory, TokenRepository appRoleRepostory) {
//        this.appUserRepostory = appUserRepostory;
//        this.appRoleRepostory = appRoleRepostory;
//    }
//
//    @Override
//    public AppUser addNewUser(AppUser appUser) { ;
//        return appUserRepostory.save(appUser);
//    }
//
//    @Override
//    public AppRole addNewRole(AppRole appRole) {
//        return appRoleRepostory.save(appRole);
//    }
//
//    @Override
//    public void addUserToRole(String username, String roleName) {
//        AppUser appUser=appUserRepostory.findByUsername(username);
//        AppRole appRole=appRoleRepostory.findByRoleName(roleName);
//        appUser.getAppRoles().add(appRole);
//    }
//
//    @Override
//    public AppUser loadUserByUsername(String username) {
//        return appUserRepostory.findByUsername(username);
//    }
//
//
//    @Override
//    public List<AppUser> listUsers() {
//        return appUserRepostory.findAll();
//    }
//}
