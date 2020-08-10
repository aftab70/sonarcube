const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://192.168.0.33:9000",
    token: "d102e1b283976d07e28f9c7aabe6d5caa21a7adb",
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "**/__tests__/**",
      "sonar.tests": "./src/__tests__",
      "sonar.test.inclusions": "./src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {},
);
