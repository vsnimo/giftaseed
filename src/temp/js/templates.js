angular.module('demoapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/common/header.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top navbar-custom\">\r" +
    "\n" +
    "<div class=\"container-fluid\">\r" +
    "\n" +
    "    <div class=\"navbar-header\">\r" +
    "\n" +
    "    \t<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".js-navbar-collapse\">\r" +
    "\n" +
    "\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "\t\t\t<span class=\"icon-bar\"></span>\r" +
    "\n" +
    "\t\t\t<span class=\"icon-bar\"></span>\r" +
    "\n" +
    "\t\t\t<span class=\"icon-bar\"></span>\r" +
    "\n" +
    "\t\t</button>\r" +
    "\n" +
    "\t\t<a class=\"navbar-brand\" href=\"#\">GIFTaSEED.com</a>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class=\"collapse navbar-collapse js-navbar-collapse\">\r" +
    "\n" +
    "\t\t<ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "\t\t\t<li class=\"dropdown mega-dropdown\">\r" +
    "\n" +
    "\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Categories<span class=\"caret\"></span></a>\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t<ul class=\"dropdown-menu mega-dropdown-menu\">\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"col-sm-3\">\r" +
    "\n" +
    "\t\t\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li class=\"dropdown-header\"></li>                            \r" +
    "\n" +
    "                  <div class=\"carousel slide\" data-ride=\"carousel\">\r" +
    "\n" +
    "                    <div class=\"carousel-inner\">\r" +
    "\n" +
    "                      <div class=\"item active\">\r" +
    "\n" +
    "                          <a href=\"#\"><img src=\"../assets/images/strawberry.jpg\" class=\"img-responsive\" alt=\"product 1\"></a>\r" +
    "\n" +
    "                          <h4><small>Variety of fruits</small></h4>\r" +
    "\n" +
    "                      </div><!-- End Item -->\r" +
    "\n" +
    "                      <div class=\"item\">\r" +
    "\n" +
    "                          <a href=\"#\"><img src=\"/assets/images/tangerine.jpg\" class=\"img-responsive\" alt=\"product 2\"></a>\r" +
    "\n" +
    "                          <h4><small>Decoratives: Tangerine</small></h4>                                        \r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                      <div class=\"item\">\r" +
    "\n" +
    "                          <a href=\"#\"><img src=\"/assets/images/seeds.jpg\" class=\"img-responsive\" alt=\"product 2\"></a>\r" +
    "\n" +
    "                          <h4><small>Seeds & Bulbs</small></h4>                                        \r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                      <div class=\"item\">\r" +
    "\n" +
    "                          <a href=\"#\"><img src=\"/assets/images/spices.jpg\" class=\"img-responsive\" alt=\"product 2\"></a>\r" +
    "\n" +
    "                          <h4><small>Spices plants</small></h4>                                        \r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                      </div><!-- End Item -->\r" +
    "\n" +
    "                      <div class=\"item\">\r" +
    "\n" +
    "                          <a href=\"#\"><img src=\"/assets/images/veg.jpg\" class=\"img-responsive\" alt=\"product 3\"></a>\r" +
    "\n" +
    "                          <h4><small>Range of Vegetables</small></h4>                                        \r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                      </div><!-- End Item -->                                \r" +
    "\n" +
    "                    </div><!-- End Carousel Inner -->\r" +
    "\n" +
    "                    <!-- Controls -->\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                </div><!-- /.carousel -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"col-sm-3\">\r" +
    "\n" +
    "\t\t\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li class=\"dropdown-header\">Fruits</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Amla-seeds</a></li>\r" +
    "\n" +
    "              <li><a href=\"#\">Chicku</a></li>\r" +
    "\n" +
    "              <li><a href=\"#\">Eugenia Jambolana - Jamun </a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Nephelium Litchi</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li class=\"dropdown-header\">Herbs Seeds</li>\r" +
    "\n" +
    "              <li><a href=\"#\">Oregano</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Water cress</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"col-sm-3\">\r" +
    "\n" +
    "\t\t\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li class=\"dropdown-header\">Flowering</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Arabian Jasmine</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Bougainvillea Pink</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Ixora Dwarf Yellow</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Lotus White</a></li>\r" +
    "\n" +
    "              <li><a href=\"#\">Marigold</a></li>\r" +
    "\n" +
    "              <li><a href=\"#\">Peace Lilly</a></li>\r" +
    "\n" +
    "              <li><a href=\"#\">Rose Bicolor</a></li>\r" +
    "\n" +
    "              <li><a href=\"#\">Tagar Variegated</a></li>\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"col-sm-3\">\r" +
    "\n" +
    "\t\t\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li class=\"dropdown-header\">Vegetables</li>\r" +
    "\n" +
    "              <li><a href=\"#\">Broccolini</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Cabbage</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Kuka</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Mustard</a></li>                         \r" +
    "\n" +
    "\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t</ul>\t\t\t\t\r" +
    "\n" +
    "\t\t\t</li>\r" +
    "\n" +
    "\t\t</ul>\r" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "        <li class=\"dropdown\">\r" +
    "\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Seller <span class=\"caret\"></span></a>\r" +
    "\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\r" +
    "\n" +
    "            <li><a href=\"#sellerregistration\">Register</a></li>\r" +
    "\n" +
    "            <li><a href=\"#sellereditproducts\">Add/Edit Products</a></li>\r" +
    "\n" +
    "            <li><a href=\"#\">View Orders</a></li>\r" +
    "\n" +
    "            <li class=\"divider\"></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Seller Account</a></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Edit Account</a></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "          \r" +
    "\n" +
    "        <li class=\"dropdown\">\r" +
    "\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">My account <span class=\"caret\"></span></a>\r" +
    "\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\r" +
    "\n" +
    "            <li><a href=\"#\">Edit</a></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Messages</a></li>\r" +
    "\n" +
    "            <li class=\"divider\"></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Profile</a></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li><a href=\"#\">My cart (0) items</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "\t</div><!-- /.nav-collapse -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"navbar navbar-inverse navbar-fixed-bottom\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "      <p class=\"navbar-text pull-left\">© 2015 - Site Built By Nirmal\r" +
    "\n" +
    "\r" +
    "\n" +
    "      </p>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "      <a href=\"\" class=\"navbar-btn btn-danger btn pull-right\">\r" +
    "\n" +
    "      <span class=\"glyphicon glyphicon-star\"></span>  Subscribe on YouTube</a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "  </div>"
  );


  $templateCache.put('src/demoapp/demoapp.html',
    "<div class=\"container-fluid\">\r" +
    "\n" +
    "    \r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/index.html',
    "<html ng-app=\"demoapp\">\r" +
    "\n" +
    "\t<head>\r" +
    "\n" +
    "\t\t<title>Demo Application</title>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"css/bower.css\">\r" +
    "\n" +
    "\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/app.css\"> -->\r" +
    "\n" +
    "\t\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\r" +
    "\n" +
    "\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"demoapp/demoapp.css\">\r" +
    "\n" +
    "\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"common/common.css\">\r" +
    "\n" +
    "\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"seller/seller.css\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t<link href=\"common/xeditable.css\" rel=\"stylesheet\">\r" +
    "\n" +
    "\t\t<script src=\"assets/js/angular.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"assets/js/xeditable.js\"></script>\r" +
    "\n" +
    "\t\t\r" +
    "\n" +
    "\t\t<script src=\"temp/js/bower.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"demoapp/demoapp.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"seller/seller.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"seller/sellerService.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"temp/js/templates.js\"></script>\r" +
    "\n" +
    "\t</head>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<body>\r" +
    "\n" +
    "\t\t<div ng-include='\"src/common/header.html\"'></div>\r" +
    "\n" +
    "\t\t<div ng-view></div>\r" +
    "\n" +
    "\t</body>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</html>"
  );


  $templateCache.put('src/seller/seller-edit-products.html',
    "<div class=\"container\" ng-init=\"loadSellerProducts()\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-8\">\r" +
    "\n" +
    "            <div class=\"form\" role=\"form\">\r" +
    "\n" +
    "                <legend>What do you sell?</legend>\r" +
    "\n" +
    "                <div class=\"form-group\"> \r" +
    "\n" +
    "                    <button type=\"submit\" class=\"btn btn-info\" ng-click=\"addProduct()\">Add Item</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <table class=\"table table-bordered table-hover table-condensed\" >\r" +
    "\n" +
    "        <tr style=\"font-weight: bold\">\r" +
    "\n" +
    "          <td style=\"width:35%\">Item name</td>\r" +
    "\n" +
    "          <td style=\"width:20%\">Available quantity</td>\r" +
    "\n" +
    "          <td style=\"width:25%\">Amout per unit(Rs)</td>\r" +
    "\n" +
    "          <td style=\"width:20%\">District</td>\r" +
    "\n" +
    "          <td style=\"width:20%\">Action</td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    <tr ng-repeat=\"product in sellerproducts\">\r" +
    "\n" +
    "      <td>\r" +
    "\n" +
    "        <span editable-text=\"product.name\" e-name=\"productname\" e-form=\"rowform\" onbeforesave=\"checkProductName($data, product.name)\" e-required>\r" +
    "\n" +
    "          {{ product.name || 'empty' }}\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "      </td>\r" +
    "\n" +
    "      <td>\r" +
    "\n" +
    "        <span editable-text=\"product.quantity\" e-name=\"productquantity\" e-form=\"rowform\" e-required>\r" +
    "\n" +
    "          {{ product.quantity || 'empty' }}\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "      </td>\r" +
    "\n" +
    "      <td>\r" +
    "\n" +
    "        <span editable-text=\"product.price\" e-name=\"productprice\" e-form=\"rowform\" e-required>\r" +
    "\n" +
    "          {{ product.price || 'empty' }}\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "      </td>\r" +
    "\n" +
    "      <td>\r" +
    "\n" +
    "        <span editable-select=\"product.district\" e-name=\"group\" onshow=\"loadDistricts()\" e-form=\"rowform\" e-ng-options=\"district.id as district.name for district in districts\">\r" +
    "\n" +
    "          <!-- {{ showGroup(user) }} -->\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "      </td>\r" +
    "\n" +
    "      <td style=\"white-space: nowrap\">\r" +
    "\n" +
    "        <!-- form -->\r" +
    "\n" +
    "        <form editable-form name=\"rowform\" onbeforesave=\"saveProduct($data, product.id)\" ng-show=\"rowform.$visible\" class=\"form-buttons form-inline\" shown=\"inserted == product\">\r" +
    "\n" +
    "          <button type=\"submit\" ng-disabled=\"rowform.$waiting\" class=\"btn btn-primary\">\r" +
    "\n" +
    "            save\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "          <button type=\"button\" ng-disabled=\"rowform.$waiting\" ng-click=\"rowform.$cancel()\" class=\"btn btn-default\">\r" +
    "\n" +
    "            cancel\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "        <div class=\"buttons\" ng-show=\"!rowform.$visible\">\r" +
    "\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"rowform.$show()\">Edit</button>\r" +
    "\n" +
    "          <button class=\"btn btn-danger\" ng-click=\"removeProduct($index)\">Remove</button>\r" +
    "\n" +
    "        </div>  \r" +
    "\n" +
    "      </td>\r" +
    "\n" +
    "    </tr>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/seller/seller-registration.html',
    "<div class=\"container-fluid seller-body\" id=\"wrap\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <div class=\"form well\">   <legend>Sign Up</legend>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\r" +
    "\n" +
    "                            <input type=\"text\" name=\"firstname\" value=\"\" class=\"form-control input-md\" placeholder=\"First Name\"  />                        </div>\r" +
    "\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\r" +
    "\n" +
    "                            <input type=\"text\" name=\"lastname\" value=\"\" class=\"form-control input-md\" placeholder=\"Last Name\"  />                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <input type=\"text\" name=\"email\" value=\"\" class=\"form-control input-md\" placeholder=\"Your Email\"/>\r" +
    "\n" +
    "                    <input type=\"password\" name=\"password\" value=\"\" class=\"form-control input-md\" placeholder=\"Password\"/>\r" +
    "\n" +
    "                    <input type=\"password\" name=\"confirm_password\" value=\"\" class=\"form-control input-md\" placeholder=\"Confirm Password\"/>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\r" +
    "\n" +
    "                            <select name=\"user\" value=\"\" class=\"form-control input-md\">\r" +
    "\n" +
    "                                <option value=\"01\">Seller</option>\r" +
    "\n" +
    "                                <option value=\"02\">Buyer</option>\r" +
    "\n" +
    "                                <option value=\"03\">Admin</option>\r" +
    "\n" +
    "                            </select>                        \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\r" +
    "\n" +
    "                            <select name=\"gender\" value=\"\" class=\"form-control input-md\" placeholder=\"Gender\">\r" +
    "\n" +
    "                                <option value=\"01\">Male</option>\r" +
    "\n" +
    "                                <option value=\"02\">Female</option>\r" +
    "\n" +
    "                            </select>                       \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                    \r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <!-- <div class=\"col-xs-6 col-md-6\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <div class='input-group date' id='datepicker1'>\r" +
    "\n" +
    "                                    <input type='text' class=\"form-control input-md\" />\r" +
    "\n" +
    "                                    <span class=\"input-group-addon\">\r" +
    "\n" +
    "                                        <span class=\"glyphicon glyphicon-calendar\"></span>\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> -->\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <button class=\"btn btn-lg btn-success btn-block signup-btn\" type=\"submit\">\r" +
    "\n" +
    "                        Create account</button>\r" +
    "\n" +
    "            </div>          \r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"col-md-6\">\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <img src=\"/assets/images/nursery.jpg\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>            \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>"
  );

}]);
