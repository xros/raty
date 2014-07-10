describe('#_getHint', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  context('when :halfShow, :half and :precision are false', function() {
    context('and is not mouse event', function() {
      var evt = null;

      context('and score is 1', function() {
        var score = 1;

        xit ('returns the hint number 1', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: false, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[0]);
        });
      });

      context('and score is 3', function() {
        var score = 3;

        xit ('returns the hint number 3', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: false, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[2]);
        });
      });

      context('and score is 5', function() {
        var score = 5;

        xit ('returns the hint number 5', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: false, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[4]);
        });
      });
    });

    context('and is not mouse event', function() {
      var evt = $.Event('mousemove');

      context('and score is 1', function() {
        var score = 1;

        xit ('returns the hint number 1', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: false, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[0]);
        });
      });

      context('and score is 3', function() {
        var score = 3;

        xit ('returns the hint number 3', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: false, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[2]);
        });
      });

      context('and score is 5', function() {
        var score = 5;

        xit ('returns the hint number 5', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: false, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[4]);
        });
      });
    });
  });

  context('when only :halfShow is true', function() {
    context('and is not mouse event', function() {
      var evt = null;

      context('and score is 1', function() {
        var score = 1;

        xit ('returns the hint number 1', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: true, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[0]);
        });
      });

      context('and score is 3', function() {
        var score = 3;

        xit ('returns the hint number 3', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: true, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[2]);
        });
      });

      context('and score is 5', function() {
        var score = 5;

        xit ('returns the hint number 5', function() {
          // given
          var
            element  = this.el[0],
            options  = { half: false, halfShow: true, precision: false },
            instance = new Raty(element, options);

          // when
          var hint = instance._getHint(score, evt);

          // then
          expect(hint).toEqual(instance.opt.hints[4]);
        });
      });
    });
  });

  context('when score is undefined', function() {
    var score;

    it ('returns the :noRatedMsg value', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        instance = new Raty(element, options);

      // when
      var hint = instance._getHint(score);

      // then
      expect(hint).toEqual(instance.opt.noRatedMsg);
    });
  });

  context('when score is null', function() {
    var score = null;

    it ('returns the :noRatedMsg value', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        instance = new Raty(element, options);

      // when
      var hint = instance._getHint(score);

      // then
      expect(hint).toEqual(instance.opt.noRatedMsg);
    });
  });
});
