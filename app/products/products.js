// product list html
function readProductsTemplate(data, keywords){



    var read_products_html="" +
        "<!-- search products form -->\n" +
//        "        <form id='search-product-form' action='#' method='post'>\n" +
//        "        <div class='input-group pull-left w-30-pct'>\n" +
//        " \n" +
//        "            <input type='text' value='" + keywords + "' name='keywords' class='form-control product-search-keywords' placeholder='Search products...' />\n" +
//        " \n" +
//        "            <span class='input-group-btn'>\n" +
//        "                <button type='submit' class='btn btn-default' type='button'>\n" +
//        "                    <span class='glyphicon glyphicon-search'></span>\n" +
//        "                </button>\n" +
//        "            </span>\n" +
//        " \n" +
//        "        </div>\n" +
//        "        </form>\n" +
        " \n" +
        "        <!-- when clicked, it will load the create product form -->\n" +
//        "        <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>\n" +
//        "            <span class='glyphicon glyphicon-plus'></span> Create Product\n" +
//        "        </div>\n" +
        " \n" +
        "        <!-- form to send data to email php-->" +
        "        <form id='emailform' target='_blank' method='post' class='tilaus' name='myemailform' action='/app/assets/php/form-to-email.php'>" +
        "        <!-- start table -->\n" +
        "        <table id='emailformtable' class='table table-bordered table-hover'>\n" +
        " \n" +
        "            <!-- Tilaajan tiedot -->" +
        "            <tr>" +
        "               <th class='w-25-pct'>Tilaajan tiedot</th>" +
        "               <td class='w-25-pct'><input type='text' name='nimi' placeholder='Oma Nimi (pakollinen)' required></td>" +
        "               <td class='w-25-pct'><input type='tel' name='puh' placeholder='Puhelinnumero (pakollinen)' required></td>" +
        "               <td class='w-25-pct'><input type='email' name='email' placeholder='Sähköposti (pakollinen)' required></td>" +
        "            </tr>" +
        "            <tr>" +
        "               <th class='w-25-pct'>Muut tiedot</th>" +
        "               <td class='w-25-pct'>Voiko tuotteen korvata vastaavalla, jos ei löydy valittua? -></td>" +
        "               <td class='w-25-pct'><input type='text' name='Saako korvata vastaavalla' placeholder='Kyllä/Ei' required></td>" +
        "               <td class='w-25-pct'><input type='text' name='Muu tuote/ viesti' placeholder='Muu tuote?'></td>" +
        "            </tr>" +
        "            <!-- creating our table heading -->\n" +
        "            <tr>\n" +
        "                <th class='w-25-pct'>Tuote</th>\n" +
        "                <th class='w-25-pct'>Hinta</th>\n" +
        "                <th class='w-25-pct'>Tuoteryhmä</th>\n" +
        "                <th class='w-25-pct text-align-center'>Tilaa</th>\n" +
        "            </tr>";

    // loop through returned list of data
    $.each(data.records, function(key, val) {

        // creating new table row per record
        read_products_html+="" +
            "<tr>\n" +
            " \n" +
            "            <td>" + val.name + "</td>\n" +
            "            <td>" + val.price + "€</td>\n" +
            "            <td>" + val.category_name + "</td>\n" +
            " \n" +
            "            <!-- 'action' buttons -->\n" +
            "            <td>\n" +
            "                <input id='"+key+"' type='number' name='" + val.name + "' placeholder='Määrä' onchange='getHinta(this.value, this.id)'>" +
            "            </td>\n" +
            "        </tr>";

    });

    // end table
    read_products_html+="" +
        "<input class='sendButton' type='submit' value='Lähetä tilaus'>" +
        "               " +
        "               </table>" +
        "                </form>";





    // inject to 'page-content' of our app
    $("#page-content").html(read_products_html);


}

var kokHinta = 0;

function getHinta(data, row){

    var table = document.getElementById('emailformtable');
    var yksHinta = table.rows[3].cells[1].value;
    var correctRow = row+2
    var rowId = "rowTotal"+correctRow;

    document.getElementById('rowId').innerHTML = yksHinta;


}

function getPrice(){
    var table = document.getElementById('emailformtable');
    var rowcount = table.rows.length;
    var i;
    var totalprice = 0;


    for (i=2; i < rowcount; i++){
        if(table.rows[i].cells[3].value){
            console.log(table.rows[i].cells[1]);
        }

    }



    console.log(totalprice);
    console.log(rowcount);
}

// ehkä hyödyllistä
//var table = document.getElementById('emailformtable');
//     var rowcount = table.rows.length;
//     var i;
//     parsedData = parseFloat(data);
//     //valueData = table.rows[i].cells[3].value;
//
//     for(i=2; i<rowcount; i++){
//         if(data != undefined && data != 0){
//             kokHinta += (parsedData/(rowcount-2));
//             console.log(table.rows[i].cells[1].value);
//         }
//     }
//     //parsedData = parseFloat(data);
//     //kokHinta = 0;
//     //kokHinta += parsedData;
//     console.log(kokHinta);
//     document.getElementById('hintainput').value = kokHinta;