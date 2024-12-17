import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Liking a Menu', () => {
  const addLikeButtonContainer = () =>{
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(() =>{
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async ()=>{
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    expect(document.querySelector('[aria-label="like this menu"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    expect(document.querySelector('[aria-label="unlike this menu"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });
    document.querySelector('.like').dispatchEvent(new Event('click'));

    const menu = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(menu).toEqual({ id:1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async ()=>{
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    await FavoriteRestaurantIdb.putRestaurant({ id:1 });

    document.querySelector('.like').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id:1 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  xit('should not add a menu when it has no id', async () =>{
    await TestFactories.createLikeButtonPresenterWithMenu({});

    document.querySelector('.like').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});