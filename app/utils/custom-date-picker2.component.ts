import {Component} from '@angular/core';

@Component({
    selector: 'custom-date-picker2',
    template: `
        <div>
            <md2-datepicker [(ngModel)]="model"
                            type="date"
                            placeholder="Data"
                            format="DD/MM/YYYY"
                            (change)="change($event)">
            </md2-datepicker>
        </div>
    `,
    styles: ['div {padding: 8px; margin: 0px 0 10px 0; solid: #bab9b9; font-weight: 400; font-size: 16px; color: #333; display: block; outline: none; -webkit-transition: background 0.5s ease-out; -moz-transition: background 0.5s ease-out; transition: background 0.5s ease-out;}']
})

export class CustomDatePickerComponent2 {
    model: Date = new Date;
}
