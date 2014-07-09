describe('#builder', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('is chainable', function() {
    // given

    // when
    var ref = this.el.raty();

    // then
    expect(ref[0]).toBe(this.el.data('raty').element);
  });

  it ('interacts on selection', function() {
    // given
    spyOn(this.el, 'each');

    // when
    this.el.raty();

    // then
    expect(this.el.each).toHaveBeenCalled();
  });

  context('when options is a method name', function() {
    Raty.prototype.method = function(a, b, c) {};

    context('and it exists', function() {
      context('and there is not an instance', function() {
        it ('is created', function() {
          // given

          // when
          this.el.raty('method', 'a', 'b', 'c');

          // then
          expect(this.el.data('raty')).not.toBeUndefined();
        });
      });

      it ('is called with given parameters', function() {
        // given
        this.el.raty();

        spyOn(Raty.prototype, 'method');

        // when
        this.el.raty('method', 'a', 'b', 'c');

        // then
        expect(Raty.prototype.method).toHaveBeenCalledWith('a', 'b', 'c');
      });

      it ('is called with instance as context', function() {
        // given
        this.el.raty({ keep: 'this' });

        var instance = this.el.data('raty');

        spyOn(Raty.prototype.method, 'apply');

        // when
        var chain = this.el.raty('method', 'a', 'b', 'c');

        // then
        expect(Raty.prototype.method.apply).toHaveBeenCalledWith(instance, ['a', 'b', 'c']);
      });
    });
  });

  context('when options is a object', function() {
    var options = { key: 'value' };

    context('with data binded', function() {
      beforeEach(function() {
        this.old = this.el.raty(options);
      });

      it ('does not bind again', function() {
        // given
        var key = this.old.data('raty').opt.key;

        // when
        this.el.raty({ key: 'other' });

        // then
        expect(this.el.data('raty').opt.key).toEqual(key);
      });
    });

    context('without data binded', function() {
      it ('defines a new instance', function() {
        // given

        // when
        this.el.raty(options);

        // then
        expect(this.el.data('raty')).not.toBeUndefined()
      });
    });
  });

  context('when options is null', function() {
    var options = null;

    context('with data binded', function() {
      beforeEach(function() {
        this.old = this.el.raty(options);
      });

      it ('does not bind again', function() {
        // given
        var key = this.old.data('raty').opt.key;

        // when
        this.el.raty({ key: 'other' });

        // then
        expect(this.el.data('raty').opt.key).toEqual(key);
      });
    });

    context('without data binded', function() {
      beforeEach(function() {
        this.el = Helper.create('#el');
      });

      it ('defines a new instance', function() {
        // given

        // when
        this.el.raty(options);

        // then
        expect(this.el.data('raty')).not.toBeUndefined()
      });
    });
  });

  context('when options is undefined', function() {
    var options = undefined;

    context('with data binded', function() {
      beforeEach(function() {
        this.old = this.el.raty(options);
      });

      it ('does not bind again', function() {
        // given
        var key = this.old.data('raty').opt.key;

        // when
        this.el.raty({ key: 'other' });

        // then
        expect(this.el.data('raty').opt.key).toEqual(key);
      });
    });

    context('without data binded', function() {
      beforeEach(function() {
        this.el = Helper.create('#el');
      });

      it ('defines a new instance', function() {
        // given

        // when
        this.el.raty(options);

        // then
        expect(this.el.data('raty')).not.toBeUndefined()
      });
    });
  });

  context('with an invalid option', function() {
    var options = 'missing';

    it ('logs the error', function() {
      // given
      this.el.raty();

      spyOn($, 'error');

      // when
      this.el.raty(options);

      // then
      expect($.error).toHaveBeenCalledWith('Method ' + options + ' does not exist!');
    });
  });
});
