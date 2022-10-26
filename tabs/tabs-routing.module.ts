import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {ContractsPage} from "../contracts/contracts.page";
import {ContactsPage} from "../contacts/contacts.page";
import {AssetsPage} from "../assets/assets.page";
import {HomePage} from "../home/home.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contracts',
        component: ContractsPage
      },
      {
        path: 'contacts',
        component: ContactsPage
      },
      {
        path: 'assets',
        component: AssetsPage
      },
      {
        path: 'home',
        component: HomePage
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
