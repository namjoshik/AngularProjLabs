import { Component } from '@angular/core';

// @ts-ignore
// @ts-ignore
@Component ({
  selector: 'app-server',
    templateUrl: './server.component.html',
  styles: [ `
  .online {
    color: white;
  }
  `]
})

export class ServerComponent {

  serverID = 10;
  serverStatus = 'offline';
  serverName = 'Sonic1';

  constructor () {

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  getServerName () {
    return this.serverName;
  }

  getColor () {

    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
