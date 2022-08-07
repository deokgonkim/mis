package net.dgkim.mis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.dgkim.mis.model.Account;
import net.dgkim.mis.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AccountController {
    
    @RequestMapping(value = "/data/accounts", method = RequestMethod.GET)
    public @ResponseBody Map<String, Object> getAccounts() {
        List<Account> accounts = null;
        Map<String, Object> response = null;
        
        accounts = accountService.getAccounts();
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("accounts", accounts);
        return response;
    }
    
    @RequestMapping(value = "/data/accounts/{id}", method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> createAccount(@PathVariable(value = "id") String id, @RequestBody Account account) {
        Map<String, Object> response = null;
        
        accountService.createAccount(account);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("accounts", account);
        return response;
    }
    
    @RequestMapping(value = "/data/accounts/{id}", method = RequestMethod.PUT)
    public @ResponseBody Map<String, Object> updateAccount(@PathVariable(value = "id") String id, @RequestBody Account account) {
        Map<String, Object> response = null;
        
        accountService.saveAccount(account);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("accounts", account);
        return response;
    }
    
    @RequestMapping(value = "/data/accounts/{id}", method = RequestMethod.DELETE)
    public @ResponseBody Map<String, Object> deleteUser(@PathVariable(value = "id") String id, @RequestBody Account account) {
        Map<String, Object> response = null;
        
        accountService.deleteAccount(account);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("accounts", account);
        return response;
    }
    
    @Autowired
    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }
    
    private AccountService accountService = null;
}
