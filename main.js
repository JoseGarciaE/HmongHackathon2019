function Toys(turnOn){
    var  x = document.getElementsByClassName("toysId");
    var classToRemove;
    var classToAdd;
    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'toys';
    }else{
        classToRemove = 'food';
        classToAdd = 'toys';
    }

    for(var element in x){
        classes(element, classToAdd, classToRemove);
    }
    
    Toys(false);
    Medicine(false);
    Food(false);
}

function Music(turnOn){
    var  x = document.getElementsByClassName("musicId");
    var classToRemove;
    var classToAdd;
    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'music';
    }else{
        classToRemove = 'food';
        classToAdd = 'music';
    }

    for(var element in x){
        classes(element, classToAdd, classToRemove);
    }

    Toys(false);
    Medicine(false);
    Food(false);
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

    for(var element in x){
        classes(element, classToAdd, classToRemove);
    }

    Toys(false);
    Medicine(false);
    Music(false);
}

function Medicine(turnOn){
    var  x = document.getElementsByClassName("medinceId");
    var classToRemove;
    var classToAdd;
    if(turnOn){
        classToRemove = 'fillIn';
        classToAdd = 'medicine';
    }else{
        classToRemove = 'medicine';
        classToAdd = 'fillIn';
    }
    for(var element in x){
        classes(element, classToAdd, classToRemove);
    }
        
    Toys(false);
    Food(false);
    Music(false);
}

function classes (element, ClasstoAdd, classToRemove){
    element.classList.add("ClasstoAdd")
    element.classList.remove("classToRemove")
}

function reset(){
    var x = document.getElementsByClassName("col-lg-1");
}

function changeColors(items){

    if(items == 'food'){
        Food(true);
    }else if(items == 'medince'){
        Medicine(true);
    }else if(items == 'music'){
        Music(true);
    }else if(items == 'toys'){
        Toys(true);
    }

}

    

