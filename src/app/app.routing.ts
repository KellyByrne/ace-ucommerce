import { RouterModule, Routes } from '@angular/router';

import { UcommHomeComponent } from "./ucomm-home/ucomm-home.component";
import { HomeIntHeaderComponent } from "./home-int-header/home-int-header.component";
import { HomeHeroComponent } from "./home-hero/home-hero.component";
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
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';

const APP_ROUTES: Routes = [
  { path: 'ucomm-home', component: UcommHomeComponent},
  { path: 'ucomm-interior', component: UcommInteriorComponent },
  { path: 'ucomm-checkout', component: CartCheckoutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);