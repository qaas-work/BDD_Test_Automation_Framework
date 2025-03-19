const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/",
  reportPath: "./test-result/",
  durationInMS: true,
  displayDuration: false,
  pageTitle: "Automation testing Report",
});