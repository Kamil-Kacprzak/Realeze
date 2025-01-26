import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => {
      return import("./pages/home/home.component").then((m) => m.HomeComponent);
    },
  },
  {
    path: "planner",
    pathMatch: "full",
    loadComponent: () => {
      return import("./pages/planner/planner.component").then((m) => m.PlannerComponent);
    },
  },
  {
    path: "contact",
    pathMatch: "full",
    loadComponent: () => {
      return import("./pages/contact/contact.component").then((m) => m.ContactComponent);
    },
  },
  {
    path: "about",
    pathMatch: "full",
    loadComponent: () => {
      return import("./pages/about/about.component").then((m) => m.AboutComponent);
    },
  },
  {
    path: "login",
    pathMatch: "full",
    loadComponent: () => {
      return import("./pages/login/login.component").then((m) => m.LoginComponent);
    },
  },
];
