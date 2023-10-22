import { waitForDisappeared, waitForDisplayed } from '../utils/helperMethods';

const dynamicLoadingLink = '//a[text()="Dynamic Loading"]';
const exampleLink = '//a[contains(text(),"Element rendered after the fact")]';
const startButtonXPath = '//button[text()="Start"]';
const loadingBarXPath = '//div[@id="loading"][@style="display: none;"]';
const helloWorld = '//div[@id="finish"]/h4';

let value: string;
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
        const startButton = await $(startButtonXPath);
        await waitForDisplayed(startButton)
        //await $('#start').setValue(_sellerBusinessTitle);       
    }

    async clickStart() { 
        const startButton = await $(startButtonXPath);
        await waitForDisplayed(startButton)
        await startButton.moveTo();
        await startButton.click();       
    }
    
    async waitUntilLoadBarDisappears() { 
        const helloWorldText = await $(helloWorld);
        await waitForDisplayed(helloWorldText)
    }

    async getWelcomeText() { 
        const helloWorldText = await $(helloWorld);
        return (await helloWorldText.getText()).trim();
    }

   
    

   
}