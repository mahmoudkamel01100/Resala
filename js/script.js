
/*------------------------Slider start------------------------------*/

var SliderHttp= new XMLHttpRequest ();
var Slidercontanier = [] ;
SliderHttp.open("GET", "https://api.airtable.com/v0/appoKd4p0QschUO1C/Slider?api_key=key81dHVlrkhcNNod");

SliderHttp.send();

SliderHttp.addEventListener("readystatechange" , function () {
    if (SliderHttp.readyState ==4 && SliderHttp.status == 200) {
        Slidercontanier=JSON.parse(SliderHttp.response);
        displaySlider();

    }
})



function displaySlider(){
    var Slidertemp= ``;

    for(var i=0;i< Slidercontanier.records.length;i++){
        if(i == 0){
            Slidertemp+= `<div class="carousel-item active" data-bs-interval="2000">
        <img src="${Slidercontanier.records[i].fields.image}" class="d-block w-100 h-100" >
        </div>`
        }
        else {
            Slidertemp+= `<div class="carousel-item " data-bs-interval="2000">
            <img src="${Slidercontanier.records[i].fields.image}" class="d-block w-100 h-100" >
            </div>`
        }

    }
    document.getElementById("Slider-top").innerHTML=Slidertemp;
}




/*------------------------News start------------------------------*/

var NewsHttp= new XMLHttpRequest ();
var Newscontanier = [] ;
NewsHttp.open("GET", "https://api.airtable.com/v0/appoKd4p0QschUO1C/News?api_key=key81dHVlrkhcNNod");

NewsHttp.send();

NewsHttp.addEventListener("readystatechange" , function () {
    if (NewsHttp.readyState ==4 && NewsHttp.status == 200) {
        Newscontanier=JSON.parse(NewsHttp.response);
        displayNewss();

    }
})

function displayNewss(){
    var Newstemp= ``;

    for(var i=0;i<4;i++){
        Newstemp+= `<div class="col-md-4 col-6 col-lg-3 d-flex justify-content-center front-page-box">
        <div class="card text-center shadow-sm  mb-1 mx-1 bg-body rounded" style="width: 18rem;height: 22rem;">
            <img src="${Newscontanier.records[i].fields.Image}" class="card-img-top w-100 h-50" >
            <div class="card-body ">
                <p style="color: #e31b24;font-size: 18px;" class="card-text">${Newscontanier.records[i].fields.Title}</p>
            </div>
            <p style="color: blue;">${Newscontanier.records[i].fields.Time}<span>  <i class="far fa-calendar-alt"></i></span></p>
        </div>
    </div>`
    }
    document.getElementById("NewsRows").innerHTML=Newstemp;
}

/*------------------------OurImages start------------------------------*/

var OurImagesHttp= new XMLHttpRequest ();
var OurImagescontanier = [] ;
OurImagesHttp.open("GET", "https://api.airtable.com/v0/appoKd4p0QschUO1C/Images?api_key=key81dHVlrkhcNNod");

OurImagesHttp.send();

OurImagesHttp.addEventListener("readystatechange" , function () {
    if (OurImagesHttp.readyState ==4 && OurImagesHttp.status == 200) {
        OurImagescontanier=JSON.parse(OurImagesHttp.response);
        displayOurImages();

    }
})



function displayOurImages(){
    var OurImages= ``;

    for(var i=0;i<4;i++){
        OurImages+= `<div class="col-md-4 col-6 col-lg-3">
        <div class="item">
            <img src="${OurImagescontanier.records[i].fields.image}" class="myImages w-100" style="height: 60%;" id="myImg">
        </div>
    </div>`

    }
    document.getElementById("OurImages").innerHTML=OurImages;
    getimages();
}

/*------------modal-------- */
function getimages(){
    var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
var img = images[i];
img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

}


/*------------------------OurVideos start------------------------------*/

var OurVideosHttp= new XMLHttpRequest ();
var OurVideoscontanier = [] ;
OurVideosHttp.open("GET", "https://api.airtable.com/v0/appoKd4p0QschUO1C/Videos?api_key=key81dHVlrkhcNNod");

OurVideosHttp.send();

OurVideosHttp.addEventListener("readystatechange" , function () {
    if (OurVideosHttp.readyState ==4 && OurVideosHttp.status == 200) {
        OurVideoscontanier=JSON.parse(OurVideosHttp.response);
        displayOurVideos();

    }
})



function displayOurVideos(){
    var OurVideos= ``;

    for(var i=0;i<4;i++){
        OurVideos+= `<div class="col-md-4 col-6 col-lg-3 d-flex justify-content-center my-3">
        <div class="card text-center shadow-sm  mb-1 mx-1 bg-body rounded" style="width: 18rem;height: 20rem;">
            <iframe width="100%" height="50%" src="${OurVideoscontanier.records[i].fields.video}" allowfullscreen></iframe>
            <div class="card-body ">
                <p style="color: #e31b24;font-size: 18px;height:100%" class="card-text">${OurVideoscontanier.records[i].fields.Title}</p>
            </div>
            <p style="color: blue;">${OurVideoscontanier.records[i].fields.Time} <i class="far fa-calendar-alt"></i></span></p>
        </div>
    </div>`

    }
    document.getElementById("VideosRows").innerHTML=OurVideos;
}


