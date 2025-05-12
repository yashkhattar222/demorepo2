import { LightningElement } from "lwc";
export default class GetterDemo extends LightningElement {
  firstName = "test";
  lastName = "1";
  handleChange(event) {
    const field = event.target.name;
    if (field === "fname") {
      this.firstName = event.target.value;
    } else if (field === "lname") {
      this.lastName = event.target.value;
    }
  }
  get upperCaseFullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }
}
