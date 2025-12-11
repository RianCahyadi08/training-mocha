import { driver, expect } from "@wdio/globals";
import LoginPage from "../pages/LoginPage";
import OnboardingPage from "../pages/OnboardingPage";
import HomePage from "../pages/HomePage";

describe("User on login page", () => {
  it("User login successfully", async () => {
    await OnboardingPage.tapSkip();
    await driver.pause(500);
    await LoginPage.tapEmailTab();
    await driver.pause(500);
    await LoginPage.loginEmail("rian.cahyadi@mydigilearn.id", "P@55word");
    await driver.pause(500);
    await HomePage.homeMenu.waitForDisplayed({ timeout: 5000 });
    await driver.pause(500);
    await expect(HomePage.homeMenu).toBeDisplayed();
  });
});
