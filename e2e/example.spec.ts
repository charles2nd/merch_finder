import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /merch finder & customizer/i })).toBeVisible()
  await expect(page.getByText(/find and customize merchandise/i)).toBeVisible()
})