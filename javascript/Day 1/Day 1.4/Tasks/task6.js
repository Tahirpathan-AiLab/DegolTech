const vivaAnswers = [
  "var is function-scoped, let is block-scoped and can be reassigned, and const is block-scoped and cannot be reassigned.",
  "Scope is where a variable can be used.",
  "Hoisting is JavaScript processing declarations before running statements in their scope.",
  "The Temporal Dead Zone is the time before a let or const variable is initialized.",
  "An execution context is the environment where JavaScript code runs.",
  "The call stack keeps track of active function calls.",
  "A parameter is a function input name; an argument is the value passed in.",
  "return sends a value back; console.log prints a value.",
  "Functions let us reuse code.",
  "A ReferenceError can be debugged by checking spelling, scope, and whether a variable was initialized before use."
];

for (let i = 0; i < vivaAnswers.length; i++) {
  console.log("Viva " + (i + 1) + ": " + vivaAnswers[i]);
}
