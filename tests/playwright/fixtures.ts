import { test as base } from '@playwright/test';
import { PortfolioPage } from './pages/PortfolioPage';

// Declare the types of your fixtures.
type MyFixtures = {
  portfolioPage: PortfolioPage;
};

// Extend base test to include 'portfolioPage'.
export const test = base.extend<MyFixtures>({
  portfolioPage: async ({ page }, use) => {
    // Set up the fixture.
    const portfolioPage = new PortfolioPage(page);
    await portfolioPage.goto(); // Optional: Auto-navigate or keep manual. Keeping auto is handy.

    // Use the fixture value in the test.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(portfolioPage);

    // Clean up the fixture.
    // (Nothing to clean up here, but useful for DB connections etc.)
  },
});

export { expect } from '@playwright/test';
