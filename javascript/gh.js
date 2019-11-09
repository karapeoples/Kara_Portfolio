const ghCard = (ghInfo) =>{
    const ghUser = document.createElement("div");
    const ghImg = document.createElement("img");
    const cardInfo = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const username = document.createElement("p");
    const location = document.createElement("p");
    const profile = document.createElement("p");
    const link = document.createElement("a");
    const followers = document.createElement("p");
    const following = document.createElement("p");
    const bio = document.createElement("p");
  
    ghImg.src = ghInfo.avatar_url;
    cardTitle.textContent = `Name: ${ghInfo.name}`;
    username.textContent = `Username: ${ghInfo.login}`;
    location.textContent = `Location: ${ghInfo.location}`;
    link.href = ghInfo.html_url
    link.textContent =`${ghInfo.html_url}`;
    profile.textContent = `Profile: ` ;
    followers.textContent = `Followers: ${ghInfo.followers}`;
    following.textContent =  `Following: ${ghInfo.following}`;
    bio.textContent = `About: ${ghInfo.bio}`;
    
    
    ghUser.append(ghImg, cardInfo);
    cardInfo.append(cardTitle,username,location,profile,followers,following,bio,);
    profile.append(link);
    
    ghUser.classList.add('card');
    cardInfo.classList.add('card-info');
    cardTitle.classList.add('name')
    username.classList.add('username');
  
  
      return ghUser
  };
  
  
  
  const entry = document.querySelector('.ghcontainer');
  axios
    .get('https://api.github.com/users/karapeoples')
    .then(response => {
      /* console.log(response.data); */
      const newCard = ghCard(response.data);
      entry.append(newCard);
    })
    .catch(err => {
      console.log('Sorry No Info!', err)
    });



  let artifactInfo = [
      {
    image: `/Img/med-cabinet.jpg`,
    title: `Build Week 1`,
    info: `I was responsible for the splash/landing page as part of the UI Team for this Project`,
    Link1: `https://med-cabinet.netlify.com/`,
    link2: `https://med-cabinet.netlify.com/`,
    link3: `https://github.com/med-cabinet/med-cabinet-UI`,
    link4: `https://github.com/med-cabinet/med-cabinet-UI`,
  },
  {
    image: `/Img/keep-savvy.jpg`,
    title: `Build Week 2`,
    info:  `I was responsible for the about page as part of the UI Team for this Project.`,
    link1: `https://elegant-aryabhata-cdd64e.netlify.com/about.html/`,
    link2: `https://elegant-aryabhata-cdd64e.netlify.com/about.html`,
    link3: `https://github.com/build-week-prisonerSkills/UI`,
    link4: `https://github.com/build-week-prisonerSkills/UI`,
  },
    ]


    const artifactCard = (image, title, info, link1, link2, link3, link4) => {
        const aCard = document.createElement('div');
        const aImg = document. createElement('img');
        const aImgStyle = document.createElement('div')
        const aTitle = document. createElement('h2');
        const aInfo = document.createElement ('p');
        const aStyle = document.createElement('div')
        const aLink = document.createElement ('a');
        const ghLink = document.createElement('a');

        aCard.classList.add('aCard');
        aStyle.classList.add('aStyle');

        aImg.src = image
        aTitle.textContent = title;
        aInfo.textContent = info;
        aLink.href = link1;
        aLink.textContent = link2;
        ghLink.href = link3;
        ghLink.textContent = link4;

        aCard.append(aImg,aImgStyle);
        aImgStyle.append(aTitle,aInfo, aStyle);
        aStyle.append(aLink, ghLink);

        return aCard
    }

    const artifacts = document.querySelector('.artifacts');
    artifactInfo.forEach (info => {
    const newACard = artifactCard(image, title, info, link1, link2, link3, link4);
    artifacts.append(newACard);
    })
    