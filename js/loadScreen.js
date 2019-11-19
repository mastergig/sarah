function start()
{
    //carrega as imagens primeiro (apesar de serem leves)
    waitLoadFile('./img/Aa.gif', function () {
        waitLoadFile('./img/Sarah.png', function () {
            var load = $("#load")[0];
            load.style.transition = 'all 0s';
            AAA();
            load.style.transition = 'all 2s';

            //carrega javaScript com dados padrão e carrega eles na tela
            addJs('./pg/_html.js', function ()
            {
                $('#main')[0].innerHTML = strHTML;
                carrega(false);
            });
        });
    });
}

function carregaTela(pagina)
{
    if(pagina == null) pagina = 'index';
    if(pagina == 'home') pagina = 'index';
}