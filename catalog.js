import{T,o as _}from"./assets/main-vT5-JhTt.js";import"./assets/vendor-BkZ2l9K1.js";document.addEventListener("DOMContentLoaded",async()=>{const v=new T,f=document.querySelector(".catalog-movie-list"),y=document.querySelector(".catalog-sorry-message"),l=document.querySelector(".input-text"),M=document.querySelector(".catalog-button"),g=document.querySelector(".year-select"),b=document.querySelector(".x-button"),c=document.querySelector(".pagination-container"),E={"Science Fiction":"Sci-Fi"};let h=1,a=1,p="";y.style.display="none";const k=async(e=1,s=18)=>{try{const n=p?await v.searchMovieTotal(p,e):await v.getTrendingMoviesTotal("week",e);return a=Math.ceil(n.total_results/20),n.results.slice(0,s)}catch(n){return console.error("Error fetching movies:",n),[]}},w=await(async()=>{try{return await v.getMovieGenres()}catch(e){return console.error("Error fetching genres:",e),[]}})(),C=(e,s)=>s?e.filter(n=>new Date(n.release_date).getFullYear()==s):e,S=e=>{const s=Math.floor(e/2),n=e%2>=1?1:0;return'<svg class="star full"><use xlink:href="#icon-star"></use></svg>'.repeat(s)+(n?'<svg class="star half"><use xlink:href="#icon-star-half"></use></svg>':"")+'<svg class="star empty"><use xlink:href="#icon-star-outline"></use></svg>'.repeat(5-Math.ceil(e/2))},r=async(e=1)=>{const s=C(await k(e),g.value);f.innerHTML="",y.style.display=s.length?"none":"block",s.forEach(n=>{const d=n.genre_ids.slice(0,2).map(u=>{var L;return((L=w.find(q=>q.id===u))==null?void 0:L.name)||"Unknown"}).map(u=>E[u]||u).join(", "),t=n.release_date?new Date(n.release_date).getFullYear():"Unknown",o=Math.round(n.vote_average*10)/10,i=document.createElement("li");i.classList.add("card"),i.style.background=`url(https://image.tmdb.org/t/p/w500${n.poster_path}) center/cover`,i.dataset.id=n.id,i.innerHTML=`
        <div class="card-content">
          <h2>${n.title}</h2>
          <p>${d} | ${t} <span class="stars">${S(o)}</span></p>
        </div>
      `,i.addEventListener("click",()=>_(n.id)),f.appendChild(i)}),x(e)},x=e=>{if(c.innerHTML="",a<=1)return;const s=t=>{const o=document.createElement("button");return o.textContent=t,o.classList.add("page-number-button"),t===e&&o.classList.add("active"),o.addEventListener("click",()=>{e=t,r(e)}),o};if(a>1){const t=document.createElement("button");t.textContent="←",t.classList.add("arrow-button"),t.disabled=e===1,t.addEventListener("click",()=>{e>1&&(e--,r(e))}),c.appendChild(t)}const n=Math.max(1,e-2),d=Math.min(a,e+2);for(let t=n;t<=d;t++)c.appendChild(s(t));if(d<a){const t=document.createElement("span");t.textContent="...",c.appendChild(t),c.appendChild(s(a))}if(a>1){const t=document.createElement("button");t.textContent="→",t.classList.add("arrow-button"),t.disabled=e===a,t.addEventListener("click",()=>{e<a&&(e++,r(e))}),c.appendChild(t)}},m=()=>{p=l.value.trim(),h=1,r(h)};M.addEventListener("click",m),g.addEventListener("change",m),b.addEventListener("click",()=>{l.value="",m()}),l.addEventListener("input",()=>b.style.visibility=l.value.trim()?"visible":"hidden"),r(h)});
//# sourceMappingURL=catalog.js.map
