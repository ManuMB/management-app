package com.manumb.inventory.controller;

import com.manumb.inventory.exception.ProductNotFoundException;
import com.manumb.inventory.model.Product;
import com.manumb.inventory.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private IProductRepository iProductRepository;

    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct){
        return iProductRepository.save(newProduct);
    }

    @GetMapping("/products")
    List<Product> getAllProducts(){
        return iProductRepository.findAll();
    }

    @GetMapping("/product/{id}")
    Product getProductById(@PathVariable Long id){
        return iProductRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product paramProduct, @PathVariable Long id){
        return iProductRepository.findById(id)
                .map(product -> {
                    product.setProductName(paramProduct.getProductName());
                    product.setBrandName(paramProduct.getBrandName());
                    product.setStock(paramProduct.getStock());
                    product.setPrice(paramProduct.getPrice());
                    product.setCurr(paramProduct.getCurr());
                    return iProductRepository.save(product);
                }).orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id){
        if(!iProductRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        iProductRepository.deleteById(id);
        return "Product with id: " + id + "was deleted.";
    }
}
