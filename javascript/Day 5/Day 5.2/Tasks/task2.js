const invalidJson = '{"name":}';

try {
  const data = JSON.parse(invalidJson);
  console.log(data);
} catch (error) {
  console.log("The JSON data is invalid.");
}
