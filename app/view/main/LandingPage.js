Ext.define('TestClassic.view.main.LandingPage',{
    extend :'Ext.Container',
    xtype:'landing-view',
    viewModel:'main',

    ui: 'navigation',
    

    autoSize: true,

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        // 'TestClassic.view.main.LandingController',
        'TestClassic.view.main.MainModel',
    ],
// controller:'LandingPage',

    width: 340,
    height: 544,

    layout: {
        type: 'vbox',
        align: 'middle',
        pack:'center',
        
    },

    scrollable: 'y',
    style:{
        backgroundImage:'url(resources/images/roading.jpg)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover'

    },
    items:[{
        xtype: 'button',
        text: 'Click Here',
        autoSize: true,
        handler: 'onLogin',
        style:{
            'background-image':'linear-gradient(to right,#9933ff,#990000)',
            textAlign:'center',

        }
        
        
    }]
})