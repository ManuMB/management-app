package com.manumb.inventory.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.Currency;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDTO {

    private String productName;
    private String brandName;
    private int stock;
    private Double price;
    private String curr;
}
