const form =document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const filmsElement =document.querySelector("#films");
const clearFilmsElement = document.querySelector("#clear-films")



eventlisteners();

function eventlisteners() {
    document.addEventListener('DOMContentLoaded',getAddedFilms);
    form.addEventListener('submit',addFilm);
    filmsElement.addEventListener("click", deleteFilm);
    clearFilmsElement.addEventListener("click",deleteAllFilms);
    
}

function addFilm(e) {

    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();

    if (title === '' || director === '' || url === '' ) {

        //Hata
        UI.displayMessages("Lütfen tüm alanları doldurun","danger");

    } else {
        // Yeni Film Oluştur
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm); // Add to UI
        Storage.addFilmToStorage(newFilm); // Add to Storage
        UI.displayMessages("Tebrikler! Film başarılı şekilde eklendi","success")

    }
    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function getAddedFilms(e) {
    
    let allFilms = Storage.getFilmsFromStorage();
    UI.loadToUI(allFilms);

}

function deleteFilm(e) {
    const item = e.target;
   // console.log(item);
   UI.removeFilmFromUI(item);
    Storage.removeFromLocal(item);
}

function deleteAllFilms(e) {

    UI.removeAll();
    Storage.removeAllFromLocal();
    UI.displayMessages("Bütün Filmler silindi","success")
}