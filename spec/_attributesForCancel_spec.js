describe('#_attributesForCancel', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  context('when :starType is img', function() {
    it ('uses alt attribute with "x"', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'img' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes.alt).toEqual('x');
    });

    it ('uses src with *path plus *cancelOff', function() {
      // given
      var
        element  = this.el[0],
        name     = 'starOff',
        options  = { cancel: true, path: 'path', cancelOff: 'cancelOff', starType: 'img' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes.src).toEqual('pathcancelOff');
    });

    it ('does not use data-alt', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'img' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes['data-alt']).toBeUndefined();
    });

    it ('does not use class', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'img' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes['class']).toBeUndefined();
    });

    xit ('sets title with _getHint and given index', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'img' },
        instance = new Raty(element, options);

      spyOn(Raty.prototype, '_getHint').and.returnValue(hint);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes.title).toEqual(hint);
    });
  });

  context('when :starType is not img', function() {
    it ('uses alt attribute with "x"', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'i' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes['data-alt']).toEqual('x');
    });

    it ('uses class with *cancelOff', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, cancelOff: 'cancelOff', starType: 'i' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes['class']).toEqual('cancelOff');
    });

    it ('does not use alt', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'i' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes.alt).toBeUndefined();
    });

    it ('does not use src', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'i' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes.src).toBeUndefined();
    });

    xit ('sets title with _getHint and given index', function() {
      // given
      var
        element  = this.el[0],
        options  = { cancel: true, starType: 'i' },
        instance = new Raty(element, options);

      // when
      var attributes = instance._attributesForCancel();

      // then
      expect(attributes.title).toEqual(hint);
    });
  });
});
