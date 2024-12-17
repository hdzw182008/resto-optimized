const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking and unliking a restaurant', async ({ I })=>{
  I.wait(5);
  I.seeElement('.menu_name');
  const firstRestaurant = locate('.menu_name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.menu_item');
  const likedRestaurantTitle = await I.grabTextFrom('.menu_name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.amOnPage('/#/like');
  I.wait(5);
  I.scrollTo('#mainContent');
  I.seeElement('.menu_item');
  I.seeElement('.menu_name');
  I.click(locate('.menu_name').first());
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/');
});