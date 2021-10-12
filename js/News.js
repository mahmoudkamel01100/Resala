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

    for(var i=0;i<Newscontanier.records.length;i++){
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
