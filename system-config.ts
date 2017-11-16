/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

System.config({
    paths: {
        // paths serve as alias
        'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
        // our app is within the app folder
        'app': 'app',
        'main': 'app/main.js',

        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

        // other libraries
        'rxjs': 'npm:rxjs',
        'text-mask-core':'npm:text-mask-core',
        'angular2-text-mask': 'npm:angular2-text-mask',
        'angular2-ui-switch': 'npm:angular2-ui-switch',
        'traceur': 'npm:traceur/bin',
        'ng2-date-picker': 'npm:ng2-date-picker',
        'moment': 'npm:moment',
        'md2-datepicker': 'npm:md2-datepicker'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        'app': {main: 'app/main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-text-mask': {
            defaultExtension: 'js',
            main: 'dist/angular2TextMask.js'
        },
        'text-mask-core': { defaultExtension: 'js' },
        'angular2-ui-switch': {
            defaultExtension: 'js',
            main: 'dist/index.js'
        },
        'ng2-date-picker': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        'moment': {
            defaultExtension: 'js',
            main: 'moment'
        },
        'ng2-date-picker': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        'md2-datepicker': {
            format: 'cjs',
            main: 'md2datepicker.umd.js'
        }
    }
});

