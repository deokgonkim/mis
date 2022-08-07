package net.dgkim.mis.model;

import java.io.Serializable;
import java.util.Date;

public class Transaction implements Serializable {
    
    /**
     * 
     */
    private static final long serialVersionUID = -4599139084144274967L;
    private String id = null;
    private String transaction_id = null;
    private String transaction_group_id = null;
    private String owner = null;
    private Date transaction_datetime = null;
    private String transaction_daily_no = null;
    private String transaction_reference_no = null;
    private String affecting_account_id = null;
    private int amount = 0;
    private String related_business_id = null;
    private String comment = null;
    
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getTransaction_id() {
        return transaction_id;
    }
    
    public void setTransaction_id(String transaction_id) {
        this.transaction_id = transaction_id;
    }
    
    public String getTransaction_group_id() {
        return transaction_group_id;
    }
    
    public void setTransaction_group_id(String transaction_group_id) {
        this.transaction_group_id = transaction_group_id;
    }
    
    public String getOwner() {
        return owner;
    }
    
    public void setOwner(String owner) {
        this.owner = owner;
    }
    
    public Date getTransaction_datetime() {
        return transaction_datetime;
    }
    
    public void setTransaction_datetime(Date transaction_datetime) {
        this.transaction_datetime = transaction_datetime;
    }
    
    public String getTransaction_daily_no() {
        return transaction_daily_no;
    }
    
    public void setTransaction_daily_no(String transaction_daily_no) {
        this.transaction_daily_no = transaction_daily_no;
    }
    
    public String getTransaction_reference_no() {
        return transaction_reference_no;
    }
    
    public void setTransaction_reference_no(String transaction_reference_no) {
        this.transaction_reference_no = transaction_reference_no;
    }
    
    public String getAffecting_account_id() {
        return affecting_account_id;
    }
    
    public void setAffecting_account_id(String affecting_account_id) {
        this.affecting_account_id = affecting_account_id;
    }
    
    public int getAmount() {
        return amount;
    }
    
    public void setAmount(int amount) {
        this.amount = amount;
    }
    
    public String getRelated_business_id() {
        return related_business_id;
    }
    
    public void setRelated_business_id(String related_business_id) {
        this.related_business_id = related_business_id;
    }
    
    public String getComment() {
        return comment;
    }
    
    public void setComment(String comment) {
        this.comment = comment;
    }
}
