import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ChatboxService } from '../../services/chatbox.service';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  messages: any[] = [];
  newMessage = '';
  intervalSubscription: Subscription = new Subscription;
  constructor(private communicationService:ChatboxService ) { }

  ngOnInit(): void {
    this.loadMessages();
  // Fetch new messages every 5 seconds
    this.intervalSubscription = interval(1000).subscribe(() => {
        this.loadMessages();
    });
}
ngOnDestroy(): void {
  // Unsubscribe from interval to prevent memory leaks
  this.intervalSubscription.unsubscribe();
}
private loadMessages(): void {
  this.communicationService.getMessage().subscribe((data: any[]) => {
    this.messages = data.filter((message: { receiver: string; }) => message.receiver === 'user' || message.receiver === 'admin');
  });
}
sendMessage(message:string){
  this.communicationService.postMessage(message, 'user', 'admin').subscribe(() => {
    this.messages.push({
      message: message,
      sender: 'user',
      receiver: 'admin'});
      this.newMessage = ''; // clear the input field
    });
  }

}
