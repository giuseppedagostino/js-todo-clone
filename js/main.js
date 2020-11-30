// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.

$(document).ready(
  function() {

    // Creo la todo list
    var list = [
      "Seguire la lezione di Gianluca",
      "Pranzare",
      "Fare l'esercizio giornaliero",
      "Aprire un hotwell",
    ];
    console.log(list);

    // Dico ad Handlebars cosa usare
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    // Scorro l'array lista e genero l'html
    for (var i = 0; i < list.length; i++) {
      var context = {
        text: list[i]
      };
      var html = template(context);
      $("#todo").append(html);
    }

  }
);
