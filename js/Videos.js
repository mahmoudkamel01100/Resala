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

    for(var i=0;i<OurVideoscontanier.records.length;i++){
        OurVideos+= `<div class="col-md-4 col-6 col-lg-3 d-flex justify-content-center my-3">
        <div class="card text-center shadow-sm  mb-1 mx-1 bg-body rounded" style="width: 18rem;height: 20rem;">
            <iframe width="100%" height="50%" src="${OurVideoscontanier.records[i].fields.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body ">
                <p style="color: #e31b24;font-size: 18px;height:100%" class="card-text">${OurVideoscontanier.records[i].fields.Title}</p>
            </div>
            <p style="color: blue;">${OurVideoscontanier.records[i].fields.Time} <i class="far fa-calendar-alt"></i></span></p>
        </div>
    </div>`

    }
    document.getElementById("VideosRows").innerHTML=OurVideos;
}


