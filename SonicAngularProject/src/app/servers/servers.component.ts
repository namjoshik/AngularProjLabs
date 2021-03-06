import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;

  serverCreationStatus = 'No server was created';

  serverName = 'Unnamed';

  Servers = ['TestServer', 'TestServer 2'];

  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {

    this.serverCreated = true;
    this.Servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + ' was created';
  }

  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
