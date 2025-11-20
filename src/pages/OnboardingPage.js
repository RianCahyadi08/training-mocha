class OnboardingPage {
  get skip() {
    return $("~Skip");
  }

  get alreadyHaveAccount() {
    return $("~Already have account");
  }

  get next() {
    return $("~Next");
  }

  get getStarted() {
    return $("~Get Started");
  }

  async tapSkip() {
    await this.skip.click();
  }

  async tapAlreadyHaveAccount() {
    await this.alreadyHaveAccount.click();
  }

  async tapGetStarted() {
    await this.getStarted().click();
  }
}

export default new OnboardingPage();
