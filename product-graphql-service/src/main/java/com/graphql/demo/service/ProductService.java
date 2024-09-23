package com.graphql.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.graphql.demo.model.Product;
import com.graphql.demo.model.ProductDTO;
import com.graphql.demo.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	public Product getProductById(int id) {
		return productRepository.findById(id).get();
	}
	
	public Product addProduct(ProductDTO product) {
		Product anotherProduct = new Product();
		anotherProduct.setCategory(product.getCategory());
		anotherProduct.setId(product.getId());
		anotherProduct.setName(product.getName());
		anotherProduct.setPrice(product.getPrice());
		anotherProduct.setStock(product.getStock());		
		return productRepository.save(anotherProduct);
	}
	
	public Product updateProduct(ProductDTO product) {
		Product existingProduct = productRepository.findById(product.getId())
				.orElseThrow(()-> new RuntimeException("Product not found with id " + product.getId()));
		existingProduct.setStock(product.getStock());
		existingProduct.setPrice(product.getPrice());
		return productRepository.save(existingProduct);
	}
	
	
}
