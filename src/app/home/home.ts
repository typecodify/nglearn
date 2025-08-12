import { Component } from '@angular/core';
import { Data } from '../data';
import { Globals } from '../globals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  zipData: any = [];
  zipCode: string = '';
  showData: string = '';
  constructor(private dataService: Data, private global: Globals) {}

  showZipData() {
    this.dataService.getData(this.global.getZipData + this.zipCode)
    .subscribe(data => {
      this.zipData = data;
      this.showData = "You are in " + this.zipData["places"][0]["place name"] + ", " + this.zipData["places"][0]["state"] + ", " + this.zipData["country"];
    });
  }
}
