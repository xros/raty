describe('#_create', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('calls all necessary methods', function() {
    // given
    var
      element  = this.el[0],
      options  = { score: 1 },
      instance = new Raty(element, options);

    spyOn(Raty.prototype , '_adjustHints');
    spyOn(Raty.prototype , '_adjustNumber');
    spyOn(Raty.prototype , '_adjustedScore');
    spyOn(Raty.prototype , '_createStars');
    spyOn(Raty.prototype , '_executeCallbacks');
    spyOn(Raty.prototype , '_setPath');

    // when
    instance._create();

    // then
    expect(Raty.prototype._adjustHints).toHaveBeenCalled();
    expect(Raty.prototype._adjustNumber).toHaveBeenCalled();
    expect(Raty.prototype._adjustedScore).toHaveBeenCalledWith(1);
    expect(Raty.prototype._createStars).toHaveBeenCalled();
    expect(Raty.prototype._executeCallbacks).toHaveBeenCalled();
    expect(Raty.prototype._setPath).toHaveBeenCalled();
  });

  context('when *starType is "img"', function() {
    it ('does not calls :_adjustStarName', function() {
      // given
      var
        element  = this.el[0],
        options  = { starType: 'img' },
        instance = new Raty(element, options);

      spyOn(Raty.prototype , '_adjustStarName');

      // when
      instance._create();

      // then
      expect(Raty.prototype._adjustStarName).not.toHaveBeenCalled();
    });
  });

  context('when *starType is not "img"', function() {
    it ('calls :_adjustStarName', function() {
      // given
      var
        element  = this.el[0],
        options  = { starType: 'i' },
        instance = new Raty(element, options);

      spyOn(Raty.prototype , '_adjustStarName');

      // when
      instance._create();

      // then
      expect(Raty.prototype._adjustStarName).toHaveBeenCalled();
    });
  });

  context('when *cancel is true', function() {
    it ('does not calls :_createCancel', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true },
        instance = new Raty(element, options);

      spyOn(Raty.prototype , '_createCancel');

      // when
      instance._create();

      // then
      expect(Raty.prototype._createCancel).toHaveBeenCalled();
    });
  });

  context('when *cancel is false', function() {
    it ('calls :_createCancel', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: false },
        instance = new Raty(element, options);

      spyOn(Raty.prototype , '_createCancel');

      // when
      instance._create();

      // then
      expect(Raty.prototype._createCancel).not.toHaveBeenCalled();
    });
  });

  context('when *precision is true', function() {
    it ('does not calls :_adjustPrecision', function() {
      // given
      var
        element  = this.el[0],
        options  = { precision: true },
        instance = new Raty(element, options);

      spyOn(Raty.prototype , '_adjustPrecision');

      // when
      instance._create();

      // then
      expect(Raty.prototype._adjustPrecision).toHaveBeenCalled();
    });
  });

  context('when *precision is false', function() {
    it ('calls :_adjustPrecision', function() {
      // given
      var
        element  = this.el[0],
        options  = { precision: false },
        instance = new Raty(element, options);

      spyOn(Raty.prototype , '_adjustPrecision');

      // when
      instance._create();

      // then
      expect(Raty.prototype._adjustPrecision).not.toHaveBeenCalled();
    });
  });
});
