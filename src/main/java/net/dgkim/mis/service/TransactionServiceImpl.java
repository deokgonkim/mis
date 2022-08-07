package net.dgkim.mis.service;

import java.util.List;
import java.util.StringTokenizer;

import net.dgkim.mis.model.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TransactionServiceImpl implements TransactionService {
    
    private SqlMapClientTemplate sqlMapClientTemplate = null;

    @Autowired
    public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
        this.sqlMapClientTemplate = sqlMapClientTemplate;
    }

    public List<Transaction> getTransactions() {
        return sqlMapClientTemplate.queryForList("getTransactionList");
    }

    public int saveTransaction(Transaction transaction) {
        return sqlMapClientTemplate.update("saveTransaction", transaction);
    }

    public int createTransaction(Transaction transaction) {
        return sqlMapClientTemplate.update("createTransaction", transaction);
    }

    public int deleteTransaction(Transaction transaction) {
        return sqlMapClientTemplate.update("deleteTransaction", transaction);
    }

    public String newTransactionGroupId(String transactionDate) {
        String newTransactionGroupId = null;
        String lastTransactionId = (String)sqlMapClientTemplate.queryForObject("latestGroupTransaction", (String)transactionDate);
        if (lastTransactionId == null) {
            newTransactionGroupId = String.format("%s-%05d", transactionDate, 1);
        } else {
            StringTokenizer st = new StringTokenizer(lastTransactionId, "-");
            if (st.countTokens() == 1) {
                // 구형 transaction_group_id
                newTransactionGroupId = String.format("%s-%05d", transactionDate, 1);
            } else {
                // 신형 transaction_group_id
                String date = st.nextToken();
                String serial = st.nextToken();
                newTransactionGroupId = String.format("%s-%05d", transactionDate, Integer.valueOf(serial).intValue() + 1);
            }
        }
        return newTransactionGroupId;
    }
}
