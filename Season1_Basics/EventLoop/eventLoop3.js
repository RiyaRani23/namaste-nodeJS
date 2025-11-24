//  ******Output Order Explanation****** //
// 1. "Last line of the file." - Synchronous code runs first.
// 2. "promise" - Promise callbacks (microtasks) run after synchronous code.    
// 3. "Timer expired" - setTimeout with 0ms delay runs in the Timers phase.
// 4. "setImmediate" - setImmediate runs in the Check phase after Poll phase.
// 5. "File reading CB" - Callback from fs.readFile runs in the Poll phase after I/O completes.
// 6. "2nd nextTick" - process.nextTick inside fs.readFile callback runs before any other microtasks.
// 7. "Process.nextTick" - Another process.nextTick inside fs.readFile callback runs next.
// 8. "2ndImmediate" - setImmediate inside fs.readFile callback runs in the Check phase.
    //    because event loop waits for Poll phase to complete before moving to Check phase.
// 9. "2nd timer" - setTimeout inside fs.readFile callback runs in the Timers phase on next loop iteration.
// *************************************** //

const fs = require("fs"); 

// in Check phase → runs after Poll phase
setImmediate(() => console.log("setImmediate")); 

// in Timers phase → executes after 0ms delay
setTimeout(() => console.log("Timer expired"), 0); 

// Promise callbacks are microtasks → run after process.nextTick but before timers
Promise.resolve("promise").then(console.log);

// Asynchronous I/O → callback goes to Poll phase once file read completes
fs.readFile("../file.txt", (err, data) => {
  // Inside Poll phase callback:
  setTimeout(() => console.log("2nd timer"), 0); // Scheduled in Timers phase
  process.nextTick(() => console.log("2nd nextTick")); // Runs before Promise
  setImmediate(() => console.log("2nd setImmediate")); // Scheduled in Check phase

  console.log("File reading CB"); // Executes immediately inside Poll callback
  process.nextTick(() => console.log("Process.nextTick")); // Runs before Promise
});

// ✅ Synchronous → runs immediately
console.log("Last line of the file.");