window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if (this.scrollY <= 20)
    nav.className = 'navbar navbar-expand-lg navbar-light';
  else if (this.scrollY <= 150)
    nav.className = 'navbar navbar-expand-lg navbar-light scroll1'
  else
    nav.className = 'navbar navbar-expand-lg navbar-light scroll2';
};

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 230 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}