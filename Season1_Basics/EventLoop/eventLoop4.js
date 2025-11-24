// Output Order Explanation:
// 1. "Last line of the file." - Synchronous code runs first.
// 2. "Process.nextTick" - process.nextTick runs before Promises.
// 3. "inner nextTick" - Nested process.nextTick runs immediately after outer nextTick.
// 4. "promise" - Promise callbacks (microtasks) run after process.nextTick.   
// 5. "Timer expired" - setTimeout with 0ms delay runs in the Timers phase.
// 6. "setImmediate" - setImmediate runs in the Check phase after Poll phase.
// 7. "File reading CB" - Callback from fs.readFile runs in the Poll phase after I/O completes.
// *************************************** //

const fs = require("fs");

// Scheduled in Check phase → runs after Poll phase
setImmediate(() => console.log("setImmediate")); 

// ✅ Scheduled in Timers phase → executes after 0ms delay
setTimeout(() => console.log("Timer expired"), 0); 

// ✅ Promise callbacks are microtasks → run after process.nextTick but before timers
Promise.resolve("promise").then(console.log); 

// ✅ Asynchronous I/O → callback goes to Poll phase once file read completes
fs.readFile("../file.txt", (err, data) => {
  console.log("File reading CB"); 
});

// ✅ process.nextTick has highest priority → runs before Promises
process.nextTick(() => {
  console.log("Process.nextTick"); 
  // ✅ Nested nextTick runs immediately after outer nextTick
  process.nextTick(() => console.log("inner nextTick")); 
});

// ✅ Synchronous → runs immediately
console.log("Last line of the file.");