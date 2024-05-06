function kattintnevkeres(){
    var bekeresNev=document.getElementById("bekeresNev").value
    //alert(bekeresNev)
    var szovegecske=""
    for (const elem of prizes.prizes) {
        if(elem.laureates!=undefined)
        for (const elemecske of elem.laureates) {
            if(elemecske.firstname.toLowerCase().includes(bekeresNev.toLowerCase())){
                szovegecske+=`
                <tr>
                    <td>${elem.year}</td>
                    <td>${elem.category}</td>
                    <td>${elem.firstname}</td>
                    <td>${elem.surname}</td>
                    <td>${elem.motivation}</td>
                </tr>
                `
            }
        }
    }
    document.getElementById("test").innerHTML=szovegecske
}