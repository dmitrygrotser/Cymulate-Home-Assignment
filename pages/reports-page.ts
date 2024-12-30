import {expect, Page} from '@playwright/test';

export class ReportsPage {
    constructor(private page: Page) {
    }


    async goToReports() {
        await this.page.getByTestId('link-button-Reports').click();
    }

    async goToWafHistory() {
        await expect(this.page.locator('div').filter({hasText: /^Web Application Firewall$/})).toBeVisible();
        await this.page.locator('[href*="/cym/waf_reports/?client=prod1"]').click();
    }

    async selectFirstReport() {
        await this.page.getByRole('rowgroup').locator('div').nth(1).click();
    }

    async generateCSVReport() {
        await this.page.getByRole('button', {name: 'Generate Report'}).click();
        await this.page.getByRole('button', {name: 'CSV'}).nth(1).click();
    }

    // async getReportId() {
    //     return await this.page.locator('text=Assessment ID').locator('xpath=following-sibling::*').textContent();
    //
    // }
}