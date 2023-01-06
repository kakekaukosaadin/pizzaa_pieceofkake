// product list html
function readProductsTemplate(data, keywords){

    var read_products_html="" +
        "<!-- search products form -->\n" +
        "        <form id='search-product-form' action='#' method='post'>\n" +
        "        <div class='input-group pull-left w-30-pct'>\n" +
        " \n" +
        "            <input type='text' value='" + keywords + "' name='keywords' class='form-control product-search-keywords' placeholder='Search products...' />\n" +
        " \n" +
        "            <span class='input-group-btn'>\n" +
        "                <button type='submit' class='btn btn-default' type='button'>\n" +
        "                    <span class='glyphicon glyphicon-search'></span>\n" +
        "                </button>\n" +
        "            </span>\n" +
        " \n" +
        "        </div>\n" +
        "        </form>\n" +
        " \n" +
        "        <!-- when clicked, it will load the create product form -->\n" +
        "        <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>\n" +
        "            <span class='glyphicon glyphicon-plus'></span> Create Product\n" +
        "        </div>\n" +
        " \n" +
        "        <!-- start table -->\n" +
        "        <table class='table table-bordered table-hover'>\n" +
        " \n" +
        "            <!-- creating our table heading -->\n" +
        "            <tr>\n" +
        "                <th class='w-25-pct'>Name</th>\n" +
        "                <th class='w-10-pct'>Price</th>\n" +
        "                <th class='w-15-pct'>Category</th>\n" +
        "                <th class='w-25-pct text-align-center'>Action</th>\n" +
        "            </tr>";

    // loop through returned list of data
    $.each(data.records, function(key, val) {

        // creating new table row per record
        read_products_html+="" +
            "<tr>\n" +
            " \n" +
            "            <td>" + val.name + "</td>\n" +
            "            <td>$" + val.price + "</td>\n" +
            "            <td>" + val.category_name + "</td>\n" +
            " \n" +
            "            <!-- 'action' buttons -->\n" +
            "            <td>\n" +
            "                <!-- read product button -->\n" +
            "                <button class='btn btn-primary m-r-10px read-one-product-button' data-id='" + val.id + "'>\n" +
            "                    <span class='glyphicon glyphicon-eye-open'></span> Read\n" +
            "                </button>\n" +
            " \n" +
            "                <!-- edit button -->\n" +
            "                <button class='btn btn-info m-r-10px update-product-button' data-id='" + val.id + "'>\n" +
            "                    <span class='glyphicon glyphicon-edit'></span> Edit\n" +
            "                </button>\n" +
            " \n" +
            "                <!-- delete button -->\n" +
            "                <button class='btn btn-danger delete-product-button' data-id='" + val.id + "'>\n" +
            "                    <span class='glyphicon glyphicon-remove'></span> Delete\n" +
            "                </button>\n" +
            "            </td>\n" +
            "        </tr>";
    });

    // end table
    read_products_html+="</table>";

    // inject to 'page-content' of our app
    $("#page-content").html(read_products_html);
}