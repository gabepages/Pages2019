var $=jQuery;$(document).ready(function(){$(window).scroll(function(){var distanceScrolled=$(this).scrollTop();if(distanceScrolled>60||$(".menu").hasClass('open')){$('.menu').css('background',"#697061")}});var $root=$('html, body');$('a.scroll-tag').click(function(){$(".menu.open").removeClass("open").addClass("closed");if($(this).attr('href')[0]=="#"){event.preventDefault()
  $root.animate({scrollTop:$('[name="'+$.attr(this,'href').substr(1)+'"]').offset().top-80},450);return!1}});$('#copyright').on('click',function(){$('.image-block img').each((index,element)=>{$(element).attr('src',refineImage(element))})})
  function refineImage(element){var imageSrc=$(element).attr('src')
  var splitImg=imageSrc.split('.')
  splitImg[0]=splitImg[0]+'-refined'
  return splitImg.join('.')}
  $(".menu").on("click",function(){if($(".menu").hasClass('closed')){$(".menu.closed").removeClass("closed").addClass("open")}else{$(".menu.open").removeClass("open").addClass("closed")}});$('#rsvp-form').on('submit',function(){$(this).css('opacity',0);$('#form-submitted').css('opacity',1)})})
