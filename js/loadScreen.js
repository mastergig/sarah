function start()
{
    //carrega as imagens primeiro (apesar de serem leves)
    waitLoadFile('./img/Aa.gif', function () {
        waitLoadFile('./img/Sarah.png', function () {
            var load = $("#load")[0];
            load.style.transition = 'all 0s';
            load.style.transition = 'all 2s';
            
            var pagina = window.location.pathname;
            carregaTela(pagina.substring(pagina.lastIndexOf('/') + 1));
        });
    });
}

function carregaTela(pagina, call)
{
    pagina = (pagina == null || pagina == '' || pagina == 'home')? 'index' : pagina;

    if(pagina == "index")
    {
        waitLoadFile('./img/SarahIndex.png', function()
        {
            readTextFile('./pages/index.html', function (strHTML)
            {
                $('#main')[0].innerHTML = strHTML;
                $("#menu a").attr("onclick","clicaLink(this.event)");
                carrega(false);
            });
        });
    }
    else
    {
        var conteudo = "";
        var divAct = "";
        switch(pagina)
        {
            case "index":
                divAct = "#linkHome";
                call;
                break;
            case "portfolio":
                divAct = "#linkPort";
                call;
                break;
            case "about":
                divAct = "#linkAbot";
                call;
                break;
            case "contact":
                divAct = "#linkCont";
                call;
                break;
            default:
                console.log("404 Not Found");
                call;
            break;
        }
        //carrega javaScript com dados padrão e carrega eles na tela
        readTextFile('./pages/html.html', function (strHTML)
        {
            $('#main')[0].innerHTML = strHTML;
            $(divAct).addClass("active");
            carrega(false);
        });
    }
    $("#menu a").attr("onclick","clicaLink(this.event)");
}

function mudaTela(pagina)
{
    carrega(true);
    carregaTela(pagina);
    carrega(false);
}

function clicaLink()
{
    var pagina = this.event.currentTarget.href;
    mudaTela(pagina.substring(pagina.lastIndexOf('/') + 1));
    //this.event.preventDefault();
    return false;
}