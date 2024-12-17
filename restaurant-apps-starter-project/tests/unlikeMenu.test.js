import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Unlike A Movie', () =>{
  const addLikeButtonContainer = () =>{
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(async () =>{
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id:1 });
  });

  afterEach(async ()=>{
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the menu has been liked', async () =>{
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    expect(document.querySelector('[aria-label= "unlike this menu"]')).toBeTruthy();

  });

  it('should not display like widget when the menu has been liked', async () =>{
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    expect(document.querySelector('[aria-label= "like this menu"]')).toBeFalsy();
  });

  it('should be able to remove liked menu from the list', async () =>{
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    document.querySelector('[aria-label="unlike this menu"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked menu is not in the list', async ()=>{
    await TestFactories.createLikeButtonPresenterWithMenu({ id:1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this menu"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});