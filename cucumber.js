module.exports = {
  default: {
    require: ['api/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/report.json',
      'html:reports/cucumber-report.html',
      'summary',
      'cucumber-console-formatter'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['api/**/*.feature'],
    publishQuiet: true,
  },
};
