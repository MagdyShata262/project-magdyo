import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  isDevMode, // <-- استيراد isDevMode
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

// استيراد دوال NgRx
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),

    // === إعدادات NgRx ===
    // 1. تهيئة الـ Store الرئيسي للتطبيق
    provideStore({}),

    // 2. تفعيل أدوات المطور (Redux DevTools) فقط في وضع التطوير
    provideStoreDevtools({
      maxAge: 25, // الاحتفاظ بآخر 25 حالة
      logOnly: !isDevMode(), // تسجيل الأفعال فقط في وضع الإنتاج
      // في الإنتاج، يمكنك إيقاف الأدوات تمامًا عن طريق إضافة التالي:
      // connectInDevModeOnly: true, // أو استخدام isDevMode() كقيمة للـ disabled
    }),
  ],
};
