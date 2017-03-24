module.exports = {
  source: {
    stylesheets: 'source/sass/',
    javascripts: 'source/javascript/'
  },
  build: {
    stylesheets: 'assets/stylesheet/',
    javascripts: 'assets/javascript/'
  },
  browsers: [
    '> 1%',
    'last 2 versions',
    'iOS 8',
    'Firefox ESR',
    'Opera 12.1'
  ]
};
