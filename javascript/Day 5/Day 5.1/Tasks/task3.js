const values = [0, false, "", null, undefined];

values.forEach(value => {
  console.log(`Value: ${String(value)}`);
  console.log(`With ||: ${value || "Fallback"}`);
  console.log(`With ??: ${value ?? "Fallback"}`);
});
