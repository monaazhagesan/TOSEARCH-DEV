<template>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/dashboard_my_profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:43 GMT -->
<head>
<meta name="author" content="">
<meta name="description" content="">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>To Search</title>

<!-- Favicon -->
<link rel="shortcut icon" href="images/favicon.png">
<!-- Style CSS -->
<link rel="stylesheet" href="css/stylesheet.css">
<link rel="stylesheet" href="css/mmenu.css">
<link rel="stylesheet" href="css/perfect-scrollbar.css">
<link rel="stylesheet" href="css/style.css" id="colors">
<!-- Google Font -->
<link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&amp;display=swap&amp;subset=latin-ext,vietnamese" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800" rel="stylesheet" type="text/css">
</head>
<body>
<!-- Wrapper -->
<div id="main_wrapper"> 
  <header id="header_part" class="fixed fullwidth_block dashboard"> 
    <div id="header" class="not-sticky">
      <div class="container"> 
        <div class="utf_left_side"> 
          <div id="logo"> <a :href="route('seller_dashboard')"><img src="images/tosearch_logo.png" alt=""></a> <a :href="route('seller_dashboard')" class="dashboard-logo"><img src="images/tosearch_logo.png" alt=""></a> </div>
          <div class="mmenu-trigger">
			<button class="hamburger utfbutton_collapse" type="button">
				<span class="utf_inner_button_box">
					<span class="utf_inner_section"></span>
				</span>
			</button>
		  </div>
          <nav id="navigation" class="style_one">
            <ul id="responsive">
            <li class="example">
                <input type="text" class="search" placeholder="Enter product / service to search" name="search">
                <button type="submit" style="padding: 9px;"><i class="fa fa-search">&nbsp;Search</i></button>
            </li>            
            </ul>
          </nav>
          <div class="clearfix"></div>
        </div>
        <div class="utf_right_side"> 
          <div class="header_widget">
			<div class="dashboard_header_button_item">
				  <ul class="menuss" style="display: flex; margin-left: -268px;">
              <li class="menu_listss"><a  href="#"><i class="sl sl-icon-speech menu-list-iconss"></i><br>Lead Manager</a></li>
               <li class="menu_listss"><a :href="route('buy_leads')"><i class="sl sl-icon-graph menu-list-iconss"></i><br>BuyLeads</a></li>
               <li class="menu_listss"><a :href="route('manageproducts')"><i class="sl sl-icon-basket-loaded menu-list-iconss"></i><br>Products</a></li>
               <li class="menu_listss"><a  href="#"><i class="sl sl-icon-question menu-list-iconss"></i><br>Help</a></li>
            </ul>
			</div>
            <div class="utf_user_menu">
              <div class="utf_user_name"><span><img src="images/dashboard-avatar.jpg" alt=""></span>Hi, John!</div>
              <ul>
                <li><a :href="route('seller_dashboard')"><i class="sl sl-icon-layers"></i> Dashboard</a></li>
                <li><a :href="route('seller_my_profile')"><i class="sl sl-icon-user"></i> My Profile</a></li>
                <h5 style="margin-left: 10px;"><b>SELLER TOOLS</b></h5>
                <li><a href="#"><i class="fa fa-comments-o"></i>  Lead Manager</a></li>
                <li><a :href="route('buy_leads')"><i class="fa fa-area-chart"></i>BuyLeads</a></li>
                <li><a :href="route('manageproducts')"><i class="fa fa-shopping-cart"></i>Manage Products</a></li>
                <li><a href="#"><i class="fa fa-line-chart"></i>Performance Reports</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="clearfix"></div>
  
  <!-- Dashboard -->
  <div id="dashboard"> 
    <a href="#" class="utf_dashboard_nav_responsive"><i class="fa fa-reorder"></i> Dashboard Sidebar Menu</a>
    <div class="utf_dashboard_navigation js-scrollbar">
      <div class="utf_dashboard_navigation_inner_block">
        <ul>
      <li><a :href="route('seller_dashboard')" class="text-center"><i class="sl sl-icon-layers"></i><br>Dashboard</a></li>       
      <li><a href="#" class="text-center"><i class="sl sl-icon-diamond"></i><br>Paid Services</a></li>
      <li><a :href="route('seller_my_profile')" class="text-center"><i class="sl sl-icon-user"></i><br>My Profile</a></li>
      <li><a href="#" class="text-center"><i class="sl sl-icon-speech"></i><br>Lead Manager</a></li>
      <li><a :href="route('buy_leads')" class="text-center"><i class="sl sl-icon-graph"></i><br> BuyLeads</a></li>
      <li><a :href="route('manageproducts')" class="text-center"><i class="sl sl-icon-basket-loaded"></i><br>Products</a></li>
      <li><a href="#" class="text-center"><i class="sl sl-icon-power"></i><br>Logout</a></li>
        </ul>
      </div>
    </div>  
    <div class="utf_dashboard_content"> 
      <div class="row">
      <div class="col-md-12">
		  <div class="style-1 element_tab">
			<ul class="utf_tabs_nav">
			  <li class="active"><a href="#tab1b">Relevant Leads</a></li>
			  <li><a href="#tab2b">Export Leads</a></li>
			</ul>
			<div class="tab_container">
			  <div class="tab_content" id="tab1b">

        <div class="col-lg-12 col-md-12">
        	<div class="utf_listing_titlebar">
          <div class="utf_listing_titlebar_title">
          	<div class="row">
          		<div class="col-md-6">
           <h2>A4 Size Paper</h2>		   
            <span> <a href="#utf_listing_location" class="listing-address"> <i class="sl sl-icon-location"></i>&nbsp;Coimbatore, Tamil Nadu</a> </span><span class="date"><i class="fa fa-clock-o"></i>&nbsp;2 hrs ago</span>	
            <p>I am interested in buying A4 Size Paper. Kindly send me price and other details.</p>
            <p>Probable Requirement Type&nbsp;&nbsp;:&nbsp;<b>Business Use</b></p>
          </div>
          <div class="col-md-6">
            <ul class="listing_item_social">
              <li><a href="#"><i class="fa fa-bookmark"></i> View Similar</a></li>
			  <li><a href="#"><i class="fa fa-star"></i>Shortlist</a></li>              
              <li><a href="#"><i class="fa fa-flag"></i>Hide</a></li>
              <li><a href="#"><i class="fa fa-share"></i> Not Relevant</a></li>
            </ul>
          	<div class="dtlsec">
           <table style="width: auto !important; margin-top: 12px;"><tbody><tr><th>Buyer Details</th></tr><tr><td class="tdwdt">Products of Interest</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>B2b Copier Paper, A4 Size Copier Paper</b></span></div></td></tr><tr><td class="tdwdt">Member since</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>2 months</b></span></div></td></tr><tr><td class="tdwdt">Available</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>Mobile</b></span></div></td></tr></tbody></table>
         </div>
          	
          </div>
        </div>	
          </div>
        </div>
      </div>
        	

        </div>
			  </div>
			  <div class="tab_content" id="tab2b">
			  	 <div class="col-lg-12 col-md-12">
        </div>
			  </div>
			</div>
		  </div>
		</div> 
       
        <div class="col-md-12">
          <div class="footer_copyright_part">Copyright © 2023 To Search All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    import('@/public/scripts/jquery-3.4.1.min.js').then(() => {
    });
    import('@/public/scripts/bootstrap-select.min.js').then(() => {
    });
    import('@/public/scripts/mmenu.js').then(() => {
    });
    import('@/public/scripts/chosen.min.js').then(() => {
    });
    import('@/public/scripts/slick.min.js').then(() => {
    });
    import('@/public/scripts/rangeslider.min.js').then(() => {
    });
    import('@/public/scripts/magnific-popup.min.js').then(() => {
    });
    import('@/public/scripts/jquery-ui.min.js').then(() => {
    });
    import('@/public/scripts/tooltips.min.js').then(() => {
    });
    import('@/public/scripts/color_switcher.js').then(() => {
    });
    import('@/public/scripts/jquery_custom.js').then(() => {
    });
    // You can use jQuery here
    $(document).ready(function() {
    try {
	var jscr1 = $('.js-scrollbar');
	if (jscr1[0]) {
		const ps1 = new PerfectScrollbar('.js-scrollbar');

	}
    } catch (error) {
        console.log(error);
    }
    });
  }
}
</script>
<style>
.header_widget{
  top: 0px !important;
}
</style>