$(document).ready(function(){

	$(window).scroll(function(){
		if($(document).scrollTop() > 120){
			$('.tm-navbar').addClass('scroll');
			$('.mynavbrand').css({color: '#8f8f8f'})
			$('.bar').addClass('bar2');
		}else{
			$('.tm-navbar').removeClass('scroll');
			$('.mynavbrand').css({color: 'white'})
			$('.bar').removeClass('bar2')
		}
	});

	$('.bar').click(function(){
		$('.mylink').slideToggle();
	});


	$('.tm-gallery').slick({
      dots: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
})


var x = document.getElementById('ffg');
var y = document.getElementById('ffg1');
var z = document.getElementById('ffg2');

window.onscroll = function(){
	if(window.pageYOffset < 900){
		x.classList.remove('ggt')
	}
	if(window.pageYOffset > 900 && window.pageYOffset < 1900){
		x.classList.add('ggt')
		y.classList.remove('ggt')
	}if(window.pageYOffset > 1899 && window.pageYOffset < 2500){
		x.classList.remove('ggt')
		y.classList.add('ggt')
		z.classList.remove('ggt')
	}if(window.pageYOffset > 2499){
		y.classList.remove('ggt')
		z.classList.add('ggt')
	}
}


document.querySelector('.bar').addEventListener('click', toggleRed);

function toggleRed(){
  document.querySelector('.barChildren').classList.toggle('gkl')
}











// var li = document.querySelectorAll('.menu li');

// li.forEach(function(day){
// 	day.addEventListener('click', function(){
// 		menu.classList.remove('open');
// 		line.forEach(function(link){
// 			link.classList.toggle('open');
// 		});
// 	});
// });
