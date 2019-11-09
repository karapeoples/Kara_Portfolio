const card1 = () => {
    const cardBack = document.createElement('div');
    const img1 = document.createElement('img');
    const top = document.createElement('section');
    const title = document.createElement('h1');
    const sub = document.createElement ('h2');
    const topInfo = document.createElement('p');
    const about = document.createElement('div');
    const title2 = document.createElement('h2');
    const info2 = document.createElement('p');
    
    

    cardBack.classList.add('image');
    top.classList.add('top');
    about.id = 'about';
    

    cardBack.append(img1, top, about);
    top.append(title, sub, topInfo);
    about.append(title2, info2);
    

    img1.src = `/Img/biopic.jpg`;
    title.textContent = `Resume/Portfolio`;
    sub.textContent =`Motto:`
    topInfo.textContent = `Success consists of going from failure to failure without loss of enthusiasm ~~Sir Winston Churchill`
    title2.textContent =`Introduction`;
    info2.textContent =`I am a self-motivated, fast learning, loner, who can work with a group and be lead if necessary. I like to problem solve and see my accomplishments once I achieve them. I am looking for a mid-level company in which to start my career and have some opportunities`
    


    return cardBack;
}

let parent = document.querySelector('.container');
parent.append(card1())