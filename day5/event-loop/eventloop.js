// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runContents(); //-- process


shouldContinue() {
    // check one: is there any more setTimeout, setInterval, setImmediate?

    // check two: is there any more pending OS tasks? (like server listening to port)

    // check three: is there any more pending long running operations? (like fs module)

    // check four: pending timers? (like SetImmediate)

    // check five: close events
    return pendingOSTasks.length || pendingOperations.length || pendingTimers.length;
}

// tick ()
while(shouldContinue()) {
    // 1. Node looks at pendingTimers and sees if any functions are ready to be called
    // 2. Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
    // 3. Pause execution. Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete
    // 4. Look at pendingTimers. Call any setImmediate
    // 5. Handle any 'close' events

}

// process.nextTick(() => {
//     // callback
// });
//nextTick()

// exit back to terminal



// fs

// readFile
// Node gets some stats from the file system (HD access)
// HD access id provided by the OS
// Node request to read the file
// hd accessed, file read... file content provided back to app
// Node gets the file content