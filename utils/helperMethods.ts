export const waitForDisplayed = async (
    element: WebdriverIO.Element,
    timeout = 10000
) => {
    await element.waitForDisplayed({ timeout });
};

