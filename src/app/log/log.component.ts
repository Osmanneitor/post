import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  model: User = { name: '', contrasenia: '' }
  constructor() { }
  onSubmit(){
    
  }
  ngOnInit(): void {
  }
  
}
