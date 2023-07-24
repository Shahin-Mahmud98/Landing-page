/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TestClassic.Application',

    name: 'TestClassic',

    requires: [
        // This will automatically load all classes in the TestClassic namespace
        // so that application classes do not need to require each other.
        'TestClassic.*'
    ],

    // The name of the initial view to create.
    mainView: 'TestClassic.view.main.Login'
});
