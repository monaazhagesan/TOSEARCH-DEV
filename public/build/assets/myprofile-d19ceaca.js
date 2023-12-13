import{_ as s,$ as i,o as p,d as u,a as t,f as e,G as n}from"./app-a9ec9377.js";import"./jquery.magnific-popup-53971dd8.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const _={mounted(){s(()=>import("./jquery-3.4.1.min-c5e04f0d.js"),[]).then(()=>{}),s(()=>import("./bootstrap-select.min-5ef20ffa.js"),[]).then(()=>{}),s(()=>import("./mmenu-733e54c1.js"),[]).then(()=>{}),s(()=>import("./chosen.min-58e32b02.js"),[]).then(()=>{}),s(()=>import("./slick.min-c658521d.js"),[]).then(()=>{}),s(()=>import("./rangeslider.min-feb2ca25.js"),[]).then(()=>{}),s(()=>import("./magnific-popup.min-f58fb3ec.js"),[]).then(()=>{}),s(()=>import("./jquery-ui.min-351bebeb.js"),[]).then(()=>{}),s(()=>import("./tooltips.min-b7563558.js"),[]).then(()=>{}),s(()=>import("./color_switcher-294aed8a.js"),[]).then(()=>{}),s(()=>import("./jquery_custom-104cb25c.js"),[]).then(()=>{}),i(document).ready(function(){i(".companie-logo-slick-carousel").slick({autoplay:!0,autoplaySpeed:2e3,infinite:!0,slidesToShow:5,slidesToScroll:1,dots:!0,arrows:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}}]});var l=i(".utf_tabs_nav"),c=l.children("li");l.each(function(){var a=i(this);a.next().children(".tab_content").stop(!0,!0).hide().first().show(),a.children("li").first().addClass("active").stop(!0,!0).show()}),c.on("click",function(a){var o=i(this);o.siblings().removeClass("active").end().addClass("active"),o.parent().next().children(".tab_content").stop(!0,!0).hide().siblings(o.find("a").attr("href")).fadeIn(),a.preventDefault()});var r=window.location.hash,d=i('.utf_tabs_nav a[href="'+r+'"]');d.length===0?(i(".utf_tabs_nav li:first").addClass("active").show(),i(".tab_content:first").show()):d.parent("li").click(),i(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"}),i(".utf_user_menu").on("click",function(){i(this).toggleClass("active")})})}},h={lang:"zxx"},v=n('<head><meta name="author" content=""><meta name="description" content=""><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>To Search</title><link rel="shortcut icon" href="images/favicon.png"><link rel="stylesheet" href="css/stylesheet.css"><link rel="stylesheet" href="css/mmenu.css"><link rel="stylesheet" href="css/style.css" id="colors"><link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&amp;display=swap&amp;subset=latin-ext,vietnamese" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800" rel="stylesheet" type="text/css"></head>',1),b={id:"main_wrapper"},f={id:"header_part",class:"fullwidth"},x={id:"header"},y={class:"container"},g={class:"utf_left_side"},w={id:"logo"},k=["href"],S=t("img",{src:"images/tosearch_logo.png",alt:""},null,-1),T=[S],C=n('<div class="mmenu-trigger"><button class="hamburger utfbutton_collapse" type="button"><span class="utf_inner_button_box"><span class="utf_inner_section"></span></span></button></div><div class="clearfix"></div>',2),P={class:"utf_right_side"},E={class:"header_widget"},A=t("a",{href:"#login_with_otp",class:"button border with-icon popup-with-zoom-anim"},[t("i",{class:"sl sl-icon-bag"}),e("Seller Tools")],-1),N=t("a",{href:"#dialog_signin_part",class:"button border sign-in popup-with-zoom-anim"},[t("i",{class:"sl sl-icon-user"}),e(" Buyer Tools")],-1),I={class:"utf_user_menu"},L=t("div",{class:"utf_user_name"},[t("span",null,[t("img",{src:"images/dashboard-avatar.jpg",alt:""})]),e("Hi, John!")],-1),R=["href"],B=t("i",{class:"sl sl-icon-user"},null,-1),D=["href"],V=t("i",{class:"sl sl-icon-user-following"},null,-1),M=["href"],O=t("i",{class:"sl sl-icon-power"},null,-1),z=t("div",{id:"login_with_otp",class:"zoom-anim-dialog mfp-hide"},[t("div",{class:"small_dialog_header"},[t("h3",null,"Sign In")]),t("div",{class:"utf_signin_form style_one"},[t("ul",{class:"utf_tabs_nav"},[t("li",{class:""},[t("a",{href:"#tab1"},"Log In")]),t("li",null,[t("a",{href:"#tab2"},"Register")])]),t("div",{class:"tab_container alt"},[t("div",{class:"tab_content",id:"tab1",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_num"},[t("input",{type:"text",class:"input-text",name:"mobile_num",id:"mobile_num",value:"",placeholder:"Mobile Number"})])]),t("a",{href:"#login_otp",class:"popup-with-zoom-anim"},[t("input",{type:"submit",class:"button border fw margin-top-10",value:"Submit"})])])]),t("div",{class:"tab_content",id:"tab2",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"username2"},[t("input",{type:"text",class:"input-text",name:"username",id:"username2",value:"",placeholder:"Username"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"email2"},[t("input",{type:"text",class:"input-text",name:"email",id:"email2",value:"",placeholder:"Email"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_no"},[t("input",{type:"text",class:"input-text",name:"mobile_no",id:"mobile_no",value:"",placeholder:"Mobile Number"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password1"},[t("input",{class:"input-text",type:"password",name:"password1",id:"password1",placeholder:"Password"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password2"},[t("input",{class:"input-text",type:"password",name:"password2",id:"password2",placeholder:"Confirm Password"})])]),t("input",{type:"submit",class:"button border fw margin-top-10",name:"register",value:"Register"})])])])])],-1),$=t("div",{id:"login_otp",class:"zoom-anim-dialog mfp-hide"},[t("div",{class:"small_dialog_header"},[t("h3",null,"Verify Your Mobile Number")]),t("div",{class:"utf_signin_form style_one",style:{"text-align":"center"}},[t("h4",{style:{color:"#ff2222"}},[e("Please Enter the One Time Password (OTP)"),t("br"),e(" to verify your account")]),t("div",null,[t("span",null,"A code has been sent to"),e(),t("small",null,"*******9897")]),t("form",{method:"post",class:"register"},[t("div",{id:"otp",class:"inputs d-flex flex-row justify-content-center mt-2",style:{display:"inline-flex"}},[t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"first",maxlength:"1"}),e(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"second",maxlength:"1"}),e(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"third",maxlength:"1"}),e(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"fourth",maxlength:"1"}),e(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"fifth",maxlength:"1"}),e(),t("input",{class:"m-2 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"})]),t("div",{class:"mt-4"}),t("div",{class:"utf_row_form"},[t("a",{href:"dashboard.html",class:"button border with-icon"}," Validate")])])])],-1),F=t("div",{id:"dialog_signin_part",class:"zoom-anim-dialog mfp-hide"},[t("div",{class:"small_dialog_header"},[t("h3",null,"Sign In")]),t("div",{class:"utf_signin_form style_one"},[t("ul",{class:"utf_tabs_nav"},[t("li",{class:""},[t("a",{href:"#tab1"},"Log In")]),t("li",null,[t("a",{href:"#tab2"},"Register")])]),t("div",{class:"tab_container alt"},[t("div",{class:"tab_content",id:"tab1",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_num"},[t("input",{type:"text",class:"input-text",name:"mobile_num",id:"mobile_num",value:"",placeholder:"Mobile Number"})])]),t("a",{href:"#login_otp",class:"popup-with-zoom-anim"},[t("input",{type:"submit",class:"button border fw margin-top-10",value:"Submit"})])])]),t("div",{class:"tab_content",id:"tab2",style:{display:"none"}},[t("form",{method:"post",class:"register"},[t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"username2"},[t("input",{type:"text",class:"input-text",name:"username",id:"username2",value:"",placeholder:"Username"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"email2"},[t("input",{type:"text",class:"input-text",name:"email",id:"email2",value:"",placeholder:"Email"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"mobile_no"},[t("input",{type:"text",class:"input-text",name:"mobile_no",id:"mobile_no",value:"",placeholder:"Mobile Number"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password1"},[t("input",{class:"input-text",type:"password",name:"password1",id:"password1",placeholder:"Password"})])]),t("p",{class:"utf_row_form utf_form_wide_block"},[t("label",{for:"password2"},[t("input",{class:"input-text",type:"password",name:"password2",id:"password2",placeholder:"Confirm Password"})])]),t("input",{type:"submit",class:"button border fw margin-top-10",name:"register",value:"Register"})])])])])],-1),G=t("div",{class:"clearfix"},null,-1),H={id:"titlebar",class:"gradient"},U={class:"container"},Y={class:"row"},j={class:"col-md-12"},q=t("h2",null,"My Profile",-1),K={id:"breadcrumbs"},W=["href"],J=t("li",null,"My Profile",-1),Q=n('<section class="fullwidth_block padding-bottom-15"><div class="container"><div class="row"><div class="col-lg-12 col-md-12"><div class="utf_dashboard_list_box margin-top-0"><h4 class="gray"><i class="sl sl-icon-user"></i> Profile Details</h4><div class="utf_dashboard_list_box-static"><div class="edit-profile-photo"><img src="images/user-avatar.jpg" alt=""><div class="change-photo-btn"><div class="photoUpload"><span><i class="fa fa-upload"></i> Upload Photo</span><input type="file" class="upload"></div></div></div><div class="row padding-bottom-35" style="display:inline-flex;"><div class="contentss"><div class="iconss pdding bg_green" style="margin-left:390px;"><i class="fa fa-fw"></i></div><div class="mem"><div id="nm">Member Since</div><div id="dur">5 Years</div></div></div><div class="contentss"><div class="iconss bg_green" style="margin-left:100px;"><span class="im im-icon-Starfish"></span></div><div class="mem"><div id="nm">Rating</div><div id="val">--</div></div></div></div><div class="my-profile"><div class="row with-forms"><div class="col-md-4"><label>Name</label><input type="text" class="input-text" placeholder="Alex Daniel" value=""></div><div class="col-md-4"><label>Primary Mobile</label><input type="text" class="input-text" placeholder="(123) 123-456" value=""></div><div class="col-md-4"><label>Alternative Mobile</label><input type="text" class="input-text" placeholder="(123) 123-433" value=""></div><div class="col-md-4"><label>Whatsapp Number</label><input type="text" class="input-text" placeholder="(123) 123-433" value=""></div><div class="col-md-4"><label>Email</label><input type="text" class="input-text" placeholder="test@example.com" value=""></div><div class="col-md-4"><label>Alternative Email</label><input type="text" class="input-text" placeholder="test3@example.com" value=""></div><div class="col-md-4"><label>Country</label><input type="text" class="input-text" placeholder="India" value=""></div><div class="col-md-4"><label>State</label><select class="input-text" data-selected-text-format="count" data-size="7" title="Select State"><option>Tamil Nadu</option><option>Bihar</option><option>Maharashtra</option><option>Goa</option><option>Chhattisgarh</option><option>Andhra Pradesh</option></select></div><div class="col-md-4"><label>City</label><select class="input-text" data-selected-text-format="count" data-size="7" title="Select State"><option>Salem</option><option>Chennai</option><option>Madurai</option><option>Coimbatore</option><option>Thoothukudi</option><option>Nagapattinam</option></select></div><div class="col-md-4"><label>Flat/House No</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Address</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Pincode</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Facebook(optional)</label><input type="text" class="input-text" placeholder="https://www.facebook.com" value=""></div><div class="col-md-4"><label>Twitter (optional)</label><input type="text" class="input-text" placeholder="https://www.twitter.com" value=""></div><div class="col-md-4"><label>Linkedin (optional)</label><input type="text" class="input-text" placeholder="https://www.linkedin.com" value=""></div><div class="col-md-4"><label>Google+ (optional)</label><input type="text" class="input-text" placeholder="https://plus.google.com" value=""></div><div class="col-md-4"><label>Instagram (optional)</label><input type="text" class="input-text" placeholder="http://instagram.com" value=""></div><div class="col-md-4"><label>Skype (optional)</label><input type="text" class="input-text" placeholder="https://www.skype.com" value=""></div></div></div><button class="button preview btn_center_item margin-top-15">Save Changes</button></div></div><div class="utf_dashboard_list_box margin-top-0"><h4 class="gray"><i class="fa fa-fw"></i> Company Details</h4><div class="utf_dashboard_list_box-static"><div class="my-profile"><div class="row with-forms"><div class="col-md-4"><label>Company Name</label><input type="text" class="input-text" placeholder="ABC Company" value=""></div><div class="col-md-4"><label>Company Website</label><input type="text" class="input-text" placeholder="https://abc.com" value=""></div><div class="col-md-4"><label>Company Mobile</label><input type="text" class="input-text" placeholder="(123) 123-433" value=""></div><div class="col-md-4"><label>Company Email</label><input type="text" class="input-text" placeholder="test@example.com" value=""></div><div class="col-md-4"><label>GSTIN</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>PAN</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>Country</label><input type="text" class="input-text" placeholder="India" value=""></div><div class="col-md-4"><label>State</label><select class="input-text" data-selected-text-format="count" data-size="7" title="Select State"><option>Tamil Nadu</option><option>Bihar</option><option>Maharashtra</option><option>Goa</option><option>Chhattisgarh</option><option>Andhra Pradesh</option></select></div><div class="col-md-4"><label>City</label><select class="input-text" data-selected-text-format="count" data-size="7" title="Select State"><option>Salem</option><option>Chennai</option><option>Madurai</option><option>Coimbatore</option><option>Thoothukudi</option><option>Nagapattinam</option></select></div><div class="col-md-4"><label>Flat/House No</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Address</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Pincode</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>GST</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>PAN Card</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Aadhar card</label><input type="text" class="input-text" placeholder="" value=""></div><div class="col-md-4"><label>Facebook(optional)</label><input type="text" class="input-text" placeholder="https://www.facebook.com" value=""></div><div class="col-md-4"><label>Twitter (optional)</label><input type="text" class="input-text" placeholder="https://www.twitter.com" value=""></div><div class="col-md-4"><label>Linkedin (optional)</label><input type="text" class="input-text" placeholder="https://www.linkedin.com" value=""></div><div class="col-md-4"><label>Google+ (optional)</label><input type="text" class="input-text" placeholder="https://plus.google.com" value=""></div><div class="col-md-4"><label>Instagram (optional)</label><input type="text" class="input-text" placeholder="http://instagram.com" value=""></div><div class="col-md-4"><label>Skype (optional)</label><input type="text" class="input-text" placeholder="https://www.skype.com" value=""></div></div></div><button class="button preview btn_center_item margin-top-15">Save Changes</button></div></div><div class="utf_dashboard_list_box margin-top-0"><h4 class="gray"><i class="fa fa-fw"></i>Bank Account Details</h4><div class="utf_dashboard_list_box-static"><div class="my-profile"><div class="row with-forms"><div class="col-md-4"><label>Bank Name</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>Bank Holder Name</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>Branch Name</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>Account Number</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>IFSC Code</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>Account Type</label><input type="text" class="input-text" placeholder="--" value=""></div><div class="col-md-4"><label>Cancel Cheque </label><input type="text" class="input-text" placeholder="--" value=""></div></div></div><button class="button preview btn_center_item margin-top-15">Save Changes</button></div></div></div></div></div></section>',1),X={id:"footer",class:"footer_sticky_part"},Z={class:"container"},tt={class:"row"},et=n('<div class="col-md-4 col-sm-12 col-xs-12"><h4>About Us</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p></div><div class="col-md-2 col-sm-3 col-xs-6"><h4>Supplier Tool Kit</h4><ul class="social_footer_link"><li><a href="#">Seller Tools</a></li><li><a href="#">Latest BuyLead</a></li></ul></div><div class="col-md-2 col-sm-3 col-xs-6"><h4>Buyers Tool Kit</h4><ul class="social_footer_link"><li><a href="#">Post Your Requirement</a></li><li><a href="#">Search Products &amp; Suppliers</a></li></ul></div>',3),lt={class:"col-md-2 col-sm-3 col-xs-6"},st=t("h4",null,"Useful Links",-1),it={class:"social_footer_link"},at=["href"],ot=["href"],nt={class:"col-md-2 col-sm-3 col-xs-6"},dt=t("h4",null,"Help",-1),ct={class:"social_footer_link"},rt=t("li",null,[t("a",{href:"#"},"Sign In")],-1),pt=t("li",null,[t("a",{href:"#"},"Feedback")],-1),ut=t("li",null,[t("a",{href:"#"},"Complaints")],-1),mt=["href"],_t=t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("div",{class:"footer_copyright_part"},"Copyright © 2023 To Search. All Rights Reserved.")])],-1);function ht(l,c,r,d,a,o){return p(),u("html",h,[v,t("body",null,[t("div",b,[t("header",f,[t("div",x,[t("div",y,[t("div",g,[t("div",w,[t("a",{href:l.route("home")},T,8,k)]),C]),t("div",P,[t("div",E,[A,e(),N,t("div",I,[L,t("ul",null,[t("li",null,[t("a",{href:l.route("myprofile")},[B,e(" My Profile")],8,R)]),t("li",null,[t("a",{href:l.route("businessbuyer")},[V,e("Verified Business Buyer")],8,D)]),t("li",null,[t("a",{href:l.route("home")},[O,e("Sign Out")],8,M)])])])])]),z,$,F])])]),G,t("div",H,[t("div",U,[t("div",Y,[t("div",j,[q,t("nav",K,[t("ul",null,[t("li",null,[t("a",{href:l.route("home")},"Home",8,W)]),J])])])])])]),Q,t("div",X,[t("div",Z,[t("div",tt,[et,t("div",lt,[st,t("ul",it,[t("li",null,[t("a",{href:l.route("home")},"Home",8,at)]),t("li",null,[t("a",{href:l.route("listingsgridcategories")},"Listing",8,ot)])])]),t("div",nt,[dt,t("ul",ct,[rt,pt,ut,t("li",null,[t("a",{href:l.route("termsandcondition")},"Terms and Condition",8,mt)])])])]),_t])])])])])}const xt=m(_,[["render",ht]]);export{xt as default};