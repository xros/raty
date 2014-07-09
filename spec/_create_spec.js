describe('#_create', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('calls all necessary methods', function() {
    // given
    var
      element = this.el[0],
      options = {};

    spyOn(Raty.prototype, '_setPath');

    // when
    new Raty(element, options);

    // then
    expect(Raty.prototype._setPath).toHaveBeenCalled();
  });
});
