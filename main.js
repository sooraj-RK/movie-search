const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c384e09e0dmshb1e759154514518p140cbajsn1a359e7e29ac',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

function search(){
	moviename=movieName.value
	
fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${moviename}%20`, options)
	.then(response => response.json())
	.then(data  => {
		const list =data.d;

		list.map((item) => {
			const name = item.l;
			const poster = item.i.imageUrl;
			const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
			document.querySelector('.movies').innerHTML+=movie;
		})

	})

	.catch(err => {
		 console.error(err)
	});
}