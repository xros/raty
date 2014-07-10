describe('#_executeCallbacks', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  context('when options is a function', function() {
    it ('uses the given return', function() {
      // given
      var
        element  = this.el[0],
        options  = { option: function() { return 'value'; } },
        instance = new Raty(element, options);

      // when
      instance._executeCallbacks();

      // then
      expect(instance.opt.option).toEqual('value');
    });

    context('and there is not return', function() {
      it ('is undefined', function() {
        // given
        var
          element  = this.el[0],
          options  = { option: function() {} },
          instance = new Raty(element, options);

        // when
        instance._executeCallbacks();

        // then
        expect(instance.opt.option).toBeUndefined();
      });
    });
  });

  context('when options is not a function', function() {
    it ('keeps the given value', function() {
      // given
      var
        element  = this.el[0],
        options  = { option: 'default' },
        instance = new Raty(element, options);

      // when
      instance._executeCallbacks();

      // then
      expect(instance.opt.option).toEqual('default');
    });
  });
});
