// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Directives
import { EnlargeCursorDirective } from './shared/directives/enlarge-cursor.directive';
import { StretchableDirective } from './shared/directives/stretchable.directive';
import { TextScrambleDirective } from './shared/directives/text-scramble.directive';
import { TextTypingDirective } from './shared/directives/text-typing.directive';

//Components
import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    EnlargeCursorDirective,
    StretchableDirective,
    TextScrambleDirective,
    TextTypingDirective,
    AppComponent,
    TerminalComponent,
    WelcomeComponent,
    HomeComponent,
    LogoComponent,
    HeaderComponent,
    NavigationComponent,
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
