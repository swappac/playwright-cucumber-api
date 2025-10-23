# API Automation Framework using TypeScript and Cucumber

This is a sample framework to demonstrate api testing using cucumber for BDD and playwright for test framework

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/swappac/playwright-cucumber-api.git
cd playwright-cucumber-api
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
api/
    steps
    support
    tests
reports/
cucumber.js
playwright.config.ts
tsconfig.json
```

## Running Tests

Run all tests:
```bash
npm test
```

### Test Reports
After test execution, reports are available in:
- JSON Report: `reports/report.json`
- HTML Report: `reports/cucumber-report.html`

## Configuration

### Cucumber Configuration (cucumber.js)
- Feature file location
- Step definition paths
- Reporter settings
- TypeScript configuration

### Playwright Configuration (playwright.config.ts)
- Base URL for API requests
- Default headers
- Timeout settings
- Reporter configuration
