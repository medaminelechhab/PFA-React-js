package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo2Application {

    public static void main(String[] args) {
        SpringApplication.run(Demo2Application.class, args);
    }
//    @Bean
//    public CommandLineRunner demo(ClientService clientService) {
//        return (args) -> {
//            Client client = new Client(0,"mohamed amine ","lechhab","aminelechhab@gmail@com");
//            Client client1 = new Client(0,"ayoub ","lechhab","ayoubb@gmail@com");
//            Client client2 = new Client(0,"mohamed ","lechhab","mohamed@gmail@com");
//            Client client3 = new Client(0," mouaad ","lechhab","mouaad@gmail@com");
//            Client client4 = new Client(0," aboudi ","lechhab","aboudi@gmail@com");
//            clientService.addclient(client);
//            clientService.addclient(client1);
//            clientService.addclient(client2);
//            clientService.addclient(client3);
//            clientService.addclient(client4);
//
//        };
//    }

}
