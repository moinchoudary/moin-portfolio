import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmailJSResponseStatus } from 'emailjs-com';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-hireme',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './hireme.component.html',
  styleUrl: './hireme.component.scss'
})
export class HiremeComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    // Replace these with your EmailJS credentials
    const serviceID = 'service_2fvzy3x';    // Email service you create in EmailJS
    const templateID = 'template_s2arqtv';  // Email template you create in EmailJS
    const userID = 'TtqD7JSdyENFDdUBA';          // Public key from EmailJS dashboard

 emailjs.send(serviceID, templateID, {
  name: this.contact.name,
  email: this.contact.email,
  message: this.contact.message
}, userID)

      .then((response: EmailJSResponseStatus) => {
        this.contact = { name: '', email: '', message: '' }; // Clear form
      }, (err) => {
        alert('Failed to send message. Please try again.');
        console.error(err);
      });
  }
}
