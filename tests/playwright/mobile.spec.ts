import { test, expect } from './fixtures';

test.describe('Mobile Gestures', () => {

  test.beforeEach(async ({ portfolioPage }) => {
    await portfolioPage.switchToMobileTab();
  });

  test('should unlock with swipe gesture', async ({ portfolioPage }) => {
    await portfolioPage.swipeUnlock();
    await expect(portfolioPage.page.getByText('UNLOCKED!')).toBeVisible();
  });

  test('should trigger action on long press', async ({ portfolioPage }) => {
    await portfolioPage.performLongPress();
    await expect(portfolioPage.longPressButton).toHaveText('Action Triggered! 🚀');
  });
});
