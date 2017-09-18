import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectIndexComponent } from './project-index/project-index.component';

const projectRoutes: Routes = [
	{
		path: 'projects',
		component: ProjectsComponent,
		children: [
			{
				path: 'newproject',
				component: NewProjectComponent
			},
			{
				path: 'allprojects',
				component: ProjectIndexComponent
			},
			{
				path: 'editproject',
				component: ProjectEditComponent
			}
		]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(projectRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class ProjectRoutingModule { }