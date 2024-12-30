# Cymulate-Home-Assignment

## Prerequisites
1. Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or higher).
2. Install dependencies by running:
   ```bash
   npm install
   ```

## How to Run the Tests

### Running Specific Tests
To run a specific test file:
```bash
npx playwright test home-work.spec.ts
```

### Generate a HTML Report
Run tests and generate a report:
```bash
npx playwright test --reporter=html
```
After running, open the report:
```bash
npx playwright show-report
```
## Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
