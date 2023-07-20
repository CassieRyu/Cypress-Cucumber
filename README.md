# Cypress with cucumber framework sample

## Setup

Make sure you have node install on your machine

### To install dependcies on this project

```
npm install
```

### To enable cucumber in your VS code

- Install this plugin in plugins market: Cucumber (Gherkin) Full Support
  ![alt text](assets/cucumber.png)
- Add below settings in your VS code `settings.json` file
  ![alt text](assets/settings.png)
- Reload your VS code app

## Test

### To open test explorer

```
npx cypress open
```

### Execute test

```
npm run test_smoke
```

or

```
npm run test_regression
```

### Generate report

```
npm run merge_report
```

Then you able to find the html report under `./reports/mochawesome` folder
