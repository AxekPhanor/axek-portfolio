import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService {
  octokit = new Octokit({auth: ''});
  constructor() {}
  getProjects(){
    return this.octokit.request("GET /user/repos", {});
  }
}
