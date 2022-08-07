/**
 * View::LeftMenu
 * 왼쪽 네비게이션 메뉴
 */
Ext.define('MIS.view.LeftMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftmenu',
    layout: 'vbox',
    requires: [
        
    ],
    items: [
        {
            id: 'users',
            xtype: 'button',
            text: '사용자',
            width: '100%',
            //menutype: 'url',
            viewName: 'userlist',
            store: 'Users',
            urldata: 'users'
        },{
            id: 'general_ledger',
            xtype: 'button',
            text: '일반원장',
            width: '100%',
            //menutype: 'url',
            viewName: 'transactionlist'
            //urldata: 'general_ledger.html'
        },{
            id: 'account_list',
            xtype: 'button',
            text: '계정목록',
            width: '100%',
            //menutype: 'url',
            viewName: 'accountlist'
            //urldata: 'general_ledger.html'
        },{
            id: 'personalexpensereport',
            xtype: 'button',
            text: '개인경비내역',
            menutype: 'url',
            urldata: '/birt/frameset?__report=personalexpensereport.rptdesign'
        },{
            id: 'testpanel',
            xtype: 'button',
            text: 'test',
            width: '100%',
            viewName: 'testpanel'
        }
    ]
});