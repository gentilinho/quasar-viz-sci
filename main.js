    $(function () {
        $.getJSON("http://dati.lazio.it/catalog/api/action/datastore_search?resource_id=0b5d3a19-ae2d-448c-a08b-71fb21428781&limit=100", function (data) {
            
            var containers = {
                "NERA": $("#nera"),
                "ROSSA": $("#rossa"),
                "BLU": $("#blu"),
            }
            
            
            
            $.each(data.result.records, function (key, val) {
                console.log(val["Classifica Pista"]);
                containers[val["Classifica Pista"]].append("<p>" + val["Impianti di Riferimento"] + "</p>");
               
                
                
            });
        });
    });
            
    