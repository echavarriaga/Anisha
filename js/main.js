/*-----------------------------------------------------
* Application
*-----------------------------------------------------*/
var App = {
  
  Init: function () {
	//Crear tabulador
    $("#home").tabs();
    DocsPsi.addSpec("/PsiXML/psi/languages/anisha/", "Specification.xml");
    DocsPsi.addXsl("component-detail", "/xslt/component-detail.xsl");
    DocsPsi.addXsl("psi-grammar", "/xslt/psi-grammar.xsl");
    
    $("#class-diagram").visorPsi({
      acronym: "anisha",
      url: "/PsiXML/source/models/diagram/anisha/detail.dgl.xml"
    });
    //Botón de ejemplos
    App.CreateButton("execute-btn", "folder-open", function (event) {
	    location.href = "execute.html";
    });
    //Botón ir Home
    App.CreateButton("psiengine-btn", "gear", function (event) {
      location.href = "/";
    });
  },

  CreateButton: function(id, icon, fclick) {
    $("#"+id)
      .button({ icons: { primary: "ui-icon-"+icon } })
      .click(fclick);
  }
};