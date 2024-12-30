import {expect, test} from '@playwright/test';
import {LoginPage} from "../pages/login-page";
import {ReportsPage} from "../pages/reports-page";
import Env from "../helpers/env";
import {DownloadPage} from "../pages/download-page";

test('test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const reportsPage = new ReportsPage(page);
    const downloadPage = new DownloadPage(page);
    await loginPage.login(Env.EMAIL!, Env.PASSWORD!);
    await reportsPage.goToReports();
    await reportsPage.goToWafHistory();
    await reportsPage.selectFirstReport();

    await expect(page.getByText('Assessment Score')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^100$/ })).toBeVisible();

    await expect(page.getByText('URL', { exact: true })).toBeVisible();
    await expect(page.getByText('https://ekslabs.cymulatedev.com', { exact: true }).nth(1)).toBeVisible();

    await expect(page.getByText('Assessment Status')).toBeVisible();
    await expect(page.getByTestId('assessment-status-report')).toHaveText('Completed');

    await reportsPage.generateCSVReport();
    await expect(page.getByText('SuccessReport Was Sent')).toBeVisible();
    await page.waitForTimeout(2000);
    await downloadPage.downloadManager();
    await expect(page.getByTestId('/card-text-container-\\w+/').locator('div').filter({ hasText: 'Module - Web Application' }).nth(1)).toBeVisible();

});