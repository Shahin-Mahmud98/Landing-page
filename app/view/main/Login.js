Ext.define('TestClassic.view.main.Login', {
    extend: 'Ext.Container',
    xtype: 'template-login',
    controller: 'template-login',



    ui: 'navigation',
    

    autoSize: true,

    

    profiles: {
        defaults: {
            width: 340,
            height: 544,
            margin: '25 0 0 0',
            forgotMargin: '20 0 0 0',
            signMargin: '4 0 0 0',
            buttonHeight: 30
        },
        'classic-material': {
            width: 340,
            height: 544,
            margin: (Ext.isIE || Ext.isEdge) ? '10 0 0 0' : '25 0 0 0',
            forgotMargin: '20 0 0 0',
            signMargin: '4 0 0 0',
            buttonHeight: 30
        },
        graphite: {
            width: 340,
            height: 544,
            margin: '15 0 0 0',
            forgotMargin: '10 0 0 0',
            signMargin: '0 0 0 0',
            buttonHeight: 50
        }
    },
    width: 340,
    height: 544,
    layout: {
        type: 'vbox',
        align: 'middle',
        pack:'center'
    },
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'TestClassic.view.main.LoginController'
        }
    ],
    // setting the background of the container
    style:{
        backgroundImage:'url(resources/images/roading.jpg)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover'
    
    }, 

    items: [
        {
            xtype: 'form',
            height: 514,
            width: 340,
            reference: 'formLogin',
            bodyPadding: 30,
            items: [
                {
                    xtype: 'image',
                    height: 90,
                    width: 280,
                    margin: '0 0 0 0',
                    alt: 'sencha-logo-image',
                    src: Ext.theme.name === "Aria" ? 'resources/images/sencha.png' : 'resources/images/sencha.png'
                },
                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '9 0 0 0',
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formLoginFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Login Failure</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    margin: '9 0 0 0',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    margin: "25 0 0 0",
                    fieldLabel: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    msgTarget: 'qtip',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    fieldLabel: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    msgTarget: 'qtip',
                    margin: "25 0 0 0",
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'checkbox',
                    width: 280,
                    height: 30,
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    margin: "25 0 0 0",
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)'
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    handler: 'onLogin',
                    height: 30,
                    width: 280,
                    margin: '30 0 0 0',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                },
                {
                    xtype: 'component',
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                    style: {
                        'font-size': '16px',
                        'text-align': 'center'
                    },
                    width: 280,
                    margin: "20 0 0 0"
                }
            ]
        },
        {
            xtype: 'component',
            margin: "4 0 0 0",
            width: 280,
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            html: 'Don’t have an account?' +
            "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-create-account'> Sign-Up</a>"
        }
    ]
});

