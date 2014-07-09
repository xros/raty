describe('#_nameForIndex', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  context('when score is null', function() {
    it ('returns :starOff', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        index    = 'double',
        instance = new Raty(element, options);

      instance.opt.score = null;

      // when
      var name = instance._nameForIndex(index);

      // then
      expect(name).toEqual('starOff');
    });
  });

  context('when score is undefined', function() {
    it ('returns :starOff', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        index    = 'double',
        instance = new Raty(element, options);

      delete instance.opt.score;

      // when
      var name = instance._nameForIndex(index);

      // then
      expect(name).toEqual('starOff');
    });
  });

  context('when has score', function() {
    context('and score is less than index', function() {
      var
        index = 2,
        score = 1;

      it ('returns :starOff', function() {
        // given
        var
          element  = this.el[0],
          options  = {},
          instance = new Raty(element, options);

        instance.opt.score = score;

        // when
        var name = instance._nameForIndex(index);

        // then
        expect(name).toEqual('starOff');
      });
    });

    context('and score is equal index', function() {
      var
        index = 1,
        score = 1;

      it ('returns :starOff', function() {
        // given
        var
          element  = this.el[0],
          options  = {},
          instance = new Raty(element, options);

        instance.opt.score = score;

        // when
        var name = instance._nameForIndex(index);

        // then
        expect(name).toEqual('starOn');
      });
    });

    context('and score is greater then index', function() {
      var
        index = 1,
        score = 2;

      it ('returns :starOff', function() {
        // given
        var
          element  = this.el[0],
          options  = {},
          instance = new Raty(element, options);

        instance.opt.score = score;

        // when
        var name = instance._nameForIndex(index);

        // then
        expect(name).toEqual('starOn');
      });
    });
  });
});
