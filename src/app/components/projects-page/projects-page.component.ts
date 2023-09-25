import { Component, Output } from '@angular/core';
import { GithubAPIService } from 'src/app/services/github-api.service'
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  @Output() projects : Project[] = [];

  constructor(private GithubAPIService: GithubAPIService){}

  ngOnInit() {
    this.GithubAPIService.getProjects()
    .then((res) => {
      for(let data of res.data){
        let project: Project = {
          id: data.id,
          name: data.name,
          description: "",
          createdAt: "",
          htmlUrl: data.html_url,
          cloneUrl: data.clone_url,
          downloadUrl: "https://github.com/AxekPhanor/"+data.name+"/archive/refs/heads/master.zip", //downloadUrl API NO LONGER SUPPORT
        }
        if(data.description){
          project.description = data.description;
        }
        if(data.created_at){
          project.createdAt = data.created_at.slice(0, 10);
        }
        if(project.name != "globalWarming"){
          this.projects.push(project);
        }
      }
    });
  }
}
