//https://nickkorbel.com/2020/02/05/configuring-sonar-with-a-create-react-app-in-typescript/

const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://192.168.0.33:9000",
    token: "d102e1b283976d07e28f9c7aabe6d5caa21a7adb",
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "",
      "sonar.tests": "./src/",
      "sonar.test.inclusions": "./src/*.test.tsx,./src/*.test.js",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      //"sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {},
);
