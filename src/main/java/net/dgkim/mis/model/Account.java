package net.dgkim.mis.model;

import java.io.Serializable;

public class Account implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 2074154785587466831L;
    private String id = null;
    private String account_id = null;
    private String account_name = null;
    private String account_type = null;
    private String account_description = null;
    private String parent_account_id = null;
    
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getAccount_id() {
        return account_id;
    }
    
    public void setAccount_id(String account_id) {
        this.account_id = account_id;
    }
    
    public String getAccount_name() {
        return account_name;
    }
    
    public void setAccount_name(String account_name) {
        this.account_name = account_name;
    }
    
    public String getAccount_type() {
        return account_type;
    }
    
    public void setAccount_type(String account_type) {
        this.account_type = account_type;
    }
    
    public String getAccount_description() {
        return account_description;
    }
    
    public void setAccount_description(String account_description) {
        this.account_description = account_description;
    }
    
    public String getParent_account_id() {
        return parent_account_id;
    }
    
    public void setParent_account_id(String parent_account_id) {
        this.parent_account_id = parent_account_id;
    }
}
