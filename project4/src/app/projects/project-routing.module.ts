import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectIndexComponent } from './project-index/project-index.component';
import { ProjectCostsComponent } from './project-costs/project-costs.component';
import { BidPackageComponent } from './bid-package/bid-package.component';
import { ProjectMaterialsComponent } from './project-materials/project-materials.component';
import { ProjectLaborComponent } from './project-labor/project-labor.component';
import { ProjectEquipmentComponent } from './project-equipment/project-equipment.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectSiteEquipmentComponent } from './project-site-equipment/project-site-equipment.component';
import { ProjectWorkersComponent } from './project-workers/project-workers.component';
import { AddWorkersComponent } from './add-workers/add-workers.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';


const projectRoutes: Routes = [
	{
		path: 'projects',
		component: ProjectsComponent
	},
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
	},
	{
		path: 'addprojectcosts/:id',
		component: ProjectCostsComponent
	},
	{
		path: 'bidpackage/:id',
		component: BidPackageComponent
	},	
	{
		path: 'projectdetail/:id',
		component: ProjectDetailComponent
	},
	{
		path: 'projectworkers/:id',
		component: ProjectWorkersComponent
	},
	{
		path: 'projectsiteequipment/:id',
		component: ProjectSiteEquipmentComponent
	},
	{
		path: 'addworkers/:id',
		component: AddWorkersComponent

	},
	{
		path: 'addequipment',
		component: AddEquipmentComponent
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