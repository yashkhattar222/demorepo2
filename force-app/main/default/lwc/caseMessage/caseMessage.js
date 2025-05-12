import { LightningElement, track, wire } from 'lwc';
import getTodaysCaseCount from '@salesforce/apex/CaseNotificationController.getTodaysCaseCount';

export default class CaseMessage extends LightningElement {
    @track caseCount = 0;

    @wire(getTodaysCaseCount)
    wiredCaseCount({ error, data }) {
        if (data !== undefined) {
            this.caseCount = data;
        } else if (error) {
            console.error('Error retrieving case count:', error);
        }
    }
}