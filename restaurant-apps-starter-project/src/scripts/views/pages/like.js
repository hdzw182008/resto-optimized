import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import { menuListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
            <div class="menu">
                
            </div>
        `;
  },

  async afterRender(){
    const menus = await FavoriteRestaurantIdb.getAllRestaurant();
    const menuContainer = document.querySelector('.menu');

    menus.forEach((menu) =>{
      menuContainer.innerHTML += menuListTemplate(menu);
    });
  },
};

export default Like;