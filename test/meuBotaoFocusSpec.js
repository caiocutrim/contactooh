describe("meuBotaoFocus", function() {
  var $scope;
  var element;
  var evento = 'contatoSalvo';

  beforeEach(function()
  {
    module('meusComponentes');
    inject(function($rootScope,$compile)
    {
      $scope = $rootScope.$new();
      element = angular.element('<a href="#/" id="botao-voltar" meu-focus evento="contatoSalvo" class="btn btn-default">'+
              '<span class="glyphicon glyphicon-home"></span>'+
                'Voltar'+
            '</a>');
      $compile(element)($scope);
      $scope.$digest();
  });
    it('Deve focar o botão após salvar o contato',
      function()
      {
        angular.element(document.body).append(element);

        $scope.$broadcast(evento);
        expect(angular.element(document.activeElement).text()).toBe('Voltar');
      });

});
});