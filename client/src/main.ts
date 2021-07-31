import '@/scss/index';
import { initRouter } from '@/Core/Router';
import Header from '@/Components/Header';
import MainView from '@/View/MainView';
import CalendarView from '@/View/CalendarView';
import ChartsView from '@/View/ChartsView';
import { Route } from './utils/types';

try {
  const $root = document.querySelector('.content-wrapper') as HTMLElement;
  const $header = document.querySelector('header') as HTMLElement;
  const routes: Route[] = [
    { path: '/', redirect: '/main' },
    { path: '/main', component: MainView },
    { path: '/calendar', component: CalendarView },
    { path: '/charts', component: ChartsView },
  ];

  function init() {
    initRouter({ $root, routes });
    new Header($header);
  }

  init();
} catch (error) {
  console.error(error);
}
