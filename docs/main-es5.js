(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-pass/admin-pass.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-pass/admin-pass.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"bgStyle\" #passForm=\"ngForm\">\r\n    <div class=\"test\">\r\n        <input type=\"password\" name=\"passCode\" (click)=\"setErrorStatus()\" required ngModel #passCode=\"ngModel\"><br>        \r\n        <label>Enter Passcode<span>*</span></label>\r\n        <p *ngIf=\"passCode.invalid && passCode.touched\">Enter Passcode</p>\r\n        <p *ngIf=\"errorStatus && passCode.valid\">Invalid Passcode</p>\r\n    </div>\r\n    <div class=\"button\" (click)=\"accept(passForm)\">Submit</div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: rgba(10, 10, 10, 0.6);\">\r\n    <a class=\"navbar-brand navText\" href=\"#\">Admin</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['../home','hi','Admin']\">Home</a>\r\n            </li>\r\n            <!-- <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\">Admin</a>\r\n            </li> -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['..']\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<!-- Navbar End -->\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <form class=\"bgStyle\" #login=\"ngForm\">\r\n                <h3 align=\"center\" style=\"color: white\">Admin Form</h3>\r\n                <div class=\"test\">\r\n                   <input type=\"text\" name=\"name\" required ngModel #name=\"ngModel\"><br>        \r\n                    <label>Movie Name<span>*</span></label>\r\n                    <p *ngIf=\"name.invalid && name.touched\">Enter Movie Name</p>\r\n                </div>\r\n                \r\n                <div class=\"test\">\r\n                    <input type=\"text\" name=\"genre\" required ngModel #genre=\"ngModel\"><br>\r\n                    <label>Genre<span>*</span></label>\r\n                    <p *ngIf=\"genre.invalid && genre.touched\">Enter movie genre</p>\r\n                </div>\r\n\r\n                \r\n                <div class=\"test\">\r\n                        <input type=\"text\" name=\"tlink\" required ngModel #tlink=\"ngModel\"><br>\r\n                        <label>Trailer Link<span>*</span></label>\r\n                        <p *ngIf=\"tlink.invalid && tlink.touched\">Enter movie trailer link</p>\r\n                </div>\r\n\r\n                <div class=\"test\">\r\n                        <input type=\"text\" name=\"ilink\" required ngModel #ilink=\"ngModel\"><br>\r\n                        <label>Poster Link<span>*</span></label>\r\n                        <p *ngIf=\"ilink.invalid && ilink.touched\">Enter movie poster link<br>\r\n                </div>\r\n                <br>\r\n\r\n                <div class=\"test\">\r\n                    <textarea type=\"text\" rows=\"6\" name=\"description\" required ngModel #description=\"ngModel\"></textarea><br>\r\n                    <label>Description<span>*</span></label>\r\n                    <br>\r\n                    <p *ngIf=\"description.invalid && description.touched\">Enter movie poster link<br>\r\n                </div>                \r\n                <p class=\"message\" style=\"color: red\">{{errorText}}</p>\r\n                <p class=\"message\" style=\"color: green\">{{successText}}</p>\r\n                <div class=\"button\" (click)=\"accept(login)\">Submit</div>\r\n                <br>\r\n            </form>\r\n        </div>\r\n        \r\n\r\n        <div class=\"col-lg-8\">\r\n            <div  align=\"center\" class=\"bgCol\">\r\n                <div class=\"list\" *ngFor=\"let i of movies\" (click)=\"open(i.name)\">{{i.name}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <router-outlet></router-outlet>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: rgba(10, 10, 10, 0.6);\">\r\n        <a class=\"navbar-brand navText\" href=\"#\">{{username}}</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        \r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" routerLink=\"\">Home</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['../../../admin']\">Admin</a>\r\n                </li> -->\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['']\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    \r\n    <!-- Navbar End -->\r\n\r\n\r\n<div class=\"container\">\r\n    <h1 align=\"center\" style=\"color: white; font-family: cursive\">{{welcomeText}}</h1>\r\n    <div  align=\"center\" class=\"bgCol\">\r\n        <div class=\"list\" (click)=\"open(i.name)\" *ngFor=\"let i of movies\">{{i.name}}</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"bgStyle\" #login=\"ngForm\">\r\n    <h3 align=\"center\" style=\"color: white\">Login</h3>\r\n    <div class=\"test\">\r\n        <input type=\"text\" name=\"username\" required ngModel #username=\"ngModel\"><br>        \r\n        <label>Username<span>*</span></label>\r\n        <p *ngIf=\"username.invalid && username.touched\">Invalid Username</p>\r\n    </div>\r\n    \r\n    <div class=\"test\">\r\n        <input type=\"password\" name=\"password\" required ngModel #password=\"ngModel\"><br>\r\n        <label>Password<span>*</span></label>\r\n        <p *ngIf=\"password.invalid && password.touched\">Invalid Password</p>\r\n    </div>\r\n    <div class=\"button\" (click)=\"accept(login)\">Login</div>\r\n    <p style=\"color: red; font-weight: bold\">{{text}}</p>\r\n    <br>\r\n    <p align=\"center\" style=\"color: white; font-size: 130%\">Not a user. <a routerLink=\"signup\">Sign Up</a></p>\r\n    <br>\r\n    <p align=\"center\" style=\"color: white; font-size: 130%\">Want to <a routerLink=\"adminPass\">Administrate?</a> movies in list</p>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <form class=\"bgStyle\" #signup=\"ngForm\">\r\n                <h3 align=\"center\" style=\"color: white\">Sign Up</h3>\r\n                <div class=\"test\">\r\n                    <input type=\"text\" name=\"username\" required ngModel #username=\"ngModel\"><br>        \r\n                    <label>Username<span>*</span></label>\r\n                    <p *ngIf=\"username.invalid && username.touched\">Invalid Username</p>\r\n                </div>\r\n                \r\n                <div class=\"test\">\r\n                    <input type=\"text\" name=\"email\" required ngModel #email=\"ngModel\"><br>\r\n                    <label>Email<span>*</span></label>\r\n                    <p *ngIf=\"email.invalid && email.touched\">Invalid Email</p>\r\n                </div>\r\n                \r\n                <div class=\"test\">\r\n                    <input type=\"text\" name=\"region\" required ngModel #region=\"ngModel\"><br>\r\n                    <label>Region</label>\r\n                    <!-- <p *ngIf=\"email.invalid && email.touched\">Invalid Email</p> -->\r\n                </div>\r\n\r\n                <div class=\"test\">\r\n                    <input type=\"password\" name=\"password\" required ngModel #password=\"ngModel\"><br>\r\n                    <label>Password<span>*</span></label>\r\n                    <p *ngIf=\"password.invalid && password.touched\">Enter a Password</p>\r\n                </div>\r\n\r\n                <div class=\"test\">\r\n                    <input type=\"password\" name=\"cpassword\" required ngModel #cpassword=\"ngModel\"><br>\r\n                    <label>Confirm Password<span>*</span></label>\r\n                    <p *ngIf=\"cpassword.value != password.value && cpassword.touched\">Passwords do not match</p>\r\n                </div>\r\n    \r\n                <div class=\"button\" (click)=\"signUp(signup)\">Sign Up</div>\r\n                <p style=\"color: red; font-weight: bold;\">{{text}}</p>\r\n                <br>\r\n                <p align=\"center\" style=\"color: white; font-size: 130%\">Already have an account. <a routerLink=\"\"> Log In</a></p>\r\n        </form>\r\n    </div>\r\n    \r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userpage/userpage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userpage/userpage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: rgba(10, 10, 10, 0.6);\">\r\n        <a class=\"navbar-brand navText\" href=\"#\">{{username}}</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        \r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['../../../home',movie.name,username]\">Home</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['../../../admin']\">Admin</a>\r\n                </li> -->\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['']\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    \r\n    <!-- Navbar End -->\r\n\r\n<div class=\"container\">\r\n    <div class=\"bgCol\">\r\n        <div align=\"center\">\r\n            <h1>{{movie.name}}</h1>\r\n            <h3>Genre: {{movie.genre}}</h3>\r\n            <table>\r\n                <tr>\r\n                    <td><img src={{movie.ilink}} width=\"500px\"></td>\r\n                    <td style=\"font-size: 150%\">{{movie.description}}</td>\r\n                </tr>\r\n            </table>\r\n            <a href=\"{{movie.tlink}}\">Have a look at the trailer</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"comment\" align=\"center\"> \r\n        <!-- <div>\r\n            <h2>Star Rating</h2>\r\n            <span class=\"fa fa-star star\" (mouseover)=\"starFunction(1)\" (click)=\"setStars(1)\" (mouseout)=\"displayStars()\"></span>\r\n            <span class=\"fa fa-star star\" (mouseover)=\"starFunction(2)\" (click)=\"setStars(2)\" (mouseout)=\"displayStars()\"></span>\r\n            <span class=\"fa fa-star star\" (mouseover)=\"starFunction(3)\" (click)=\"setStars(3)\" (mouseout)=\"displayStars()\"></span>\r\n            <span class=\"fa fa-star star\" (mouseover)=\"starFunction(4)\" (click)=\"setStars(4)\" (mouseout)=\"displayStars()\"></span>\r\n            <span class=\"fa fa-star star\" (mouseover)=\"starFunction(5)\" (click)=\"setStars(5)\" (mouseout)=\"displayStars()\"></span>\r\n        </div> -->\r\n        <label>Leave a comment</label><br>\r\n        <textarea rows=\"10\" #com></textarea>\r\n        <div class=\"button\" (click)=\"post(com)\">Post</div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"comment\">\r\n            <div  *ngFor=\"let i of movie.comments\">\r\n                <h4 style=\"margin-left: 10px\">{{i.username}}</h4>\r\n                <div>{{i.comment}}</div>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-pass/admin-pass.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-pass/admin-pass.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgStyle{\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  width: 300px;\r\n  margin: 50px auto;\r\n  /* margin-left: 100px; */\r\n  /* border: 2px solid black; */\r\n  border-radius: 30px;\r\n  background-color: rgba(10, 10, 10, 0.6);\r\n  /* background-image: linear-gradient(to bottom right,   \r\n rgba(0, 100, 100, 0.75), rgba(0, 125, 125, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 225, 225, 0.75), rgb(0, 250, 250, 0.75),\r\n rgba(0, 250, 250, 0.75), rgba(0, 225, 225, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 125, 125, 0.75), rgb(0, 100, 100, 0.75)); */\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.5), 0 17px 50px 0 rgba(0,0,0,0.3);\r\n}\r\n\r\n\r\n.button{\r\n\r\n  user-select: none; /* supported by Chrome and Opera */\r\n -webkit-user-select: none; /* Safari */\r\n -khtml-user-select: none; /* Konqueror HTML */\r\n -moz-user-select: none; /* Firefox */\r\n -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n  width:80px;\r\n  margin-left: 80px;\r\n  text-align: center;\r\n  background-color: rgba(0, 15, 153, 1);\r\n  background-image: -webkit-gradient(linear,\r\n  right bottom, left top,\r\n  from(rgba(0, 100, 0, 1)), color-stop(rgba(0, 125, 0, 1)), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 175, 0, 1)),color-stop(/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 125, 0, 1)), to(rgb(0, 100, 0, 1)));\r\n  background-image: linear-gradient(to top left,\r\n  rgba(0, 100, 0, 1), rgba(0, 125, 0, 1), rgb(0, 150, 0, 1), rgb(0, 175, 0, 1),/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */\r\n /* rgba(0, 250, 0, 1), rgba(0, 225, 0, 1), rgb(0, 200, 0, 1),*/ rgb(0, 175, 0, 1), rgb(0, 150, 0, 1), rgb(0, 125, 0, 1), rgb(0, 100, 0, 1));\r\n  /* rgba(0, 8, 80, 1), rgba(0, 15, 153, 1), rgba(0, 26, 255, 1), rgba(43, 64, 255, 1), */\r\n  /* rgba(43, 64, 255, 1), rgba(0, 26, 255, 1), rgba(0, 15, 153, 1), rgba(0, 8, 80, 1)); */\r\n  /* background-image: linear-gradient(to bottom right, rgba(255, 0, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 255, 0, 0.750) ,rgba(0, 128, 0, 0.750), rgba(255, 255, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 0, 0, 0.750)); */\r\n  padding: 2px;\r\n  color: white;\r\n  font-size: 125%;\r\n  font-weight: bolder;\r\n  border-radius: 5px; \r\n}\r\n\r\n\r\n.button:hover {\r\n  width: 90px;\r\n  padding: 5px;\r\n  margin-left: 75px;\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.759);\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n\r\n\r\n.button:active {\r\n  box-shadow: 0 5px #111;\r\n  -webkit-transform: translateY(4px);\r\n          transform: translateY(4px);\r\n}\r\n\r\n\r\n.test{\r\n  position: relative;\r\n  color: white;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n.test input,select{\r\n  font-size:125%;\r\n  /* margin-left: 30px;\r\n  margin-bottom: 8px;\r\n  margin-top: 5px;   */ \r\n  width: 90%;\r\n  margin: 5px auto;\r\n  border: none;\r\n  color: white;\r\n  align-content: center;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n\r\n.test input.ng-valid,\r\nselect.ng-valid{\r\nborder-bottom: 2px solid green;\r\n}\r\n\r\n\r\n.test input:focus,\r\nselect:focus{\r\noutline: none; \r\nborder: 0px;\r\nborder-bottom: 2px solid green;   \r\n}\r\n\r\n\r\n.test input:focus ~label,\r\nselect:focus ~ label,\r\ninput.ng-valid ~ label,\r\nselect.ng-valid ~ label{\r\ncolor: green;\r\ntop: -55px;\r\nfont-size: 85%;\r\n-webkit-transition: 0.75s;\r\ntransition: 0.75s;\r\n}\r\n\r\n\r\n.test textarea{\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 90%;\r\n  border-bottom: 1px solid white;\r\n  color: white;\r\n}\r\n\r\n\r\n.test textarea ~ label{\r\n  position: absolute;\r\n  top: 0px;\r\n  font-size: 125%;\r\n  color: white;\r\n}\r\n\r\n\r\n.test textarea:focus,\r\n.test textarea.ng-valid{\r\n  outline: none;\r\n  border-bottom: 1px solid green;\r\n}\r\n\r\n\r\n.test textarea.ng-valid ~ label,\r\n.test textarea:focus ~ label{\r\n  font-size: 85%;\r\n  color: green;\r\n  top: -20px;\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n\r\n\r\n.test label{\r\nfont-size: 125%;\r\nposition: relative;\r\ntop: -35px;\r\ncolor: white;\r\n/* margin-left: 30px;   */\r\npointer-events: none;\r\n}\r\n\r\n\r\n.test p,span{\r\nposition: relative;\r\ncolor: red;\r\n}\r\n\r\n\r\n.test p{\r\nmargin-left: 30px;\r\ntop: -35px;\r\n-webkit-animation-name: disp;\r\n        animation-name: disp;\r\n-webkit-animation-duration: 0.750s;\r\n        animation-duration: 0.750s;\r\n}\r\n\r\n\r\n@-webkit-keyframes disp{\r\nfrom{\r\n  opacity: 0;\r\n  top: -65px;\r\n}\r\nto{\r\n  opacity: 1;\r\n  top: -35px;\r\n}\r\n}\r\n\r\n\r\n@keyframes disp{\r\nfrom{\r\n  opacity: 0;\r\n  top: -65px;\r\n}\r\nto{\r\n  opacity: 1;\r\n  top: -35px;\r\n}\r\n}\r\n\r\n\r\na{\r\n/* margin-left: 95px; */\r\ncolor: green;\r\n/* font-size: 125%; */\r\n/* font-weight: bold; */\r\n}\r\n\r\n\r\na:hover{\r\ntext-decoration: none;\r\ncolor: aqua;\r\n-webkit-transition: 0.75s;\r\ntransition: 0.75s;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFzcy9hZG1pbi1wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkM7OzZLQUUySztFQUMzSyx3RUFBd0U7QUFDMUU7OztBQUdBOztFQUVFLGlCQUFpQixFQUFFLGtDQUFrQztDQUN0RCx5QkFBeUIsRUFBRSxXQUFXO0NBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtDQUM3QyxzQkFBc0IsRUFBRSxZQUFZO0NBQ3BDLHFCQUFxQixFQUFFLDJCQUEyQjs7RUFFakQsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDOzt5UkFFMEk7RUFGMUk7OzRJQUUwSTtFQUMxSSx1RkFBdUY7RUFDdkYsd0ZBQXdGO0VBQ3hGLHdPQUF3TztFQUN4TyxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJFQUEyRTtFQUMzRSx5QkFBaUI7RUFBakIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLGNBQWM7RUFDZDs7c0JBRW9CO0VBQ3BCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQzs7O0FBRUE7O0FBRUEsOEJBQThCO0FBQzlCOzs7QUFFQTs7QUFFQSxhQUFhO0FBQ2IsV0FBVztBQUNYLDhCQUE4QjtBQUM5Qjs7O0FBRUE7Ozs7QUFJQSxZQUFZO0FBQ1osVUFBVTtBQUNWLGNBQWM7QUFDZCx5QkFBaUI7QUFBakIsaUJBQWlCO0FBQ2pCOzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOzs7QUFHQTs7RUFFRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBaUI7RUFBakIsaUJBQWlCO0FBQ25COzs7QUFFQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1Y7OztBQUlBO0FBQ0EsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDViw0QkFBb0I7UUFBcEIsb0JBQW9CO0FBQ3BCLGtDQUEwQjtRQUExQiwwQkFBMEI7QUFDMUI7OztBQUdBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7OztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7OztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCOzs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1gseUJBQWlCO0FBQWpCLGlCQUFpQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhc3MvYWRtaW4tcGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnU3R5bGV7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwMHB4OyAqL1xyXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjYpO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICAgXHJcbiByZ2JhKDAsIDEwMCwgMTAwLCAwLjc1KSwgcmdiYSgwLCAxMjUsIDEyNSwgMC43NSksIHJnYigwLCAxNTAsIDE1MCwgMC43NSksIHJnYigwLCAxNzUsIDE3NSwgMC43NSksIHJnYigwLCAyMDAsIDIwMCwgMC43NSksIHJnYigwLCAyMjUsIDIyNSwgMC43NSksIHJnYigwLCAyNTAsIDI1MCwgMC43NSksXHJcbiByZ2JhKDAsIDI1MCwgMjUwLCAwLjc1KSwgcmdiYSgwLCAyMjUsIDIyNSwgMC43NSksIHJnYigwLCAyMDAsIDIwMCwgMC43NSksIHJnYigwLCAxNzUsIDE3NSwgMC43NSksIHJnYigwLCAxNTAsIDE1MCwgMC43NSksIHJnYigwLCAxMjUsIDEyNSwgMC43NSksIHJnYigwLCAxMDAsIDEwMCwgMC43NSkpOyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjUpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuXHJcbi5idXR0b257XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xyXG4gLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuXHJcbiAgd2lkdGg6ODBweDtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNSwgMTUzLCAxKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsXHJcbiAgcmdiYSgwLCAxMDAsIDAsIDEpLCByZ2JhKDAsIDEyNSwgMCwgMSksIHJnYigwLCAxNTAsIDAsIDEpLCByZ2IoMCwgMTc1LCAwLCAxKSwvKiByZ2IoMCwgMjAwLCAwLCAxKSwgcmdiKDAsIDIyNSwgMCwgMSksIHJnYigwLCAyNTAsIDAsIDEpLCAqL1xyXG4gLyogcmdiYSgwLCAyNTAsIDAsIDEpLCByZ2JhKDAsIDIyNSwgMCwgMSksIHJnYigwLCAyMDAsIDAsIDEpLCovIHJnYigwLCAxNzUsIDAsIDEpLCByZ2IoMCwgMTUwLCAwLCAxKSwgcmdiKDAsIDEyNSwgMCwgMSksIHJnYigwLCAxMDAsIDAsIDEpKTtcclxuICAvKiByZ2JhKDAsIDgsIDgwLCAxKSwgcmdiYSgwLCAxNSwgMTUzLCAxKSwgcmdiYSgwLCAyNiwgMjU1LCAxKSwgcmdiYSg0MywgNjQsIDI1NSwgMSksICovXHJcbiAgLyogcmdiYSg0MywgNjQsIDI1NSwgMSksIHJnYmEoMCwgMjYsIDI1NSwgMSksIHJnYmEoMCwgMTUsIDE1MywgMSksIHJnYmEoMCwgOCwgODAsIDEpKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDI1NSwgMCwgMCwgMC43NTApLCByZ2JhKDI1NSwgMTY1LCAwLCAwLjc1MCksIHJnYmEoMjU1LCAyNTUsIDAsIDAuNzUwKSAscmdiYSgwLCAxMjgsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDI1NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMTY1LCAwLCAwLjc1MCksIHJnYmEoMjU1LCAwLCAwLCAwLjc1MCkpOyAqL1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxufSAgIFxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuNzU5KTtcclxuICB0cmFuc2l0aW9uOiAwLjc1cztcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4ICMxMTE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbn1cclxuXHJcblxyXG4udGVzdHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGVzdCBpbnB1dCxzZWxlY3R7XHJcbiAgZm9udC1zaXplOjEyNSU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDsgICAqLyBcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4udGVzdCBpbnB1dC5uZy12YWxpZCxcclxuc2VsZWN0Lm5nLXZhbGlke1xyXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi50ZXN0IGlucHV0OmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXN7XHJcbm91dGxpbmU6IG5vbmU7IFxyXG5ib3JkZXI6IDBweDtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZWVuOyAgIFxyXG59XHJcblxyXG4udGVzdCBpbnB1dDpmb2N1cyB+bGFiZWwsXHJcbnNlbGVjdDpmb2N1cyB+IGxhYmVsLFxyXG5pbnB1dC5uZy12YWxpZCB+IGxhYmVsLFxyXG5zZWxlY3QubmctdmFsaWQgfiBsYWJlbHtcclxuY29sb3I6IGdyZWVuO1xyXG50b3A6IC01NXB4O1xyXG5mb250LXNpemU6IDg1JTtcclxudHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcbi50ZXN0IHRleHRhcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXN0IHRleHRhcmVhIH4gbGFiZWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXN0IHRleHRhcmVhOmZvY3VzLFxyXG4udGVzdCB0ZXh0YXJlYS5uZy12YWxpZHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuXHJcbi50ZXN0IHRleHRhcmVhLm5nLXZhbGlkIH4gbGFiZWwsXHJcbi50ZXN0IHRleHRhcmVhOmZvY3VzIH4gbGFiZWx7XHJcbiAgZm9udC1zaXplOiA4NSU7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcbi50ZXN0IGxhYmVse1xyXG5mb250LXNpemU6IDEyNSU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAtMzVweDtcclxuY29sb3I6IHdoaXRlO1xyXG4vKiBtYXJnaW4tbGVmdDogMzBweDsgICAqL1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuXHJcbi50ZXN0IHAsc3BhbntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5jb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi50ZXN0IHB7XHJcbm1hcmdpbi1sZWZ0OiAzMHB4O1xyXG50b3A6IC0zNXB4O1xyXG5hbmltYXRpb24tbmFtZTogZGlzcDtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1MHM7XHJcbn1cclxuXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGlzcHtcclxuZnJvbXtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogLTY1cHg7XHJcbn1cclxudG97XHJcbiAgb3BhY2l0eTogMTtcclxuICB0b3A6IC0zNXB4O1xyXG59XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGlzcHtcclxuZnJvbXtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogLTY1cHg7XHJcbn1cclxudG97XHJcbiAgb3BhY2l0eTogMTtcclxuICB0b3A6IC0zNXB4O1xyXG59XHJcbn1cclxuXHJcbmF7XHJcbi8qIG1hcmdpbi1sZWZ0OiA5NXB4OyAqL1xyXG5jb2xvcjogZ3JlZW47XHJcbi8qIGZvbnQtc2l6ZTogMTI1JTsgKi9cclxuLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6IGFxdWE7XHJcbnRyYW5zaXRpb246IDAuNzVzO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-pass/admin-pass.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-pass/admin-pass.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPassComponent", function() { return AdminPassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminPassComponent = /** @class */ (function () {
    function AdminPassComponent(router) {
        this.router = router;
        this.errorStatus = false;
    }
    AdminPassComponent.prototype.ngOnInit = function () {
    };
    AdminPassComponent.prototype.accept = function (passForm) {
        if (passForm.value.passCode == "admin") {
            this.errorStatus = false;
            this.router.navigate(['../admin']);
        }
        else {
            this.errorStatus = true;
        }
    };
    AdminPassComponent.prototype.setErrorStatus = function () {
        this.errorStatus = false;
    };
    AdminPassComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminPassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-pass',
            template: __webpack_require__(/*! raw-loader!./admin-pass.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-pass/admin-pass.component.html"),
            styles: [__webpack_require__(/*! ./admin-pass.component.css */ "./src/app/admin-pass/admin-pass.component.css")]
        })
    ], AdminPassComponent);
    return AdminPassComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgStyle{\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  width: 300px;\r\n  margin: 50px auto;\r\n  /* margin-left: 100px; */\r\n  /* border: 2px solid black; */\r\n  border-radius: 30px;\r\n  background-color: rgba(10, 10, 10, 0.6);\r\n  /* background-image: linear-gradient(to bottom right,   \r\n rgba(0, 100, 100, 0.75), rgba(0, 125, 125, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 225, 225, 0.75), rgb(0, 250, 250, 0.75),\r\n rgba(0, 250, 250, 0.75), rgba(0, 225, 225, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 125, 125, 0.75), rgb(0, 100, 100, 0.75)); */\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.5), 0 17px 50px 0 rgba(0,0,0,0.3);\r\n}\r\n\r\n\r\n.button{\r\n\r\n  user-select: none; /* supported by Chrome and Opera */\r\n -webkit-user-select: none; /* Safari */\r\n -khtml-user-select: none; /* Konqueror HTML */\r\n -moz-user-select: none; /* Firefox */\r\n -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n  width:80px;\r\n  margin-left: 80px;\r\n  text-align: center;\r\n  background-color: rgba(0, 15, 153, 1);\r\n  background-image: -webkit-gradient(linear,\r\n  right bottom, left top,\r\n  from(rgba(0, 100, 0, 1)), color-stop(rgba(0, 125, 0, 1)), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 175, 0, 1)),color-stop(/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 125, 0, 1)), to(rgb(0, 100, 0, 1)));\r\n  background-image: linear-gradient(to top left,\r\n  rgba(0, 100, 0, 1), rgba(0, 125, 0, 1), rgb(0, 150, 0, 1), rgb(0, 175, 0, 1),/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */\r\n /* rgba(0, 250, 0, 1), rgba(0, 225, 0, 1), rgb(0, 200, 0, 1),*/ rgb(0, 175, 0, 1), rgb(0, 150, 0, 1), rgb(0, 125, 0, 1), rgb(0, 100, 0, 1));\r\n  /* rgba(0, 8, 80, 1), rgba(0, 15, 153, 1), rgba(0, 26, 255, 1), rgba(43, 64, 255, 1), */\r\n  /* rgba(43, 64, 255, 1), rgba(0, 26, 255, 1), rgba(0, 15, 153, 1), rgba(0, 8, 80, 1)); */\r\n  /* background-image: linear-gradient(to bottom right, rgba(255, 0, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 255, 0, 0.750) ,rgba(0, 128, 0, 0.750), rgba(255, 255, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 0, 0, 0.750)); */\r\n  padding: 2px;\r\n  color: white;\r\n  font-size: 125%;\r\n  font-weight: bolder;\r\n  border-radius: 5px; \r\n}\r\n\r\n\r\n.button:hover {\r\n  width: 90px;\r\n  padding: 5px;\r\n  margin-left: 75px;\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.759);\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n\r\n\r\n.button:active {\r\n  box-shadow: 0 5px #111;\r\n  -webkit-transform: translateY(4px);\r\n          transform: translateY(4px);\r\n}\r\n\r\n\r\n.test{\r\n  position: relative;\r\n  color: white;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n.test input,select{\r\n  font-size:125%;\r\n  /* margin-left: 30px;\r\n  margin-bottom: 8px;\r\n  margin-top: 5px;   */ \r\n  width: 90%;\r\n  margin: 5px auto;\r\n  border: none;\r\n  color: white;\r\n  align-content: center;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n\r\n.test input.ng-valid,\r\nselect.ng-valid{\r\nborder-bottom: 2px solid green;\r\n}\r\n\r\n\r\n.test input:focus,\r\nselect:focus{\r\noutline: none; \r\nborder: 0px;\r\nborder-bottom: 2px solid green;   \r\n}\r\n\r\n\r\n.test input:focus ~label,\r\nselect:focus ~ label,\r\ninput.ng-valid ~ label,\r\nselect.ng-valid ~ label{\r\ncolor: green;\r\ntop: -55px;\r\nfont-size: 85%;\r\n-webkit-transition: 0.75s;\r\ntransition: 0.75s;\r\n}\r\n\r\n\r\n.test textarea{\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 90%;\r\n  border-bottom: 1px solid white;\r\n  color: white;\r\n}\r\n\r\n\r\n.test textarea ~ label{\r\n  position: absolute;\r\n  top: 0px;\r\n  font-size: 125%;\r\n  color: white;\r\n}\r\n\r\n\r\n.test textarea:focus,\r\n.test textarea.ng-valid{\r\n  outline: none;\r\n  border-bottom: 1px solid green;\r\n}\r\n\r\n\r\n.test textarea.ng-valid ~ label,\r\n.test textarea:focus ~ label{\r\n  font-size: 85%;\r\n  color: green;\r\n  top: -20px;\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n\r\n\r\n.test label{\r\nfont-size: 125%;\r\nposition: relative;\r\ntop: -35px;\r\ncolor: white;\r\n/* margin-left: 30px;   */\r\npointer-events: none;\r\n}\r\n\r\n\r\n.test p,span{\r\nposition: relative;\r\ncolor: red;\r\n}\r\n\r\n\r\n.test p{\r\nmargin-left: 30px;\r\ntop: -35px;\r\n-webkit-animation-name: disp;\r\n        animation-name: disp;\r\n-webkit-animation-duration: 0.750s;\r\n        animation-duration: 0.750s;\r\n}\r\n\r\n\r\n@-webkit-keyframes disp{\r\nfrom{\r\n  opacity: 0;\r\n  top: -65px;\r\n}\r\nto{\r\n  opacity: 1;\r\n  top: -35px;\r\n}\r\n}\r\n\r\n\r\n@keyframes disp{\r\nfrom{\r\n  opacity: 0;\r\n  top: -65px;\r\n}\r\nto{\r\n  opacity: 1;\r\n  top: -35px;\r\n}\r\n}\r\n\r\n\r\na{\r\n/* margin-left: 95px; */\r\ncolor: green;\r\n/* font-size: 125%; */\r\n/* font-weight: bold; */\r\n}\r\n\r\n\r\na:hover{\r\ntext-decoration: none;\r\ncolor: aqua;\r\n-webkit-transition: 0.75s;\r\ntransition: 0.75s;\r\n}\r\n\r\n\r\n.bgCol{\r\n  background-color: rgba(10, 10, 10, 0.6);\r\n  color: white;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 50px auto;\r\n}\r\n\r\n\r\n.list{\r\n  user-select: none; /* supported by Chrome and Opera */\r\n -webkit-user-select: none; /* Safari */\r\n -khtml-user-select: none; /* Konqueror HTML */\r\n -moz-user-select: none; /* Firefox */\r\n -ms-user-select: none; /* Internet Explorer/Edge */\r\n  \r\n  text-align: center;\r\n  color: rgb(91, 0, 128);\r\n  font-size:150%;\r\n  background-color: rgba(230, 233, 230, 0.6);\r\n  width: 70%;\r\n  border-radius: 5px;\r\n  padding: 3px;\r\n}\r\n\r\n\r\n.list:hover{\r\n  width: 75%;\r\n  margin: 5px;\r\n  padding: 6px;\r\n  background-color: rgb(255, 255, 255);\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.4),0 17px 50px 0 rgba(0,0,0,0.3);\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qzs7NktBRTJLO0VBQzNLLHdFQUF3RTtBQUMxRTs7O0FBR0E7O0VBRUUsaUJBQWlCLEVBQUUsa0NBQWtDO0NBQ3RELHlCQUF5QixFQUFFLFdBQVc7Q0FDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0NBQzdDLHNCQUFzQixFQUFFLFlBQVk7Q0FDcEMscUJBQXFCLEVBQUUsMkJBQTJCOztFQUVqRCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckM7O3lSQUUwSTtFQUYxSTs7NElBRTBJO0VBQzFJLHVGQUF1RjtFQUN2Rix3RkFBd0Y7RUFDeEYsd09BQXdPO0VBQ3hPLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMkVBQTJFO0VBQzNFLHlCQUFpQjtFQUFqQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsY0FBYztFQUNkOztzQkFFb0I7RUFDcEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOzs7QUFFQTs7QUFFQSw4QkFBOEI7QUFDOUI7OztBQUVBOztBQUVBLGFBQWE7QUFDYixXQUFXO0FBQ1gsOEJBQThCO0FBQzlCOzs7QUFFQTs7OztBQUlBLFlBQVk7QUFDWixVQUFVO0FBQ1YsY0FBYztBQUNkLHlCQUFpQjtBQUFqQixpQkFBaUI7QUFDakI7OztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0FBQ2Q7OztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7OztBQUdBOztFQUVFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUFpQjtFQUFqQixpQkFBaUI7QUFDbkI7OztBQUVBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixvQkFBb0I7QUFDcEI7OztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVjs7O0FBSUE7QUFDQSxpQkFBaUI7QUFDakIsVUFBVTtBQUNWLDRCQUFvQjtRQUFwQixvQkFBb0I7QUFDcEIsa0NBQTBCO1FBQTFCLDBCQUEwQjtBQUMxQjs7O0FBR0E7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTs7O0FBRUE7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTs7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkI7OztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWCx5QkFBaUI7QUFBakIsaUJBQWlCO0FBQ2pCOzs7QUFJQTtFQUNFLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsa0NBQWtDO0NBQ3RELHlCQUF5QixFQUFFLFdBQVc7Q0FDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0NBQzdDLHNCQUFzQixFQUFFLFlBQVk7Q0FDcEMscUJBQXFCLEVBQUUsMkJBQTJCOztFQUVqRCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHVFQUF1RTtFQUN2RSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ1N0eWxle1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDsgKi9cclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC42KTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAgIFxyXG4gcmdiYSgwLCAxMDAsIDEwMCwgMC43NSksIHJnYmEoMCwgMTI1LCAxMjUsIDAuNzUpLCByZ2IoMCwgMTUwLCAxNTAsIDAuNzUpLCByZ2IoMCwgMTc1LCAxNzUsIDAuNzUpLCByZ2IoMCwgMjAwLCAyMDAsIDAuNzUpLCByZ2IoMCwgMjI1LCAyMjUsIDAuNzUpLCByZ2IoMCwgMjUwLCAyNTAsIDAuNzUpLFxyXG4gcmdiYSgwLCAyNTAsIDI1MCwgMC43NSksIHJnYmEoMCwgMjI1LCAyMjUsIDAuNzUpLCByZ2IoMCwgMjAwLCAyMDAsIDAuNzUpLCByZ2IoMCwgMTc1LCAxNzUsIDAuNzUpLCByZ2IoMCwgMTUwLCAxNTAsIDAuNzUpLCByZ2IoMCwgMTI1LCAxMjUsIDAuNzUpLCByZ2IoMCwgMTAwLCAxMDAsIDAuNzUpKTsgKi9cclxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC41KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9ue1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxuIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcblxyXG4gIHdpZHRoOjgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUsIDE1MywgMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LFxyXG4gIHJnYmEoMCwgMTAwLCAwLCAxKSwgcmdiYSgwLCAxMjUsIDAsIDEpLCByZ2IoMCwgMTUwLCAwLCAxKSwgcmdiKDAsIDE3NSwgMCwgMSksLyogcmdiKDAsIDIwMCwgMCwgMSksIHJnYigwLCAyMjUsIDAsIDEpLCByZ2IoMCwgMjUwLCAwLCAxKSwgKi9cclxuIC8qIHJnYmEoMCwgMjUwLCAwLCAxKSwgcmdiYSgwLCAyMjUsIDAsIDEpLCByZ2IoMCwgMjAwLCAwLCAxKSwqLyByZ2IoMCwgMTc1LCAwLCAxKSwgcmdiKDAsIDE1MCwgMCwgMSksIHJnYigwLCAxMjUsIDAsIDEpLCByZ2IoMCwgMTAwLCAwLCAxKSk7XHJcbiAgLyogcmdiYSgwLCA4LCA4MCwgMSksIHJnYmEoMCwgMTUsIDE1MywgMSksIHJnYmEoMCwgMjYsIDI1NSwgMSksIHJnYmEoNDMsIDY0LCAyNTUsIDEpLCAqL1xyXG4gIC8qIHJnYmEoNDMsIDY0LCAyNTUsIDEpLCByZ2JhKDAsIDI2LCAyNTUsIDEpLCByZ2JhKDAsIDE1LCAxNTMsIDEpLCByZ2JhKDAsIDgsIDgwLCAxKSk7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgyNTUsIDAsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDE2NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMjU1LCAwLCAwLjc1MCkgLHJnYmEoMCwgMTI4LCAwLCAwLjc1MCksIHJnYmEoMjU1LCAyNTUsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDE2NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMCwgMCwgMC43NTApKTsgKi9cclxuICBwYWRkaW5nOiAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbn0gICBcclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjc1OSk7XHJcbiAgdHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDVweCAjMTExO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcblxyXG5cclxuLnRlc3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRlc3QgaW5wdXQsc2VsZWN0e1xyXG4gIGZvbnQtc2l6ZToxMjUlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7ICAgKi8gXHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnRlc3QgaW5wdXQubmctdmFsaWQsXHJcbnNlbGVjdC5uZy12YWxpZHtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4udGVzdCBpbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3Vze1xyXG5vdXRsaW5lOiBub25lOyBcclxuYm9yZGVyOiAwcHg7XHJcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjsgICBcclxufVxyXG5cclxuLnRlc3QgaW5wdXQ6Zm9jdXMgfmxhYmVsLFxyXG5zZWxlY3Q6Zm9jdXMgfiBsYWJlbCxcclxuaW5wdXQubmctdmFsaWQgfiBsYWJlbCxcclxuc2VsZWN0Lm5nLXZhbGlkIH4gbGFiZWx7XHJcbmNvbG9yOiBncmVlbjtcclxudG9wOiAtNTVweDtcclxuZm9udC1zaXplOiA4NSU7XHJcbnRyYW5zaXRpb246IDAuNzVzO1xyXG59XHJcblxyXG4udGVzdCB0ZXh0YXJlYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGVzdCB0ZXh0YXJlYSB+IGxhYmVse1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBmb250LXNpemU6IDEyNSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGVzdCB0ZXh0YXJlYTpmb2N1cyxcclxuLnRlc3QgdGV4dGFyZWEubmctdmFsaWR7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcblxyXG4udGVzdCB0ZXh0YXJlYS5uZy12YWxpZCB+IGxhYmVsLFxyXG4udGVzdCB0ZXh0YXJlYTpmb2N1cyB+IGxhYmVse1xyXG4gIGZvbnQtc2l6ZTogODUlO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICB0b3A6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNzVzO1xyXG59XHJcblxyXG4udGVzdCBsYWJlbHtcclxuZm9udC1zaXplOiAxMjUlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogLTM1cHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuLyogbWFyZ2luLWxlZnQ6IDMwcHg7ICAgKi9cclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4udGVzdCBwLHNwYW57XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG4udGVzdCBwe1xyXG5tYXJnaW4tbGVmdDogMzBweDtcclxudG9wOiAtMzVweDtcclxuYW5pbWF0aW9uLW5hbWU6IGRpc3A7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjogMC43NTBzO1xyXG59XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRpc3B7XHJcbmZyb217XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IC02NXB4O1xyXG59XHJcbnRve1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdG9wOiAtMzVweDtcclxufVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRpc3B7XHJcbmZyb217XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IC02NXB4O1xyXG59XHJcbnRve1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdG9wOiAtMzVweDtcclxufVxyXG59XHJcblxyXG5he1xyXG4vKiBtYXJnaW4tbGVmdDogOTVweDsgKi9cclxuY29sb3I6IGdyZWVuO1xyXG4vKiBmb250LXNpemU6IDEyNSU7ICovXHJcbi8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiBhcXVhO1xyXG50cmFuc2l0aW9uOiAwLjc1cztcclxufVxyXG5cclxuXHJcblxyXG4uYmdDb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLmxpc3R7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXHJcbiAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDkxLCAwLCAxMjgpO1xyXG4gIGZvbnQtc2l6ZToxNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzMsIDIzMCwgMC42KTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5saXN0OmhvdmVye1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC40KSwwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(http, router) {
        this.http = http;
        this.router = router;
        this.errorText = '';
        this.successText = '';
        this.update = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post("http://localhost:1025/table/load", "hello").subscribe(function (responseData) {
            if (responseData["status"] == "success") {
                _this.movies = responseData['data'];
            }
        });
    };
    AdminComponent.prototype.accept = function (form) {
        var _this = this;
        console.log(this.movies);
        if (form.value.name && form.value.genre && form.value.tlink && form.value.ilink && form.value.description) {
            var movieTable = { name: form.value.name };
            var movie = {
                name: form.value.name,
                genre: form.value.genre,
                tlink: form.value.tlink,
                ilink: form.value.ilink,
                description: form.value.description
            };
            this.http.post('http://localhost:1025/table/save', movieTable).subscribe(function (responseData) {
                if (responseData["status"] == "success") {
                    console.log(responseData["data"]);
                    _this.errorText = '';
                    _this.successText = "Movie added successfully";
                }
                if (responseData["status"] == "fail") {
                    _this.errorText = 'Movie already exists';
                    _this.successText = '';
                }
            });
            this.http.post('http://localhost:1025/movie/save', movie).subscribe(function (responseData) {
                console.log("Saved data\n", responseData);
                _this.update = true;
                console.log("Data successfully loaded update status is ", _this.update);
                _this.http.post("http://localhost:1025/table/load", "hello").subscribe(function (responseData) {
                    if (responseData["status"] == "success") {
                        _this.movies = responseData['data'];
                        _this.update = false;
                    }
                });
                console.log("all complete");
            });
        }
        else {
            this.errorText = 'Please Specify All Fields';
            this.successText = '';
        }
    };
    AdminComponent.prototype.open = function (name) {
        this.router.navigate(['../movie', name, 'Admin']);
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _admin_pass_admin_pass_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-pass/admin-pass.component */ "./src/app/admin-pass/admin-pass.component.ts");









