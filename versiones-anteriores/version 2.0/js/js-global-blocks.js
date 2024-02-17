/*
	JS: Global CSS BLOCKS JS
	Developed By:	LayoutFlow
	URL:			https://layoutflow.com
	Version:		1.0
	License: 		https://creativecommons.org/licenses/by-nc-sa/4.0/	
*/	


	// JAVASCRIPT

		// COPYRIGHT YEAR (AUTOMATIC)
		let getyear = new Date().getFullYear();
		let getyeardiv = document.getElementById('year');
		getyeardiv.innerHTML = getyear;


		// HEADER FIXED
		function headerfixed(){
			let getheaderdiv = document.getElementsByTagName('header')[0].classList;
			if(document.documentElement.scrollTop > 100){
				getheaderdiv.add('fixed');
			}else{
				getheaderdiv.remove('fixed');
			}
		}
		window.onscroll = headerfixed;


	// JQUERY
		$(document).ready(function(){


			// NAV MENU MANAGEMENT 
			$('a.showmenu').click(function(){$('.navigation').fadeIn(); $(this).hide(); $('a.hidemenu').fadeIn('slow'); });
			$('a.hidemenu').click(function(){ $('.navigation').fadeOut(); $(this).hide(); $('a.showmenu').fadeIn('slow'); });
			$('.navigation ul li').click(function(){
				let getscreenwidth = $(window).width();
				if(getscreenwidth < 1201){
					$('.navigation').fadeOut();
					$('a.showmenu').fadeIn('slow');
					$('a.hidemenu').hide();
				}
			});


		});