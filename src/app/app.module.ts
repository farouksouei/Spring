import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {TemplateComponent} from './template/template.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatListModule} from "@angular/material/list";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {NewTransactionComponent} from './new-transaction/new-transaction.component';
import {LoginComponent} from './login/login.component';
import {MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {appHttpInterceptor} from "./interceptors/app-http.interceptor";
import {UserInfosComponent} from './user-infos/user-infos.component';
import {MyAccountsComponent} from './my-accounts/my-accounts.component';
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSortModule} from "@angular/material/sort";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import { UpdateAccountComponent } from './update-account/update-account.component';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { KpiComponent } from './kpi/kpi.component';
import { KpiChartComponent } from './kpi-chart/kpi-chart.component';
import { ReplacePipe } from './replace.pipe';
import { DocumentEntryComponent } from './document-entry/document-entry.component';
import { DocumentTableComponent } from './document-table/document-table.component';
import {NgOptimizedImage} from "@angular/common";
import { StaffingComponent } from './staffing/staffing.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import { UserUpdateComponent } from './components/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DashboardComponent,
    CustomersComponent,
    AccountsComponent,
    TransactionsComponent,
    NewTransactionComponent,
    LoginComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    UserInfosComponent,
    MyAccountsComponent,
    UpdateAccountComponent,
    KpiComponent,
    KpiChartComponent,
    ReplacePipe,
    DocumentEntryComponent,
    DocumentTableComponent,
    StaffingComponent,
    UserListComponent,
    UserFormComponent,
    UserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatIconButton,
    MatDrawer,
    MatDrawerContainer,
    MatListModule,
    MatListItem,
    MatDrawerContent,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatFormFieldModule,
    MatCardActions,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatDialogClose,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
    MatTabGroup,
    MatTableModule,
    MatTableModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatTab,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatDatepickerModule,
    MatNativeDateModule,
    NgOptimizedImage,
    MatSlideToggle
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: appHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
