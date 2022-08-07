/**
 * View::UserList
 * 사용자 목록
 */
Ext.define('MIS.view.UserList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlist',
    layout: 'fit',
    requires: [
        
    ],
    items: [
        {
            title: '사용자',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    id: 'userlist_grid',
                    xtype: 'grid',
                    store: 'Users',
                    selType: 'rowmodel',
                    flex: 1,
                    dockedItems: [{
                        xtype: 'toolbar',
                        items: [{
                            iconCls: 'icon-add',
                            text: '추가'
                        },{
                            iconCls: 'icon-delete',
                            text: '삭제'
                        },{
                            text: '조회'
                        },{
                            text: '저장'
                        }]
                    }],
                    columns: [{
                        header: '아이디',
                        dataIndex: 'member_id',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '인사번호',
                        dataIndex: 'emp_no',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '이름',
                        dataIndex: 'member_name',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '소속',
                        dataIndex: 'member_ou',
                        flex: 1,
                        editor: 'textfield'
                    }],
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {
                            autoCancel: true,
                            clicksToEdit: 1
                        })
                    ]
                }
            ]
        }
    ]
});