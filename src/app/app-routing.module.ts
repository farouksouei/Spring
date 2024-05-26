import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NewTransactionComponent} from "./new-transaction/new-transaction.component";
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {LoginComponent} from "./login/login.component";
import {TemplateComponent} from "./template/template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {UserInfosComponent} from "./user-infos/user-infos.component";
import {MyAccountsComponent} from "./my-accounts/my-accounts.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {
    path: "admin", component: TemplateComponent, canActivate: [AuthenticationGuard],
    children: [
      {path: "login", redirectTo: "/login", pathMatch: "full"},
      {path: "my-infos", component: UserInfosComponent},
      {path: "dashboard", component: DashboardComponent},
      {path : "my-accounts", component : MyAccountsComponent},
      {path: "new-transaction", component: NewTransactionComponent},
      {path: "customers", component: CustomersComponent},
      {path: "accounts", component: AccountsComponent},
      {path: "transactions", component: TransactionsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
