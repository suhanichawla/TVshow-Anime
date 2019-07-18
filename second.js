var btn=document.getElementById("trigger");



btn.onclick = getData;
function getData(){
    var input=document.getElementById('inp');
    var val=input.value;
    var req='https://kitsu.io/api/edge'
    // req+=val;
    req+="/shows/breaking bad/cast";
    var res=fetch(req);
    let pr= res.then((res)=>{
        if(res.status!=200){
            return;
        }
        return res.text();
    })
    var data;
    pr.then(function (abc){
        data=abc;
        console.log(abc);
        // console.log(typeof(JSON.parse(abc)));
        // display(abc);
    });
    
    

}
function display(data){
    document.getElementById("info").innerHTML = "";
    console.log(typeof(data));
    var y=JSON.parse(data);
    console.log(typeof(y));
    console.log(y);
    var url=y.url//a list
    console.log(url);
    var anchor = document.createElement("a");
    var image = document.createElement("img");
    var para1 = document.createElement("p");
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");
    anchor.href=url;
    // image.src=y.image.medium;
    var link = document.createTextNode("click for link");
    var genre = document.createTextNode("Genre:"+y.genres);
    var lang = document.createTextNode("Language:"+y.language);
    var nam = document.createTextNode("Name:"+y.name);
    // var sum = y.summary.replace(/<\/?[^>]+(>|$)/g, "");
    // var summary = document.createTextNode("Summary:"+sum);
    anchor.appendChild(link);
    para1.appendChild(nam);
    para1.appendChild(br1);
    para1.appendChild(genre);
    para1.appendChild(br2);
    para1.appendChild(lang);
    para1.appendChild(br3);
    para1.appendChild(anchor);
    // para1.appendChild(br4);
    // para1.appendChild(image);
    // para1.appendChild(br5);
    // para1.appendChild(summary);
    var element = document.getElementById("info");
    // element.appendChild(anchor);
    element.appendChild(para1);
    // console.log(y.summary.slice());
    console.log(sum);
    // element.appendChild(y.summary);
}




//http://numbersapi.com/42

// var res=fetch('http://api.tvmaze.com/schedule');
// let pr= res.then((res)=>{
//     if(res.status!=200){
//         return;
//     }
//     return res.text();
// })
// pr.then((data)=> console.log(data));