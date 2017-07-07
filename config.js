module.exports = {
  source: {
    html: 'source/pug/',
    stylesheets: 'source/sass/',
    javascripts: {
      path: 'source/javascript/',
      fileName: 'application'
    }
  },
  build: {
    html: 'www/',
    stylesheets: 'www/dist/stylesheet/',
    javascripts: {
      path: 'www/dist/javascript/',
      fileName: 'application.js'
    }
  },
  browsers: [
    '> 1%',
    'last 2 versions',
    'iOS 8',
    'Firefox ESR',
    'Opera 12.1'
  ]
};
