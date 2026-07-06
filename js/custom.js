
let assesKey = 'ddO7GYsKWfhR3Ws3w0A3DkZzpGZyzGaRu26ehDWoOjQ' ; 



// varibels all 

let formSubmit = document.querySelector('#form-sumit') ;
let input = document.querySelector('#img-gen') ;
let searchButton = document.querySelector('.search-but') ;
let showResult = document.querySelector('.show-resule') ;
let nextButton = document.querySelector('.button') ;

let page = 1 ;
let keyword = '' ;


async function searchImages() {
     keyword = input.value ;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${assesKey}&per_page=12` ;

     let responce = await fetch(url) ;
     let resData = await responce.json() ;

     let data = resData.results ;
     if(page == 1){
        showResult.innerHTML = '' ;
     }
    data.map((result) => {
        const img = document.createElement('img') ;
        img.src = result.urls.small ;
        const amkar = document.createElement('a') ;
        amkar.target = '_blank'
        amkar.href = result.links.html ;
       const showResultData =  amkar.appendChild(img) ;
       showResult.appendChild(showResultData) ;
       nextButton.style.display = 'block'
    }) ;
}


formSubmit.addEventListener('submit' , (e) =>{
    e.preventDefault() ;
    e.stopPropagation() ;
    page = 1 ;
    searchImages()
}) ;

nextButton.addEventListener('click' , (e)=>{
    e.stopPropagation() ;
     page++ ;
    searchImages()
})