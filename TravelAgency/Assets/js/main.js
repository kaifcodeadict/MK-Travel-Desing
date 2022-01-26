//------------------------------- Show Menu----------------------------------------------

const Navmenu = document.getElementById('nav-menu'),
      Navtoogle = document.getElementById('nav-toogle'),
      Navclose = document.getElementById('nav-close')

// ------------------- Menu Show -----------------
// Validate if constant Exist

if(Navtoogle){

    Navtoogle.addEventListener('click',()=>{

        Navmenu.classList.add('show-menu')


    })

}

// ------------------- Menu Hidden -----------------
// Validate if constant Exist
if(Navclose){

    Navclose.addEventListener('click',()=>{
        Navmenu.classList.remove('show-menu')
    })

}

// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===========================CHANGE BACKGROUND HEADER==============================*/

function scrollHeader() {

    const header = document.getElementById('header')
    // when the scroll is greater then the 100 viewport height,add scroll-header class to header  
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header')
        
    }
    else{
        header.classList.remove('scroll-header')

    } 

    
}

window.addEventListener('scroll', scrollHeader);


//* ===============================SWIPER DISCOVER============================================= *//

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  
  });

/* ====================   VIDEO  =================*/   

const video = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

 function playPause() {
    if(video.paused){
    // Play the video
    video.play()
    
    // Change the icon 
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')

    }else{
        
            // pause the video
            video.pause()
            
            // Change the icon 
            videoIcon.classList.remove('ri-pause-line')
                videoIcon.classList.add('ri-play-line')
        
            
    }

 }     
 videoButton.addEventListener('click',playPause);

 function videoEnd() {

    // Video ends ,Icon Changed
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
        
     
 }

 video.addEventListener('ended',videoEnd); 



// ==================Show Scroll Up=====================

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >=200) scrollUp.classList.add('showscroll');else scrollUp.classList.remove('showscroll')


}

window.addEventListener('scroll',scrollUp)

//=========================== Scroll  Section Active Lincon

const section = document.querySelectorAll('section[id]')

function scrollActiveLink() {
    const scrollY = window.pageYOffset
    // console.log(scrollY+"iam scroll y");
    section.forEach(current =>{
        const sectionHight = current.offsetHeight;
        // console.log(sectionHight+" iam Height " + sectionId);
        const sectionTop = current.offsetTop - 50;
        // console.log(sectionTop +" iam OfffsetTop " + sectionId);
        sectionId = current.getAttribute('id')
    
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
            // console.log('iam if of ' + sectionId);
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })


}

window.addEventListener('scroll',scrollActiveLink)
/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?    'ri-sun-line' : 'ri-moon-line'  

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}




themeButton.addEventListener('click',()=>{

document.body.classList.toggle(darkTheme);    
themeButton.classList.toggle(iconTheme);



localStorage.setItem('selected-theme',getCurrentTheme())
localStorage.setItem('selected-icon',getCurrentIcon())

 


})

// ========         SCROOL REVEL    ===//

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        // reset: true,
    })

        sr.reveal(`.home_data,.home_social-link,.home_info,
        .discover_container,
        .experience_data,.experience_overlay,
        .place_card,
        .sponsor_content,
        .footer_data,.footer_rights`,{
            origin: 'top',
            interval: 100,
        })

        sr.reveal(`.about_data,
        .video_description,
        .subscribe_description`,{
            origin: 'left',
        })
        sr.reveal(`.about_img-overlay,
        .video_content,
        .subscribe_form`,{
            origin: 'right',
            interval: '100'
        })

        