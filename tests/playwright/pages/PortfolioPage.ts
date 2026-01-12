import { type Page, type Locator, expect } from '@playwright/test';

export class PortfolioPage {
  readonly page: Page;
  readonly testMeSection: Locator;

  // Tabs
  readonly webTabButton: Locator;
  readonly mobileTabButton: Locator;

  // Web Interactions
  readonly explicitWaitButton: Locator;
  readonly explicitWaitMessage: Locator;
  readonly inputLogic: Locator;
  readonly submitLogicButton: Locator;
  readonly hoverArea: Locator;
  readonly secretText: Locator;

  // Hero Section
  readonly heroTerminalText: Locator;
  readonly heroRoleText: Locator;
  readonly sudoContactButton: Locator;

  // Skills Section
  readonly skillsHeader: Locator;
  readonly expertSkillBar: Locator;

  // Contact Section
  readonly contactHeader: Locator;
  readonly contactPingOutput: Locator;
  readonly sendEmailButton: Locator;

  // Mobile Interactions
  readonly swipeSlider: Locator;
  readonly longPressButton: Locator;
  readonly orientationStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.testMeSection = page.locator('#test-me');

    // Hero Locators
    this.heroTerminalText = page.getByText('~/profile');
    this.heroRoleText = page.getByText('Role: Senior Quality Engineer');
    this.sudoContactButton = page.getByRole('link', { name: 'sudo contact_me.sh' });

    // Skills Locators
    this.skillsHeader = page.getByText('Installed_Packages');
    this.expertSkillBar = page.getByText('[#####] 100%').first();

    // Contact Locators
    this.contactHeader = page.getByText('Initialize Connection');
    this.contactPingOutput = page.getByText('$ ping firmansyah');
    this.sendEmailButton = page.getByRole('link', { name: 'send_email.sh' });

    // TestMe Locators
    this.webTabButton = page.getByTestId('button-tab_web-testme');
    this.mobileTabButton = page.getByTestId('button-tab_mobile-testme');

    this.explicitWaitButton = page.getByTestId('button-explicit_wait-testme');
    this.explicitWaitMessage = page.locator('#delay-message');
    this.inputLogic = page.getByTestId('input-logic-testme');
    this.submitLogicButton = page.getByTestId('button-submit_logic-testme');
    this.hoverArea = page.getByTestId('div-hover_area-testme');
    this.secretText = page.locator('#secret-text');

    this.swipeSlider = page.getByTestId('div-swipe_slider-testme');
    this.longPressButton = page.getByTestId('button-long_press-testme');
    this.orientationStatus = page.getByTestId('div-orientation-testme');
  }

  async goto() {
    await this.page.goto('/');
  }

  async scrollToTestMe() {
    await this.testMeSection.scrollIntoViewIfNeeded();
    await expect(this.testMeSection).toBeVisible();
  }

  async switchToMobileTab() {
    await this.scrollToTestMe();
    await this.mobileTabButton.click();
    await expect(this.swipeSlider).toBeVisible(); // Ensure content loads
  }

  async swipeUnlock() {
    await expect(this.swipeSlider).toBeVisible();
    const box = await this.swipeSlider.boundingBox();
    if (!box) throw new Error('Slider not found');

    const startX = box.x + 20;
    const endX = box.x + box.width;

    // Simulation using mouse events for reliability in CI
    await this.swipeSlider.dispatchEvent('mousedown', { buttons: 1, clientX: startX });
    await this.swipeSlider.dispatchEvent('mousemove', { buttons: 1, clientX: endX });
    await this.swipeSlider.dispatchEvent('mouseup', { clientX: endX });
  }

  async performLongPress() {
    await expect(this.longPressButton).toBeVisible();
    await this.longPressButton.dispatchEvent('mousedown');
    await this.longPressButton.dispatchEvent('touchstart');

    await this.page.waitForTimeout(2500); // 2s requirement + buffer

    await this.longPressButton.dispatchEvent('mouseup');
    await this.longPressButton.dispatchEvent('touchend');
  }
}
