// Import the async_hooks module
const async_hooks = require('async_hooks');

// Call the require function to import the ./0-console module
const displayMessage = require('./0-console');

// Call the displayMessage function to print a message to the console
displayMessage('Hello NodeJS!');

// Create a hook instance with empty callbacks
const hook = async_hooks.createHook({
  init() {},
  before() {},
  after() {},
  promiseResolve() {},
  destroy() {},
});

// Enable the hook to start tracking async resources
hook.enable();

// Do something with the hook, such as logging or debugging

// Disable the hook to stop tracking async resources
hook.disable();
