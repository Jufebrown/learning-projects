import { Component, OnInit } from '@angular/core';

import { ContactUs } from '../contact-us';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  model = new ContactUs('', '', '');

  submitted = false;

  newMessage() {
    this.model = new ContactUs('', '', '');
  }

  onSubmit() {
    this.submitted = true;
  }
  constructor() {}
}
