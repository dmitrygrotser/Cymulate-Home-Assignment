import {Page} from "@playwright/test";
import Env from "../helpers/env";

export class LoginPage {

    constructor(private page: Page) {
    }

    async open() {
        await this.page.goto(Env.BASE_URL!);
    }

    async login(email: string, password: string) {
        await this.open();
        await this.page.locator('input[test-id="email"]').fill(email);
        await this.page.locator('input[test-id="password"]').fill(password);
        await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();
        // await this.page.getByTestId('sign-in').click()
        // await this.page.locator('input[test-id="sign-in"]').click();
    }
}