import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { IntroSectionComponent } from './componentes/intro-section/intro-section.component';
import { AboutUsSectionComponent } from './componentes/about-us-section/about-us-section.component';
import { ServicesSectionComponent } from './componentes/services-section/services-section.component';
import { WhyUsSectionComponent } from './componentes/why-us-section/why-us-section.component';
import { PortfolioSectionComponent } from './componentes/portfolio-section/portfolio-section.component';
import { ClientsSectionComponent } from './componentes/clients-section/clients-section.component';
import { TeamSectionComponent } from './componentes/team-section/team-section.component';
import { Clients2SectionComponent } from './componentes/clients2-section/clients2-section.component';
import { ContactSectionComponent } from './componentes/contact-section/contact-section.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    IntroSectionComponent,
    AboutUsSectionComponent,
    ServicesSectionComponent,
    WhyUsSectionComponent,
    PortfolioSectionComponent,
    ClientsSectionComponent,
    TeamSectionComponent,
    Clients2SectionComponent,
    ContactSectionComponent,
    PieDePaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
