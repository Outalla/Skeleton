import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
