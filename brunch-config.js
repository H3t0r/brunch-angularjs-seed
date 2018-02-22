exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    },
    order: {
      before: ['app/**/*.module.js']
    }
  },
  stylesheets: {
    joinTo: {
      'vendor.css': /^(?!app)/,
      'app.css': /^app/
    }
  }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
};

exports.plugins = {
  eslint: {
    pattern: /^app\/.*\.js?$/
  },
  babel: {
    presets: [
      [
        'env',
        {
          targets: {
            browsers: ['last 2 versions']
          }
        }
      ]
    ]
  },
  htmlPages: {}
};
