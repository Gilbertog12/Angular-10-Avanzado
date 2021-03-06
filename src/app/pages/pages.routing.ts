import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [

{path:'dashboard', component: PagesComponent,
children: [

{path: 'dashboard' , component:DashboardComponent},
{path : 'progress' , component:ProgressComponent},
{path : 'grafica1' , component:Grafica1Component},
// {path:'' , redirectTo:'/dashboard', pathMatch: 'full'},
]},
// { path: '', component: HomeComponent },
// { path: 'path2', component: Name2Component },
// { path: 'path3', component: Name3Component },
// { path: 'path4', component: Name4Component },
// { path: '**', component: PageNotFoundComponent },

//{ path: 'path/:routeParam', component: MyComponent },
//{ path: 'staticPath', component: ... },
//{ path: '**', component: ... },
//{ path: 'oldPath', redirectTo: '/staticPath' },
//{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PagesRoutingModule {}
