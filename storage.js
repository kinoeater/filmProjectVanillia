class Storage {

   

static addFilmToStorage(newFilm) {

   
    let allFilms = this.getFilmsFromStorage();
      
     // add the new item to the todos array
    allFilms.push(newFilm);
     // stringify the JSON array back  then add it to the local storage
     
     localStorage.setItem("allFilms",JSON.stringify(allFilms));
   
 }
 
static getFilmsFromStorage() {
     
     //Check if there i already sth at localstorage
    let allFilms;
   
    // check if the local storage is empty
    if(localStorage.getItem('allFilms') === null) {
        allFilms = [];
    } 
    
    // if not empty then get the item which are list of strings,
    // the parse them into a JSON array file
    else  { 
        allFilms = JSON.parse(localStorage.getItem('allFilms'));
    } 
   
     return allFilms;
 }

static removeFromLocal(filmToDelete) {

    let allFilms = this.getFilmsFromStorage();

     // add the new item to the todos array
    //allFilms.remove(filmToDelete);
    allFilms.splice(allFilms.indexOf(filmToDelete),1);
    console.log("Film deleted");
     // stringify the JSON array back  then add it to the local storage
     
     localStorage.setItem("allFilms",JSON.stringify(allFilms));
 }

 static removeAllFromLocal() {

    localStorage.removeItem("allFilms");
 }
 
 

}
