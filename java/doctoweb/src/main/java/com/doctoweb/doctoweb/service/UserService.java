package com.doctoweb.doctoweb.service;


import com.doctoweb.doctoweb.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}