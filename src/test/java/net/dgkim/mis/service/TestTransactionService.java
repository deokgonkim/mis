package net.dgkim.mis.service;

import static org.junit.Assert.*;
import net.dgkim.mis.model.Transaction;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:app-config.xml", "classpath:db-config.xml" })
public class TestTransactionService {

    @Test
    public void test() {
        String newTransactionId = null;
        Transaction transaction = null;
        
        transaction = new Transaction();
        transaction.setTransaction_id("29990131-00000-0001");
        
        // newTransactionId = service.newTransactionGroupId(transaction.getTransaction_group_id());
        //assertNull(lastTransactionId);
        // assertEquals("29990131-00001-0001", newTransactionId);
    }
    
    @Test
    public void test2() {
        String newTransactionId = null;
        Transaction transaction = null;
        
        transaction = new Transaction();
        transaction.setTransaction_id("20130205-00000-00001");
        
        System.err.println("testing : " + (String)transaction.getTransaction_id().substring(0, 8));
        
        // newTransactionId = service.newTransactionGroupId(transaction.getTransaction_group_id());
        // assertEquals("20130205-00001-0001", newTransactionId);
    }

    @Autowired
    public void setService(TransactionService service) {
        this.service = service;
    }
    
    private TransactionService service = null;
}
