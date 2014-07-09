describe('#constructor', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('saves the raw element', function() {
    // given
    var
      element = this.el[0],
      options = { key: 'value' };

    // when
    var instance = new Raty(element, options);

    // then
    expect(instance.element).toBe(element);
  });

  it ('saves the element as jquery object', function() {
    // given
    var
      element = this.el[0],
      options = { key: 'value' };

    // when
    var instance = new Raty(element, options);

    // then
    expect(instance.self).toEqual($(element));
  });

  context('defaults', function() {
    beforeEach(function() {
      $.fn.raty.defaults.deep = { inner: 'inner' };
      $.fn.raty.defaults.keep = 'keep';
      $.fn.raty.defaults.key  = 'key';
    });

    afterEach(function() {
      delete $.fn.raty.defaults.deep;
      delete $.fn.raty.defaults.keep;
      delete $.fn.raty.defaults.key;
    });

    it ('merges the options in all levels', function() {
      // given
      var
        element = this.el[0],
        options = { key: 'value', deep: { inner: 'override' } };

      // when
      var instance = new Raty(element, options);

      // then
      expect(instance.opt.keep).toEqual('keep');
      expect(instance.opt.deep.inner).toEqual('override');
      expect(instance.opt.key).toEqual('value');
    });
  });

  it ('creates the plugin', function() {
    // given
    var
      element = this.el[0],
      options = {};

    spyOn(Raty.prototype, '_create');

    // when
    new Raty(element, options);

    // then
    expect(Raty.prototype._create).toHaveBeenCalled();
  });
});
