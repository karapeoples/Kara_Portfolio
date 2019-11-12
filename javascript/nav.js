let menuItems = [
    'Home',
    'GitHub',
    'Skills',
    "Work History",
    'Contact',
  ];

  


  function createMenu() {
    const menu = document.createElement('div')
    const menuList = document.createElement('ul')
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    const link3 = document.createElement('a');
    const link4 = document.createElement('a');
    const link5 = document.createElement('a');

    menu.classList.add('menu');
    menu.append(menuList);
    menuList.append(link1, link2, link3, link4, link5);
   
      link1.href = `index.html`;
      link1.textContent = `Home`;
      link2.href =`github.html`;
      link2.textContent = `GitHub`;
      link3.href =`skills.html`;
      link3.textContent = `Skills`;
     
      
    
    
    const hamburger = document.querySelector('.menu-button');
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('menu--open');
      
    });
    
    return menu;
  
  }
  const nav = document.querySelector('.header')
      nav.append(createMenu(menuItems));


  
