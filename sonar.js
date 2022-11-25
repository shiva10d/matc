const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'naveen@10d',
    options: {
      'sonar.sources': './app',
    },
  },
  () => process.exit(),
);
