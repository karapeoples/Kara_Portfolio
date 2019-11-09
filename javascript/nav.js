let menuItems = [
    'Home',
    'GitHub',
    'Skills',
    "Work History",
    'Contact',
  ];


  function createMenu(array) {
    const menu = document.createElement('div')
    menu.classList.add('menu');
  
    const menuList = document.createElement('ul')
    menu.append(menuList);
  
    array.forEach(info => {
      const items = document.createElement('li');
      items.textContent = info;
      menuList.append(items);
    });
    
    const hamburger = document.querySelector('.menu-button');
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('menu--open');
      
    });
    
    return menu;
  
  }
  const nav = document.querySelector('.header')
      nav.append(createMenu(menuItems));


  
