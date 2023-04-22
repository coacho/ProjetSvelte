import Home from './views/Home.svelte';
import Game2 from './views/Game2.svelte';
import Game3 from './views/Game3.svelte';

const routes = [
  // {
  //   name: '/Home',
  //   component: Home,
  // },
  {
    name: '/game2',
    url : '/game2',
    component: Game2,
  },
  {
    name: '/game3',
    url : '/game2',
    component: Game3,
  }
];

export default{
   
  '/': Home,
  //'/test': routes

}

