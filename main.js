/*global require*/

require([
    './submodules/fenix-ui-common/js/Compiler',
    './submodules/fenix-ui-common/js/paths',
    './submodules/fenix-ui-table-creator/src/js/paths'

], function (Compiler, Common, TableCreator) {

    'use strict';

    var submodules_path = '../../submodules/';

    var commonConfig = Common;
    commonConfig.baseUrl = submodules_path + 'fenix-ui-common/js';

    var tableCreatorConfig = TableCreator;
    tableCreatorConfig.baseUrl= submodules_path +'fenix-ui-table-creator/src/js/';

    Compiler.resolve([tableCreatorConfig],
        {
            placeholders: {"FENIX_CDN": "http://fenixrepo.fao.org/cdn"},

            config: {

                //Set the config for the i18n
                i18n: {
                    locale: 'en'
                },

                // The path where your JavaScripts are located
                baseUrl: './src/js',

                // Specify the paths of vendor libraries
                paths: {
                    'jquery': '{FENIX_CDN}/js/jquery/2.1.1/jquery.min',

                    bootstrap: "{FENIX_CDN}/js/bootstrap/3.3.4/js/bootstrap.min",
                    underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                    backbone: "{FENIX_CDN}/js/backbone/1.1.2/backbone.min",
                    handlebars: "{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
                    chaplin: "{FENIX_CDN}/js/chaplin/1.0.1/chaplin.min",
                    domReady: "{FENIX_CDN}/js/requirejs/plugins/domready/2.0.1/domReady",
                    i18n: "{FENIX_CDN}/js/requirejs/plugins/i18n/2.0.4/i18n",
                    text: '{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text',
                    rsvp: '{FENIX_CDN}/js/rsvp/3.0.17/rsvp',
                    "bootstrap-list-filter" :'{FENIX_CDN}/js/bootstrap-list-filter/0.2.1/bootstrap-list-filter.min',

                    //Threejs
                    copyShader : "{FENIX_CDN}/js/threejs/4.4/CopyShader",
                    effectComposer : "{FENIX_CDN}/js/threejs/4.4/EffectComposer",
                    maskPass : "{FENIX_CDN}/js/threejs/4.4/MaskPass",
                    orbitControls : "{FENIX_CDN}/js/threejs/4.4/OrbitControls",
                    projector : "{FENIX_CDN}/js/threejs/4.4/Projector",
                    renderPass : "{FENIX_CDN}/js/threejs/4.4/RenderPass",
                    shaderPass : "{FENIX_CDN}/js/threejs/4.4/ShaderPass",
                    canvasRender: "{FENIX_CDN}/js/threejs/4.4/CanvasRenderer", // TO BE REVIEWED
                    detector: "{FENIX_CDN}/js/threejs/4.4/Detector", // TO BE REVIEWED
                    tweenMax: "{FENIX_CDN}/js/tweenmax/1.18.0/tweenmax.min", // TO BE REVIEWED
                    threejs : "{FENIX_CDN}/js/threejs/4.4/three.min",

                    'highcharts': '{FENIX_CDN}/js/highcharts/4.1.6/js/highcharts',

                    amplify: '{FENIX_CDN}/js/amplify/1.1.2/amplify.min',

                    nls: "../../i18n",
                    config: "../../config",
                    json: "../../json",

                    'webix' : 'http://fenixrepo.fao.org/cdn/js/webix/2.2.1/js/webix',

                    'fx-common/config/auth_users' : '../../config/auth_users.json',

                    "fx-cat-br/config/fx-catalog-blank-filter": '../../config/submodules/fx-catalog/blankFilter',
                    "fx-cat-br/config/fx-catalog-collapsible-menu-config": '../../config/submodules/fx-catalog/fx-catalog-collapsible-menu-config',
                    "fx-cat-br/config/fx-catalog-filter-mapping": '../../config/submodules/fx-catalog/fx-catalog-filter-mapping',
                    "fx-cat-br/config/fx-catalog-modular-form-config": '../../config/submodules/fx-catalog/fx-catalog-modular-form-config',

                    'fx-ana/config/services' : '../../config/submodules/fx-analysis/Config',

                    'fx-filter/config/config' : '../../config/submodules/fx-filter/Config',

                    'fx-cat-br/config/config': '../../config/submodules/fx-catalog/configAnalisi',

                    'fx-report/config/md-export/config' : '../../config/submodules/fx-report/md-export/config',

                    'fx-ds/config/config' : '../../config/submodules/fx-dashboard/config',

                    // METADATA VIEWER
                    'fx-mdviewer/config/config': '../../config/submodules/fx-md-viewer/config'


                },

                // Underscore and Backbone are not AMD-capable per default,
                // so we need to use the AMD wrapping of RequireJS
                shim: {
                    canvasRender: {
                        deps: ["threejs"]
                    },
                    detector: {
                        deps: ["threejs"]
                    },
                    projector:{
                        deps: ["threejs"]
                    },
                    copyShader: {
                        deps: ["threejs"]
                    },
                    effectComposer: {
                        deps: ["threejs"]
                    },
                    maskPass: {
                        deps: ["threejs"]
                    },
                    orbitControls: {
                        deps: ["threejs"]
                    },
                    renderPass: {
                        deps: ["threejs"]
                    },
                    shaderPass: {
                        deps: ["threejs"]
                    },

                    "highcharts": {
                        "exports": "Highcharts",
                        "deps": ["jquery"]
                    },
                    bootstrap: {
                        deps: ["jquery"]
                    },
                    underscore: {
                        exports: '_'
                    },
                    backbone: {
                        deps: ['underscore', 'jquery'],
                        exports: 'Backbone'
                    },
                    handlebars: {
                        exports: 'Handlebars'
                    }
                },
                waitSeconds : 15
                // For easier development, disable browser caching
                // Of course, this should be removed in a production environment
                //, urlArgs: 'bust=' +  (new Date()).getTime()
            }
        });

    /*
     var paths = requirejs.s.contexts._.config.paths,
     keys = Object.keys(paths),
     rs = "";

     for (var i = 0 ; i < keys.length ; i++) {
     if (paths[keys[i]].indexOf("http://fenixrepo") === 0) {
     rs = rs +(paths[keys[i]]) + '.js' + '\n';
     }
     }

     console.log(rs)

     */


    // Bootstrap the application
    require([
        'jquery',
        'domReady!'
    ], function ($) {


        $.getJSON('http://escap-fenix-01.escap.un.org:7777/v2/msd/resources/uid/...', function (data){
            console.log(data)
        });

    });
});