window.onload = function() {
  //Manage of the amenities scroll
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

    if (val4.length >= 28 && val4.slice(val4.length - 3, val4.length) != "..."){
      print = val4 + "..."
      $("DIV.amenities h4").text(print);
    } else if (val4.slice(val4.length - 3, val4.length) != "..."){
      $("DIV.amenities h4").text(lista);
    }
  });

  //API Status
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function(data) {
    if (data["status"] === "OK") {
      console.log(data["status"]);
      $("DIV#api_status").addClass("available");
    } else {
      $("DIV#api_status").removeClass("available");
    }
  });

  //Search Places
  $('button').click(() =>
  $.ajax({
    dataType: "json",
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify({ amenities: Object.keys(select) }),
    success: function(data) {
      //Get the list of the user for the places
      // const listUsers = allUsers();
      // console.log(listUsers);

      //List the article and concat each element to append after
      //let nameOwner = "";
      for (let i in data) {
	let jinja = `<article>
          <div class="title_box">
            <h2>` + data[i].name + `</h2>
            <div class="price_by_night">` + data[i].price_by_night + `</div>
          </div>
          <div class="information">
            <div class="max_guest">` + data[i].max_guest + `</div>
            <div class="number_rooms">` + data[i].number_rooms + `</div>
            <div class="number_bathrooms">` + data[i].number_bathrooms + `</div>
          </div>`;
	//Put the user of the place
	// for (let userKey in listUsers) {
	//   console.log(listUsers);
	//   if (listUsers[userKey].id == data[i].user_id)
	//     nameOwner = `<div class="user"><b>Owner:</b>`+
	//     listUsers[userKey].first_name + ` ` + listUsers[userKey].last_name + `</div>`;
	// }
        let jinja2 = `<div class="description">` + data[i].description + `</div></article>`;
	let lastJinja = jinja + jinja2;
	$("SECTION.places").append(lastJinja);
      }
    },
    contentType: "application/json",
    type: "POST"
  }));
}


// function allUsers() {
//   const urlUsers = 'http://0.0.0.0:5001/api/v1/users/';
//   const Users = [];
//   $.get(urlUsers, function(data){
//     for (let usr in data) {
//       Users.push(data[usr]);
//     }
//   });
//   return Users;
// }
