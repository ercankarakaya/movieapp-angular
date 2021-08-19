import { Component, OnInit } from '@angular/core';
import localJsonData from '../LocalJsonData.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  GeneralData=localJsonData;
  //navTitle=localJsonData.TITLE.navTitle;



  constructor() { }

  ngOnInit(): void {
  }

}
