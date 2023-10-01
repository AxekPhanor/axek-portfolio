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
