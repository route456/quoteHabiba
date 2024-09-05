let quotes = [
    {
        'quote': '"Be yourself; everyone else is already taken."',
        'writter': '― Oscar Wilde'
    },
    {
        'quote': '"So many books, so little time."',
        'writter': '― Frank Zappa'
    },
    {
        'quote': '"A room without books is like a body without a soul."',
        'writter': '― Marcus Tullius Cicero'
    },
    {
        'quote': '"You only live once, but if you do it right, once is enough."',
        'writter': '― Mae West'
    },
    {
        'quote': '"Be the change that you wish to see in the world."',
        'writter': '― Mahatma Gandhi'
    },
    {
        'quote': '"If you tell the truth, you dont have to remember anything."',
        'writter': '― Mark Twain'
    }
]

let usedQuotes = [...quotes];
document.getElementById('generate-btn').addEventListener("click", function(){
    if(usedQuotes.length === 0) {
        usedQuotes = [...quotes];
    }
    let randomIndex = Math.floor(Math.random()*usedQuotes.length);
    let randomQuote = usedQuotes[randomIndex];
    usedQuotes.splice(randomIndex,1);
    document.getElementById('quote').textContent = randomQuote.quote;
    document.getElementById('writter').textContent = randomQuote.writter;

});

//textanimate
const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

	const words = elem.textContent.split(' ');
	elem.innerHTML = '';

	words.forEach((el, index) => {
		words[index] = `<span><i>${words[index]}</i></span>`;
	});

	elem.innerHTML = words.join(' ');

	const children = document.querySelectorAll('span > i');
	children.forEach((node, index) => {
		node.style.animationDelay = `${index * .7}s`;
	});

});