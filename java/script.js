var mydetail = [" "," "];

function pushname()
{
    var inputname = document.getElementById("exampleFormControlInput1").value,
        listad = document.getElementById("list-group list-group-flush"),
        liadd = document.createElement("LI"),
        lnode = document.createTextNode(inputname);

       
    
    mydetail.push(inputname);

    var nval = "";
    for(i = 0; i<mydetail.length; i++)
    {
        nval = nval + mydetail[i] ;
    }

    document.getElementById('exname').innerHTML = nval; 
    
    liadd.appendChild(lnode);
    listad.appendChild(liadd);
    
}

