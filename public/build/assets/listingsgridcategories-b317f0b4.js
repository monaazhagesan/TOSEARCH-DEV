import{_ as e,$ as o,o as _,d as u,a as t,f as i,G as a}from"./app-a9ec9377.js";import"./jquery.magnific-popup-53971dd8.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const m={mounted(){e(()=>import("./jquery-3.4.1.min-c5e04f0d.js"),[]).then(()=>{}),e(()=>import("./bootstrap-select.min-5ef20ffa.js"),[]).then(()=>{}),e(()=>import("./mmenu-733e54c1.js"),[]).then(()=>{}),e(()=>import("./chosen.min-58e32b02.js"),[]).then(()=>{}),e(()=>import("./slick.min-c658521d.js"),[]).then(()=>{}),e(()=>import("./rangeslider.min-feb2ca25.js"),[]).then(()=>{}),e(()=>import("./magnific-popup.min-f58fb3ec.js"),[]).then(()=>{}),e(()=>import("./jquery-ui.min-351bebeb.js"),[]).then(()=>{}),e(()=>import("./tooltips.min-b7563558.js"),[]).then(()=>{}),e(()=>import("./color_switcher-294aed8a.js"),[]).then(()=>{}),e(()=>import("./jquery_custom-104cb25c.js"),[]).then(()=>{}),o(document).ready(function(){o(".companie-logo-slick-carousel").slick({autoplay:!0,autoplaySpeed:2e3,infinite:!0,slidesToShow:5,slidesToScroll:1,dots:!0,arrows:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}}]});var s=o(".utf_tabs_nav"),c=s.children("li");s.each(function(){var l=o(this);l.next().children(".tab_content").stop(!0,!0).hide().first().show(),l.children("li").first().addClass("active").stop(!0,!0).show()}),c.on("click",function(l){var n=o(this);n.siblings().removeClass("active").end().addClass("active"),n.parent().next().children(".tab_content").stop(!0,!0).hide().siblings(n.find("a").attr("href")).fadeIn(),l.preventDefault()});var d=window.location.hash,r=o('.utf_tabs_nav a[href="'+d+'"]');r.length===0?(o(".utf_tabs_nav li:first").addClass("active").show(),o(".tab_content:first").show()):r.parent("li").click(),o(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"}),o(".utf_user_menu").on("click",function(){o(this).toggleClass("active")})})}},h={lang:"zxx"},f=a('<head><meta name="author" content=""><meta name="description" content=""><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>To Search</title><link rel="shortcut icon" href="images/favicon.png"><link rel="stylesheet" href="css/stylesheet.css"><link rel="stylesheet" href="css/mmenu.css"><link rel="stylesheet" href="css/style.css" id="colors"><link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&amp;display=swap&amp;subset=latin-ext,vietnamese" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800" rel="stylesheet" type="text/css"></head>',1),v={id:"main_wrapper"},g={id:"header_part",class:"fullwidth"},b={id:"header"},w={class:"container"},y={class:"utf_left_side"},k={id:"logo"},x=["href"],P=t("img",{src:"images/tosearch_logo.png",alt:""},null,-1),S=[P],L=a('<div class="mmenu-trigger"><button class="hamburger utfbutton_collapse" type="button"><span class="utf_inner_button_box"><span class="utf_inner_section"></span></span></button></div><div class="clearfix"></div>',2),T={class:"utf_right_side"},E={class:"header_widget"},C=t("a",{href:"#login_with_otp",class:"button border with-icon popup-with-zoom-anim"},[t("i",{class:"sl sl-icon-bag"}),i("Seller Tools")],-1),R=t("a",{href:"#dialog_signin_part",class:"button border sign-in popup-with-zoom-anim"},[t("i",{class:"sl sl-icon-user"}),i(" Buyer Tools")],-1),B={class:"utf_user_menu"},M=t("div",{class:"utf_user_name"},[t("span",null,[t("img",{src:"images/dashboard-avatar.jpg",alt:""})]),i("Hi, John!")],-1),I=["href"],V=t("i",{class:"sl sl-icon-user"},null,-1),A=["href"],O=t("i",{class:"sl sl-icon-user-following"},null,-1),N=["href"],D=t("i",{class:"sl sl-icon-power"},null,-1),H=t("div",{id:"login_with_otp",class:"zoom-anim-dialog mfp-hide"},[t("div",{class:"small_dialog_header"},[t("h3",null,"Sign In")]),t("div",{class:"utf_signin_form style_one"},[t("ul",{class:"utf_tabs_nav"},[t("li",{class:""},[t("a",{href:"#tab1"},"Log In")]),t("li",null,[t("a",{href:"#tab2"},"Register")])]),t("div",{class:"tab_container alt"},[t("div",{class:"tab_content",id:"tab1",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_num"},[t("input",{type:"text",class:"input-text",name:"mobile_num",id:"mobile_num",value:"",placeholder:"Mobile Number"})])]),t("a",{href:"#login_otp",class:"popup-with-zoom-anim"},[t("input",{type:"submit",class:"button border fw margin-top-10",value:"Submit"})])])]),t("div",{class:"tab_content",id:"tab2",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"username2"},[t("input",{type:"text",class:"input-text",name:"username",id:"username2",value:"",placeholder:"Username"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"email2"},[t("input",{type:"text",class:"input-text",name:"email",id:"email2",value:"",placeholder:"Email"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_no"},[t("input",{type:"text",class:"input-text",name:"mobile_no",id:"mobile_no",value:"",placeholder:"Mobile Number"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password1"},[t("input",{class:"input-text",type:"password",name:"password1",id:"password1",placeholder:"Password"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password2"},[t("input",{class:"input-text",type:"password",name:"password2",id:"password2",placeholder:"Confirm Password"})])]),t("input",{type:"submit",class:"button border fw margin-top-10",name:"register",value:"Register"})])])])])],-1),z=t("div",{id:"login_otp",class:"zoom-anim-dialog mfp-hide"},[t("div",{class:"small_dialog_header"},[t("h3",null,"Verify Your Mobile Number")]),t("div",{class:"utf_signin_form style_one",style:{"text-align":"center"}},[t("h4",{style:{color:"#ff2222"}},[i("Please Enter the One Time Password (OTP)"),t("br"),i(" to verify your account")]),t("div",null,[t("span",null,"A code has been sent to"),i(),t("small",null,"*******9897")]),t("form",{method:"post",class:"register"},[t("div",{id:"otp",class:"inputs d-flex flex-row justify-content-center mt-2",style:{display:"inline-flex"}},[t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"first",maxlength:"1"}),i(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"second",maxlength:"1"}),i(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"third",maxlength:"1"}),i(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"fourth",maxlength:"1"}),i(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"fifth",maxlength:"1"}),i(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"})]),t("div",{class:"mt-4"}),t("div",{class:"utf_row_form"},[t("a",{href:"dashboard.html",class:"button border with-icon"}," Validate")])])])],-1),$=t("div",{id:"dialog_signin_part",class:"zoom-anim-dialog mfp-hide"},[t("div",{class:"small_dialog_header"},[t("h3",null,"Sign In")]),t("div",{class:"utf_signin_form style_one"},[t("ul",{class:"utf_tabs_nav"},[t("li",{class:""},[t("a",{href:"#tab1"},"Log In")]),t("li",null,[t("a",{href:"#tab2"},"Register")])]),t("div",{class:"tab_container alt"},[t("div",{class:"tab_content",id:"tab1",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_num"},[t("input",{type:"text",class:"input-text",name:"mobile_num",id:"mobile_num",value:"",placeholder:"Mobile Number"})])]),t("a",{href:"#login_otp",class:"popup-with-zoom-anim"},[t("input",{type:"submit",class:"button border fw margin-top-10",value:"Submit"})])])]),t("div",{class:"tab_content",id:"tab2",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"username2"},[t("input",{type:"text",class:"input-text",name:"username",id:"username2",value:"",placeholder:"Username"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"email2"},[t("input",{type:"text",class:"input-text",name:"email",id:"email2",value:"",placeholder:"Email"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_no"},[t("input",{type:"text",class:"input-text",name:"mobile_no",id:"mobile_no",value:"",placeholder:"Mobile Number"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password1"},[t("input",{class:"input-text",type:"password",name:"password1",id:"password1",placeholder:"Password"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password2"},[t("input",{class:"input-text",type:"password",name:"password2",id:"password2",placeholder:"Confirm Password"})])]),t("input",{type:"submit",class:"button border fw margin-top-10",name:"register",value:"Register"})])])])])],-1),j=t("div",{class:"clearfix"},null,-1),U={id:"titlebar",class:"gradient"},F={class:"container"},K={class:"row"},G={class:"col-md-12"},W=t("h2",null,"Brick Making Machines",-1),Y={id:"breadcrumbs"},q=["href"],J=t("li",null,"Brick Making Machines",-1),Q={class:"container"},X={class:"row"},Z={class:"col-lg-8 col-md-8 listing_grid_item"},tt={class:"listing_filter_block"},it={class:"col-md-2 col-xs-2"},st={class:"utf_layout_nav"},et=t("a",{href:"#",class:"grid active"},[t("i",{class:"fa fa-th"})],-1),ot=["href"],at=t("i",{class:"fa fa-align-justify"},null,-1),lt=[at],nt=a('<div class="col-md-10 col-xs-10"><div class="sort-by"><div class="utf_sort_by_select_item sort_by_margin"><select data-placeholder="Sort by Listing" class="utf_chosen_select_single"><option>Sort by Listing</option><option>Latest Listings</option><option>Popular Listings</option><option>Price (Low to High)</option><option>Price (High to Low)</option><option>Highest Reviewe</option><option>Lowest Reviewe</option><option>Newest Listing</option><option>Oldest Listing</option><option>Random Listings</option></select></div></div><div class="sort-by"><div class="utf_sort_by_select_item sort_by_margin"><select data-placeholder="Categories:" class="utf_chosen_select_single"><option>Categories</option><option>Restaurant</option><option>Health</option><option>Hotels</option><option>Real Estate</option><option>Fitness</option><option>Shopping</option><option>Travel</option><option>Shops</option><option>Nightlife</option><option>Events</option></select></div></div><div class="sort-by"><div class="utf_sort_by_select_item utf_search_map_section"><ul><li><a class="utf_common_button" href="#"><i class="fa fa-dot-circle-o"></i>Near Me</a></li></ul></div></div></div>',1),rt=a('<div class="row"><div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1"><div class="utf_listing_item"><img src="images/fully-automatic.webp" alt=""><div class="utf_listing_item_content"><h3>Brick Making Machines Price In India</h3><span>Revomac Industries</span><span><i class="fa fa-map-marker"></i> The Ritz-Carlton, Hong Kong</span></div></div><div style="text-align:center;"><button class="button border contactsupplier" style="width:100%;">Contact Supplier</button></div></a></div><div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1"><div class="utf_listing_item"><img src="images/ECO.webp" alt=""><div class="utf_listing_item_content"><h3>Semi-Automatic Brick Making Machine</h3><span>Alexcure Lifesciences Private Limited</span><span><i class="fa fa-map-marker"></i>Chandigarh</span></div></div><div style="text-align:center;"><button class="button border contactsupplier" style="width:100%;">Contact Supplier</button></div></a></div><div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1"><div class="utf_listing_item"><img src="images/automatic-rotary.jpg" alt=""><div class="utf_listing_item_content"><h3>Brick Making Machine</h3><span>M Ramakrishna Glass &amp; Plywoods Private Limited</span><span><i class="fa fa-map-marker"></i>George Town, Chennai, Tamil Nadu</span></div></div><div style="text-align:center;"><button class="button border contactsupplier" style="width:100%;">Contact Supplier</button></div></a></div><div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1"><div class="utf_listing_item"><img src="images/cement-bricks-making-machine.jpg" alt=""><div class="utf_listing_item_content"><h3>Hollow Brick Machine</h3><span>Biocore Pharmaceuticals</span><span><i class="fa fa-map-marker"></i>Chandigarh</span></div></div><div style="text-align:center;"><button class="button border contactsupplier" style="width:100%;">Contact Supplier</button></div></a></div><div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1"><div class="utf_listing_item"><img src="images/manual-fly-ash-bricks.jpeg" alt=""><div class="utf_listing_item_content"><h3>Fly Ash Brick Making Machine</h3><span>Khemka Plyland</span><span><i class="fa fa-map-marker"></i>Vijaynagar, Bengaluru, Karnataka</span></div></div><div style="text-align:center;"><button class="button border contactsupplier" style="width:100%;">Contact Supplier</button></div></a></div><div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1"><div class="utf_listing_item"><img src="images/hydraulic-pressing-bricks.webp" alt=""><div class="utf_listing_item_content"><h3>Vibro Press Block Brick Making Machine</h3><span>Bidu Biotech</span><span><i class="fa fa-map-marker"></i>Mohali, Punjab</span></div></div><div style="text-align:center;"><button class="button border contactsupplier" style="width:100%;">Contact Supplier</button></div></a></div></div><div class="clearfix"></div><div class="row"><div class="col-md-12"><div class="utf_pagination_container_part margin-top-20 margin-bottom-70"><nav class="pagination"><ul><li><a href="#"><i class="sl sl-icon-arrow-left"></i></a></li><li><a href="#" class="current-page">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li></ul></nav></div></div></div>',3),ct=a('<div class="col-lg-4 col-md-4"><div class="sidebar"><div class="utf_box_widget margin-bottom-35"><h3><i class="sl sl-icon-direction"></i> Filters</h3><div class="row with-forms"><div class="col-md-12"><input type="text" placeholder="What are you looking for?" value=""></div></div><div class="row with-forms"><div class="col-md-12"><div class="input-with-icon location"><input type="text" placeholder="Search Location..." value=""><a href="#"><i class="sl sl-icon-location"></i></a></div></div></div><button class="button fullwidth_block margin-top-5">Update</button></div><div class="utf_box_widget margin-top-35 margin-bottom-75"><h3><i class="sl sl-icon-folder-alt"></i> Categories</h3><ul class="utf_listing_detail_sidebar"><li><i class="fa fa-angle-double-right"></i> <a href="#">Plywoods</a></li><li><i class="fa fa-angle-double-right"></i> <a href="#">Laminate Sheets</a></li><li><i class="fa fa-angle-double-right"></i> <a href="#">Wood Boards</a></li><li><i class="fa fa-angle-double-right"></i> <a href="#">Wall Panels</a></li><li><i class="fa fa-angle-double-right"></i> <a href="#">Hardwood</a></li><li><i class="fa fa-angle-double-right"></i> <a href="#">Particle Board</a></li></ul></div></div></div>',1),dt={id:"footer",class:"footer_sticky_part"},_t={class:"container"},ut={class:"row"},pt=a('<div class="col-md-4 col-sm-12 col-xs-12"><h4>About Us</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p></div><div class="col-md-2 col-sm-3 col-xs-6"><h4>Supplier Tool Kit</h4><ul class="social_footer_link"><li><a href="#">Seller Tools</a></li><li><a href="#">Latest BuyLead</a></li></ul></div><div class="col-md-2 col-sm-3 col-xs-6"><h4>Buyers Tool Kit</h4><ul class="social_footer_link"><li><a href="#">Post Your Requirement</a></li><li><a href="#">Search Products &amp; Suppliers</a></li></ul></div>',3),mt={class:"col-md-2 col-sm-3 col-xs-6"},ht=t("h4",null,"Useful Links",-1),ft={class:"social_footer_link"},vt=["href"],gt=["href"],bt={class:"col-md-2 col-sm-3 col-xs-6"},wt=t("h4",null,"Help",-1),yt={class:"social_footer_link"},kt=t("li",null,[t("a",{href:"#"},"Sign In")],-1),xt=t("li",null,[t("a",{href:"#"},"Feedback")],-1),Pt=t("li",null,[t("a",{href:"#"},"Complaints")],-1),St=["href"],Lt=t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("div",{class:"footer_copyright_part"},"Copyright © 2023 To Search. All Rights Reserved.")])],-1);function Tt(s,c,d,r,l,n){return _(),u("html",h,[f,t("body",null,[t("div",v,[t("header",g,[t("div",b,[t("div",w,[t("div",y,[t("div",k,[t("a",{href:s.route("home")},S,8,x)]),L]),t("div",T,[t("div",E,[C,i(),R,t("div",B,[M,t("ul",null,[t("li",null,[t("a",{href:s.route("myprofile")},[V,i(" My Profile")],8,I)]),t("li",null,[t("a",{href:s.route("businessbuyer")},[O,i("Verified Business Buyer")],8,A)]),t("li",null,[t("a",{href:s.route("home")},[D,i("Sign Out")],8,N)])])])])]),H,z,$])])]),j,t("div",U,[t("div",F,[t("div",K,[t("div",G,[W,t("nav",Y,[t("ul",null,[t("li",null,[t("a",{href:s.route("home")},"Home",8,q)]),J])])])])])]),t("div",Q,[t("div",X,[t("div",Z,[t("div",tt,[t("div",it,[t("div",st,[et,i(),t("a",{href:s.route("listingscategories"),class:"list"},lt,8,ot)])]),nt]),rt]),ct])]),t("div",dt,[t("div",_t,[t("div",ut,[pt,t("div",mt,[ht,t("ul",ft,[t("li",null,[t("a",{href:s.route("home")},"Home",8,vt)]),t("li",null,[t("a",{href:s.route("listingsgridcategories")},"Listing",8,gt)])])]),t("div",bt,[wt,t("ul",yt,[kt,xt,Pt,t("li",null,[t("a",{href:s.route("termsandcondition")},"Terms and Condition",8,St)])])])]),Lt])])])])])}const Bt=p(m,[["render",Tt]]);export{Bt as default};
