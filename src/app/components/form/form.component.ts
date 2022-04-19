import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public githubUserQuery: string | undefined;
  httpServiceService: any;
  
  constructor() {
    this.httpServiceService.searchUserName().subscribe((response: any) => {
      this.httpServiceService = response.User.name;
    });
   }

  public searchUserName() {
    
  }

  ngOnInit(): void {
  }

}
