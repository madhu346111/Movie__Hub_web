
const movies=[
{id:1,title:"Avengers",genre:"Action",year:2019,desc:"Marvel heroes unite",poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",rating:5},
{id:2,title:"Inception",genre:"Drama",year:2010,desc:"Dream inside dream",poster:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",trailer:"https://www.youtube.com/embed/YoHD9XEInc0",rating:5},
{id:3,title:"Batman",genre:"Action",year:2022,desc:"Dark knight story",poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",trailer:"https://www.youtube.com/embed/mqqft2x_Aa4",rating:4},
{id:4,title:"Coco",genre:"Animation",year:2017,desc:"Music story",poster:"https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",trailer:"https://www.youtube.com/embed/Rvr68u6k5sI",rating:5},
{id:5,title:"Interstellar",genre:"Drama",year:2014,desc:"Space journey",poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",rating:5},

{id:6,title:"Joker",genre:"Drama",year:2019,desc:"Villain origin",poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",trailer:"https://www.youtube.com/embed/zAGVQLHvwOY",rating:5},
{id:7,title:"Spider-Man",genre:"Action",year:2021,desc:"Multiverse story",poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",trailer:"https://www.youtube.com/embed/JfVOs4VSpmA",rating:5},
{id:8,title:"Doctor Strange",genre:"Action",year:2016,desc:"Magic world",poster:"https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",trailer:"https://www.youtube.com/embed/HSzx-zryEgM",rating:4},
{id:9,title:"Black Panther",genre:"Action",year:2018,desc:"Wakanda king",poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",trailer:"https://www.youtube.com/embed/xjDjIWPwcPU",rating:4},
{id:10,title:"Avatar",genre:"Action",year:2009,desc:"Pandora world",poster:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",trailer:"https://www.youtube.com/embed/5PSNL1qE6VY",rating:5},

{id:11,title:"Lion King",genre:"Animation",year:1994,desc:"Simba story",poster:"https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",trailer:"https://www.youtube.com/embed/4sj1MT05lAA",rating:5},
{id:12,title:"Minions",genre:"Animation",year:2015,desc:"Funny creatures",poster:"https://image.tmdb.org/t/p/w500/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",trailer:"https://www.youtube.com/embed/eisKxhjBnZ0",rating:3},
{id:13,title:"Shrek",genre:"Animation",year:2001,desc:"Fairytale",poster:"https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",trailer:"https://www.youtube.com/embed/CwXOrWvPBPk",rating:4},
{id:14,title:"Dangal",genre:"Drama",year:2016,desc:"Wrestling story",poster:"https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGwYjnlHh.jpg",trailer:"https://www.youtube.com/embed/x_7YlGv9u1g",rating:5},
{id:15,title:"3 Idiots",genre:"Drama",year:2009,desc:"College life",poster:"https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",trailer:"https://www.youtube.com/embed/K0eDlFX9GMc",rating:5},

{id:16,title:"Bahubali",genre:"Action",year:2015,desc:"Epic war",poster:"https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",trailer:"https://www.youtube.com/embed/sOEg_YZQsTI",rating:5},
{id:17,title:"KGF 2",genre:"Action",year:2022,desc:"Rocky story",poster:"https://image.tmdb.org/t/p/w500/xf7cB7v4uV3q9rW9hZgZ1s3tJXw.jpg",trailer:"https://www.youtube.com/embed/JKa05nyUmuQ",rating:4},
{id:18,title:"Frozen",genre:"Animation",year:2013,desc:"Disney princess",poster:"https://image.tmdb.org/t/p/w500/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",trailer:"https://www.youtube.com/embed/TbQm5doF_Uc",rating:4},
{id:19,title:"Moana",genre:"Animation",year:2016,desc:"Ocean journey",poster:"https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",trailer:"https://www.youtube.com/embed/LKFuXETZUsI",rating:4},
{id:20,title:"Iron Man",genre:"Action",year:2008,desc:"Marvel start",poster:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",trailer:"https://www.youtube.com/embed/8ugaeA-nMTc",rating:5},

{id:21,title:"Thor",genre:"Action",year:2011,desc:"God of thunder",poster:"https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",trailer:"https://www.youtube.com/embed/JOddp-nlNvQ",rating:4},
{id:22,title:"Hulk",genre:"Action",year:2003,desc:"Green monster",poster:"https://image.tmdb.org/t/p/w500/ogCQV0vW9r1x4dGgQy4T9L3k6xX.jpg",trailer:"https://www.youtube.com/embed/xbqNb2PFKKA",rating:3},
{id:23,title:"Deadpool",genre:"Action",year:2016,desc:"Funny hero",poster:"https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",trailer:"https://www.youtube.com/embed/Xithigfg7dA",rating:5},
{id:24,title:"Cars",genre:"Animation",year:2006,desc:"Racing world",poster:"https://image.tmdb.org/t/p/w500/2T4J1k9Y2vP9v6iYf5C2P4L5kZL.jpg",trailer:"https://www.youtube.com/embed/SbXIj2T-_uk",rating:4},
{id:25,title:"Toy Story",genre:"Animation",year:1995,desc:"Toys adventure",poster:"https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",trailer:"https://www.youtube.com/embed/KYz2wyBy3kc",rating:5}
];

let current=[...movies];
let watchlist=JSON.parse(localStorage.getItem("watch"))||[];

/* RENDER */
function render(){
 let c=document.getElementById("movies");
 c.innerHTML="";
 current.forEach(m=>{
  c.innerHTML+=`
   <div class="card">
    <img src="${m.poster}">
    <h4>${m.title}</h4>
    <p>${m.genre} | ${m.year}</p>
    <div>${stars(m.rating,m.id)}</div>
<button class="btn trailer" onclick="play(${m.id}, event)">🎬</button>
<button class="btn details" onclick="details(${m.id}, event)">📄</button>
    <button class="btn watch" onclick="watch(${m.id})">
      ${watchlist.includes(m.id)?"Remove":"❤️"}
    </button>
   </div>
  `;
 });
}

/* SEARCH */
document.getElementById("search").oninput=e=>{
 let q=e.target.value.toLowerCase();
 current=movies.filter(m=>m.title.toLowerCase().includes(q));
 render();
};

/* FILTER */
function filterGenre(g){
 current=movies.filter(m=>m.genre==g);
 render();
}

function showAll(){
 current=[...movies];
 render();
}

/* WATCHLIST */
function watch(id){
 if(watchlist.includes(id)){
  watchlist=watchlist.filter(x=>x!=id);
 }else{
  watchlist.push(id);
 }
 localStorage.setItem("watch",JSON.stringify(watchlist));
 render();
}

function showWatchlist(){
 current=movies.filter(m=>watchlist.includes(m.id));
 render();
}

/* RATING */
function stars(r,id){
 let s="";
 for(let i=1;i<=5;i++){
  s+=`<span class="star ${i<=r?'filled':''}" onclick="rate(${id},${i})">★</span>`;
 }
 return s;
}

function rate(id,val){
 let m=movies.find(x=>x.id==id);
 m.rating=val;
 render();
}

/* MODAL */
function play(id,e){
 if(e) e.stopPropagation();   // ✅ important

 let m=movies.find(x=>x.id==id);
 document.getElementById("modal").style.display="flex";

 document.getElementById("title").innerText=m.title;

 let trailer=document.getElementById("trailer");
 trailer.style.display="block";
 trailer.src=m.trailer;

 document.getElementById("desc").innerHTML="";
}

function details(id,e){
 if(e) e.stopPropagation();   // ✅ important

 let m=movies.find(x=>x.id==id);

 document.getElementById("modal").style.display="flex";

 document.getElementById("title").innerText=m.title;

 let trailer=document.getElementById("trailer");
 trailer.style.display="none";     // ✅ hide video
 trailer.src="";                  // ✅ stop video

 document.getElementById("desc").innerHTML = `
 <b>Genre:</b> ${m.genre}<br>
 <b>Year:</b> ${m.year}<br><br>
 ${m.desc}
 `;
}

function closeModal(){
 document.getElementById("modal").style.display="none";
 document.getElementById("trailer").src="";
}

render();