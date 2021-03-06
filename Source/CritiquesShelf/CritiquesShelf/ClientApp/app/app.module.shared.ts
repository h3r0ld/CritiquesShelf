import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatCommonModule } from '@angular/material';
import { MatCheckboxModule,MatGridListModule, MatAutocompleteModule,MatSelectModule,MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatTabsModule, MatPaginatorModule} from '@angular/material';
 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { BookBrowserComponent } from './components/bookBrowser/bookBrowser.component';
import { BookApprovalComponent } from './components/bookApproval/bookApproval.component';
import { DialogNewBookProposal } from './components/bookBrowser/bookBrowser.component';

import {  SimpleModalComponent} from './components/shared/simpleModal/modal.component';

import { ProfileComponent } from './components/profile/profile.component';
import { UserDetailsComponent } from './components/userDetails/userDetails.component';
import { BookDetailsComponent } from './components/bookDetails/bookDetails.component';
import { UserDetailsBooksComponent } from './components/userDetailsBooks/userDetailsBooks.component';


import { BookListComponent } from './components/shared/bookList/bookList.component';
import { BookDisplayComponent } from './components/shared/book/book.component';
import { ReviewComponent } from './components/shared/review/review.component';
import { StarsComponent } from './components/shared/stars/stars.component';
import { UserComponent } from './components/shared/user/user.component';
import { UserBooksComponent } from './components/shared/userBooks/userBooks.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        BookBrowserComponent,
        DialogNewBookProposal,
        HomeComponent,
        ProfileComponent,
        ReviewComponent,
        BookDisplayComponent,
        BookListComponent,
        BookApprovalComponent,
        StarsComponent,
        UserComponent,
        UserDetailsComponent,
        UserBooksComponent,
        UserDetailsBooksComponent,
        BookDetailsComponent,
        SimpleModalComponent
    ],
    entryComponents: [
        DialogNewBookProposal,
        SimpleModalComponent
    ],
    imports: [
        CommonModule, MatCheckboxModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        MatCardModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatButtonModule,
        NoopAnimationsModule,
        MatGridListModule,
        MatDialogModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'browse', component: BookBrowserComponent },
            { path: 'bookApproval', component: BookApprovalComponent },
            { path: 'bookDetails/:id', component: BookDetailsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'bookDetails/:id', component: UserDetailsComponent },
            { path: 'userDetails/:id', component: UserDetailsComponent },
            { path: 'userDetails/:id/books', component: UserDetailsBooksComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
