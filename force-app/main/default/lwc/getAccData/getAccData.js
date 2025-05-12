import { LightningElement } from "lwc";
import getdata from "@salesforce/apex/getdata.getdata";

export default class GetAccData extends LightningElement {
  accountid = "";
  account;
  error;

  handleInput(event) {
    this.accountid = event.target.value;
  }

  handleClick() {
    getdata({ acc: this.accountid })
      .then((result) => {
        this.account = result;
        this.error = undefined;
      })
      .catch((error) => {
        this.error = error;
        this.account = undefined;
      });
  }
}
 