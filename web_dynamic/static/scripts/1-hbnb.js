window.onload = function() {
  let print = "";
  const select = {};
  const lista = [];
  $("DIV.amenities INPUT").click(function() {
    if ($(this).prop("checked") == true) {
      select[$(this).attr("data-id")] = $(this).attr("data-name");
      lista.push(select[$(this).attr("data-id")]);
    } else {
      delete select[$(this).attr("data-id")];
      for (let i = 0; i < lista.length; i++) {
	const name = $(this).attr("data-name");
	if (lista[i] == name)
	  lista.splice(i, 1);
      }
    }
    const val4 = $("DIV.amenities h4").html();

    if (val4.slice(val4.length - 3, val4.length) == "..." && lista.length < 2) {
      $("DIV.amenities h4").text(lista);
    }
    else if (val4.length >= 20 && val4.slice(val4.length - 3, val4.length) != "..." && lista.length >= 2){
      print = val4 + "..."
      $("DIV.amenities h4").text(print);
    } else if (val4.slice(val4.length - 3, val4.length) != "..."){
      $("DIV.amenities h4").text(lista);
    }
  });
}
