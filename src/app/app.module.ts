import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingV1Page } from '../pages/landing-v1/landing-v1';
import { LandingV2Page } from '../pages/landing-v2/landing-v2';
import { DriverPage } from '../pages/driver/driver';
import { DriverInfoPage } from '../pages/driver-info/driver-info';
import { LocationPage } from '../pages/location/location';
import { LocationInfoPage } from '../pages/location-info/location-info';
import { ModulePage } from '../pages/module/module';
import { RolePage } from '../pages/role/role';
import { SectorPage } from '../pages/sector/sector';
import { TenantPage } from '../pages/tenant/tenant';
import { UserPage } from '../pages/user/user';
import { VehiclePage } from '../pages/vehicle/vehicle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingV1Page,
    LandingV2Page,
    DriverPage,
    DriverInfoPage,
    LocationPage,
    LocationInfoPage,
    ModulePage,
    RolePage,
    SectorPage,
    TenantPage,
    UserPage,
    VehiclePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingV1Page,
    LandingV2Page,
    DriverPage,
    DriverInfoPage,
    LocationPage,
    LocationInfoPage,
    ModulePage,
    RolePage,
    SectorPage,
    TenantPage,
    UserPage,
    VehiclePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}