$(document).ready(function(){
    $("#Food").click(function(){
        changeColors("food");
    });
	$("#Medicine").click(function(){
        changeColors("medicine");
    });
    $("#Music").click(function(){
        changeColors("music");
    });
    $("#Toys").click(function(){
        changeColors("toys");
    });
});

function Toys(turnOn){
    var  x = document.getElementsByClassName("toysId");
    var classToRemove;
    var classToAdd;
    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'toys';
    }else{
        classToRemove = 'toys';
        classToAdd = 'fillIn';
    }

    for(var index = 0; index < x.length-1; index++){
        classes(x[index], classToAdd, classToRemove);
    }   

}

function Music(turnOn){
    var  x = document.getElementsByClassName("musicId");
    var classToRemove;
    var classToAdd;
    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'music';
    }else{
        classToRemove = 'music';
        classToAdd = 'fillIn';
    }

    for(var index = 0; index < x.length-1; index++){
        classes(x[index], classToAdd, classToRemove);
    }   

}

function Food(turnOn){
    var  x = document.getElementsByClassName("foodId");
    var classToRemove;
    var classToAdd;

    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'food';
    }else{
        classToRemove = 'food';
        classToAdd = 'fillIn';
    }
    
    for(var index = 0; index < x.length-1; index++){
        classes(x[index], classToAdd, classToRemove);
    }   
}

function Medicine(turnOn){
    var  x = document.getElementsByClassName("medicineId");
    var classToRemove;
    var classToAdd;
    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'medicine';
    }else{
        classToRemove = 'medicine';
        classToAdd = 'fillIn';
    }

    for(var index = 0; index < x.length-1; index++){
        classes(x[index], classToAdd, classToRemove);
    }   
}

function classes (element, ClasstoAdd, classToRemove){
    element.classList.add(ClasstoAdd)
    element.classList.remove(classToRemove)
}

function reset(){
   Food(false);
   Medicine(false);
   Toys(false);
   Music(false);
}

function changeColors(items){

    if(items == 'food'){
        Food(true);
        Toys(false);
        Medicine(false);
        Music(false);
    }else if(items == 'medicine'){
        Medicine(true);
        Toys(false);
        Food(false);
        Music(false);
    }else if(items == 'music'){
        Music(true);
        Toys(false);
        Medicine(false);
        Food(false);
    }else if(items == 'toys'){
        Toys(true);
        Music(false);
        Medicine(false);
        Food(false);
    }
}

function generateMusicPopUp() {
    var popup = document.getElementById("PopupMusic");
    popup.classList.toggle("show");
  }

  function generateFoodPopUp() {
    var popup = document.getElementById("PopupFood");
    popup.classList.toggle("show");
  }

  function generateMedicinePopUp() {
    var popup = document.getElementById("PopupMedicine");
    popup.classList.toggle("show");
  }

  function generateToysPopUp() {
    var popup = document.getElementById("PopupToys");
    popup.classList.toggle("show");
  }


    

