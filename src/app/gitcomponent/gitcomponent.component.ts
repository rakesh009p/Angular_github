import { Component, OnInit } from '@angular/core';
import {  GitserviceService } from '../gitservice.service' ;
@Component({
 selector: 'app-gitcomponent',
 templateUrl: './gitcomponent.component.html',
 styleUrls: ['./gitcomponent.component.css']
})
export class gitcomponent implements OnInit {
 user: any ;
 constructor(private e: GitserviceService) {
   this.e.getData().subscribe(
     data => {
       this.user = data;
       console.log(this.user);

     }
   )
 }

 ngOnInit() {
 }

}