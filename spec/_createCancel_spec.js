describe('#_createCancel', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('creates the cancel with :_attributesForCancel attributes', function() {
    // given
    var
      element  = this.el[0],
      options  = {},
      instance = new Raty(element, options);

    spyOn(Raty.prototype, '_attributesForCancel').and.returnValue({ src: 'http://example.org/image.jpg' });

    // when
    instance._createCancel();

    // then
    expect(instance.cancel[0].src).toEqual('http://example.org/image.jpg');
  });

  context('when *cancelPlace is "left"', function() {
    it ('puts the image on the left followed by one space', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancelPlace: 'left' },
        instance = new Raty(element, options);

      spyOn(Raty.prototype, '_attributesForCancel').and.returnValue({ src: 'http://example.org/image.jpg' });

      // when
      instance._createCancel();

      // then
      expect(instance.self.html()).toEqual('<img src="http://example.org/image.jpg">&nbsp;');
    });
  });

  context('when *cancelPlace is "right"', function() {
    it ('puts the image on the right with one space previously', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancelPlace: 'right' },
        instance = new Raty(element, options);

      spyOn(Raty.prototype, '_attributesForCancel').and.returnValue({ src: 'http://example.org/image.jpg' });

      // when
      instance._createCancel();

      // then
      expect(instance.self.html()).toEqual('&nbsp;<img src="http://example.org/image.jpg">');
    });
  });
});
