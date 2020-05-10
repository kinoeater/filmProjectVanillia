class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.querySelector("#films"); // tbody kısmı, bunun altına listeler geliyor
    filmList.innerHTML += `
    
    <tr class="film-entry">
                                            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.title}</td>
                                            <td>${newFilm.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
    
    `;
  }

  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  static displayMessages(message, type) {
    const cardBody1 = document.querySelectorAll(".card-body")[0];

    //   <div class="alert alert-primary" role="alert">
    //   This is a primary alert—check it out!
    // </div>

    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    cardBody1.appendChild(alertDiv);

    setTimeout(function () {
      cardBody1.removeChild(alertDiv);
    }, 2000);
  }

  static loadToUI(allFilms) {
    for (const film of allFilms) {
      console.log(film);
      ui.addFilmToUI(film);
    }
  }

  static removeFilmFromUI(filmToDelete) {
    if (filmToDelete.id === "delete-film") {
      const film2Delete = filmToDelete.parentElement.parentElement;
      film2Delete.remove();
    }
  }

  static removeAll() {
    const filmList = document.querySelector("#films");
    const allFilmAtUI = filmList.children;
    console.log(allFilmAtUI.length);

    if (allFilmAtUI.length !== null) {
      if (confirm("Tümünü silmek istediğinizden emin misiniz?")) {
        //console.log(todos);
        //delete all tasks
        while (filmList.firstElementChild !== null) {
          filmList.firstElementChild.remove();
        }
      }
    }
  }
}
