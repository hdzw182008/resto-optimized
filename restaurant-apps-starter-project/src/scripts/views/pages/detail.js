import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import RestaurantSource from '../../data/restaurant-source';
import urlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import  { menuDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content_detail">
    </div>
    <div class="likeButtonContainer">
    </div>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailMenu(url.id);
    const displayDetailMenu = document.querySelector('.content_detail');
    displayDetailMenu.innerHTML = menuDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });
    console.log(restaurant);
  },
};

export default Detail;