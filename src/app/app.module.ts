import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UcommHomeComponent } from './ucomm-home/ucomm-home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeIntHeaderComponent } from './home-int-header/home-int-header.component';
import { routing } from './app.routing';
import { HomeNavyStartComponent } from './home-navy-start/home-navy-start.component';
import { KeyBenefitsComponent } from './key-benefits/key-benefits.component';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { AceTestimonialComponent } from './ace-testimonial/ace-testimonial.component';
import { HomeCourseCategoriesComponent } from './home-course-categories/home-course-categories.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeDisclaimerComponent } from './home-disclaimer/home-disclaimer.component';
import { HomeIntFooterComponent } from './home-int-footer/home-int-footer.component';
import { InteriorHeroComponent } from './interior-hero/interior-hero.component';
import { InteriorAllCoursesComponent } from './interior-all-courses/interior-all-courses.component';
import { InteriorTabsComponent } from './interior-tabs/interior-tabs.component';
import { UcommInteriorComponent } from './ucomm-interior/ucomm-interior.component';

@NgModule({
  declarations: [
    AppComponent,
    UcommHomeComponent,
    HomeHeroComponent,
    HomeIntHeaderComponent,
    HomeNavyStartComponent,
    KeyBenefitsComponent,
    FeaturedCoursesComponent,
    AceTestimonialComponent,
    HomeCourseCategoriesComponent,
    HomeSearchComponent,
    HomeDisclaimerComponent,
    HomeIntFooterComponent,
    InteriorHeroComponent,
    InteriorAllCoursesComponent,
    InteriorTabsComponent,
    UcommInteriorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
