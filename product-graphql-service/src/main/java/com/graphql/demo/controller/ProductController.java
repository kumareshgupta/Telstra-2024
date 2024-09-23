package com.graphql.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.graphql.demo.model.Product;
import com.graphql.demo.model.ProductDTO;
import com.graphql.demo.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@QueryMapping
	public List<Product> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@QueryMapping
	public Product getProductById(@Argument int id) {
		return productService.getProductById(id);
	}
	
	@MutationMapping
	public Product addProduct(@Argument ProductDTO product) {
		return productService.addProduct(product);
	}
	@MutationMapping
	public Product updateProduct(@Argument ProductDTO product) {
		return productService.updateProduct(product);
	}
	
	
}
