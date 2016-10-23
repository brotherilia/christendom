"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);

  grunt.initConfig({

    //*** Очистка ***//
    clean: {
      build: ["build"]
    },

    //*** Копирование ***//
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**/*.{jpg,png,gif,svg}",
            "css/**/*.css",
            "js/**/*.js",
            "*.html",
            "favicon.png"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["*.html"],
          dest: "build"
        }]
      },
      img: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["img/**/*.{jpg,png,gif,svg}"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["js/**/*.js"],
          dest: "build"
        }]
      }
    },

    //*** Сборка и обработка HTML-файлов ***//
    processhtml: {
      target: {
        files: {
          "build/main.html": ["build/main.html"],

          "build/genesis.html": ["build/genesis.html"],

          "build/gospel-matthew.html": ["build/gospel-matthew.html"],
          "build/gospel-mark.html": ["build/gospel-mark.html"],
          "build/gospel-luke.html": ["build/gospel-luke.html"],
          "build/gospel-john.html": ["build/gospel-john.html"],

          "build/prayers-morning.html": ["build/prayers-morning.html"],
          "build/prayers-evening.html": ["build/prayers-evening.html"],

          "build/prayers-canon1.html": ["build/prayers-canon1.html"],
          "build/prayers-canon2.html": ["build/prayers-canon2.html"],
          "build/prayers-canon3.html": ["build/prayers-canon3.html"],

          "build/prayers-confession.html": ["build/prayers-confession.html"],
          "build/prayers-communion.html": ["build/prayers-communion.html"],
          "build/prayers-thanksgiving.html": ["build/prayers-thanksgiving.html"]
        }
      }
    },

    //*** Сборка CSS из LESS ***//
    less: {
      styleblue: {
        files: {
          "build/css/style-blue.css": "src/less/style-blue.less"
        }
      },
      stylered: {
        files: {
          "build/css/style-red.css": "src/less/style-red.less"
        }
      },
      stylegreen: {
        files: {
          "build/css/style-green.css": "src/less/style-green.less"
        }
      },
      stylecyan: {
        files: {
          "build/css/style-cyan.css": "src/less/style-cyan.less"
        }
      }
    },

    //*** Обработка CSS: префиксование и "упаковка" медиа-запросов ***//
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 2 versions",
            "> 1%"
          ]}),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      styleblue: {
        src: "build/css/style-blue.css"
      },
      stylered: {
        src: "build/css/style-red.css"
      },
      stylegreen: {
        src: "build/css/style-green.css"
      },
      stylecyan: {
        src: "build/css/style-cyan.css"
      }
    },

    //*** "Причесывание" CSS ***//
    csscomb: {
      style: {
        options: {
          config: "csscomb.json"
        },
        files: {
          "build/css/style-blue.css": ["build/css/style-blue.css"],
          "build/css/style-red.css": ["build/css/style-red.css"],
          "build/css/style-green.css": ["build/css/style-green.css"],
          "build/css/style-cyan.css": ["build/css/style-cyan.css"]
        }
      }
    },

    //*** Конкатенация CSS ***//
    concat: {
      cssblue: {
        src: ["build/css/normalize.css", "build/css/fonts.css", "build/css/style-blue.css"],
        dest: "build/css/style-blue.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      },
      cssred: {
        src: ["build/css/normalize.css", "build/css/fonts.css", "build/css/style-red.css"],
        dest: "build/css/style-red.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      },
      cssgreen: {
        src: ["build/css/normalize.css", "build/css/fonts.css", "build/css/style-green.css"],
        dest: "build/css/style-green.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      },
      csscyan: {
        src: ["build/css/normalize.css", "build/css/fonts.css", "build/css/style-cyan.css"],
        dest: "build/css/style-cyan.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      }
    },

    //*** Минификация CSS ***//
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style-blue.min.css": ["build/css/style-blue.css"],
          "build/css/style-red.min.css": ["build/css/style-red.css"],
          "build/css/style-green.min.css": ["build/css/style-green.css"],
          "build/css/style-cyan.min.css": ["build/css/style-cyan.css"]
        }
      }
    },

    //*** Минификация JS ***//
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          "build/js/script-firstpage.min.js": ["build/js/script-firstpage.js"],
          "build/js/script-book.min.js": ["build/js/script-book.js"]
        }
      }
    },

    //*** Локальный сервер с обновлением браузера ***//
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/img/**/*.{jpg,png,gif,svg}",
            "build/js/**/*.js"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    //*** Отслеживание изменений в исходниках ***//
    watch: {
      html: {
        files: ["src/**/*.html"],
        tasks: ["copy:html", "processhtml"],
        options: {spawn: false}
      },
      img: {
        files: ["src/img/**/*.{jpg,png,gif,svg}"],
        tasks: ["copy:img"],
        options: {spawn: false}
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["copy:js","uglify"],
        options: {spawn: false}
      },
      style: {
        files: ["src/less/**/*.less"],
        tasks: ["less", "postcss", "csscomb", "concat", "csso"],
        options: {spawn: false}
      }
    },

    //*** Отправка сборки в удаленную ветку "gh-pages" ***//
    "gh-pages": {
      options: {
        base: "build"
      },
      src: "**/*"
    },

    //*** Очистка директории на "боевом" сервере ***//
    secret: grunt.file.readJSON("authssh.json"),
    sshexec: {
      clean: {
        command: ["cd christendom.menshikov.su/www; rm -rf *"],
        options: {
          host: "<%= secret.host %>",
          username: "<%= secret.username %>",
          password: "<%= secret.password %>"
        }
      }
    },

    //*** Отправка сборки на "боевой" сервер ***//
    scp: {
      options: {
        host: "<%= secret.host %>",
        username: "<%= secret.username %>",
        password: "<%= secret.password %>",
      },
      masterhost: {
        files: [{
            cwd: "build/",
            src: "**/*",
            filter: "isFile",
            dest: "christendom.menshikov.su/www"
        }]
      }
    }
  });

  grunt.registerTask("serve", [
    "browserSync",
    "watch"
  ]);

  grunt.registerTask("css", [
    "less",
    "postcss",
    "csscomb",
    "concat",
    "csso"
  ]);

  grunt.registerTask("build", [
    "clean",
    "copy:build",
    "processhtml",
    "css",
    "uglify"
  ]);

  grunt.registerTask("deploy", [
    "sshexec",
    "scp"
  ]);
};
