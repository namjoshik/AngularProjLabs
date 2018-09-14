import { Component } from '@angular/core';

// @ts-ignore
// @ts-ignore
@Component ({
  selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

  serverID = 10;
  serverStatus = 'offline';
  serverName = 'Sonic1';

  getServerName () {
    return this.serverName;
  }

}
