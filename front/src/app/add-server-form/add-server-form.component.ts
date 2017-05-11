import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server-form',
  templateUrl: './add-server-form.component.html',
  styleUrls: ['./add-server-form.component.css']
})
export class AddServerFormComponent {
  public serverName:string = "";

  constructor() {  }

  get isResetEnabled() {
    return this.hasServerName;
  }

  get hasServerName() {
    return this.serverName.trim().length > 0;
  }



  onClickResetForm() {
    this.serverName = "";
  }
}
