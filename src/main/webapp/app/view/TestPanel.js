Ext.define('MIS.view.TestPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.testpanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: '100%',
    requires: [
        
    ],
    items: [
        {
            title: 'panel1',
            flex: 1
        },{
            title: 'panel2',
            flex: 1
        }
    ]
});