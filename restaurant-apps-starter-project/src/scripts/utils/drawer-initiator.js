const DrawerInitiator = {
  init({ hamburger, nav, main }){
    hamburger.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },

  _toggleDrawer(event, nav) {
    event.stopPropagation();
    const checkDrawer = nav.hasAttribute('id');

    if (checkDrawer){
      nav.removeAttribute('id');
    } else {
      nav.setAttribute('id', 'drawer');
    }
  },

  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.removeAttribute('id');
  }
};

export default DrawerInitiator;