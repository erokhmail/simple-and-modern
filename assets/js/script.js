const lazyLoadInstance = new LazyLoad({});
    const wow = new WOW({
      animateClass: "animate__animated"
    })
    wow.init();

    
$(function(){
    /*/*-====================toggleMenu ====================-*/
    
      $("#hamb-bnt").click(function () {
        $(this).toggleClass("is-active");
        $('#shadow').toggleClass('show');
        $('#mobile-sidebar').toggleClass('open');
        
      });


  /*/*-====================#toggleMenu ====================-*/
  /*/*-====================big Slider ====================-*/
    $('.big-slider').slick({
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      speed: 1500,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            vertical: false,
            verticalSwiping: false,
          }
        }
      ]
    });
    
 /*/*-====================#big Slider====================- */


/*/*-====================next section====================- */

    $(".scrolldown").click(function(event) {
      event.preventDefault();

        $('html, body').animate({
          scrollTop: $(".section-second").offset().top - 100
        }, 1000);
      });

  /*/*-====================#next section====================- */
  /*-====================LIGHT Gallery ====================-*/
    lightGallery(document.getElementById('gallery'), {
      plugins: [lgThumbnail, lgZoom],
      lgThumbnail: true,
      licenseKey: '4342-2322-2344-4434',
      controls: true,
      download: false,
      thumbWidth: 200,
      preload: 1,
      thumbHeight: 200
    });
    /*LIGHT Gallery */
});

  function getNews(){
    fetch('data/news.json')
    .then(resp => {
      if (resp.status != 200) {
        return $('.news-slider').append(`<div class="news-error">Oooops.. Nothing to show</div>`);
      } else {
        return resp.json();
      }
    })
    .then(resp =>{
      console.log(resp);
      
        let newsItem = '';
        resp.forEach(item => {
          newsItem += `<article class="news-item">
                  <a href="#" class="overlay"></a>
          <div class="common-info">
            <div class="block-img">
              <img class="lazy" data-lazy="${item.image}" alt="${item.title}">
            </div>
            <div class="block-text">
              <h4 class="title-h4 heading">${item.title}</h4>
              <p>${item.preview}</p>
            </div>
          </div>
          <div class="block-author">
            <div class="autor-img">
              <img class="lazy" data-lazy="${item.authorImg}" alt="${item.authorName}">
            </div>
            <div class="author-data">
              <div class="name">${item.authorName}</div>
              <div class="date">${item.date}</div>
            </div>
          </div>
        </article>`;
        });
        $('.news-slider').append(newsItem);      
    })
    .then(() => {
      $('.news-slider').slick({
        arrows: true,
        prevArrow: '<button class="news-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="white"/><path d="M21.8984 17.25C21.8984 17.1797 21.8672 17.1172 21.8203 17.0703L21.4297 16.6797C21.3828 16.6328 21.3125 16.6016 21.25 16.6016C21.1875 16.6016 21.1172 16.6328 21.0703 16.6797L17.4297 20.3203C17.3828 20.3672 17.3516 20.4375 17.3516 20.5C17.3516 20.5625 17.3828 20.6328 17.4297 20.6797L21.0703 24.3203C21.1172 24.3672 21.1875 24.3984 21.25 24.3984C21.3125 24.3984 21.3828 24.3672 21.4297 24.3203L21.8203 23.9297C21.8672 23.8828 21.8984 23.8125 21.8984 23.75C21.8984 23.6875 21.8672 23.6172 21.8203 23.5703L18.75 20.5L21.8203 17.4297C21.8672 17.3828 21.8984 17.3125 21.8984 17.25Z" fill="white"/></svg></button>',
        nextArrow: '<button class="news-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="white"/><path d="M22.6484 20.5C22.6484 20.4375 22.6172 20.3672 22.5703 20.3203L18.9297 16.6797C18.8828 16.6328 18.8125 16.6016 18.75 16.6016C18.6875 16.6016 18.6172 16.6328 18.5703 16.6797L18.1797 17.0703C18.1328 17.1172 18.1016 17.1875 18.1016 17.25C18.1016 17.3125 18.1328 17.3828 18.1797 17.4297L21.25 20.5L18.1797 23.5703C18.1328 23.6172 18.1016 23.6875 18.1016 23.75C18.1016 23.8203 18.1328 23.8828 18.1797 23.9297L18.5703 24.3203C18.6172 24.3672 18.6875 24.3984 18.75 24.3984C18.8125 24.3984 18.8828 24.3672 18.9297 24.3203L22.5703 20.6797C22.6172 20.6328 22.6484 20.5625 22.6484 20.5Z" fill="white"/></svg></button>',
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            }
          },
          
        ]
      });
    })
  }
  getNews();


 

  /*-====================Contacts - MAP====================- */
  window.map_active.onclick = function() {
    window.map_active.innerHTML = '';
    initMap();
  };

  function initMap(){
    const map = L.map('contact-map', { scrollWheelZoom: false }).setView([40.7800531, -73.9634008], 13);
    var circleIcon = L.icon({
      iconUrl: 'assets/images/map-pin.png',
      iconSize:     [106, 106], // size of the icon
      iconAnchor:   [55, 90], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -80] // point from which the popup should open relative to the iconAnchor
  });
      L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> '
      }).addTo(map);
  
      L.marker([40.7800531, -73.9634008], {icon: circleIcon}).addTo(map)
          .bindPopup('<div class="details">The Metropolitan</div>')
  }
  /*-====================#Contacts - MAP ====================-*/
  /*-====================Contacts - FORM ====================-*/
  window.contacts.addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById("yourname-wrap").classList.remove("has-err");
    document.getElementById("email-wrap").classList.remove("has-err");
    

    let pBad = document.createElement('p');
    pBad.className = 'unsuccess';
    pBad.innerHTML = `<span style="color: red;"><i>Please enter all empty fields</i></span>`;

    let pGood = document.createElement('div');
    pGood.className = 'success'
    pGood.innerHTML = `<span style="color: green;"><i>Your request sent successfully</i></span>`;
    

    const errors = [];

    let msg = '',
        name = window.yourname.value,
        email = window.email.value,
        formSuccess = document.getElementById('form-unsuccess');

        if((name === '') && (email === '')){
          
          if (formSuccess.innerHTML.trim() == ""){
            errors =  document.getElementById("email-wrap").classList.add("has-err") + document.getElementById("yourname-wrap").classList.add("has-err") + document.getElementById('form-unsuccess').append(pBad);
          } else {
            document.getElementById('form-success').remove(pGood);
          errors =  document.getElementById("email-wrap").classList.add("has-err") + document.getElementById("yourname-wrap").classList.add("has-err");
          }   
        
        }
        if(name === ''){
          if (formSuccess.innerHTML.trim() == ""){
            errors =  document.getElementById("yourname-wrap").classList.add("has-err") + document.getElementById('form-unsuccess').append(pBad);
          } else {
            errors =  document.getElementById("yourname-wrap").classList.add("has-err");
            document.getElementById("email-wrap").classList.remove("has-err");
          }          
        }
        if(email === ''){
          if (formSuccess.innerHTML.trim() == ""){
            errors =  document.getElementById("email-wrap").classList.add("has-err") + document.getElementById('form-unsuccess').append(pBad);
          } else {
            errors =  document.getElementById("email-wrap").classList.add("has-err");
            document.getElementById("yourname-wrap").classList.remove("has-err");
          } 
            
        }
        if(errors.length === 0){
            msg =`
            <b>Name: </b>${name}
<b>Email: </b>${email}
            `
            sendMessage(msg);
        } else {
            alert(errors.join(' '));
        }
        document.getElementById("contacts").reset();
        
        console.log(formSuccess.innerHTML);
        formSuccess.innerHTML = '';
        let answer = document.getElementById('form-success');
        answer.append(pGood);
        setTimeout(() => pGood.remove(), 1300);
      

  })

    async function sendMessage(message){
        const apiToken = "5726680712:AAGxufjvVURAaIXc-a2nxzl5Ovkfk4kxh-g";
        const chatId = "-1001911238406";
        
        let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;


        const response = await fetch(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      });
      const resp = await response.json();
      console.log(resp);
        
    }
  /*-====================Contacts - FORM ====================-*/
  window.addEventListener('scroll', function () {
    if (window.scrollY > document.getElementById("topper").offsetHeight) {
      document.getElementById("header").classList.add("fixed");
    } else {
      document.getElementById("header").classList.remove("fixed");
    }
  })