package net.dgkim.mis.service;

import java.util.List;

import net.dgkim.mis.model.User;

public interface UserService {
    public List<User> getUsers();
    public int saveUser(User user);
    public int createUser(User user);
    public int deleteUser(User user);
}
