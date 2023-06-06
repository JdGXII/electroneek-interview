
# Automation Framework with Playwright

This is a simple automation framework built using Playwright library for end-to-end testing. It provides a starting point for creating and running automated tests using Playwright and TypeScript.

## Prerequisites

- Node.js (https://nodejs.org) should be installed on your machine.

## Installation

1. Clone this repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the dependencies:

```bash
npm install
```

## Configuration

- The framework is pre-configured with ESLint, Prettier, and Husky to ensure code quality and formatting. You can customize the configurations by modifying the `.eslintrc.json` and `.prettierrc` files.

## Usage

1. Write your test scenarios using Playwright in TypeScript. You can find example tests in the `tests` directory.
2. Run the tests using the following command:

```bash
npm test
```

This will execute the tests using Jest.

## Structure

The framework follows the following directory structure:

```
.
├── tests
│   └── example.test.ts
├── .eslintrc.json
├── .prettierrc
├── package.json
└── tsconfig.json
```

- The `tests` directory contains the test files. You can create additional test files for different scenarios.
- The `.eslintrc.json` file contains the ESLint configuration.
- The `.prettierrc` file contains the Prettier configuration.
- The `package.json` file lists the project dependencies and scripts.
- The `tsconfig.json` file is the TypeScript configuration file.

## Contributing

If you have suggestions or improvements for the framework, feel free to submit a pull request. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

```

Feel free to modify the README file according to your specific requirements and add any additional information that you think would be helpful for users of your automation framework.