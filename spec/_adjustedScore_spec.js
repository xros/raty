describe('#_adjustedScore', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  context('when score is null', function() {
    it ('returns undefined', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        score    = null,
        instance = new Raty(element, options);

      // when
      var value = instance._adjustedScore(score);

      // then
      expect(value).toBeUndefined();
    });
  });

  context('when score is undefined', function() {
    it ('returns undefined', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        score    = undefined,
        instance = new Raty(element, options);

      // when
      var value = instance._adjustedScore(score);

      // then
      expect(value).toBeUndefined();
    });
  });

  context('when score is less than zero', function() {
    it ('returns the zero', function() {
      // given
      var
        element  = this.el[0],
        options  = { number: 1 },
        score    = -1,
        instance = new Raty(element, options);

      // when
      var value = instance._adjustedScore(score);

      // then
      expect(value).toEqual(0);
    });
  });

  context('when score is equal zero', function() {
    it ('returns the zero', function() {
      // given
      var
        element  = this.el[0],
        options  = { number: 1 },
        score    = 0,
        instance = new Raty(element, options);

      // when
      var value = instance._adjustedScore(score);

      // then
      expect(value).toEqual(0);
    });
  });

  context('when score is more than *number', function() {
    it ('returns the number', function() {
      // given
      var
        element  = this.el[0],
        options  = { number: 1 },
        score    = 2,
        instance = new Raty(element, options);

      // when
      var value = instance._adjustedScore(score);

      // then
      expect(value).toEqual(1);
    });
  });
});
