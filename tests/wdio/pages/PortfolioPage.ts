class PortfolioPage {
  // Locators
  get testMeSection() { return $('#test-me'); }

  // Tabs
  get webTabButton() { return $('[data-testid="button-tab_web-testme"]'); }
  get mobileTabButton() { return $('[data-testid="button-tab_mobile-testme"]'); }

  // Web Interactions
  get explicitWaitButton() { return $('[data-testid="button-explicit_wait-testme"]'); }
  get explicitWaitMessage() { return $('#delay-message'); }
  get inputLogic() { return $('[data-testid="input-logic-testme"]'); }
  get submitLogicButton() { return $('[data-testid="button-submit_logic-testme"]'); }

  // Hero
  get heroTerminalText() { return $('//*[contains(text(), "~/profile")]'); }
  get heroRoleText() { return $('//*[contains(text(), "Role: Senior Quality Engineer")]'); }
  get sudoContactButton() { return $('//*[contains(text(), "sudo contact_me.sh")]'); }

  // Skills
  get skillsHeader() { return $('//*[contains(text(), "Installed_Packages")]'); }
  get expertSkillBar() { return $('//*[contains(text(), "[#####] 100%")]'); }

  // Contact
  get contactHeader() { return $('//*[contains(text(), "Initialize Connection")]'); }
  get contactPingOutput() { return $('//*[contains(text(), "$ ping firmansyah")]'); }
  get sendEmailButton() { return $('//*[contains(text(), "send_email.sh")]'); }

  // Mobile Interactions
  get swipeSlider() { return $('[data-testid="div-swipe_slider-testme"]'); }

  async open() {
    await browser.url('http://localhost:3000');
  }

  async scrollToTestMe() {
    await this.testMeSection.scrollIntoView({ block: 'start' });
  }

  async switchToWebTab() {
    await this.webTabButton.scrollIntoView({ block: 'center' });
    await this.webTabButton.waitForClickable();
    await this.webTabButton.click();
  }

  async switchToMobileTab() {
    await this.scrollToTestMe();
    await this.mobileTabButton.scrollIntoView({ block: 'center' });
    await this.mobileTabButton.waitForClickable();
    await this.mobileTabButton.click();

    // Verify the tab is actually active (class changes to bg-zinc-700)
    await browser.waitUntil(async () => {
      const className = await this.mobileTabButton.getAttribute('class');
      return className.includes('bg-zinc-700');
    }, {
      timeout: 2000,
      timeoutMsg: 'Mobile tab button did not become active'
    });

    await this.swipeSlider.waitForDisplayed();
  }
}

export default new PortfolioPage();
