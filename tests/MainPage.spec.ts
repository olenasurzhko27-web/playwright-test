import { test, expect } from '@playwright/test';

const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo link',
    text: 'Playwright',
    attribute: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs link',
    text: 'Docs',
    attribute: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'MCP', exact: true }),
    name: 'MCP link',
    text: 'MCP',
    attribute: {
      type: 'href',
      value: '/mcp/introduction',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'CLI', exact: true }),
    name: 'CLI link',
    text: 'CLI',
    attribute: {
      type: 'href',
      value: '/agent-cli/introduction',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'API link',
    text: 'API',
    attribute: {
      type: 'href',
      value: '/docs/api/class-playwright',
    },
  },
  {
    locator: (page) => page.getByLabel('GitHub repository'),
    name: 'GitHub repository link',
    attribute: {
      type: 'href',
      value: 'https://github.com/microsoft/playwright',
    },
  },
  {
    locator: (page) => page.getByLabel('Discord server'),
    name: 'Discord icon',
    attribute: {
      type: 'href',
      value: 'https://aka.ms/playwright/discord',
    },
  },
  {
    locator: (page) => page.getByLabel('Switch between dark and light'),
    name: 'lightmod icon',
  },
  {
    locator: (page) => page.getByLabel('Search (Control+k'),
    name: 'Search input',
  },
];
test.describe('Тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  test('Проверка отображения элементов навигации - Хедер', async ({ page }) => {
    for (const { locator, name } of elements) {
      await test.step(`Проверка отображения элемента: ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    }
  });

  test('Проверка названия элементов навигации - Хедер', async ({ page }) => {
    for (const { locator, name, text } of elements) {
      if (text) {
        test.step(`Проверка названия элемента: ${name}`, async () => {
          await expect(locator(page)).toContainText(text);
        });
      }
    }
  });

  test('Проверко атрибутов href элементов навигации - Хедер', async ({ page }) => {
    for (const { locator, name, attribute } of elements) {
      if (attribute) {
        test.step(`Проверка атрибута href элемента: ${name}`, async () => {
          await expect(locator(page)).toHaveAttribute(attribute?.type, attribute.value);
        });
      }
    }
  });

  test('Проверко переключения лайт мод', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.getByLabel('Switch between dark and light').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('Проверко Текста в Тайтле', async ({ page }) => {
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
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('banner')).toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });

  test('Проверко кнопки GetStart2', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('banner')).toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
