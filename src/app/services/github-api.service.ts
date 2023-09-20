import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService {
  octokit = new Octokit({auth: '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'});
  constructor() {}
  getProjects(){
    return this.octokit.request("GET /user/repos", {});
  }
}
