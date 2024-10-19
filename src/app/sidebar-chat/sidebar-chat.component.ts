import { Component, Input } from '@angular/core';
import { ChatDetails } from '../models/chat-details';
import { CommonModule } from '@angular/common'; // <-- Make sure this is imported!

@Component({
  selector: 'app-sidebar-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-chat.component.html',
  styleUrl: './sidebar-chat.component.scss'
})
export class SidebarChatComponent {
  @Input() chat!: ChatDetails; // decorate the property with @Input()
}
