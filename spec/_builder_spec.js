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

  context('when instance already exists', function() {
    beforeEach(function() {
      this.old = this.el.raty();
    });

    it ('does not instantiate again', function() {
      // given
      var instance = this.old.data('raty');

      // when
      this.el.raty();

      // then
      expect(this.el.data('raty')).toBe(instance);
    });
  });

  context('when instance does not exists', function() {
    it ('calls :_create', function() {
      // given
      spyOn(Raty.prototype, '_create');

      // when
      this.el.raty('method');

      // then
      expect(Raty.prototype._create).toHaveBeenCalled();
    });

    it ('defines a new instance', function() {
      // given

      // when
      this.el.raty();

      // then
      expect(this.el.data('raty')).toEqual(jasmine.any(Raty));
    });
  });

  context('when options is a method name', function() {
    Raty.prototype.method = function(a, b) {};

    context('and it exists', function() {
      it ('is called with given args', function() {
        // given
        this.el.raty();

        spyOn(Raty.prototype, 'method');

        // when
        this.el.raty('method', 'a', 'b');

        // then
        expect(Raty.prototype.method).toHaveBeenCalledWith('a', 'b');
      });

      it ('is called with instance as context', function() {
        // given
        this.el.raty({ keep: 'this' });

        var instance = this.el.data('raty');

        spyOn(Raty.prototype.method, 'apply');

        // when
        var chain = this.el.raty('method', 'a', 'b');

        // then
        expect(Raty.prototype.method.apply).toHaveBeenCalledWith(instance, ['a', 'b']);
      });
    });
  });

  context('when options is passed', function() {
    var options = 'missing';

    context('but is not a method name', function() {
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
});
