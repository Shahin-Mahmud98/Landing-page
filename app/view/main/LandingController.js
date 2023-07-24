Ext.define('TestClassic.view.main.LandingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.template-landing',

    onLogin: function() {
        this.getView().destroy();
        Ext.create("Ext.container.Viewport",{
            // layout:'fit',
            items:[
                {
                    xtype:"main"
                }
            ]
        })
    }
});