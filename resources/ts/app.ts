/* eslint-disable import/no-dynamic-require */
import { createApp, h } from 'vue';
import { App, plugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { DateTime } from 'luxon';

InertiaProgress.init({
  color: '#ffaa30',
  includeCSS: true,
  showSpinner: true,
});

const el = document.getElementById('app') as HTMLDivElement;

const app = createApp({
  render: () => h(App, {
    initialPage: JSON.parse(<string>el.dataset.page),
    resolveComponent: (name: string) => import(`./Pages/${name}`).then((module) => module.default),
  }),
});
app.config.globalProperties.$luxon = DateTime;
app.use(plugin).mount(el);
