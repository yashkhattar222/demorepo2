import { LightningElement, track } from "lwc";

export default class Child extends LightningElement {
  @track trackProperty;
  @track nonReactProp;

  changeValue(event) {
    this.trackProperty = "This is new value of track property";
    this.nonReactProp = "This is new value of non reactive property";
  }
}
