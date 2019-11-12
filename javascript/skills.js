let microsoft = ['Word', 'Excel', 'PowerPoint']
let adobe = ['Photoshop', 'InDesign', 'DreamWeaver', 'Illustrator', 'Bridge']
let computer = ['HTML', 'CSS', 'LESS', 'JS','JSX/React' ]
let oSkills =['Type 40-60 WPM', 'Fast Learner', 'Good Attitude', 'Friendly', 'Hard-Worker','Honest', "Creative"]



function programCard(){
    const pCard = document.createElement('div');
    const imgHold1 = document.createElement('div');
    const img1 = document.createElement('img');
    const list1 = document.createElement('div');
    const list1Title = document.createElement('h1');
    const ulList1 = document.createElement('ul');
    const ulList1Title = document.createElement('h2');
    const ulList2 = document.createElement('ul');
    const ulList2Title = document.createElement('h2');

    pCard.classList.add('programs');
    imgHold1.classList.add('img');
    list1.classList.add('list1');
    ulList1.classList.add('mo');
    ulList2.classList.add('acs');

    pCard.append(imgHold1,list1);
    imgHold1.append(img1);
    list1.append(list1Title, ulList1, ulList2);
    ulList1.append(ulList1Title);
    ulList2.append(ulList2Title);

    microsoft.forEach(info => {
        const items = document.createElement('li');
        items.textContent = info;
        ulList1.append(items);
      });

      adobe.forEach(info => {
        const items1 = document.createElement('li');
        items1.textContent = info;
        ulList2.append(items1);
      });

img1.src = '/Img/computerprograms.jpeg';
list1Title.textContent = `Computer Programs`;
ulList1Title.textContent = `Microsoft Office`;
ulList2Title.textContent =`Adobe Creative Sweet`;



 return pCard
}
const attach = document.querySelector('.program');
const newProgramCard = programCard();
attach.append(newProgramCard)



function langCard(){
    const lCard = document.createElement('div');
    const imgHold2 = document.createElement('div');
    const imgLang = document.createElement('img');
    const listLang = document.createElement('div');
    const ulListLang = document.createElement('ul');
    const listLangTitle = document.createElement('h1');
    

    lCard.classList.add('languages');
    imgHold2.classList.add('img');
    listLang.classList.add('list2');
    ulListLang.classList.add('cl');
    

    lCard.append(imgHold2,listLang);
    imgHold2.append(imgLang);
    listLang.append(ulListLang);
    ulListLang.append(listLangTitle);
    

    oSkills.forEach(info => {
        const items3 = document.createElement('li');
        items3.textContent = info;
        ulListLang.append(items3);
      });

     

imgLang.src = '/Img/computerlanguages.jpeg';
listLangTitle.textContent = `Computer Languages`;





 return lCard
}
const attach1 = document.querySelector('.language');
const newLangCard = langCard();
attach1.append(newLangCard)

function otherCard(){
    const oCard = document.createElement('div');
    const imgHold3 = document.createElement('div');
    const imgOther = document.createElement('img');
    const listOther = document.createElement('div');
    const ulListOther = document.createElement('ul');
    const listOtherTitle = document.createElement('h1');
    

    oCard.classList.add('other');
    imgHold3.classList.add('img');
    listOther.classList.add('list3');
    ulListOther.classList.add('lo');
    

    oCard.append(imgHold3,listOther);
    imgHold3.append(imgOther);
    listOther.append(ulListOther);
    ulListOther.append(listOtherTitle);
    

    oSkills.forEach(info => {
        const items4 = document.createElement('li');
        items4.textContent = info;
        ulListOther.append(items4);
      });

     

imgOther.src = '/Img/otherskills.jpeg';
listOtherTitle.textContent = `Other`;





 return oCard
}
const attach2 = document.querySelector('.others');
const newOtherCard = otherCard();
attach2.append(newOtherCard)