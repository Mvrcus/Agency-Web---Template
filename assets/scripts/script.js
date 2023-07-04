let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');

form.onsubmit = () => {
    return false
}
let current_step = 0;
let stepCount = 6
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});
 
 
prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }
 
    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});
 
 
submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');
 
    const timer = ms => new Promise(res => setTimeout(res, ms));
 
    timer(3000)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })
 
});

$(window).ready(() => {
  $("#loading").fadeOut(1e3), $("body").css("overflow", "auto");
});
var a = 0;
$(window).scroll(function () {
  $(window).scrollTop() > $("#main").offset().top + 200
    ? ($("#scrollTopBtn").fadeIn(500),
      $("#scrollTopBtn").css("display", "flex"))
    : $("#scrollTopBtn").fadeOut(500);
  var t = $("#counter-box").offset().top - window.innerHeight;
  0 == a &&
    $(window).scrollTop() > t &&
    ($(".counter").each(function () {
      var t = $(this),
        o = t.attr("data-number");
      $({ countNum: t.text() }).animate(
        { countNum: o },
        {
          duration: 850,
          easing: "swing",
          step: function () {
            t.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            t.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
        }
      );
    }),
    (a = 1));
}),
  $("#scrollTopBtn").click(() => {
    $("html,body").animate({ scrollTop: 0 }, 2);
  });
let toggleMenu = document.getElementById("toggleMenu"),
  LinksList = document.getElementById("LinksList");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open"), LinksList.classList.toggle("open");
}),
  $(function () {
    $(".owl-carousel").owlCarousel({
      margin: 20,
      responsive: {
        0: { items: 1, dots: !0, loop: !0 },
        600: { items: 2, dots: !0, loop: !0 },
        1e3: { items: 4, dots: !0, loop: !0 },
      },
    });
  }),
  AOS.init();
