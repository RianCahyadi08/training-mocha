class LoginPage {
  get telkomSSOTab() {
    return $('android=new UiSelector().descriptionContains("Telkom SSO")');
  }

  get emailTab() {
    return $('android=new UiSelector().descriptionContains("Email")');
  }

  get nikField() {
    return $(
      `android=new UiSelector().className("android.widget.EditText").instance(0)`
    );
  }

  get emailField() {
    return $(
      'android=new UiSelector().className("android.widget.EditText").instance(0)'
    );
  }

  get passwordField() {
    return $(
      'android=new UiSelector().className("android.widget.EditText").instance(1)'
    );
  }

  get btnSignIn() {
    return $(`android=new UiSelector().description("Sign In")`);
  }

  async tapTelkomSSOTab() {
    await this.telkomSSOTabulation.click();
  }

  async tapEmailTab() {
    await this.emailTab.click();
  }

  async tapBtnSignIn() {
    await this.btnSignIn.click();
  }

  async loginEmail(email, password) {
    await this.emailField.click();
    await this.emailField.setValue(email);
    await driver.hideKeyboard();
    await this.passwordField.click();
    await this.passwordField.setValue(password);
    await driver.hideKeyboard();
    await this.tapBtnSignIn();
  }
}

export default new LoginPage();
