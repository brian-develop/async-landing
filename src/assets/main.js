const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvXmT2bjGcUvoAEuDYUcwJQ&part=snippet%2Cid&order=date&maxResults=12';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '883d3c2a9amshd3006c687386c80p12ee44jsn60439c8ef730',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(API, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
    }
    catch{

    }
})();