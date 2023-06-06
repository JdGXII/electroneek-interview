
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

1. Write your test scenarios using Playwright in TypeScript. 
2. Run the tests using the following command:

```bash
npm test
```

This will execute the tests using Jest.
---

## Running the Tests and Generating the Report

To run the tests and generate the HTML report, follow these steps:

1. Make sure you have all the dependencies installed by running:

   ```bash
   npm install
   ```

2. Execute the tests using Jest:

   ```bash
   npx jest
   ```

   This command will run your tests and generate the HTML report.

3. After the tests complete, you can find the generated report in the specified output path. By default, the report is saved in `./test-report.html`.

## Viewing the Report

To view the generated HTML report, open the file `test-report.html` in a web browser of your choice. The report provides detailed information about the test results, including the number of passed and failed tests, test duration, and any error messages or stack traces.

The report also includes a summary section that gives an overview of the test run, such as the total number of tests executed and the overall pass percentage.

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