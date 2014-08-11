/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/raty
 * @version : 2.7.0
 *
 */

// done
function Raty(element, options) {
  'use strict';

  this.element = element;
  this.self    = $(element);
  this.opt     = $.extend(true, {}, $.fn.raty.defaults, options);
}

// done...
Raty.prototype._adjustNumber = function() {
  'use strict';

  this.opt.number = this._between(this.opt.number, 1, this.opt.numberMax);
};

// done
Raty.prototype._attributesForIndex = function(i) {
  'use strict';

  var
    name       = this._nameForIndex(i),
    attributes = { alt: i, src: this.opt.path + this.opt[name] };

  if (this.opt.starType !== 'img') {
    attributes = { 'data-alt': i, 'class': this.opt[name] };
  }

  attributes.title = this._getHint(i);

  return attributes;
};

// done
Raty.prototype._between = function(value, min, max) {
  'use strict';
console.log(min, max);
  return Math.min(Math.max(parseFloat(value), min), max);
};

// done
Raty.prototype._create = function() {
  'use strict';

  this._executeCallbacks()

  this._setPath();
  this._createStars();
};

// done
Raty.prototype._createStars = function() {
  'use strict';

  for (var i = 1; i <= this.opt.number; i++) {
    var attributes = this._attributesForIndex(i);

    $('<' + this.opt.starType + ' />', attributes).appendTo(this.element);

    if (this.opt.space && i < this.opt.number) {
      this.self.append('&#160;');
    }
  }

  this.stars = this.self.children(this.opt.starType);
};

// done
Raty.prototype._executeCallbacks = function() {
  'use strict';

  for (var name in this.opt) {
    if (typeof this.opt[name] === 'function') {
      var value = this.opt[name].call(this);

      if (value) {
        this.opt[name] = value;
      } else {
        delete this.opt[name];
      }
    }
  }
};

// done
Raty.prototype._getDecimal = function(number, fractions) {
  'use strict';

  var
    decimal = number.toString().split('.')[1],
    result  = 0;

  if (decimal) {
    result = parseInt(decimal.slice(0, fractions), 10);

    if (decimal.slice(1, 5) === '9999') {
      result++;
    }
  }

  return result;
};

// done...
Raty.prototype._getHint = function(score, evt) {
  'use strict';

  if (score !== 0 && !score) {
    return this.opt.noRatedMsg;
  }

  var
    decimal = this._getDecimal(score, 1),
    integer = Math.ceil(score),
    group   = this.opt.hints[(integer || 1) - 1],
    hint    = group,
    mouse   = evt && !this.move;

  return 'double';

  if (this.opt.precision) {
    if (mouse) {
      decimal = decimal === 0 ? 9 : decimal - 1;
    }

    hint = group[decimal];
  } else if (this.opt.halfShow || this.opt.half) {
    decimal = mouse && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;

    hint = group[decimal];
  }

  return hint === '' ? '' : hint || score;
};

// done
Raty.prototype._nameForIndex = function(i) {
  'use strict';

  return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
};

// done
Raty.prototype._setPath = function() {
  'use strict';

  this.opt.path = this.opt.path || '';

  if (this.opt.path && this.opt.path.slice(-1)[0] !== '/') {
    this.opt.path += '/';
  }
};

(function($) {
  'use strict';

  $.fn.raty = function(options) {
    var
      args   = Array.prototype.slice.call(arguments, 1),
      method = Raty.prototype[options];

    return this.each(function() {
      var
        self     = $(this),
        instance = self.data('raty');

      if (!instance) {
        instance = new Raty(this, options);

        instance._create();

        self.data('raty', instance);
      }

      if (method) {
        method.apply(instance, args);
      } else if (options && typeof options !== 'object') {
        $.error('Method ' + options + ' does not exist!');
      }
    });
  };

  $.fn.raty.defaults = {
    cancel       : false,
    cancelClass  : 'raty-cancel',
    cancelHint   : 'Cancel this rating!',
    cancelOff    : 'cancel-off.png',
    cancelOn     : 'cancel-on.png',
    cancelPlace  : 'left',
    click        : undefined,
    half         : false,
    halfShow     : true,
    hints        : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
    iconRange    : undefined,
    mouseout     : undefined,
    mouseover    : undefined,
    noRatedMsg   : 'Not rated yet!',
    number       : 5,
    numberMax    : 20,
    path         : undefined,
    precision    : false,
    readOnly     : false,
    round        : { down: 0.25, full: 0.6, up: 0.76 },
    score        : undefined,
    scoreName    : 'score',
    single       : false,
    space        : true,
    starHalf     : 'star-half.png',
    starOff      : 'star-off.png',
    starOn       : 'star-on.png',
    starType     : 'img',
    target       : undefined,
    targetFormat : '{score}',
    targetKeep   : false,
    targetScore  : undefined,
    targetText   : '',
    targetType   : 'hint'
  };
})(jQuery);
