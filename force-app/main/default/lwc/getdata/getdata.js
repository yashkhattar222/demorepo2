import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/AccountController.getAccounts";

export default class Getdata extends LightningElement {
  contacts;
  error;

  @wire(getAccounts)
  wiredAccounts({ error, data }) {
    if (data) {
      this.contacts = data;
      this.error = undefined;
    } else if (error) {
      this.error = error.body.message;
      this.contacts = undefined;
    }
  }
}
