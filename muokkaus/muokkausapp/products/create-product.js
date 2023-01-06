$(document).ready(function(){

    // show html form when 'create product' button was clicked
    $(document).on('click', '.create-product-button', function(){
        // load list of categories
        $.getJSON("https://pizzaa.pieceofkake.fi/api/category/read.php", function(data){

            // build categories option html
            // loop through returned list of data
            var categories_options_html="<select name='category_id' class='form-control'>";
            $.each(data.records, function(key, val){
                categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
            });
            categories_options_html+="</select>";

            // we have our html form here where product information will be entered
            // we used the 'required' html5 property to prevent empty fields
            var create_product_html="" +
                "<!-- 'read products' button to show list of products -->\n" +
                "    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>\n" +
                "        <span class='glyphicon glyphicon-list'></span> Read Products\n" +
                "    </div>" +
                "<!-- 'create product' html form -->\n" +
                "<form id='create-product-form' action='#' method='post' border='0'>\n" +
                "    <table class='table table-hover table-responsive table-bordered'>\n" +
                " \n" +
                "        <!-- name field -->\n" +
                "        <tr>\n" +
                "            <td>Name</td>\n" +
                "            <td><input type='text' name='name' class='form-control' required /></td>\n" +
                "        </tr>\n" +
                " \n" +
                "        <!-- price field -->\n" +
                "        <tr>\n" +
                "            <td>Price</td>\n" +
                "            <td><input type='text' name='price' class='form-control' required /></td>\n" +
                "        </tr>\n" +
                " \n" +
                "        <!-- description field -->\n" +
                "        <tr>\n" +
                "            <td>Description</td>\n" +
                "            <td><textarea name='description' class='form-control' required></textarea></td>\n" +
                "        </tr>\n" +
                " \n" +
                "        <!-- categories 'select' field -->\n" +
                "        <tr>\n" +
                "            <td>Category</td>\n" +
                "            <td>" + categories_options_html + "</td>\n" +
                "        </tr>\n" +
                " \n" +
                "        <!-- button to submit form -->\n" +
                "        <tr>\n" +
                "            <td></td>\n" +
                "            <td>\n" +
                "                <button type='submit' class='btn btn-primary'>\n" +
                "                    <span class='glyphicon glyphicon-plus'></span> Create Product\n" +
                "                </button>\n" +
                "            </td>\n" +
                "        </tr>\n" +
                " \n" +
                "    </table>\n" +
                "</form>";

            // inject html to 'page-content' of our app
            $("#page-content").html(create_product_html);

            // chage page title
            changePageTitle("Create Product");

        });
    });

    // will run if create product form was submitted
    $(document).on('submit', '#create-product-form', function(){
        // get form data
        var form_data=JSON.stringify($(this).serializeObject());

        // submit form data to api
        $.ajax({
            url: "https://pizzaa.pieceofkake.fi/api/product/create.php",
            type : "POST",
            crossOrigin: true,
            crossDomain: true,
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
                // product was created, go back to products list
                showProducts();
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        return false;
    });
});