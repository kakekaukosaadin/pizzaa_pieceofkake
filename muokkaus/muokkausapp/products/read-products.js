$(document).ready(function(){

    // show list of product on first load
    showProducts();

    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function(){
        showProducts();
    });

});

// function to show list of products
// function to show list of products
function showProducts(){

    // get list of products from the API
    $.getJSON("https://pizzaa.pieceofkake.fi/api/product/read.php", function(data){

        // html for listing products
        readProductsTemplate(data, "");

        // chage page title
        changePageTitle("Read Products");

    });
}