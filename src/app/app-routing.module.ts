import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './_service/auth.service';
import { AuthGuard } from './_service/auth.guard';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"contact",component:ContactComponent},
  {path:"signup",component: SignupComponent},
  {path:"logout",component: LogoutComponent},
  {path:"order",component:  OrderComponent},
  {path:"navbar",component: NavbarComponent},
  {path:"footer",component:  FooterComponent},
  {path:"menu",component: MenuComponent ,canActivate:[AuthGuard]},
  {path:"menu/:id",component:  MenupageComponent},
  {path:"about",component:  AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
