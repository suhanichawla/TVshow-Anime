var btn=document.getElementById("trigger");



btn.onclick = getData;
function getData(){
    var input=document.getElementById('inp');
    var val=input.value;
    var req='https://kitsu.io/api/edge/anime?filter[genres]='
    req+=val;
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
        console.log(typeof(abc));
        // console.log(abc);
        
        display(abc);
    });
    
    

}
function display(data){
    var pretext1=document.getElementById("pretextone");
    var pretext2=document.getElementById("pretexttwo");
    pretext1.style.display="none";
    pretext2.style.display="none";
    document.getElementById("info").innerHTML = "";
    console.log(typeof(data));
    var y=JSON.parse(data);
    console.log(y);
    for(var i=0;i<y.data.length;i++){
        var paratotal=document.createElement("p");
        var para1 = document.createElement("p");
        var text1=document.createTextNode("Number of episodes:"+ y.data[i].attributes.episodeCount);
        var para2 = document.createElement("p");
        var text2=document.createTextNode("Name:"+y.data[i].attributes.canonicalTitle);
        var para3 = document.createElement("p");
        var text3=document.createTextNode("Status:"+y.data[i].attributes.status);
        var image = document.createElement("img");
        image.src=y.data[i].attributes.posterImage.tiny;
        var para4 = document.createElement("p");
        para1.appendChild(text2);
        para2.appendChild(text1);
        para3.appendChild(text3);
        para4.appendChild(image);
        var element = document.getElementById("info");
        paratotal.className="data";
        paratotal.appendChild(para1);
        paratotal.appendChild(para2);
        paratotal.appendChild(para3);
        paratotal.appendChild(para4);
        element.appendChild(paratotal);
        
    }
}




//http://numbersapi.com/42

















