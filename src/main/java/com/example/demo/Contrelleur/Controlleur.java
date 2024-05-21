package com.example.demo.Contrelleur;

import com.example.demo.Entity.Client;
import com.example.demo.Repo.JpaClient;
import com.example.demo.Service.ClientService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class Controlleur{
    private  final JpaClient jpaClient;
private final ClientService clientService;
    public Controlleur(JpaClient jpaClient, ClientService clientService) {
        this.jpaClient = jpaClient;
        this.clientService = clientService;
    }


    @GetMapping("/")
    public String hello ()
        {

            return "hello world";
        }
    @GetMapping("/Getall")
    public List<Client> getall()
        {
            return  jpaClient.findAll();
        }
    @GetMapping("/Getall1")
    public List<Client> getall1()
    {
        return  clientService.getClient();
    }

}
