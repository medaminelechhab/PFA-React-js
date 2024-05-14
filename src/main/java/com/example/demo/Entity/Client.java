package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
     @Column(name = "firstname")
    private String  firstname ;

    @Column(name = "lastname")

    private String  lastname ;
    @Column(name = "email")

    private String email;

}
