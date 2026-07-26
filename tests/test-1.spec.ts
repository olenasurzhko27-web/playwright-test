import { test, expect } from '@playwright/test';

test('Проверко отображения элементов навигации - Хедер', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect
    .soft(page.getByRole('button', { name: 'Switch between dark and light' }))
    .toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
});
test('Проверко названия элементов навигации - Хедер', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toContainText('MCP');
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toContainText('CLI');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await page.getByRole('button', { name: 'Node.js' }).click();
});

test('Проверко атрибутов href элементов навигации - Хедер', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
    .toHaveAttribute('href', '/');
  await expect
    .soft(page.getByRole('link', { name: 'Docs' }))
    .toHaveAttribute('href', '/docs/intro');
  await expect
    .soft(page.getByRole('link', { name: 'MCP', exact: true }))
    .toHaveAttribute('href', '/mcp/introduction');
  await expect
    .soft(page.getByRole('link', { name: 'CLI', exact: true }))
    .toHaveAttribute('href', '/agent-cli/introduction');
  await expect
    .soft(page.getByRole('link', { name: 'API' }))
    .toHaveAttribute('href', '/docs/api/class-playwright');
  await expect
    .soft(page.getByRole('link', { name: 'GitHub repository' }))
    .toHaveAttribute('href', 'https://github.com/microsoft/playwright');
  await expect
    .soft(page.getByRole('link', { name: 'Discord server' }))
    .toHaveAttribute('href', 'https://aka.ms/playwright/discord');
});

test('Проверко переключения лайт мод', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Switch between dark and light').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByLabel('Switch between dark and light').click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('Проверко Текста в Тайтле', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toBeVisible();
  await expect
    .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toContainText(
      'Playwright enables reliable web automation for testing, scripting, and AI agents.',
    );
});

test('Проверко кнопки GetStart', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('banner')).toContainText('Get started');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
