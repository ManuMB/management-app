package com.manumb.inventory.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Currency;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

@Entity
@Table(name="PRODUCTS")
public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;

    private String productName;
    private String brandName;
    private int stock;
    private Double price;
    private String curr;
}
