$(".animate-text")
  .css({ opacity: "0.0", visibility: "visible" })
  .animate({ opacity: 1 }, 800)

$(window).on("scroll", scrollDetect)

function isMobile() {
  return $(window).width() < 648
}

var lastTop = 0
function scrollDetect() {
  var newTop = $(this).scrollTop()
  // Check if screen is on mobile device, to autohide nav bar items on scroll
  if (isMobile()) {
    hideMenu()
  }
  //     Scrolling down
  if (newTop > lastTop) {
    $(".navbar").css("top", "-100px")
  }
  //     Scrolling up
  else {
    $(".navbar").css("top", "0")
    if (!isMobile()) {
      $(".nav-items").css("display", "flex")
    }
  }
  lastTop = newTop
}

// This function scrolls to the sections on the page on click

function scrollToId(value) {
  var item = `#${$(value).attr("name")}`
  var scrollTo = $(item).offset().top
  $("html, body").animate(
    {
      scrollTop: scrollTo,
    },
    800
  )
}

const faderItemsLogo = document.querySelectorAll(".fade-in")
const faderItemsProject = document.querySelectorAll(".fade-in-project")

function intersectionObserverWrapper(options) {
  return new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add("appear")
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, options)
}

const toggleBurgerMenu = () => {
  const nav = document.querySelector(".nav-items")
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden")
  } else hideMenu()
}

const hideMenu = () => {
  const nav = document.querySelector(".nav-items")
  nav.classList.add("hidden")
}

const appearOptionsLogo = {
  threshold: 1,
  rootMargin: "0px 0px -50px 0px",
}

const appearOptionsProject = {
  threshold: 0.3,
  rootMargin: "0px 0px 0px 0px",
}

faderItemsLogo.forEach((fader) => {
  intersectionObserverWrapper(appearOptionsLogo).observe(fader)
})

faderItemsProject.forEach((fader) => {
  intersectionObserverWrapper(appearOptionsProject).observe(fader)
})
