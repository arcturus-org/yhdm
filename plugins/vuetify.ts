import { createVuetify } from 'vuetify';
import { defineNuxtPlugin } from '#imports';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
