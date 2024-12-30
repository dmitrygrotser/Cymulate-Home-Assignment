import {Page} from "@playwright/test";

export class DownloadPage {

    constructor(private page: Page) {
    }

    async downloadManager() {
        await this.page.getByTestId('open-download-manager-button').click()
    }

}