import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './modules/public/countdown-timer/countdown-timer.component';
import { ErrorPageComponent } from './modules/public/error-page/error-page.component';

// ------ External Libraries ----------------
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './modules/public/home/home.component';
import { TermsAndConditionsComponent } from './modules/public/legal/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './modules/public/legal/privacy-policy/privacy-policy.component';
import { HowItWorksComponent } from './modules/public/how-it-works/how-it-works.component';
import { AboutUsComponent } from './modules/public/about-us/about-us.component';
import { LoginComponent } from './modules/public/login/login.component';
import { PublicProfileComponent } from './modules/public/public-profile/public-profile.component';
import { SearchResultsComponent } from './modules/public/search-results/search-results.component';
import { PublicHeaderComponent } from './shared/components/navigation/public-header/public-header.component';
import { AdminHeaderComponent } from './shared/components/navigation/admin-header/admin-header.component';
import { AdminFooterComponent } from './shared/components/navigation/admin-footer/admin-footer.component';
import { PublicFooterComponent } from './shared/components/navigation/public-footer/public-footer.component';
import { SignUpComponent } from './modules/public/sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LegalComponent } from './modules/public/legal/legal.component';
import { DashboardComponent } from './modules/admin/admin/dashboard/dashboard.component';
import { ProfileComponent } from './modules/admin/admin/profile/profile.component';
import { TreatmentsComponent } from './modules/admin/admin/treatments/treatments.component';
import { HealthCardComponent } from './modules/admin/admin/health-card/health-card.component';
import { PaymentsComponent } from './modules/admin/admin/payments/payments.component';
import { SettingsComponent } from './modules/admin/admin/settings/settings.component';
import { DropdownExpandDirective } from './shared/directives/dropdown-expand.directive';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { HeaderNotificationComponent } from './shared/components/cards/header-notification/header-notification.component';
import { CardCurrentTreatmentMiniComponent } from './shared/components/cards/card-current-treatment-mini/card-current-treatment-mini.component';
import { CardPrimaryPhysicianMiniComponent } from './shared/components/cards/card-primary-physician-mini/card-primary-physician-mini.component';
import { CardProfileMiniComponent } from './shared/components/cards/card-profile-mini/card-profile-mini.component';
import { CardPaymentsMiniComponent } from './shared/components/cards/card-payments-mini/card-payments-mini.component';
import { CardRecentTreatmentsMiniComponent } from './shared/components/cards/card-recent-treatments-mini/card-recent-treatments-mini.component';
import { CardPaymentsComponent } from './shared/components/cards/card-payments/card-payments.component';
import { CardTreatmentsComponent } from './shared/components/cards/card-treatments/card-treatments.component';
import { CardHealthCardComponent } from './shared/components/cards/card-health-card/card-health-card.component';
import { PaymentTableComponent } from './shared/components/tables/payment-table/payment-table.component';
import { PageFooterSlideOutComponent } from './shared/components/elements/page-footer-slide-out/page-footer-slide-out.component';
import { PaymentCheckoutComponent } from './shared/components/elements/payment-checkout/payment-checkout.component';
import { ViewChatComponent } from './shared/components/elements/view-chat/view-chat.component';
import { MedicalAidSubmissionComponent } from './shared/components/elements/medical-aid-submission/medical-aid-submission.component';
import { RequestDisputeComponent } from './shared/components/elements/request-dispute/request-dispute.component';
import { CardHealthCardStatsComponent } from './shared/components/cards/card-health-card-stats/card-health-card-stats.component';
import { CardHealthCardDailyComponent } from './shared/components/cards/card-health-card-daily/card-health-card-daily.component';
import { BarGraphComponent } from './shared/components/charts/bar-graph/bar-graph.component';
import { ClickActiveDirective } from './shared/directives/click-active/click-active.directive';
import { CalendarComponent } from './shared/components/calendar/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {   FlatpickrModule } from 'angularx-flatpickr';
import { CardProfileGeneralComponent } from './shared/components/cards/card-profile-general/card-profile-general.component';
import { CardProfileSettingsComponent } from './shared/components/cards/card-profile-settings/card-profile-settings.component';

// export function momentAdapterFactory() {
//   return adapterFactory(moment);
// };
// ------ End of External Libraries ----------

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    ErrorPageComponent,
    HomeComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    HowItWorksComponent,
    AboutUsComponent,
    LoginComponent,
    PublicProfileComponent,
    SearchResultsComponent,
    PublicHeaderComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    PublicFooterComponent,
    SignUpComponent,
    LegalComponent,
    DashboardComponent,
    ProfileComponent,
    TreatmentsComponent,
    HealthCardComponent,
    PaymentsComponent,
    SettingsComponent,
    DropdownExpandDirective,
    AdminComponent,
    HeaderNotificationComponent,
    CardCurrentTreatmentMiniComponent,
    CardPrimaryPhysicianMiniComponent,
    CardProfileMiniComponent,
    CardPaymentsMiniComponent,
    CardRecentTreatmentsMiniComponent,
    CardPaymentsComponent,
    CardTreatmentsComponent,
    CardHealthCardComponent,
    PaymentTableComponent,
    PageFooterSlideOutComponent,
    PaymentCheckoutComponent,
    ViewChatComponent,
    MedicalAidSubmissionComponent,
    RequestDisputeComponent,
    CardHealthCardStatsComponent,
    CardHealthCardDailyComponent,
    BarGraphComponent,
    ClickActiveDirective,
    CalendarComponent,
    CardProfileGeneralComponent,
    CardProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountdownModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
