import { waitForDisplayed } from '../utils/helperMethods';

const dynamicLoadingLink = '//a[text()="Dynamic Loading"]';
const exampleLink = '//a[contains(text(),"Element rendered after the fact")]';
const startButtonLocator = '//button[text()="Start"]';
const helloWorldLocator = '//div[@id="finish"]/h4';

export class DynamicLoadingPageObj {

    async clickDynamicLoadingLink() {
        const dynamicLoadingLinkSelector = await $(dynamicLoadingLink);               
        await dynamicLoadingLinkSelector.click();   
        const exampleLinkSelector = await $(exampleLink);
        await waitForDisplayed(exampleLinkSelector)
    }

    async clickExampleTwoElement() {       
        const exampleLinkSelector = await $(exampleLink);
        await exampleLinkSelector.click();
        const startButton = await $(startButtonLocator);
        await waitForDisplayed(startButton)
    }

    async clickStart() { 
        const startButton = await $(startButtonLocator);
        await waitForDisplayed(startButton)
        await startButton.moveTo();
        await startButton.click();       
    }
    
    async waitUntilLoadBarDisappears() { 
        const helloWorldText = await $(helloWorldLocator);
        await waitForDisplayed(helloWorldText)
    }

    async getWelcomeText() { 
        const helloWorldText = await $(helloWorldLocator);
        return (await helloWorldText.getText()).trim();
    }

   
    

   
}