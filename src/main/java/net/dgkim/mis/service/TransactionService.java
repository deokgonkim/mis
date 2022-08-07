package net.dgkim.mis.service;

import java.util.List;

import net.dgkim.mis.model.Transaction;

public interface TransactionService {
    public List<Transaction> getTransactions();
    public int saveTransaction(Transaction transaction);
    public int createTransaction(Transaction transaction);
    public int deleteTransaction(Transaction transaction);
    
    public String newTransactionGroupId(String transactionDate);
}
