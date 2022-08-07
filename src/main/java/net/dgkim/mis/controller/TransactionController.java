package net.dgkim.mis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.dgkim.mis.model.Transaction;
import net.dgkim.mis.service.TransactionService;
import net.dgkim.mis.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TransactionController {
    
    @RequestMapping(value = "/data/transactions", method = RequestMethod.GET)
    public @ResponseBody Map<String, Object> getTransactions() {
        List<Transaction> transactions = null;
        Map<String, Object> response = null;
        
        transactions = transactionService.getTransactions();
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("transactions", transactions);
        return response;
    }
    
    @RequestMapping(value = "/data/transactions/new/{date}")
    public @ResponseBody Map<String, Object> newTransaction(@PathVariable(value = "date") String date) {
        Map<String, Object> response;
        
        String newTransactionGroupId = transactionService.newTransactionGroupId(date);
        Transaction transaction = null;
        transaction = new Transaction();
        transaction.setTransaction_id(newTransactionGroupId + "-0001");
        transaction.setTransaction_group_id(newTransactionGroupId);
        transactionService.createTransaction(transaction);
        
        transaction.setTransaction_id(newTransactionGroupId + "-0002");
        transaction.setTransaction_group_id(newTransactionGroupId);
        transactionService.createTransaction(transaction);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("transaction_group_id", newTransactionGroupId);
        return response;
    }
    
    @RequestMapping(value = "/data/transactions/{id}", method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> createTransaction(@PathVariable(value = "id") String id, @RequestBody Transaction transaction) {
        Map<String, Object> response = null;
        
        transactionService.createTransaction(transaction);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("transactions", transaction);
        return response;
    }
    
    @RequestMapping(value = "/data/transactions/{id}", method = RequestMethod.PUT)
    public @ResponseBody Map<String, Object> updateTransaction(@PathVariable(value = "id") String id, @RequestBody Transaction transaction) {
        Map<String, Object> response = null;
        
        transactionService.saveTransaction(transaction);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("transactions", transaction);
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
    
    @RequestMapping(value = "/data/transactions/{id}", method = RequestMethod.DELETE)
    public @ResponseBody Map<String, Object> deleteUser(@PathVariable(value = "id") String id, @RequestBody Transaction transaction) {
        Map<String, Object> response = null;
        
        transactionService.deleteTransaction(transaction);
        
        response = new HashMap<String, Object>();
        response.put("success", "true");
        response.put("transactions", transaction);
        return response;
    }
    
    @Autowired
    public void setTransactionService(TransactionService transactionService) {
        this.transactionService = transactionService;
    }
    
    private TransactionService transactionService = null;
}
