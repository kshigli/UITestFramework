export const config = {
    runner: 'local',
    specs: [
        [
             './features/**/challengingDOM.feature'
           
        ]
    ],
    baseUrl: 'https://the-internet.herokuapp.com/',
    capabilities: [
        {
            bail: 1,
            maxInstances: 1,
            maxInstancesPerCapability: 1,
            browserName: 'chrome',
            acceptInsecureCerts: false,
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--disable-infobars',
                    '--start-maximized',
                    //'--headless=new',
                    '--disable-gpu',
                    //'--window-size=1440,735',
                    //'--disable-dev-shm-usage'
                ]
            }
        }
    ],

    reporters: [        
        ['spec', []],        
    ],

    bail: 1,
    maxInstances: 1,
    maxInstancesPerCapability: 1,

    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/steps/*.ts'],
        timeout: 180000
    },
    services: ['chromedriver'],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
};
