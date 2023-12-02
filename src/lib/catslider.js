import $ from 'jquery'
import csstransforms from 'modernizr-esm/feature/css/transforms'
import cssanimations from 'modernizr-esm/feature/css/animations'
import prefixed from 'modernizr-esm/src/prefixed'

class CatSlider {
  constructor (options, element) {
    this.$el = $(element);
    this._init(options);
  }

  _init(options) {
    this.$categories = this.$el.children('ul');
    this.$navcategories = this.$el.find('nav > a');
    const animEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd',
      msAnimation: 'MSAnimationEnd',
      animation: 'animationend',
    };
    this.animEndEventName =
      animEndEventNames[prefixed('animation')];
    this.support = csstransforms && cssanimations;
    this.isAnimating = false;
    this.current = 0;
    const $currcat = this.$categories.eq(0);
    if (!this.support) {
      this.$categories.hide();
      $currcat.show();
    } else {
      $currcat.addClass('mi-current');
    }
    this.$navcategories.eq(0).addClass('mi-selected');
    this._initEvents();
  }

  _initEvents() {
    const self = this;
    this.$navcategories.on('click.catslider', function () {
      self.showCategory($(this).index());
      return false;
    });

    $(window).on('resize', function () {
      self.$categories.removeClass().eq(0).addClass('mi-current');
      self.$navcategories
        .eq(self.current)
        .removeClass('mi-selected')
        .end()
        .eq(0)
        .addClass('mi-selected');
      self.current = 0;
    });
  }

  showCategory(catidx) {
    if (catidx === this.current || this.isAnimating) {
      return false;
    }
    this.isAnimating = true;
    this.$navcategories
      .eq(this.current)
      .removeClass('mi-selected')
      .end()
      .eq(catidx)
      .addClass('mi-selected');

    const dir = catidx > this.current ? 'right' : 'left';
    const toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight';
    const fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft';
    const $currcat = this.$categories.eq(this.current);
    const $newcat = this.$categories.eq(catidx);
    const $newcatchild = $newcat.children();
    const lastEnter =
      dir === 'right' ? $newcatchild.length - 1 : 0;
    const self = this;

    if (this.support) {
      $currcat.removeClass().addClass(toClass);

      setTimeout(function () {
        $newcat.removeClass().addClass(fromClass);
        $newcatchild
          .eq(lastEnter)
          .on(self.animEndEventName, function () {
            $(this).off(self.animEndEventName);
            $newcat.addClass('mi-current');
            self.current = catidx;
            const $this = $(this);
            self.forceRedraw($this.get(0));
            self.isAnimating = false;
          });
      }, $newcatchild.length * 90);
    } else {
      $currcat.hide();
      $newcat.show();
      this.current = catidx;
      this.isAnimating = false;
    }
  }

  forceRedraw(element) {
    if (!element) {
      return;
    }
    const n = document.createTextNode(' ');
    const position = element.style.position;
    element.appendChild(n);
    element.style.position = 'relative';
    setTimeout(function () {
      element.style.position = position;
      n.parentNode.removeChild(n);
    }, 25);
  }
}

$.fn.catslider = function (options) {
  let instance = $.data(this, 'catslider');
  if (typeof options === 'string') {
    const args = Array.prototype.slice.call(arguments, 1);
    this.each(function () {
      instance[options].apply(instance, args);
    });
  } else {
    this.each(function () {
      instance
        ? instance._init()
        : (instance = $.data(this, 'catslider', new CatSlider(options, this)));
    });
  }
  return instance;
};
// TODO: Make a way to integrate into the slider
$(function () {
  $('#mi-slider').catslider()
})