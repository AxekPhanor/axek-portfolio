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
