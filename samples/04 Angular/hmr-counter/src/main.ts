import {ApplicationRef, enableProdMode, NgModuleRef} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {createNewHosts} from '@angularclass/hmr';

if (environment.production) {
  enableProdMode();
}

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => ngModule = mod);
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

declare var module;

hmrBootstrap(module, bootstrap);
