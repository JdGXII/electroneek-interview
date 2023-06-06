module.exports = {
    // ... other configuration options
  
    transform: {
      '^.+\\.ts?$': 'babel-jest',
    },
    testTimeout: 10000, //I was having internet issues when developing the tests so had to pump this up in the meantime
  };
  