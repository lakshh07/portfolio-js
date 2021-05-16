const cursorBig = document.querySelector(".cursor_big");
const cursorSml = document.querySelector(".cursor_small");
const hoverables = document.querySelectorAll(".hoverable");
const circleCursor = document.getElementById("h");
document.addEventListener("mousemove", (e) => {
  cursorSml.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
  cursorBig.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
  // ci/rcleCursor.setAttribute("style", "top: "+(e.pageY - 45)+"px; left: "+(e.pageX - 0)+"px;")
});
hoverables.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    cursorBig.classList.add("cursor-hover");
    cursorBig.classList.remove("cursor-hover-not");
  });
  e.addEventListener("mouseleave", () => {
    cursorBig.classList.remove("cursor-hover");
    cursorBig.classList.add("cursor-hover-not");
  });
});

const toggleMenu = document.querySelector(".toggle-menu");
const player = document.querySelector("lottie-player");
const navUl = document.getElementById("section-menu");
const byebye = document.querySelectorAll(".bye-bye");

toggleMenu.addEventListener("click", function (e) {
  e.preventDefault();
  navUl.classList.toggle("navActive");
  if (navUl.classList.contains("navActive")) {
    this.setAttribute("aria-label", "Close navigation");
    this.setAttribute("aria-expanded", "true");
    player.getLottie().playSegments([0, 200], true);
    //   player.getLottie().playSegments([0, 45], true);
  } else {
    this.setAttribute("aria-label", "Open navigation");
    this.setAttribute("aria-expanded", "false");
    //   player.getLottie().playSegments([45,0], true);
    player.getLottie().playSegments([200, 0], true);
  }
});
byebye.forEach((e) => {
  e.addEventListener("click", () => {
    navUl.classList.toggle("navActive");
    toggleMenu.setAttribute("aria-label", "Open navigation");
    toggleMenu.setAttribute("aria-expanded", "false");
    player.getLottie().playSegments([200, 0], true);
  });
});

const hello = document.querySelector(".hello");
const btnMenu = document.querySelector(".btn-menu");
const bye = document.querySelectorAll(".bye");
btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("menu-top");
  document.querySelector(".hello").classList.toggle("navActive");
  // document.querySelector('.hello').classList.toggle('fadeOut');
});
bye.forEach((e) => {
  e.addEventListener("click", () => {
    btnMenu.classList.toggle("menu-top");
    hello.classList.toggle("navActive");
  });
});

$(window).scroll(function () {
  inViewport();
});
$(window).resize(function () {
  inViewport();
});
function inViewport() {
  $(".progress-line").each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 550) {
      $(this).addClass("animate");
    } else {
      $(this).removeClass("animate");
    }
  });
  $(".high2").each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 550) {
      $(this).addClass("animates");
    } else {
      $(this).removeClass("animates");
    }
  });
}

function loader(_success) {
  var obj = document.querySelector(".container-pre"),
    inner = document.querySelector(".percentage"),
    page = document.querySelector(".container-post");
  // document.querySelector('.cursor').classList.toggle('cursor-active');
  var w = 0,
    t = setInterval(function () {
      w = w + 1;
      inner.textContent = w + "-100    ";
      if (w === 101) {
        obj.classList.add("fadeOut");
        page.classList.remove("fadeOut");
        // document.querySelector('.cursor').classList.toggle('cursor-active');
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 50);
}
loader();

// Use of F12 key on the browser
$(document).keydown(function (e) {
  if (e.which === 123) {
    return false;
  }
});

// Use of Right click
$(document).bind("contextmenu", function (e) {
  e.preventDefault();
});
