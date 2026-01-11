import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactMeService } from '../../service/contact-me.service';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
    contactForm: FormGroup;
    submitted: Boolean =false;

constructor(private fb: FormBuilder, private cs: ContactMeService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.cs.send(this.name?.value, this.email?.value,this.message?.value).subscribe();
      this.submitted = true;
      this.contactForm.reset();
    }
  }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}
