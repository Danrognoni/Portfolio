import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxParticlesModule } from "@tsparticles/angular";
import { Engine, ISourceOptions } from "@tsparticles/engine"; 
import { loadSlim } from "@tsparticles/slim";
import { NgxTypedJsComponent, NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxParticlesModule, TranslateModule, NgxTypedJsModule],
  templateUrl: './hero.html'
})
export class Hero {
  id = "tsparticles-hero";

  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
 
        resize: {
          enable: true
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5
          }
        }
      },
    },
    particles: {
      color: {
        value: "#fbbf24", 
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100,
      },
      opacity: {
        value: 0.4,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

}