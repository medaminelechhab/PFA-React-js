package com.luv2code.auth;

import com.luv2code.auth.Config.RsaKeyConfig;
import com.luv2code.auth.Dao.AccountService;
import com.luv2code.auth.Entity.AppRole;
import com.luv2code.auth.Entity.AppUser;
import com.luv2code.auth.Service.JwtService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.ArrayList;
@EnableConfigurationProperties(RsaKeyConfig.class)
@SpringBootApplication
public class AuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }
}

//    @Bean
//    CommandLineRunner start(JwtService jwtService) {
//        return args -> {
//
//            String token="eyJhbGciOiJSUzI1NiJ9.eyJ0eXBlIjoiVG9rZW4iLCJyb2xlcyI6IlVTRVIiLCJzdWIiOiJ6IiwiaWF0IjoxNzE0ODI0MDI4LCJleHAiOjE3MTQ4MjQwODh9.QT_UKkwCSDQy4IRqL4mkVapxjCPd-irHJkrb2hqYFsX_Z4jw__YLvdNkYe2JPF22yCQMr2ennpPQumatKiJvL-ifq9evD5cR1Ea14vXtk_WvlbGiCPxTtMwdCaO4QIHsqhbiu3yuBvdggsfP-K4LOQa_-7l-IbV44mMQA-Nf0d_-GZiLoP8Nlkw4XSgpZd9qSmYLonWxWpdcHWv58QPuE8fci03ACgvZyzjVJ0tp6xdrR2fk6zY3WvB4iT5eEYsu6ThIgaDwDgZzhyrQ1aSBgtVDba5K4t95KDWSVTJPklDm2q-tFd-zQ5vAoTjbnr1Ugo75Oj8D3M122y5Xiyxh_w";
//
//            System.out.println("Type  "+jwtService.extractClaims(token));
//        };
//    }
//}

//    @Bean
//    CommandLineRunner start(AccountService accountService) {
//        return args -> {
//            // Créez un rôle admin
//            AppRole appRole = new AppRole(1, "ADMIN");
//            AppRole appRole1 = new AppRole(2, "USER");
//            AppRole appRole2 = new AppRole(3, "CUSTOMER_MANAGER");
//            AppRole appRole3 = new AppRole(4, "PRODUCT_MANGER");
//            AppRole appRole4 = new AppRole(5, "BILIS_MANGER");
//            accountService.addNewRole(appRole);
//            accountService.addNewRole(appRole1);
//            accountService.addNewRole(appRole2);
//            accountService.addNewRole(appRole3);
//            accountService.addNewRole(appRole4);
//
//
//            AppUser appUser=new AppUser(1,"user1","1234",new ArrayList<>());
//            AppUser appUser1=new AppUser(2,"user2","1234",new ArrayList<>());
//            AppUser appUser2=new AppUser(3,"user3","1234",new ArrayList<>());
//            AppUser appUser3=new AppUser(4,"user4","1234",new ArrayList<>());
//            AppUser appUser4=new AppUser(5,"user5","1234",new ArrayList<>());
//            AppUser appUser5=new AppUser(6,"user6","1234",new ArrayList<>());
//
//            accountService.addNewUser(appUser);
//            accountService.addNewUser(appUser1);
//            accountService.addNewUser(appUser2);
//            accountService.addNewUser(appUser3);
//            accountService.addNewUser(appUser4);
//            accountService.addNewUser(appUser5);
//
//
//            accountService.addUserToRole("user1","CUSTOMER_MANAGER");
//            accountService.addUserToRole("user1","ADMIN");
//
//            accountService.addUserToRole("user2","USER");
//            accountService.addUserToRole("user2","PRODUCT_MANGER");
//
//            accountService.addUserToRole("user3","CUSTOMER_MANAGER");
//            accountService.addUserToRole("user4","PRODUCT_MANGER");
//            accountService.addUserToRole("user5","BILIS_MANGER");
//            accountService.addUserToRole("user6","USER");
//            accountService.addUserToRole("user3","BILIS_MANGER");
//            accountService.addUserToRole("user4","CUSTOMER_MANAGER");
//            accountService.addUserToRole("user5","ADMIN");
//            accountService.addUserToRole("user6","ADMIN");
//
//
//
//
//
//        };

