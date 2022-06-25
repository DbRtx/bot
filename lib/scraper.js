/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const fetch = require('node-fetch')
const qs = require("qs")

let is = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    }
}

function _token(host) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: host, method: 'GET', headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let token = $('#token').attr('value')
            resolve(token)
        })
    })
}


function facebook(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'https://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + '/system/action.php', qs.stringify(form.data), { headers: is.headers })
            .then(({ data }) => {
                if (data.links.lenght == 0) return resolve({ creator: '@neoxrs – Wildan Izzudin', status: false })
                resolve({ creator: '@neoxrs – Wildan Izzudin', status: true, data: data.links })
            })
    })
}

//HappyMod
function happymod(query) {
return new Promise((resolve, reject) => {
axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.pdt-app-box").each(function(c, d) {
name = $(d).find("a").text().trim();
icon = $(d).find("img.lazy").attr('data-original');
link = $(d).find("a").attr('href');
link2 = `https://www.happymod.com${link}`
const Data = {

icon: icon,
name: name,
link: link2
}
hasil.push(Data)
 })
 resolve(hasil);
}).catch(reject)
});
}



function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function aiovideodl(link) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://aiovideodl.ml/',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
            }
        }).then((src) => {
            let a = cheerio.load(src.data)
            let token = a('#token').attr('value')
            axios({
                url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
                method: 'POST',
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
                },
                data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
            }).then(({ data }) => {
                resolve(data)
            })
        })
    })
}

//ApkMody
function apkmody(query) {
return new Promise((resolve, reject) => {
axios.get(`https://apkmody.io/?s=${query}`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.flex-item").each(function(c, d) {
name = $(d).find("div.card-title > h2.truncate").text();
desc = $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim();
img = $(d).find("div.card-image > img").attr('src');
link = $(d).find("article.card.has-shadow.clickable > a").attr('href');
const Data = {
img: img,
name: name,
desc: desc,
link: link
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
});
}

//Moddroid
function moddroid(query) {
return new Promise((resolve, reject) => {
axios.get(`https://moddroid.com/?s=${query}`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.col-12.col-md-6.mb-4").each(function(c, d) {
link = $(d).find("a.d-flex.position-relative.archive-post").attr('href');
name = $(d).find("div > h3.h5.font-weight-semibold.text-truncate.text-primary.w-100").text().trim();
img = $(d).find("div.flex-shrink-0.mr-2 > img").attr('src');
desc = $(d).find("div.text-truncate.text-muted > span.align-middle").text();
const Data = {
img: img,
name: name,
desc: desc,
link: link
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
});
}




//KodePos
async function kodepos(kota) {
return new Promise(async (resolve, reject) => {
let postalcode = 'https://carikodepos.com/';
let url = postalcode+'?s='+kota;
await request.get({
headers: {
'Accept': 'application/json, text/javascript, */*;',
'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
'Origin': postalcode,
'Referer': postalcode
},
url: url,
}, function(error, response, body) {
if (error) return reject(error);
let $ = cheerio.load(body);
var search = $('tr');
if (!search.length) return reject('No result could be found');
var results = [];
search.each(function(i) {
if (i != 0) {
var td = $(this).find('td');
var result = {};
td.each(function(i) {
var value = $(this).find('a').html();
var key = (i == 0) ? 'province' : (i == 1) ? 'city' : (i == 2) ? 'subdistrict' : (i == 3) ? 'urban' : 'postalcode';
result[key] = value;
})
results.push(result);
}
});
return resolve(results);
console.log(results)
});
});
};
//Github Stalk
function ghstalk(username) {
url= `https://api.github.com/users/${username}`; 
return axios.get(url)
.then(data => {
return data.data
console.log(data.data)
})
}


module.exports = {ghstalk, facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl }
