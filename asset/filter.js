var all = document.getElementById("BtnAll");
var film = document.getElementById("BtnFilm");
var nature = document.getElementById("BtnNature");
var animal = document.getElementById("BtnAnimals");
var travel = document.getElementById("BtnTravel");
var cssFilm = document.getElementsByClassName("film");
var cssNature = document.getElementsByClassName("nature");
var cssAnimal = document.getElementsByClassName("animals");
var cssTravel = document.getElementsByClassName("travel");

all.addEventListener("click", function() {
    all.classList.add("btn-prim","text-white");
    film.classList.remove("btn-prim","text-white");
    nature.classList.remove("btn-prim","text-white");
    animal.classList.remove("btn-prim","text-white");
    travel.classList.remove("btn-prim","text-white");

    for (var i = 0; i < cssFilm.length; i++) {
        cssFilm[i].style.display = 'block';
    };
    
    for (var i = 0; i < cssNature.length; i++) {
        cssNature[i].style.display = 'block';
    };
    
    for (var i = 0; i < cssAnimal.length; i++) {
        cssAnimal[i].style.display = 'block';
    };
    
    for (var i = 0; i < cssTravel.length; i++) {
        cssTravel[i].style.display = 'block';
    }
});

film.addEventListener("click", function() {
    all.classList.remove("btn-prim","text-white");
    film.classList.add("btn-prim","text-white");
    nature.classList.remove("btn-prim","text-white");
    animal.classList.remove("btn-prim","text-white");
    travel.classList.remove("btn-prim","text-white");

    for (var i = 0; i < cssFilm.length; i++) {
        cssFilm[i].style.display = 'block';
    };
    
    for (var i = 0; i < cssNature.length; i++) {
        cssNature[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssAnimal.length; i++) {
        cssAnimal[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssTravel.length; i++) {
        cssTravel[i].style.display = 'none';
    }
});

nature.addEventListener("click", function() {
    all.classList.remove("btn-prim","text-white");
    film.classList.remove("btn-prim","text-white");
    nature.classList.add("btn-prim","text-white");
    animal.classList.remove("btn-prim","text-white");
    travel.classList.remove("btn-prim","text-white");

    for (var i = 0; i < cssFilm.length; i++) {
        cssFilm[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssNature.length; i++) {
        cssNature[i].style.display = 'block';
    };
    
    for (var i = 0; i < cssAnimal.length; i++) {
        cssAnimal[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssTravel.length; i++) {
        cssTravel[i].style.display = 'none';
    }
});

animal.addEventListener("click", function() {
    all.classList.remove("btn-prim","text-white");
    film.classList.remove("btn-prim","text-white");
    nature.classList.remove("btn-prim","text-white");
    animal.classList.add("btn-prim","text-white");
    travel.classList.remove("btn-prim","text-white");

    for (var i = 0; i < cssFilm.length; i++) {
        cssFilm[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssNature.length; i++) {
        cssNature[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssAnimal.length; i++) {
        cssAnimal[i].style.display = 'block';
    };
    
    for (var i = 0; i < cssTravel.length; i++) {
        cssTravel[i].style.display = 'none';
    }
});

travel.addEventListener("click", function() {
    all.classList.remove("btn-prim","text-white");
    film.classList.remove("btn-prim","text-white");
    nature.classList.remove("btn-prim","text-white");
    animal.classList.remove("btn-prim","text-white");
    travel.classList.add("btn-prim","text-white");

    for (var i = 0; i < cssFilm.length; i++) {
        cssFilm[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssNature.length; i++) {
        cssNature[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssAnimal.length; i++) {
        cssAnimal[i].style.display = 'none';
    };
    
    for (var i = 0; i < cssTravel.length; i++) {
        cssTravel[i].style.display = 'block';
    }
});
