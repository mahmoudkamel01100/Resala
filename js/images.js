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

