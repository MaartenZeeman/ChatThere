import { Component } from '@angular/core';
import { SidebarChatComponent } from "../sidebar-chat/sidebar-chat.component";
import { CommonModule } from '@angular/common'; // <-- Make sure this is imported!

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarChatComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  chats = [
    {
      Name: "Cody Coder",
      DateActive: new Date("2024-10-17 13:37"),
      LastQuestion: "What time is the meeting?",
    },
    {
      Name: "Kees Kroket",
      DateActive: new Date("2024-10-16 13:37"),
      LastQuestion: "How do I reset my password?",
    },
    {
      Name: "Sally Salaris",
      DateActive: new Date("2024-10-16 13:37"),
      LastQuestion: "Can I get the project update?",
    }]
}