var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'home/:signup/:username', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'movie/:name/:username', component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_7__["UserpageComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'adminPass', component: _admin_pass_admin_pass_component__WEBPACK_IMPORTED_MODULE_8__["AdminPassComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ITProject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _admin_pass_admin_pass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-pass/admin-pass.component */ "./src/app/admin-pass/admin-pass.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_13__["UserpageComponent"],
                _admin_pass_admin_pass_component__WEBPACK_IMPORTED_MODULE_14__["AdminPassComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgCol{\r\n    background-color: rgba(10, 10, 10, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 50px auto;\r\n}\r\n\r\n.list{\r\n    user-select: none; /* supported by Chrome and Opera */\r\n   -webkit-user-select: none; /* Safari */\r\n   -khtml-user-select: none; /* Konqueror HTML */\r\n   -moz-user-select: none; /* Firefox */\r\n   -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n    text-align: center;\r\n    color: rgb(91, 0, 128);\r\n    font-size:150%;\r\n    background-color: rgba(230, 233, 230, 0.6);\r\n    width: 70%;\r\n    border-radius: 5px;\r\n    padding: 3px;\r\n}\r\n\r\n.list:hover{\r\n    width: 75%;\r\n    margin: 5px;\r\n    padding: 6px;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.4),0 17px 50px 0 rgba(0,0,0,0.3);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCLEVBQUUsa0NBQWtDO0dBQ3RELHlCQUF5QixFQUFFLFdBQVc7R0FDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0dBQzdDLHNCQUFzQixFQUFFLFlBQVk7R0FDcEMscUJBQXFCLEVBQUUsMkJBQTJCOztJQUVqRCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHVFQUF1RTtJQUN2RSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdDb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXHJcbiAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig5MSwgMCwgMTI4KTtcclxuICAgIGZvbnQtc2l6ZToxNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDIzMywgMjMwLCAwLjYpO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmxpc3Q6aG92ZXJ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC40KSwwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(activatedRoute, http, router) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.movies = [];
        this.status = "";
        this.username = "";
        this.welcomeText = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (user) {
            if (user.has("username")) {
                _this.username = user.get("username");
                console.log(user);
            }
            else
                console.log("nothing");
            if (user.has("signup"))
                _this.status = user.get("signup");
        });
        console.log(this.welcomeText);
        if (this.status == 'hi')
            this.welcomeText = "Hi " + this.username + ", which movie would you like to review today.";
        if (this.status == 'welcome')
            this.welcomeText = "Welcome " + this.username + ", you have been successfully registered. What would you like to start with";
        this.http.post("http://localhost:1025/table/load", "hello").subscribe(function (responseData) {
            if (responseData["status"] == "success") {
                _this.movies = responseData['data'];
            }
        });
    };
    HomeComponent.prototype.open = function (name) {
        this.router.navigate(['../movie', name, this.username]);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgStyle{\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n    width: 300px;\r\n    margin: 50px auto;\r\n    /* margin-left: 100px; */\r\n    /* border: 2px solid black; */\r\n    border-radius: 30px;\r\n    background-color: rgba(10, 10, 10, 0.6);\r\n    /* background-image: linear-gradient(to bottom right,   \r\n   rgba(0, 100, 100, 0.75), rgba(0, 125, 125, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 225, 225, 0.75), rgb(0, 250, 250, 0.75),\r\n   rgba(0, 250, 250, 0.75), rgba(0, 225, 225, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 125, 125, 0.75), rgb(0, 100, 100, 0.75)); */\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.5), 0 17px 50px 0 rgba(0,0,0,0.3);\r\n}\r\n\r\n\r\n.button{\r\n\r\n    user-select: none; /* supported by Chrome and Opera */\r\n   -webkit-user-select: none; /* Safari */\r\n   -khtml-user-select: none; /* Konqueror HTML */\r\n   -moz-user-select: none; /* Firefox */\r\n   -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n    width:80px;\r\n    margin-left: 80px;\r\n    text-align: center;\r\n    background-color: rgba(0, 15, 153, 1);\r\n    background-image: -webkit-gradient(linear,\r\n    right bottom, left top,\r\n    from(rgba(0, 100, 0, 1)), color-stop(rgba(0, 125, 0, 1)), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 175, 0, 1)),color-stop(/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 125, 0, 1)), to(rgb(0, 100, 0, 1)));\r\n    background-image: linear-gradient(to top left,\r\n    rgba(0, 100, 0, 1), rgba(0, 125, 0, 1), rgb(0, 150, 0, 1), rgb(0, 175, 0, 1),/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */\r\n   /* rgba(0, 250, 0, 1), rgba(0, 225, 0, 1), rgb(0, 200, 0, 1),*/ rgb(0, 175, 0, 1), rgb(0, 150, 0, 1), rgb(0, 125, 0, 1), rgb(0, 100, 0, 1));\r\n    /* rgba(0, 8, 80, 1), rgba(0, 15, 153, 1), rgba(0, 26, 255, 1), rgba(43, 64, 255, 1), */\r\n    /* rgba(43, 64, 255, 1), rgba(0, 26, 255, 1), rgba(0, 15, 153, 1), rgba(0, 8, 80, 1)); */\r\n    /* background-image: linear-gradient(to bottom right, rgba(255, 0, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 255, 0, 0.750) ,rgba(0, 128, 0, 0.750), rgba(255, 255, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 0, 0, 0.750)); */\r\n    padding: 2px;\r\n    color: white;\r\n    font-size: 125%;\r\n    font-weight: bolder;\r\n    border-radius: 5px; \r\n}\r\n\r\n\r\n.button:hover {\r\n    width: 90px;\r\n    padding: 5px;\r\n    margin-left: 75px;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.759);\r\n    -webkit-transition: 0.75s;\r\n    transition: 0.75s;\r\n  }\r\n\r\n\r\n.button:active {\r\n    box-shadow: 0 5px #111;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\n\r\n\r\n.test{\r\n    color: white;\r\n    background-color: transparent;\r\n  }\r\n\r\n\r\n.test input,select{\r\n    font-size:125%;\r\n    /* margin-left: 30px;\r\n    margin-bottom: 8px;\r\n    margin-top: 5px;   */ \r\n    width: 90%;\r\n    margin: 5px auto;\r\n    border: none;\r\n    color: white;\r\n    align-content: center;\r\n    background-color: transparent;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n\r\n.test input.ng-valid,\r\n select.ng-valid{\r\n  border-bottom: 2px solid green;\r\n}\r\n\r\n\r\n.test input:focus,\r\nselect:focus{\r\n  outline: none; \r\n  border: 0px;\r\n  border-bottom: 2px solid green;   \r\n}\r\n\r\n\r\n.test input:focus ~label,\r\n select:focus ~ label,\r\n input.ng-valid ~ label,\r\n select.ng-valid ~ label{\r\n  color: green;\r\n  top: -55px;\r\n  font-size: 85%;\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n\r\n\r\n.test label{\r\n  font-size: 125%;\r\n  position: relative;\r\n  top: -35px;\r\n  color: white;\r\n  /* margin-left: 30px;   */\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n.test p,span{\r\n  position: relative;\r\n  color: red;\r\n}\r\n\r\n\r\n.test p{\r\n  margin-left: 30px;\r\n  top: -35px;\r\n  -webkit-animation-name: disp;\r\n          animation-name: disp;\r\n  -webkit-animation-duration: 0.750s;\r\n          animation-duration: 0.750s;\r\n}\r\n\r\n\r\n@-webkit-keyframes disp{\r\n  from{\r\n    opacity: 0;\r\n    top: -65px;\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    top: -35px;\r\n  }\r\n}\r\n\r\n\r\n@keyframes disp{\r\n  from{\r\n    opacity: 0;\r\n    top: -65px;\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    top: -35px;\r\n  }\r\n}\r\n\r\n\r\na{\r\n  /* margin-left: 95px; */\r\n  color: green;\r\n  /* font-size: 125%; */\r\n  /* font-weight: bold; */\r\n}\r\n\r\n\r\na:hover{\r\n  text-decoration: none;\r\n  color: aqua;\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2Qzs7K0tBRTJLO0lBQzNLLHdFQUF3RTtBQUM1RTs7O0FBR0E7O0lBRUksaUJBQWlCLEVBQUUsa0NBQWtDO0dBQ3RELHlCQUF5QixFQUFFLFdBQVc7R0FDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0dBQzdDLHNCQUFzQixFQUFFLFlBQVk7R0FDcEMscUJBQXFCLEVBQUUsMkJBQTJCOztJQUVqRCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckM7OzJSQUUwSTtJQUYxSTs7OElBRTBJO0lBQzFJLHVGQUF1RjtJQUN2Rix3RkFBd0Y7SUFDeEYsd09BQXdPO0lBQ3hPLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkVBQTJFO0lBQzNFLHlCQUFpQjtJQUFqQixpQkFBaUI7RUFDbkI7OztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7OztBQUdBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2Q7O3dCQUVvQjtJQUNwQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7QUFDbEM7OztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7OztBQUVBOzs7O0VBSUUsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2QseUJBQWlCO0VBQWpCLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOzs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOzs7QUFHQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUNGOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHlCQUFpQjtFQUFqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnU3R5bGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTAwcHg7ICovXHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNik7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAgIFxyXG4gICByZ2JhKDAsIDEwMCwgMTAwLCAwLjc1KSwgcmdiYSgwLCAxMjUsIDEyNSwgMC43NSksIHJnYigwLCAxNTAsIDE1MCwgMC43NSksIHJnYigwLCAxNzUsIDE3NSwgMC43NSksIHJnYigwLCAyMDAsIDIwMCwgMC43NSksIHJnYigwLCAyMjUsIDIyNSwgMC43NSksIHJnYigwLCAyNTAsIDI1MCwgMC43NSksXHJcbiAgIHJnYmEoMCwgMjUwLCAyNTAsIDAuNzUpLCByZ2JhKDAsIDIyNSwgMjI1LCAwLjc1KSwgcmdiKDAsIDIwMCwgMjAwLCAwLjc1KSwgcmdiKDAsIDE3NSwgMTc1LCAwLjc1KSwgcmdiKDAsIDE1MCwgMTUwLCAwLjc1KSwgcmdiKDAsIDEyNSwgMTI1LCAwLjc1KSwgcmdiKDAsIDEwMCwgMTAwLCAwLjc1KSk7ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC41KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9ue1xyXG5cclxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xyXG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG5cclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUsIDE1MywgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsXHJcbiAgICByZ2JhKDAsIDEwMCwgMCwgMSksIHJnYmEoMCwgMTI1LCAwLCAxKSwgcmdiKDAsIDE1MCwgMCwgMSksIHJnYigwLCAxNzUsIDAsIDEpLC8qIHJnYigwLCAyMDAsIDAsIDEpLCByZ2IoMCwgMjI1LCAwLCAxKSwgcmdiKDAsIDI1MCwgMCwgMSksICovXHJcbiAgIC8qIHJnYmEoMCwgMjUwLCAwLCAxKSwgcmdiYSgwLCAyMjUsIDAsIDEpLCByZ2IoMCwgMjAwLCAwLCAxKSwqLyByZ2IoMCwgMTc1LCAwLCAxKSwgcmdiKDAsIDE1MCwgMCwgMSksIHJnYigwLCAxMjUsIDAsIDEpLCByZ2IoMCwgMTAwLCAwLCAxKSk7XHJcbiAgICAvKiByZ2JhKDAsIDgsIDgwLCAxKSwgcmdiYSgwLCAxNSwgMTUzLCAxKSwgcmdiYSgwLCAyNiwgMjU1LCAxKSwgcmdiYSg0MywgNjQsIDI1NSwgMSksICovXHJcbiAgICAvKiByZ2JhKDQzLCA2NCwgMjU1LCAxKSwgcmdiYSgwLCAyNiwgMjU1LCAxKSwgcmdiYSgwLCAxNSwgMTUzLCAxKSwgcmdiYSgwLCA4LCA4MCwgMSkpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgyNTUsIDAsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDE2NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMjU1LCAwLCAwLjc1MCkgLHJnYmEoMCwgMTI4LCAwLCAwLjc1MCksIHJnYmEoMjU1LCAyNTUsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDE2NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMCwgMCwgMC43NTApKTsgKi9cclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG59ICAgXHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjc1OSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjc1cztcclxuICB9XHJcblxyXG4gIC5idXR0b246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICMxMTE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICB9XHJcblxyXG5cclxuICAudGVzdHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnRlc3QgaW5wdXQsc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOjEyNSU7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDsgICAqLyBcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi50ZXN0IGlucHV0Lm5nLXZhbGlkLFxyXG4gc2VsZWN0Lm5nLXZhbGlke1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLnRlc3QgaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lOyBcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47ICAgXHJcbn1cclxuXHJcbi50ZXN0IGlucHV0OmZvY3VzIH5sYWJlbCxcclxuIHNlbGVjdDpmb2N1cyB+IGxhYmVsLFxyXG4gaW5wdXQubmctdmFsaWQgfiBsYWJlbCxcclxuIHNlbGVjdC5uZy12YWxpZCB+IGxhYmVse1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICB0b3A6IC01NXB4O1xyXG4gIGZvbnQtc2l6ZTogODUlO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzO1xyXG59XHJcblxyXG5cclxuLnRlc3QgbGFiZWx7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKiBtYXJnaW4tbGVmdDogMzBweDsgICAqL1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udGVzdCBwLHNwYW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLnRlc3QgcHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB0b3A6IC0zNXB4O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBkaXNwO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NTBzO1xyXG59XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRpc3B7XHJcbiAgZnJvbXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IC02NXB4O1xyXG4gIH1cclxuICB0b3tcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0b3A6IC0zNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkaXNwe1xyXG4gIGZyb217XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAtNjVweDtcclxuICB9XHJcbiAgdG97XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdG9wOiAtMzVweDtcclxuICB9XHJcbn1cclxuXHJcbmF7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDk1cHg7ICovXHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIC8qIGZvbnQtc2l6ZTogMTI1JTsgKi9cclxuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxuYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGFxdWE7XHJcbiAgdHJhbnNpdGlvbjogMC43NXM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isAuthenticated = false;
        this.text = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.accept = function (log) {
        var _this = this;
        if (log.value.username && log.value.password) {
            this.text = "";
            this.userService.userLogIn(log.value).subscribe(function (response) {
                console.log(response);
                if (response["status"] == 'success') {
                    _this.text = "";
                    _this.router.navigate(['home', 'hi', response["data"].username]);
                }
                else {
                    _this.text = "Incorrect username or password. Please try again";
                }
            });
        }
        else {
            this.text = "Username or Password is missing";
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
    }
    UsersService.prototype.userSignUp = function (user) {
        this.isAuthenticated = true;
        return this.http.post('http://localhost:1025/auth/signup', user);
    };
    UsersService.prototype.userLogIn = function (user) {
        return this.http.post('http://localhost:1025/auth/login', user);
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgStyle{\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  width: 300px;\r\n  margin: 50px auto;\r\n  /* margin-left: 100px; */\r\n  /* border: 2px solid black; */\r\n  border-radius: 30px;\r\n  background-color: rgba(10, 10, 10, 0.6);\r\n  /* background-image: linear-gradient(to bottom right,   \r\n rgba(0, 100, 100, 0.75), rgba(0, 125, 125, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 225, 225, 0.75), rgb(0, 250, 250, 0.75),\r\n rgba(0, 250, 250, 0.75), rgba(0, 225, 225, 0.75), rgb(0, 200, 200, 0.75), rgb(0, 175, 175, 0.75), rgb(0, 150, 150, 0.75), rgb(0, 125, 125, 0.75), rgb(0, 100, 100, 0.75)); */\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.5), 0 17px 50px 0 rgba(0,0,0,0.3);\r\n}\r\n\r\n\r\n.button{\r\n\r\n  user-select: none; /* supported by Chrome and Opera */\r\n -webkit-user-select: none; /* Safari */\r\n -khtml-user-select: none; /* Konqueror HTML */\r\n -moz-user-select: none; /* Firefox */\r\n -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n  width:80px;\r\n  margin-left: 80px;\r\n  text-align: center;\r\n  background-color: rgba(0, 15, 153, 1);\r\n  background-image: -webkit-gradient(linear,\r\n  right bottom, left top,\r\n  from(rgba(0, 100, 0, 1)), color-stop(rgba(0, 125, 0, 1)), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 175, 0, 1)),color-stop(/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */), color-stop(rgb(0, 150, 0, 1)), color-stop(rgb(0, 125, 0, 1)), to(rgb(0, 100, 0, 1)));\r\n  background-image: linear-gradient(to top left,\r\n  rgba(0, 100, 0, 1), rgba(0, 125, 0, 1), rgb(0, 150, 0, 1), rgb(0, 175, 0, 1),/* rgb(0, 200, 0, 1), rgb(0, 225, 0, 1), rgb(0, 250, 0, 1), */\r\n /* rgba(0, 250, 0, 1), rgba(0, 225, 0, 1), rgb(0, 200, 0, 1),*/ rgb(0, 175, 0, 1), rgb(0, 150, 0, 1), rgb(0, 125, 0, 1), rgb(0, 100, 0, 1));\r\n  /* rgba(0, 8, 80, 1), rgba(0, 15, 153, 1), rgba(0, 26, 255, 1), rgba(43, 64, 255, 1), */\r\n  /* rgba(43, 64, 255, 1), rgba(0, 26, 255, 1), rgba(0, 15, 153, 1), rgba(0, 8, 80, 1)); */\r\n  /* background-image: linear-gradient(to bottom right, rgba(255, 0, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 255, 0, 0.750) ,rgba(0, 128, 0, 0.750), rgba(255, 255, 0, 0.750), rgba(255, 165, 0, 0.750), rgba(255, 0, 0, 0.750)); */\r\n  padding: 2px;\r\n  color: white;\r\n  font-size: 125%;\r\n  font-weight: bolder;\r\n  border-radius: 5px; \r\n}\r\n\r\n\r\n.button:hover {\r\n  width: 90px;\r\n  padding: 5px;\r\n  margin-left: 75px;\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.759);\r\n  -webkit-transition: 0.75s;\r\n  transition: 0.75s;\r\n}\r\n\r\n\r\n.button:active {\r\n  box-shadow: 0 5px #111;\r\n  -webkit-transform: translateY(4px);\r\n          transform: translateY(4px);\r\n}\r\n\r\n\r\n.test{\r\n  color: white;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n.test input,select{\r\n  font-size:125%;\r\n  /* margin-left: 30px;\r\n  margin-bottom: 8px;\r\n  margin-top: 5px;   */ \r\n  width: 90%;\r\n  margin: 5px auto;\r\n  border: none;\r\n  color: white;\r\n  align-content: center;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n\r\n.test input.ng-valid,\r\nselect.ng-valid{\r\nborder-bottom: 2px solid green;\r\n}\r\n\r\n\r\n.test input:focus,\r\nselect:focus{\r\noutline: none; \r\nborder: 0px;\r\nborder-bottom: 2px solid green;   \r\n}\r\n\r\n\r\n.test input:focus ~label,\r\nselect:focus ~ label,\r\ninput.ng-valid ~ label,\r\nselect.ng-valid ~ label{\r\ncolor: green;\r\ntop: -55px;\r\nfont-size: 85%;\r\n-webkit-transition: 0.75s;\r\ntransition: 0.75s;\r\n}\r\n\r\n\r\n.test label{\r\nfont-size: 125%;\r\nposition: relative;\r\ntop: -35px;\r\ncolor: white;\r\n/* margin-left: 30px;   */\r\npointer-events: none;\r\n}\r\n\r\n\r\n.test p,span{\r\nposition: relative;\r\ncolor: red;\r\n}\r\n\r\n\r\n.test p{\r\nmargin-left: 30px;\r\ntop: -35px;\r\n-webkit-animation-name: disp;\r\n        animation-name: disp;\r\n-webkit-animation-duration: 0.750s;\r\n        animation-duration: 0.750s;\r\n}\r\n\r\n\r\n@-webkit-keyframes disp{\r\nfrom{\r\n  opacity: 0;\r\n  top: -65px;\r\n}\r\nto{\r\n  opacity: 1;\r\n  top: -35px;\r\n}\r\n}\r\n\r\n\r\n@keyframes disp{\r\nfrom{\r\n  opacity: 0;\r\n  top: -65px;\r\n}\r\nto{\r\n  opacity: 1;\r\n  top: -35px;\r\n}\r\n}\r\n\r\n\r\na{\r\n/* margin-left: 95px; */\r\ncolor: green;\r\n/* font-size: 125%; */\r\n/* font-weight: bold; */\r\n}\r\n\r\n\r\na:hover{\r\ntext-decoration: none;\r\ncolor: aqua;\r\n-webkit-transition: 0.75s;\r\ntransition: 0.75s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDOzs2S0FFMks7RUFDM0ssd0VBQXdFO0FBQzFFOzs7QUFHQTs7RUFFRSxpQkFBaUIsRUFBRSxrQ0FBa0M7Q0FDdEQseUJBQXlCLEVBQUUsV0FBVztDQUN0Qyx3QkFBd0IsRUFBRSxtQkFBbUI7Q0FDN0Msc0JBQXNCLEVBQUUsWUFBWTtDQUNwQyxxQkFBcUIsRUFBRSwyQkFBMkI7O0VBRWpELFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQzs7eVJBRTBJO0VBRjFJOzs0SUFFMEk7RUFDMUksdUZBQXVGO0VBQ3ZGLHdGQUF3RjtFQUN4Rix3T0FBd087RUFDeE8sWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyRUFBMkU7RUFDM0UseUJBQWlCO0VBQWpCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLGNBQWM7RUFDZDs7c0JBRW9CO0VBQ3BCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQzs7O0FBRUE7O0FBRUEsOEJBQThCO0FBQzlCOzs7QUFFQTs7QUFFQSxhQUFhO0FBQ2IsV0FBVztBQUNYLDhCQUE4QjtBQUM5Qjs7O0FBRUE7Ozs7QUFJQSxZQUFZO0FBQ1osVUFBVTtBQUNWLGNBQWM7QUFDZCx5QkFBaUI7QUFBakIsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCOzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1Y7OztBQUlBO0FBQ0EsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDViw0QkFBb0I7UUFBcEIsb0JBQW9CO0FBQ3BCLGtDQUEwQjtRQUExQiwwQkFBMEI7QUFDMUI7OztBQUdBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7OztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7OztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCOzs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1gseUJBQWlCO0FBQWpCLGlCQUFpQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ1N0eWxle1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDsgKi9cclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC42KTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAgIFxyXG4gcmdiYSgwLCAxMDAsIDEwMCwgMC43NSksIHJnYmEoMCwgMTI1LCAxMjUsIDAuNzUpLCByZ2IoMCwgMTUwLCAxNTAsIDAuNzUpLCByZ2IoMCwgMTc1LCAxNzUsIDAuNzUpLCByZ2IoMCwgMjAwLCAyMDAsIDAuNzUpLCByZ2IoMCwgMjI1LCAyMjUsIDAuNzUpLCByZ2IoMCwgMjUwLCAyNTAsIDAuNzUpLFxyXG4gcmdiYSgwLCAyNTAsIDI1MCwgMC43NSksIHJnYmEoMCwgMjI1LCAyMjUsIDAuNzUpLCByZ2IoMCwgMjAwLCAyMDAsIDAuNzUpLCByZ2IoMCwgMTc1LCAxNzUsIDAuNzUpLCByZ2IoMCwgMTUwLCAxNTAsIDAuNzUpLCByZ2IoMCwgMTI1LCAxMjUsIDAuNzUpLCByZ2IoMCwgMTAwLCAxMDAsIDAuNzUpKTsgKi9cclxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC41KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9ue1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxuIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcblxyXG4gIHdpZHRoOjgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUsIDE1MywgMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LFxyXG4gIHJnYmEoMCwgMTAwLCAwLCAxKSwgcmdiYSgwLCAxMjUsIDAsIDEpLCByZ2IoMCwgMTUwLCAwLCAxKSwgcmdiKDAsIDE3NSwgMCwgMSksLyogcmdiKDAsIDIwMCwgMCwgMSksIHJnYigwLCAyMjUsIDAsIDEpLCByZ2IoMCwgMjUwLCAwLCAxKSwgKi9cclxuIC8qIHJnYmEoMCwgMjUwLCAwLCAxKSwgcmdiYSgwLCAyMjUsIDAsIDEpLCByZ2IoMCwgMjAwLCAwLCAxKSwqLyByZ2IoMCwgMTc1LCAwLCAxKSwgcmdiKDAsIDE1MCwgMCwgMSksIHJnYigwLCAxMjUsIDAsIDEpLCByZ2IoMCwgMTAwLCAwLCAxKSk7XHJcbiAgLyogcmdiYSgwLCA4LCA4MCwgMSksIHJnYmEoMCwgMTUsIDE1MywgMSksIHJnYmEoMCwgMjYsIDI1NSwgMSksIHJnYmEoNDMsIDY0LCAyNTUsIDEpLCAqL1xyXG4gIC8qIHJnYmEoNDMsIDY0LCAyNTUsIDEpLCByZ2JhKDAsIDI2LCAyNTUsIDEpLCByZ2JhKDAsIDE1LCAxNTMsIDEpLCByZ2JhKDAsIDgsIDgwLCAxKSk7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgyNTUsIDAsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDE2NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMjU1LCAwLCAwLjc1MCkgLHJnYmEoMCwgMTI4LCAwLCAwLjc1MCksIHJnYmEoMjU1LCAyNTUsIDAsIDAuNzUwKSwgcmdiYSgyNTUsIDE2NSwgMCwgMC43NTApLCByZ2JhKDI1NSwgMCwgMCwgMC43NTApKTsgKi9cclxuICBwYWRkaW5nOiAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbn0gICBcclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjc1OSk7XHJcbiAgdHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDVweCAjMTExO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcblxyXG5cclxuLnRlc3R7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGVzdCBpbnB1dCxzZWxlY3R7XHJcbiAgZm9udC1zaXplOjEyNSU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDsgICAqLyBcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4udGVzdCBpbnB1dC5uZy12YWxpZCxcclxuc2VsZWN0Lm5nLXZhbGlke1xyXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi50ZXN0IGlucHV0OmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXN7XHJcbm91dGxpbmU6IG5vbmU7IFxyXG5ib3JkZXI6IDBweDtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZWVuOyAgIFxyXG59XHJcblxyXG4udGVzdCBpbnB1dDpmb2N1cyB+bGFiZWwsXHJcbnNlbGVjdDpmb2N1cyB+IGxhYmVsLFxyXG5pbnB1dC5uZy12YWxpZCB+IGxhYmVsLFxyXG5zZWxlY3QubmctdmFsaWQgfiBsYWJlbHtcclxuY29sb3I6IGdyZWVuO1xyXG50b3A6IC01NXB4O1xyXG5mb250LXNpemU6IDg1JTtcclxudHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcblxyXG4udGVzdCBsYWJlbHtcclxuZm9udC1zaXplOiAxMjUlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogLTM1cHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuLyogbWFyZ2luLWxlZnQ6IDMwcHg7ICAgKi9cclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXN0IHAsc3BhbntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5jb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi50ZXN0IHB7XHJcbm1hcmdpbi1sZWZ0OiAzMHB4O1xyXG50b3A6IC0zNXB4O1xyXG5hbmltYXRpb24tbmFtZTogZGlzcDtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1MHM7XHJcbn1cclxuXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGlzcHtcclxuZnJvbXtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogLTY1cHg7XHJcbn1cclxudG97XHJcbiAgb3BhY2l0eTogMTtcclxuICB0b3A6IC0zNXB4O1xyXG59XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGlzcHtcclxuZnJvbXtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogLTY1cHg7XHJcbn1cclxudG97XHJcbiAgb3BhY2l0eTogMTtcclxuICB0b3A6IC0zNXB4O1xyXG59XHJcbn1cclxuXHJcbmF7XHJcbi8qIG1hcmdpbi1sZWZ0OiA5NXB4OyAqL1xyXG5jb2xvcjogZ3JlZW47XHJcbi8qIGZvbnQtc2l6ZTogMTI1JTsgKi9cclxuLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6IGFxdWE7XHJcbnRyYW5zaXRpb246IDAuNzVzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.text = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function (signup) {
        var _this = this;
        if (signup.value.username && signup.value.password && signup.value.email
            && signup.value.password == signup.value.cpassword) {
            this.text = "";
            var filteredForm = {
                username: signup.value.username,
                email: signup.value.email,
                region: signup.value.region,
                password: signup.value.password
            };
            this.resultSubscription = this.userService.userSignUp(filteredForm).subscribe(function (responseData) {
                console.log("respose data: ", responseData);
                if (responseData['status'] == "success") {
                    _this.router.navigate(['home', "welcome", responseData["data"].username]);
                    _this.text = 'You have been Successfully registered';
                }
                else {
                    _this.text = 'Username already exists. Please try again';
                }
            });
        }
        else {
            this.text = "Please input all required details";
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button{\r\n    user-select: none; /* supported by Chrome and Opera */\r\n   -webkit-user-select: none; /* Safari */\r\n   -khtml-user-select: none; /* Konqueror HTML */\r\n   -moz-user-select: none; /* Firefox */\r\n   -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n    background-color: rgba(250, 250, 250, 0.6);\r\n    color: black;\r\n    width: 100px;\r\n    margin-bottom: 8px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    padding: 5px; \r\n}\r\n\r\n.button:hover{\r\n    width: 110px;\r\n    padding: 7px;\r\n    background-color: rgba(250, 250, 250, 1);\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.4),0 17px 50px 0 rgba(0,0,0,0.3);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.button:active{\r\n    width: 100px;\r\n    padding: 5px;\r\n    box-shadow: 0 5px #111111;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n\r\n.comment{\r\n    background-color: rgba(10, 10, 10, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n.comment textarea{\r\n    background-color: rgb(50, 50, 50);\r\n    color: antiquewhite;\r\n    width: 50%;\r\n    margin: 10px;\r\n    border-radius: 10px; \r\n    outline: none;\r\n}\r\n\r\n.comment textarea:active{\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n.bgCol div a{\r\n    color: white;\r\n    font-size: 250%;\r\n}\r\n\r\n.bgCol div a:hover{\r\n    text-decoration: none;\r\n    color: crimson;\r\n    -webkit-transition: 0.75s;\r\n    transition: 0.75s;\r\n}\r\n\r\n.bgCol{\r\n    background-color: rgba(10, 10, 10, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n.star{\r\n    font-size: 150%;\r\n}\r\n\r\n.checked{\r\n    color: gold;\r\n}\r\n\r\n.comment div h4{\r\n    background-color: rgb(10, 10, 10);\r\n    color: antiquewhite;\r\n    width: 50%;\r\n    padding: 5px;\r\n    margin: 0px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px; \r\n    outline: none;\r\n}\r\n\r\n.comment div div{\r\n    background-color: rgb(50, 50, 50);\r\n    color: antiquewhite;\r\n    width: 50%;\r\n    padding: 20px;\r\n    margin: 0px 10px;\r\n    border-bottom-left-radius: 5px; \r\n    border-bottom-right-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\nlabel{\r\n    font-size: 175%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQixFQUFFLGtDQUFrQztHQUN0RCx5QkFBeUIsRUFBRSxXQUFXO0dBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtHQUM3QyxzQkFBc0IsRUFBRSxZQUFZO0dBQ3BDLHFCQUFxQixFQUFFLDJCQUEyQjs7SUFFakQsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLHVFQUF1RTtJQUN2RSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBaUI7SUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VycGFnZS91c2VycGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcclxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xyXG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuXHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuNCksMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICMxMTExMTE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jb21tZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNvbW1lbnQgdGV4dGFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XHJcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbW1lbnQgdGV4dGFyZWE6YWN0aXZle1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJnQ29sIGRpdiBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNTAlO1xyXG59XHJcbiAgXHJcbi5iZ0NvbCBkaXYgYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgdHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcbi5iZ0NvbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC42KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zdGFye1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uY2hlY2tlZHtcclxuICAgIGNvbG9yOiBnb2xkO1xyXG59XHJcblxyXG4uY29tbWVudCBkaXYgaDR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XHJcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY29tbWVudCBkaXYgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xyXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgXHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.stars = 0;
        this.name = '';
        this.username = '';
    }
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (user) {
            if (user.has('username'))
                _this.username = user.get('username');
            if (user.has('name'))
                _this.name = user.get('name');
        });
        this.http.post('http://localhost:1025/movie/load', { name: this.name }).subscribe(function (responseData) {
            if (responseData["status"] == "success") {
                _this.movie = responseData["data"];
                console.log(responseData);
            }
        });
    };
    UserpageComponent.prototype.starFunction = function (stars) {
        var i;
        var star = document.getElementsByClassName("star");
        for (i = 0; i < 5; i++)
            star[i].classList.remove("checked");
        for (i = 0; i < stars; i++)
            star[i].classList.add("checked");
    };
    UserpageComponent.prototype.setStars = function (stars) {
        var i;
        this.stars = stars;
        this.displayStars();
    };
    UserpageComponent.prototype.displayStars = function () {
        var i;
        var star = document.getElementsByClassName("star");
        for (i = 0; i < 5; i++)
            star[i].classList.remove("checked");
        for (i = 0; i < this.stars; i++)
            star[i].classList.add("checked");
    };
    UserpageComponent.prototype.post = function (com) {
        var _this = this;
        var comments = {
            username: this.username,
            comment: com.value
        };
        this.movie.comments.push(comments);
        var request = {
            name: this.movie.name,
            genre: this.movie.genre,
            tlink: this.movie.tlink,
            ilink: this.movie.ilink,
            description: this.movie.description,
            comments: this.movie.comments
        };
        console.log(request);
        this.http.post("http://localhost:1025/movie/update", request).subscribe(function (responseData) {
            // console.log(responseData);
            _this.http.post('http://localhost:1025/movie/load', { name: _this.name }).subscribe(function (responseData) {
                if (responseData["status"] == "success") {
                    _this.movie = responseData["data"];
                    // console.log(responseData)
                }
            });
        });
    };
    UserpageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! raw-loader!./userpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css")]
        })
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ANT-PC\Desktop\New folder\MovieForum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map