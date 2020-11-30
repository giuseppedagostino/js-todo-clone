$(document).ready(
  function() {

    // Creo la todo list
    var list = [
      "Seguire la lezione di Gianluca",
      "Pranzare",
      "Fare l'esercizio giornaliero",
      "Aprire un hotwell",
      "Svagare occhi e schiena"
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

    // Rimuovo l'item che ho fatto
    $("span").click(
      function() {
        $(this).parent().remove();
      }
    );

    // Premendo invio inserisco il nuovo item
    $("input").keypress(
      function(event) {
        if (event.which == 13 || event.keycode == 13) {
          console.log("Keypress " + event.which);
          var newText = $("[name='add-field']").val();
          var context = {
            text: newText
          };
          var html = template(context);
          $("#todo").append(html);
        }
      }
    );

  }
);
