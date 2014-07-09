describe('#constructor', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('saves the raw element', function() {
    // given
    var
      element = this.el[0],
      options = { key: 'value' };

    spyOn(Raty.prototype, '_create'); // as_null_object

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

    spyOn(Raty.prototype, '_create'); // as_null_object

    // when
    var instance = new Raty(element, options);

    // then
    expect(instance.self).toEqual($(element));
  });

  it ('merges the options in all levels', function() {
    // given
    var
      element = this.el[0],
      options = { key: 'value', deep: { inner: 'override' } };

    $.fn.raty.defaults = { keep: 'keep', deep: { inner: 'inner' } };

    spyOn(Raty.prototype, '_create'); // as_null_object

    // when
    var instance = new Raty(element, options);

    // then
    expect(instance.opt).toEqual({ keep: 'keep', deep: { inner: 'override' }, key: 'value' });
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
