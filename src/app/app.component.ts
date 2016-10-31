import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'app works!';
  private wsUri = 'ws://localhost:8812';
  private websocket:WebSocket = null;

  public test(evt) {
    this.websocket = new WebSocket(this.wsUri);
    this.websocket.onopen = this.onOpen;
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage;
    this.websocket.onerror = this.onError;
  }

  private onOpen = (ev: Event): any => {
    console.log("CONNECTED");
    this.doSend("WebSocket rocks");
  }

  private onClose = (ev: CloseEvent): any => {
    console.log("DISCONNECTED");
  }

  private onMessage = (ev: MessageEvent): any => {
    console.log('RESPONSE: ' + ev.data);
    this.websocket.close();
  }

  private onError = (ev: ErrorEvent): any => {
    console.log('ERROR: ' + ev.error);
  }

  private doSend(message) {
    console.log("SENT: " + message);
    this.websocket.send(message);
  }
}
