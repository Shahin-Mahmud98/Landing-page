Ext.define('TestClassic.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.template-login',

    onLogin: function() {
        this.getView().destroy();
        Ext.create("Ext.container.Viewport",{
            layout:'fit',
            items:[
                {
                    xtype:"landing-view"
                }
            ]
        })

        // if (form.isValid()) {
        //     Ext.Msg.alert('Login Success', 'You have been logged in!');
        //     window.open("https://examples.sencha.com/extjs/7.7.0/examples/kitchensink/?classic#template-login", "")
        // }
        // else {
        //     Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        //     fields = form.getFields();

        //     fields.each(function(field) {
        //         var error;

        //         if (!field.validate() && (error = field.getErrors())) {
        //             errors.push({
        //                 errors: error,
        //                 name: field.getFieldLabel()
        //             });
        //         }
        //     });
        // }

        // if (errorCmp) {
        //     errorCmp.setData(data);
        // }
    }
});