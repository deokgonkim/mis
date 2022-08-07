package net.dgkim.mis.service;

import java.util.List;

import net.dgkim.mis.model.Account;

public interface AccountService {
    public List<Account> getAccounts();
    public int saveAccount(Account account);
    public int createAccount(Account account);
    public int deleteAccount(Account account);
}
