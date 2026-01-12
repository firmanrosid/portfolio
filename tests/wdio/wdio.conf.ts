export const config = {
  runner: 'local',
  specs: [
    './**/*.e2e.ts'
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
    }
  }],
  outputDir: 'tests/wdio/logs',
  logLevel: 'error',
  bail: 0,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
