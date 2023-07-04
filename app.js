//alert('하이')

//이미지1 태그를 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

img1.setAttribute('src', 'images/dice6.png');
img2.setAttribute('src', 'images/dice6.png');

const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNum1);
console.log(randomNum2);


img1.setAttribute('src', 'images/dice' + randomNum1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNum2 + '.png');

//h1.innerText = '👌🙌 누가 이겼는지?';

//if else문으로 플레이어1,2중 누가 이겻는지 표시하라!
if (randomNum1 > randomNum2) {
    h1.innerText = '👀 플레이어1이 이겼다';
} else if (randomNum1 < randomNum2) {
    h1.innerText = '🎈 플레이어2가 이겼다';
} else {
    h1.innerText = '⚽ 비겼다'
}


