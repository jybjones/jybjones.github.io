$(document).ready(function() {

  function filterProjects(x, y) {
    $("." + x).click(function() {
      var $this = $(this);

      if ($this.hasClass("active-filter")) {
        setTimeout(function() {
          // Wait, then if clicking on an active filter, reset everything.
          $(".portfolio").css("min-height", "1px");
          $this.removeClass("active-filter");
          $(".portfolio--project").fadeIn("fast");
        }, 200);
      } else {
        setTimeout(function() {
          // Wait to avoid double-click, then check height and set it.
          var $height = $(".portfolio").css("height");
          $(".portfolio").css("min-height", $height);
          // reset other filters.
          $(".filter").removeClass("active-filter");
          $this.addClass("active-filter");
          // fade out other projects and bring back what I want.
          $(".portfolio--project").fadeOut("fast");
          setTimeout(function() {
            // wait a second so that we don't end up with awkward flashes.
            $("." + y).fadeIn("fast");
          }, 200);
        }, 100);
      }
    });
  }
  filterProjects("All-project", "All");
  filterProjects("UX-project", "UXP");
  filterProjects("Startup-project", "Startup");
  filterProjects("Misc-project", "Misc");
  filterProjects("WD-project", "WD");
});

