import { test, expect } from './fixtures';

test.describe('Portfolio Tests', () => {

  test('should display visual key elements (Terminal Theme)', async ({ portfolioPage }) => {
    // Verify Hero
    await expect(portfolioPage.heroTerminalText).toBeVisible();
    await expect(portfolioPage.heroRoleText).toBeVisible();
    await expect(portfolioPage.sudoContactButton).toBeVisible();

    // Verify Skills
    await portfolioPage.skillsHeader.scrollIntoViewIfNeeded();
    await expect(portfolioPage.skillsHeader).toBeVisible();
    await expect(portfolioPage.expertSkillBar).toBeVisible();

    // Verify Contact
    await portfolioPage.contactHeader.scrollIntoViewIfNeeded();
    await expect(portfolioPage.contactHeader).toBeVisible();
    await expect(portfolioPage.contactPingOutput).toBeVisible();
    await expect(portfolioPage.sendEmailButton).toBeVisible();
  });

  test.describe('Interactive Elements (Test Me Section)', () => {

    test('Test "Explicit Wait" functionality', async ({ portfolioPage }) => {
      await portfolioPage.scrollToTestMe();

      // Check initial state
      await expect(portfolioPage.explicitWaitButton).toBeVisible();

      // Click button
      await portfolioPage.explicitWaitButton.click();

      // Verification
      await expect(portfolioPage.explicitWaitMessage).toBeVisible({ timeout: 5000 });
      await expect(portfolioPage.explicitWaitMessage).toHaveText('Success! You waited correctly.');
      await expect(portfolioPage.explicitWaitButton).toHaveText('Action Complete!');
    });

    test('Test "Input Logic" functionality', async ({ portfolioPage }) => {
      await portfolioPage.scrollToTestMe();

      // Check initial state
      await expect(portfolioPage.submitLogicButton).toBeDisabled();

      // Type wrong text
      await portfolioPage.inputLogic.fill('Wrong Text');
      await expect(portfolioPage.submitLogicButton).toBeDisabled();

      // Type correct text
      await portfolioPage.inputLogic.fill('Hello World');
      await expect(portfolioPage.submitLogicButton).toBeEnabled();
      await portfolioPage.submitLogicButton.click();
    });

    test('Test "Hover" functionality', async ({ portfolioPage }) => {
      await portfolioPage.scrollToTestMe();

      await portfolioPage.hoverArea.hover();

      await expect(portfolioPage.secretText).toBeVisible({ timeout: 2000 });
      await expect(portfolioPage.secretText).toHaveText('SECRET_REVEALED');
    });

  });
});
