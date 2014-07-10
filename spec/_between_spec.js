describe('#_between', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  context('when value is less than min', function() {
    var
      max    = 2,
      min    = 1,
      number = 0;

    it ('returns the min', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        instance = new Raty(element, options);

      // when
      var result = instance._between(number, min, max);

      // then
      expect(result).toEqual(1);
    });
  });

  context('when value is more than max', function() {
    var
      max    = 2,
      min    = 1,
      number = 3;

    it ('returns the min', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        instance = new Raty(element, options);

      // when
      var result = instance._between(number, min, max);

      // then
      expect(result).toEqual(2);
    });
  });
});
