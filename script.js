const addBtn = document.getElementById('addMemeBtn');
const input = document.getElementById('memesInput');
const memesList = document.getElementById('memesList');

// Preloaded memes
const initialMemes = [
    "Kitna hi busy ho jau lekin reels dekhne ke liye time nikal hi leta hu",
    "Har din sochta hu iss se bura ky hi hoga lekin agle hi din usse bhi jada bura ho jata he",
    "log pyaar me padte he aur me musibat me",
    "Body banane ke liye aisa excise kiya ki deadbody ban gai",
    "kaam aisa karta hu ki koi fir dubra karne ko nahi bolta",
    "Jindagi bhaut kuch sikhati he par me hi bhul jata hu",
    "Padhai ki tension bhaut thi issliye mane padhai chhod di",
    "Ghar Wale 2 roti ke sath 4 taane bhi dete he ma bss roti hi leta hu",
    "Paper me hard question skip kar raha tha, pura paper kab skip hua pata hi nahi chala",
    "Exam ki taiyari me itna busy tha ki padhna hi bhul gaya"
];

function createMemeCard(text) {
    const memeCard = document.createElement('div');
    memeCard.className = 'memeCard';
    
    memeCard.innerHTML = `
        <div class="memeText">${text}</div>
        <button class="copyBtn">Copy</button>
    `;

    const copyBtn = memeCard.querySelector('.copyBtn');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
        copyBtn.innerText = 'Copied!';
        setTimeout(() => copyBtn.innerText = 'Copy', 1000);
    });

    memesList.prepend(memeCard);
}

// Add initial memes
initialMemes.forEach(meme => createMemeCard(meme));

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if(!text) return;
    createMemeCard(text);
    input.value = '';
});

input.addEventListener('keypress', e => {
    if(e.key === 'Enter') addBtn.click();
});