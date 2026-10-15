function processTask(callback) {
  console.log("Task started");
  callback();
  console.log("Task completed");
}

processTask(function () {
  console.log("Processing data");
});
