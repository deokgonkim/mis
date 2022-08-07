Ext.define('MIS.controller.UserController', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'userlist grid' : {
                edit: this.gridEdit
            },
            'userlist button' : {
                click: this.buttonClick
            }
        });
        this.application.on({
            loadUsers: this.loadUsers,
            saveUsers: this.saveUsers,
            addUser: this.addUser,
            deleteUsers: this.deleteUsers,
            reload: this.reloadData,
            scope: this
        });
        
//        this.getUserlist().on({
//            edit: this.onEdit,
//            scope: this
//        });
        if ( console != undefined ) console.log('Initialized UserController!');
    },
    loadUsers: function(obj) {
        //console.log(this.getTabPanel1().down('#userlistpanel'));
        console.log(this.getUsersStore().load());
        console.log('getUserList');
    },
    saveUsers: function() {
        this.getStore('Users').sync();
    },
    addUser: function() {
        this.getStore('Users').add({});
    },
    deleteUsers: function(selection) {
        console.log("deleteUsers");
        if (selection) {
            this.getUsersStore().remove(selection);
        }
    },
    buttonClick: function(btn, e, eOpts) {
        console.log('UserController.buttonClicked');
        if (btn.text == '조회') {
            this.application.fireEvent('loadUsers');
        } else if ( btn.text == '저장' ) {
            this.application.fireEvent('saveUsers');
        } else if ( btn.text == '추가' ) {
            this.application.fireEvent('addUser');
        } else if ( btn.text == '삭제' ) {
            var selection = btn.up('grid').getView().getSelectionModel().getSelection()[0];
            this.application.fireEvent("deleteUsers", selection);
        } else {
            Ext.MessageBox.alert('구현되지 않음.', '기능이 구현되지 않았습니다.');
        }
    },
    gridEdit: function(obj, e, eOpts) {
        console.log('UserController.gridEdit');
        e.record.data.id = e.record.data.member_id;
//        if (obj.text == '조회') {
//            this.application.fireEvent('loadUsers');
//        } else if ( obj.text == '' ) {
//            
//        } else {
//            Ext.MessageBox.alert('구현되지 않음.', '기능이 구현되지 않았습니다.');
//        }
    },
    openUserList: function(obj, event, eOpts) {
        this.application.fireEvent('userList', obj);
    },
    reloadData: function(store) {
        console.log(store);
        if (store !== undefined) {
            console.log(eval('this.get' + store + 'Store().load()'));
        } else {
            console.log('obj.store is undefined');
        }
    },
    refs: [{
        selector: 'viewport > #tabPanel1 > userlist > grid',
        ref: 'userlist'
    }],
    stores: [
        'Users'
    ],
    models: [
        'User'
    ],
    views: [
        'UserList'
    ]
});