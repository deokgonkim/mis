package net.dgkim.mis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import net.dgkim.mis.model.User;
import net.dgkim.mis.service.UserService;

@Controller
public class UserController {
    
    @RequestMapping(value = "/data/users", method = RequestMethod.GET)
    public @ResponseBody Map<String, Object> getUsers() {
        List<User> users = null;
        Map<String, Object> response = null;
        
        users = userService.getUsers();
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("users", users);
        return response;
    }
    
    @RequestMapping(value = "/data/users/{id}", method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> createUser(@PathVariable(value = "id") String id, @RequestBody User user) {
        Map<String, Object> response = null;
        
        userService.createUser(user);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("users", user);
        return response;
    }
    
    @RequestMapping(value = "/data/users/{id}", method = RequestMethod.PUT)
    public @ResponseBody Map<String, Object> updateUser(@PathVariable(value = "id") String id, @RequestBody User user) {
        Map<String, Object> response = null;
        
        userService.saveUser(user);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("users", user);
        return response;
    }
    
//    @RequestMapping(value = "/data/users/{id}", method = RequestMethod.POST)
//    public @ResponseBody Map<String, Object> updateUser2(@PathVariable(value = "id") String id, @RequestBody User user) {
//        Map<String, Object> response = null;
//        
//        userService.saveUser(user);
//        
//        response = new HashMap<String, Object>();
//        response.put("success", "true");
//        response.put("users", user);
//        return response;
//    }
    
    @RequestMapping(value = "/data/users/{id}", method = RequestMethod.DELETE)
    public @ResponseBody Map<String, Object> deleteUser(@PathVariable(value = "id") String id, @RequestBody User user) {
        Map<String, Object> response = null;
        
        userService.deleteUser(user);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("users", user);
        return response;
    }
    
    @RequestMapping("/data/test.json")
    public @ResponseBody Model test(Model model) {
        return model;
    }
    
    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
    
    private UserService userService = null;
}
