package com.example.demo.Service;

import com.example.demo.Entity.Client;
import com.example.demo.Repo.JpaClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ClientService {
    private JpaClient jpaClient;

    public ClientService(JpaClient jpaClient) {
        this.jpaClient = jpaClient;
    }
    public List<Client> getClient ( )
    {
        return  jpaClient.findAll();
    }

}
