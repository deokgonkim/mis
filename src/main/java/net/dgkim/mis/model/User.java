package net.dgkim.mis.model;

import java.io.Serializable;

public class User implements Serializable {
    
    /**
     * 
     */
    private static final long serialVersionUID = 447489526659169405L;
    private String id = null;
    private String member_id = null;
    private String emp_no = null;
    private String member_name = null;
    private String member_ou = null;
    
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getMember_id() {
        return member_id;
    }
    
    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }
    
    public String getEmp_no() {
        return emp_no;
    }
    
    public void setEmp_no(String emp_no) {
        this.emp_no = emp_no;
    }
    
    public String getMember_name() {
        return member_name;
    }
    
    public void setMember_name(String member_name) {
        this.member_name = member_name;
    }
    
    public String getMember_ou() {
        return member_ou;
    }
    
    public void setMember_ou(String member_ou) {
        this.member_ou = member_ou;
    }
    
    @Override
    public String toString() {
        return String.format("User { id: %s, member_id: %s, member_name: %s, member_ou: %s}", id, member_id, member_name, member_ou);
    }
}
