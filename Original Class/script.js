var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    //console.log(`AuthorName:${data.authors[0]} , isbn:${data.isbn} , Pages:${data.numberOfPages} , Publishes:${data.publisher}`);

    var res=data.filter((element)=>element.region==="Asia");
    console.log(res);
    var count=res.map((element)=>element.population);
    console.log(count);
    var final=count.reduce((sum,cv)=>sum+cv);
    console.log(`Total Popluation Of Asia:${final}`);




    //for(var i=0; i<res.length; i++){
        //console.log(res[i].name);
    //}
}