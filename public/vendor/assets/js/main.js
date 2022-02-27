/*
 * Version : 1.1
 */

/* INDEX OF CONTENTS JAVASCRIPT
==================================================
  XX. PRELOADER
  01. NAVIGATION
  02. MOBILE NAVIGATION
  03. PARALLAX BACKGROUND EFFECT
  04. TEXT ROTATE
  05. HOME ARROW DOWN
  06. SMOTH SCROLL
  07. PORTFOLIO FILTER IMAGE
  08. TESTIMONIAL SLIDER
  09. ANIMATION EFFECT  
*/

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* XX. PRELOADER
		==================================================*/
    $(window).on("load", function () {
      $("#status").fadeOut();
      $("#preloader").delay(500).fadeOut("slow");
    });

    /* 01. NAVIGATION
		==================================================*/

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("#navigation").addClass("nav-bg");
      } else {
        $("#navigation").removeClass("nav-bg");
      }
    });

    /* 02. MOBILE NAVIGATION
		==================================================*/

    $(document).on("click", ".navbar-collapse.in", function (e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });

    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195,
    });

    /* 03. PARALLAX BACKGROUND EFFECT
		==================================================*/

    var parallax = function () {
      $(window).stellar();
    };

    $(function () {
      parallax();
    });

    /* 04. TEXT ROTATE
		==================================================*/

    /* 05. HOME ARROW DOWN
		==================================================*/

    var arrowBounce = function () {
      var arrow = $(".arrow");
      if (arrow.hasClass("lift")) {
        arrow.removeClass("lift");
      } else {
        arrow.addClass("lift");
      }
    };

    setInterval(arrowBounce, 800);

    /* 06. SMOTH SCROLL
		==================================================*/

    $("a.smoth-scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 50,
          },
          1000
        );
      e.preventDefault();
    });

    /* 07. PORTFOLIO FILTER IMAGE
		==================================================*/
    $("#port-image").mixItUp();

    /* 08. TESTIMONIAL SLIDER
		==================================================*/

    $(".flexslider").flexslider({
      animation: "fade",
      directionNav: false,
    });

    /* 09. ANIMATION EFFECT
		==================================================*/

    AOS.init({
      duration: 1200,
      once: true,
      disable: "mobile",
    });

    /* 10. CONTACT VALIDATION FORM
		==================================================*/
    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (params.has("messageStatus")) {
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
        let messageStatus = params.get("messageStatus");
        if (messageStatus === "success") {
          window.scrollTo({
            top: $("#contact").offset().top,
            left: 0,
            behavior: "smooth",
          });
          $("#contact").fadeTo("slow", 1, function () {
            let e = $("#success");

            e.fadeIn();
            e.queue(function () {
              setTimeout(function () {
                e.dequeue();
              }, 3000);
            });
            e.fadeOut("slow");
          });
        }
      }
    }, 0);
    $(function () {
      $("#contact-form").validate({
        rules: {
          name: {
            required: true,
            minlength: 3,
          },
          email: {
            required: true,
          },
          message: {
            required: true,
          },
        },
        messages: {
          name: {
            required: "Please enter your name.",
            minlength: "Name must be of 3 characters at least.",
          },
          email: {
            required:
              "Please input a valid email address, so that I can reach you back",
          },
          message: {
            required: "Please enter a message for me.",
          },
        },
        // submitHandler: function (form) {
        //   $(form).ajaxSubmit({
        //     type: "POST",
        //     data: $(form).serialize(),
        //     url:
        //       "https://us-central1-vinay-portfolio-28eab.cloudfunctions.net/contactMe",
        //     success: function () {
        //       $("#contact :input").attr("disabled", "disabled");
        //       $("#contact").fadeTo("slow", 1, function () {
        //         $(this).find(":input").attr("disabled", "disabled");
        //         $(this).find("label").css("cursor", "default");
        //         $("#success").fadeIn();
        //       });
        //     },
        //     error: function () {
        //       $("#contact").fadeTo("slow", 1, function () {
        //         $("#error").fadeIn();
        //       });
        //     },
        //   });
        // },
      });
    });
  });
})(jQuery);
