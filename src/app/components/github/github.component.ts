import { HttpServiceService } from './../../services/http-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private httpservice: HttpServiceService) { }

  ngOnInit(): void {
    this.httpservice.getUsers()
    .subscribe((response: any) => (
      console.log("Data",Response)
    ));
  }

}
function subscribe(arg0: (response: any) => any) {
  throw new Error('Function not implemented.');
}

