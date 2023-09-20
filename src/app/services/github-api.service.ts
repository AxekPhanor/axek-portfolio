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
