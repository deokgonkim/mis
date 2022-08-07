Ext.define('MIS.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'leftmenu button' : {
                click: this.openPanel
            }
        });
        this.application.on({
            tabopen: this.onTabOpen,
            scope: this
        });
        if ( console != undefined ) console.log('Initialized Main!');
    },
    onTabOpen: function(menuObj) {
        var openedTab = this.getTabPanel1().down('#' + menuObj.id + 'panel');
        if ( openedTab == null ) {
            var newTab = null;
            if ( menuObj.menutype == 'url') {
//                newTab = this.getTabPanel1().add({
//                    title: menuObj.text,
//                    layout: 'fit',
//                    loader: {
//                        url: menuObj.urldata,
//                        contentType: 'html',
//                        autoLoad: true,
//                        params: 'foo=123&bar=abc'
//                    }
//                });
                newTab = this.getTabPanel1().add({
                    id: menuObj.id + 'panel',
                    title: menuObj.text,
                    xtype: 'panel',
                    closable: true,
                    html: '<iframe width="100%" height="100%" src="' + menuObj.urldata + '"></iframe>'
                });
            } else {
                //var view = Ext.createWidget(menuObj.viewName);
                //newTab = this.getTabPanel1().add(view);
                //this.getTabPanel1().doLayout();
                newTab = this.getTabPanel1().add({
                    id: menuObj.id + 'panel',
                    title: menuObj.text,
                    xtype: menuObj.viewName,
                    autoScroll:true,
                    closable: true
                });
            }
            this.getTabPanel1().setActiveTab(newTab);
            if (menuObj.store !== undefined) {
                this.application.fireEvent('reload', menuObj.store);
            }
        } else {
            this.getTabPanel1().setActiveTab(openedTab);
            if (menuObj.store !== undefined) {
                this.application.fireEvent('reload', menuObj.store);
            }
        }
    },
    openPanel: function(obj, e, eOpts) {
        this.application.fireEvent('tabopen', obj);
    },
    refs: [{
        selector: 'viewport > #tabPanel1',
        ref: 'tabPanel1'
    }],
    stores: [
        
    ],
    models: [
        
    ],
    views: [
        'LeftMenu',
        'TestPanel'
    ]
});