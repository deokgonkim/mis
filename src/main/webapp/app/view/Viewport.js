/**
 * View::Viewport
 * 전체 형태를 잡는다.
 */
Ext.define('MIS.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'Ext.Panel'
    ],
    items: [
        {
            region: 'north',
            contentEl: 'topPanelHtml',
            title: 'MIS',
            height: 60,
            border: false
        },{
            region: 'west',
            collapsible: true,
            title: '네비게이션',
            width: 150,
            autoHeight: true,
            xtype: 'leftmenu'
        },{
            region: 'south',
            title: '변경 기록',
            collapsible: true,
            html: '변경 기록',
            split: true,
            height: 100,
            minHeight: 20
        },{
            id: 'tabPanel1',
            region: 'center',
            xtype: 'tabpanel',
            activeTab: 0,
            enableTabScroll:true,
            items: [
                {
                    title: 'Default tab',
                    autoScroll: true,
                    contentEl: 'defaultTabContent'
                }
            ]
        }
    ]
});