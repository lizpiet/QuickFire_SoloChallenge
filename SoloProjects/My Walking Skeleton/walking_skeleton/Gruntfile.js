module.exports=function(grunt){
    //project configuration
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner:'/*!<%+pkg.name%><%=grunt.template.today("yyy-mm-dd"%>*/\n'
            },
            build:{
                src:'client/app.js',
                dest:'server/public/assets/scripts/app.min.js'
            }
        },
        copy:{
            main:{
                expand:true,
                cwd:"node_modules/",
                src:[
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css"
                ],
                "dest":"server/public/vendor/"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //default tasks
    grunt.registerTask('default', ['copy', 'uglify']);
};



