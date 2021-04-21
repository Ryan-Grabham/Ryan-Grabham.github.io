function APIcall() {
    var xhttp = new XMLHttpRequest();

    
    
    var searchValue = document.getElementById('search-text').value;
    console.log(searchValue);
    var url = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + searchValue;

    console.log(url);
    xhttp.open('GET', url);

    xhttp.send();

    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var data = JSON.parse(this.responseText);

            console.log(data);
            
            document.getElementById('badge').src = data.teams[0].strTeamBadge;
            document.getElementById('team').innerHTML = data.teams[0].strAlternate;
            document.getElementById('nickname').innerHTML = data.teams[0].strKeywords;
            document.getElementById('stadium').innerHTML = data.teams[0].strStadium;
            
            document.getElementById('search-text').value = null;
        }
    }
}
