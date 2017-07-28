$(document).ready(function () {
  $.reject({
    reject: {
      safari6: true, // Apple Safari
      chrome24: true, // Google Chrome
      firefox23: true, // Mozilla Firefox
      msie7: true, // Microsoft Internet Explorer
      msie8: true, // Microsoft Internet Explorer
      opera17: true // Opera
    },
    header: 'Вы используете устаревший браузер.',

    paragraph1: 'Вы пользуетесь устравшим браузером, который не поддерживает' +
    ' современные веб-стандарты и представляет угрозу вашей безопасности. ' +
    'found below.',

    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: '',
    closeLink: 'Зактрыть окно'
  });

  $('.owl-carousel').owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    navText: [],
    items: 5
  });

  var link = $('.hide');
  link.click(function (e) {
    e.preventDefault();
    var input = $('#pass');
    if (input.attr('type') == 'text') {
      input.attr('type', 'password');
      link.text('Показать пароль');
    }
    else {
      input.attr('type', 'text');
      link.text('Скрыть пароль');
    }
  });
  var btn1 = $('.tab-control .btn.one');
  btn1.tabContent = $('.service > .tab-content').eq(0);
  var btn2 = $('.tab-control .btn.two');
  btn2.tabContent = $('.service > .tab-content').eq(1);

  function isActive() {
    return $(this).hasClass('active');
  }

  function btnShow(btn) {
    btn.addClass('active');
    if (!btn.tabContent.isActive()) {
      btn.tabContent.addClass('active');
      btn.tabContent.slideToggle(500);
    }
  }

  function btnHide(btn) {
    btn.removeClass('active');
    if (btn.tabContent.isActive()) {
      btn.tabContent.removeClass('active');
      btn.tabContent.slideToggle(500);
    }
  }

  btn1.tabContent.isActive = isActive;
  btn2.tabContent.isActive = isActive;

  btn1.click(function () {
    if (btn1.hasClass('active')) {
      btnHide(btn1);
      $("body").removeClass("reMeta");
    } else {
      if (btn2.hasClass('active')) {
        btnHide(btn2);
      }
      btnShow(btn1);
      $("body").addClass("reMeta");
    }
  });

  btn2.click(function () {
    if (btn2.hasClass('active')) {
      btnHide(btn2);
    } else {
      if (btn1.hasClass('active')) {
        btnHide(btn1);
        $("body").removeClass("reMeta");
      }
      btnShow(btn2);
    }
  });

  btn1.tabContent.find('.btn.close').click(function () {
    btnHide(btn1);
    $("body").removeClass("reMeta");
  });

  btn2.tabContent.find('.btn.close').click(function () {
    btnHide(btn2);
  });

  var prog = $('.progress');
  // Make calculation for each bar
  prog.each(function () {
    var that = $(this);
    var stepsCount = 4;
    var stepClasses = [
      'alert',
      'double-warning',
      'warning',
      'success'
    ];
    var bar = that.find('.progress-bar');
    var barw = bar.width();
    var stepWidth = that.width() / stepsCount; // calculate step width
    var initStepWidth = 0;
    var start, end;
    for (var i = 0; i < stepsCount; i++) {
      start = i * stepWidth;
      end = (i + 1) * stepWidth;
      if (start <= barw && barw <= end) {
        bar.addClass(stepClasses[i]);
        that.parents('.task').addClass(stepClasses[i]);
        break;
      }
    }
  });

  $('.nav-btn').click(function () {
    $('.nav-collapse').slideToggle(500)
  });

  $(".message .close").click(function(){
    $(this).parents(".message").slideUp(500);
  });

  $('.task .task-cont .btn.close').click(function(){
    $(this).parents('.task').slideUp(500);
  });

  var milInput = $('#mil-input');
  var milUpdate = $('#mil-update');
  var milCancel = $('#mil-cancel');
  var milSave = $('#mil-save');
  var defMil = milInput.val();
  milUpdate.click(update);
  milCancel.click(cancel);
  milSave.click(save);
  function update() {
    defMil = milInput.val();
    milInput.removeAttr('disabled', false);
    milInput.focus();
    hideButton();
  }
  function cancel() {
    milInput.val(defMil);
    milInput.attr('disabled', true);
    hideButton();
  }
  function save() {
    milInput.attr('disabled', true);
    hideButton();
  }
  function hideButton() {
    $('.buttons .goup1').fadeToggle(300);
    $('.buttons .goup2').fadeToggle(300);
  }
  /* ------  show onli one and once ------
  function openAns(){
    var n = $(this).index();
    $(this).addClass("active");
    $('.pay-method .answers .answer')
      .eq(n).slideDown(300);
    $('.pay-method .option .item').off("click",openAns);
  }
  $('.pay-method .option .item').on("click",openAns);
  ------ */

  $('.pay-method .option .item').click(function() {
    var el = $(this);
    el.siblings(".item").removeClass("active");
    el.addClass("active");
    $('.pay-method .answers .answer')
      .eq(el.index()).slideDown(300)
      .siblings(".answer").slideUp(300);
  });

  var navBtn = $('.nav-btn');
  navBtn.click(function () {
    if ($(this).hasClass('active') == true) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $("select").map(function () {
    var el = this;
    $(this).selectmenu({
      appendTo: '.select-ui',
      icons: {
        button: 'ui-icon-custom'
      },
      position: {
        my: "left top-1"
      },
      change: function( event, ui ) {/*
        console.log(ui);
        console.log(ui.item.index);
        if (ui.item.index != 0){
          $(ui.item.element).remove();
          $(ui.item.element).selectmenu( "refresh" );
        }*/
      }
    });
    $(this).selectmenu('menuWidget').addClass('overflow');
  });

  $('.format').mask('000 000 000 000', {
    reverse: true
  });

  $(".datepicker").map(function () {
    $.datepicker.setDefaults(
      $.extend($.datepicker.regional["ru"])
    );
    if ($(window).width() > 768) {
      $(this).attr('type', 'text');
      $(this).datepicker({
        appendTo: '.date',
        dateFormat: "dd MM, yy"
      });
      $(this).val($.datepicker.formatDate('dd MM, yy', new Date()))
    } else {
      $(this).attr('type', 'date');
    }
  });

  if ($(window).width() < 1199) {
    $('.task').click(function(){
      $('.task').removeClass('active');
      $(this).addClass('active');
    });
  }


  $('[data-modal]').click(function(){
    showModal($(this).attr("data-modal"));
  });
  $(".darkBack,.modalBlock .cancel").click(function(){
    hideModal();
  });
  function showModal(w){
    $(".modalBlock#"+w).addClass("open");
    showDark();
  }
  function fixBody(){
    $("body").addClass("fix");
  }
  function unFixBody(){
    $("body").removeClass("fix");
  }
  function hideModal(){
    $(".modalBlock").removeClass("open");
    hideDark();
  }
  function hideDark(){
    $(".darkBack").removeClass("open");
    unFixBody();
  }
  function showDark(){
    $(".darkBack").addClass("open");
    fixBody()
  }
});
