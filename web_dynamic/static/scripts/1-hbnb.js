window.onload = function() {
  const select = {}
  const lista = []
  $("DIV.amenities INPUT").click(function() {
    if ($(this).prop("checked") == true) {
      select[$(this).attr("data-id")] = $(this).attr("data-name");
      lista.push(select[$(this).attr("data-id")]);
    } else {
      delete select[$(this).attr("data-id")];
      for (let i = 0; i < lista.length; i++) {
	const name = $(this).attr("data-name");
	if (lista[i] == name)
	  delete lista[i];
      }
    }
    console.log(lista);
    $("DIV.amenities h4").text(lista);
  });
}
