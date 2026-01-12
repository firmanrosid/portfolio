import PortfolioPage from './pages/PortfolioPage';

describe('Portfolio E2E', () => {
  it('should have the correct title and Visual Elements (Terminal Theme)', async () => {
    await PortfolioPage.open();
    await expect(browser).toHaveTitle(expect.stringContaining('Firmansyah'));

    // Verify Hero
    await expect(PortfolioPage.heroTerminalText).toBeDisplayed();
    await expect(PortfolioPage.heroRoleText).toBeDisplayed();
    await expect(PortfolioPage.sudoContactButton).toBeDisplayed();

    // Verify Skills
    await PortfolioPage.skillsHeader.scrollIntoView({ block: 'center' });
    await expect(PortfolioPage.skillsHeader).toBeDisplayed();
    await expect(PortfolioPage.expertSkillBar).toBeDisplayed();

    // Verify Contact
    await PortfolioPage.contactHeader.scrollIntoView({ block: 'center' });
    await expect(PortfolioPage.contactHeader).toBeDisplayed();
    await expect(PortfolioPage.contactPingOutput).toBeDisplayed();
    await expect(PortfolioPage.sendEmailButton).toBeDisplayed();
  });

  it('should navigate to Test Me section and Verify Web Interactions', async () => {
    await PortfolioPage.open();
    await PortfolioPage.scrollToTestMe();

    // Tab check
    await PortfolioPage.switchToWebTab();
    await expect(PortfolioPage.webTabButton).toBeDisplayed();

    // 1. Explicit Wait
    await expect(PortfolioPage.explicitWaitButton).toBeDisplayed();
    await PortfolioPage.explicitWaitButton.click();

    await PortfolioPage.explicitWaitMessage.waitForDisplayed({ timeout: 5000 });
    await expect(PortfolioPage.explicitWaitMessage).toHaveText('Success! You waited correctly.');

    // 2. Input Logic
    await PortfolioPage.inputLogic.setValue('Hello World');
    await expect(PortfolioPage.submitLogicButton).toBeEnabled();
    await PortfolioPage.submitLogicButton.click();
  });

  it('should verify Mobile Gestures tab', async () => {
    await PortfolioPage.open();
    await PortfolioPage.switchToMobileTab();

    // Check for Swipe Slider visibility
    await expect(PortfolioPage.swipeSlider).toBeDisplayed();
  });
});
