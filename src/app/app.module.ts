// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Directives
import { EnlargeCursorDirective } from 'src/app/shared/directives/enlarge-cursor.directive';
import { TextScrambleDirective } from 'src/app/shared/directives/text-scramble.directive';
import { TextTypingDirective } from 'src/app/shared/directives/text-typing.directive';

//Components
import { AppComponent } from './app.component';
import { TerminalComponent } from 'src/app/components/terminal/terminal.component';
import { WelcomeComponent } from 'src/app/pages/welcome/welcome.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { LinkComponent } from 'src/app/components/link/link.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    EnlargeCursorDirective,
    TextScrambleDirective,
    TextTypingDirective,
    AppComponent,
    TerminalComponent,
    WelcomeComponent,
    HomeComponent,
    LogoComponent,
    HeaderComponent,
    NavigationComponent,
    LinkComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
