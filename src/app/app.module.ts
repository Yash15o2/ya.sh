import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { EnlargeCursorDirective } from './shared/directives/enlarge-cursor.directive';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    WelcomeComponent,
    HomeComponent,
    EnlargeCursorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
