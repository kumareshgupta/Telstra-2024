package com.graphql.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.graphql.demo.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

}
