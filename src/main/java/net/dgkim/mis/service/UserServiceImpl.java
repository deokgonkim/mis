package net.dgkim.mis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.dgkim.mis.model.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    
    private SqlMapClientTemplate sqlMapClientTemplate = null;
    
    @Autowired
    public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
        this.sqlMapClientTemplate = sqlMapClientTemplate;
    }
    
    public List<User> getUsers() {
        return sqlMapClientTemplate.queryForList("getUserList");
    }
    
    public int saveUser(User user) {
        return sqlMapClientTemplate.update("saveUser", user);
    }

    public int createUser(User user) {
        return sqlMapClientTemplate.update("createUser", user);
    }

    public int deleteUser(User user) {
        return sqlMapClientTemplate.update("deleteUser", user);
    }
}
