import {Component, ViewChild} from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';

@Component({
    selector: 'custom-date-picker',
    template: `
        <div>
            <dp-date-picker #datePicker></dp-date-picker>
        </div>
    `,
    styles: ['div {padding: 8px; margin: 0px 0 10px 0; solid: #bab9b9; font-weight: 400; font-size: 16px; color: #333; display: block; outline: none; -webkit-transition: background 0.5s ease-out; -moz-transition: background 0.5s ease-out; transition: background 0.5s ease-out;}']
})

export class CustomDatePickerComponent {
    @ViewChild('datePicker') dayPicker: DatePickerComponent;

    dateOpen() {
        this.dayPicker.api.open();
    }

    dateClose() {
        this.dayPicker.api.close();
    }
}