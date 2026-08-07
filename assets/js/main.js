/* PawBiotix — progressive enhancement. Loaded with `defer`; page works without it. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var list = document.getElementById("primary-nav");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.getAttribute("data-open") === "true";
      list.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    // Close after choosing a destination
    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        list.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- FAQ accordion (accessible disclosure) ---- */
  var questions = document.querySelectorAll(".faq__q");
  Array.prototype.forEach.call(questions, function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      if (!panel) return;
      if (expanded) {
        panel.style.maxHeight = null;
        panel.setAttribute("data-open", "false");
      } else {
        panel.setAttribute("data-open", "true");
        panel.style.maxHeight = panel.scrollHeight + 40 + "px";
      }
    });
  });

  /* ---- Smart sticky mobile CTA: show after ~35% scroll; dismissible (session) ---- */
  var sticky = document.querySelector(".sticky-cta");
  if (sticky) {
    var dismissed = false;
    try { dismissed = sessionStorage.getItem("pb_sticky_dismissed") === "1"; } catch (e) {}
    if (dismissed) { sticky.setAttribute("data-dismissed", "true"); }
    var onScroll = function () {
      if (sticky.getAttribute("data-dismissed") === "true") return;
      var doc = document.documentElement;
      var scrolled = (doc.scrollTop || document.body.scrollTop);
      var max = (doc.scrollHeight - doc.clientHeight) || 1;
      var pct = scrolled / max;
      sticky.setAttribute("data-visible", String(pct >= 0.35));
    };
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(function () { onScroll(); ticking = false; }); ticking = true; }
    }, { passive: true });
    onScroll();
    var dismissBtn = sticky.querySelector(".sticky-cta__dismiss");
    if (dismissBtn) {
      dismissBtn.addEventListener("click", function () {
        sticky.setAttribute("data-dismissed", "true");
        sticky.setAttribute("data-visible", "false");
        try { sessionStorage.setItem("pb_sticky_dismissed", "1"); } catch (e) {}
      });
    }
    /* Hide sticky while the pricing section is in view (avoid overlapping its CTAs) */
    var pricing = document.getElementById("pricing");
    if (pricing && "IntersectionObserver" in window) {
      var pio = new IntersectionObserver(function (entries) {
        sticky.setAttribute("data-near-pricing", String(entries[0].isIntersecting));
      }, { threshold: 0.2 });
      pio.observe(pricing);
    }
  }

  /* ---- Reveal-on-scroll (opt-in, respects reduced motion) ---- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealables = document.querySelectorAll("[data-reveal]");
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = "1";
          en.target.style.transform = "none";
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(revealables, function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
      ro.observe(el);
    });
  }
})();
