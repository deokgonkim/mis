package net.dgkim.mis.service;

import java.util.List;

import net.dgkim.mis.model.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {
    private SqlMapClientTemplate sqlMapClientTemplate = null;

    @Autowired
    public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
        this.sqlMapClientTemplate = sqlMapClientTemplate;
    }

    public List<Account> getAccounts() {
        return sqlMapClientTemplate.queryForList("getAccountList");
    }

    public int saveAccount(Account account) {
        return sqlMapClientTemplate.update("saveAccount", account);
    }

    public int createAccount(Account account) {
        return sqlMapClientTemplate.update("createAccount", account);
    }

    public int deleteAccount(Account account) {
        return sqlMapClientTemplate.update("deleteAccount", account);
    }
}
