import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatResponse {
  answer: string;
  sources: string[];
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
})
export class ChatWidgetComponent {
  // ==== CHANGE THIS to your Render API URL ====
  private apiUrl = 'https://kartiks-chatbot.onrender.com/chat';

  @ViewChild('scrollArea') private scrollArea!: ElementRef<HTMLDivElement>;

  open = false;
  question = '';
  loading = false;
  messages: Message[] = [
    { role: 'bot', text: "Hi! Ask me anything about Kartik." },
  ];
  // Shown only for the very first request, which may be slow (server waking up).
  firstRequest = true;

  constructor(private http: HttpClient) {}

  toggle() {
    this.open = !this.open;
  }

  send() {
    const q = this.question.trim();
    if (!q || this.loading) return;

    this.messages.push({ role: 'user', text: q });
    this.question = '';
    this.loading = true;
    this.scrollSoon();

    this.http.post<ChatResponse>(this.apiUrl, { question: q }).subscribe({
      next: (res) => {
        this.messages.push({ role: 'bot', text: res.answer });
        this.loading = false;
        this.firstRequest = false;
        this.scrollSoon();
      },
      error: () => {
        this.messages.push({
          role: 'bot',
          text: "Something went wrong reaching the server. Please try again.",
        });
        this.loading = false;
        this.scrollSoon();
      },
    });
  }

  private scrollSoon() {
    // wait for the DOM to update, then scroll to the newest message
    setTimeout(() => {
      if (this.scrollArea) {
        this.scrollArea.nativeElement.scrollTop =
          this.scrollArea.nativeElement.scrollHeight;
      }
    }, 50);
  }
}
