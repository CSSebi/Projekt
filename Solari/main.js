

function preis(){
    let laenge = document.getElementById("laenge").value;
    let breite = document.getElementById("breite").value;
    
    let sum = laenge * breite;
    let pr = 100
    let total = pr * sum
    alert(total + "Euro würde der Auftrag kosten")
    document.getElementById("result").innerHTML += `<p> ${total}</p>`;
    const styler = document.getElementById("result");
    
}

