import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <div style="border: 2px dashed #ffa600; padding: 10px; margin: 10px 0;">
      <p>User: <strong>{{ name }}</strong></p>
      <button type="button" (click)="sendNotification()">Send notification</button>
    </div>
  `,
})
export class UserComponent {
  @Input() name = '';
  @Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit(`Hello! ${this.name}`);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserComponent],
  template: `
    <main style="padding: 20px; font-family: sans-serif;">
      <h1 style="color: #dd0031;">Angular Tutorial</h1>

      @if (isLoggedIn) {
        <p>✅ Entered as a <strong>{{ username }}</strong></p>
        <button type="button" (click)="isLoggedIn = false">Log off</button>
      } @else {
        <button type="button" (click)="isLoggedIn = true">Log In</button>
      }

      <hr>

      <h3>Team:</h3>
      @for (user of users; track user.id) {
        <app-user [name]="user.name" (notify)="onChildNotify($event)" />
      }

      <hr>

      <form [formGroup]="contactForm" (ngSubmit)="handleFormSubmit()">
        <input type="email" formControlName="email" placeholder="email">
        <button type="submit" [disabled]="contactForm.invalid">Send</button>
      </form>

      <p style="margin-top: 20px; font-style: italic;">{{ serviceMessage }}</p>
    </main>
  `,
})
export class AppComponent {
  isLoggedIn = false;
  username = 'Manarbek Assylbek';
  users = [{id: 1, name: 'Ali'}, {id: 2, name: 'Zharas'}];

  private housingService = inject(HousingService);
  serviceMessage = this.housingService.getMessage();

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onChildNotify(message: string) {
    alert(message);
  }

  handleFormSubmit() {
    alert('Email: ' + this.contactForm.value.email);
  }
}