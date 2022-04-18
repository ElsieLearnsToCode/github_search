import { HttpServiceService } from './../../services/http-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public gitHubUserSearch:string | undefined;
  public githubProfile: any;
  public githubRepos!: any[];
  


  constructor(private httpServiceService: HttpServiceService) { }

  ngOnInit(): void {
  
  }

}
function subscribe(arg0: (response: any) => any) {
  throw new Error('Function not implemented.');
}

