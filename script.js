$(document).ready(function(){
    
    

    $(".faq-head").click(function(){
		$(this).find(".add").toggleClass("rotate");
		$(this).parent().find(".faq-content").slideToggle();
		$(this).find(".button").toggleClass("clicked");
		$(this).parent().find(".faq-head").toggleClass("december");
		$(this).parent().find(".aezakmi").toggleClass("september");
	});

    $('.info_slider').slick({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 2,
      autoplay: false,
      autoplaySpeed: 7000,
      arrow:true,
      slidesToScroll: 2,
      prevArrow:'.prev',
      nextArrow:'.next',
      responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow:false,
                        autoplay:true,
                    }
                },
                   {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrow:false,
                        autoplay:true,
                    }
                }
                ]
    });

    $('.partnerx').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 7000,
        arrow:true,
        slidesToScroll: 1,
        prevArrow:'.prev',
        nextArrow:'.next',
        responsive: [
                  {
                      breakpoint: 1025,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          arrow:false,
                          autoplay:true,
                      }
                  },
                     {
                      breakpoint: 575,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          arrow:false,
                          autoplay:true,
                      }
                  }
                  ]
      });


    

    $('.mod').click(function() {
        $('.mod').removeClass('activex');
        $(this).addClass('activex');
    });

    $('.tab').click(function() {
        $('.tab').removeClass('tabx');
        $(this).addClass('tabx');
    });

    $(".default_option").click(function(){
        $(this).parent().toggleClass("active");
      })
      
      $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
    })

    function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
        const [from, to] = getParsed(fromInput, toInput);
        fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
        if (from > to) {
            fromSlider.value = to;
            fromInput.value = to;
        } else {
            fromSlider.value = from;
        }
    }
        
    function controlToInput(toSlider, fromInput, toInput, controlSlider) {
        const [from, to] = getParsed(fromInput, toInput);
        fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
        setToggleAccessible(toInput);
        if (from <= to) {
            toSlider.value = to;
            toInput.value = to;
        } else {
            toInput.value = from;
        }
    }
    
    function controlFromSlider(fromSlider, toSlider, fromInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
      } else {
        fromInput.value = from;
      }
    }
    
    function controlToSlider(fromSlider, toSlider, toInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
      } else {
        toInput.value = from;
        toSlider.value = from;
      }
    }
    
    function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max-to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }
    
    function setToggleAccessible(currentTarget) {
      const toSlider = document.querySelector('#toSlider');
      if (Number(currentTarget.value) <= 0 ) {
        toSlider.style.zIndex = 2;
      } else {
        toSlider.style.zIndex = 0;
      }
    }
    
    const fromSlider = document.querySelector('#fromSlider');
    const toSlider = document.querySelector('#toSlider');
    const fromInput = document.querySelector('#fromInput');
    const toInput = document.querySelector('#toInput');
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    
    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
    fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

    
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        let overlay = menu.find('.burger-menu_overlay');
        
        button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
        });
        
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
        
        function toggleMenu(){
          menu.toggleClass('burger-menu_active');
          
          if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
          } else {
            $('body').css('overlow', 'visible');
          }
        }
      }
      
      burgerMenu('.burger-menu');
    
      
      
      const tabs = document.querySelectorAll('[data-tab-target]')
      const tabContents = document.querySelectorAll('[data-tab-content]')

        tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
            tabContent.classList.remove('filterac')
            })
            tabs.forEach(tab => {
            tab.classList.remove('filteracac')
            })
            tab.classList.add('filterac')
            target.classList.add('filterac')
        })
        })
});


