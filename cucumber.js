module.exports = {
  default: {
    require: ['features/**/*.ts'],
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
    paths: ['features/**/*.feature'],
    publishQuiet: true,
  },
};
