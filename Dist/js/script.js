console.log ("test")

//$("h1") - renkamės elementą
//$ ("#id") - renkamės ID
//$(".class") - renkamės klasę
//$(this) - 

$(document).ready(function(){
    //rašome jQuery kodą
});

$(function(){
    //jQuerry kodas
})

//Papildomi selektoriai;

//$("*") - universalus selektorius kaip ir css * paima visus elementus;

//$("h1.title") - paima visus h1 elementus, kurie turi klase title;

//$("h1:first") - paima pirm1 h1 elementa;

//$("ul li:first-child") - paima visu ul elementu pirma li;

//$("ul li:first") - paima pirmo ul elemento pirma li;

//$("["src"]") - paima visus elementus, kurie turi atributa src;

//$("tr:even") - paima lygines lenteles eilutes;

//$("tr:odd") - paima nelygines lenteles eilutes;

//EVENTS

//click() - peles klaviso paspaudimas;
//dblclick() - 2x peles paspaudimas;
//mouseenter() - kai zymeklis atsiduria virs elemento;
//mouseleave() - kai zymeklis pasitraukia nuo elemento;
//mousedown() - paspaudus bet kuri peles klavisa ir laikant;
//mouseup() - atleidus peles klavisa;
//hover() - mouseenter() ir mouseleave() kombinacija;
//focus() - kai paspaudziam ant formos input laukelio;
//blur() - atvirkstinis focus();

//on() - metodas leidzia prideti daug eventu;

//Metodai

//toggle() - on/off, pasikeiciantis;
//hide() - paslepia elementa;

$(document).ready(function(){
    $("#title").click(function(){
        //$("#text").toggle(4000);
        //$("#text").fadeIn();
        //$("#text").fadeOut(4000);
        //$("#text").fadeToggle(3000);
        //$("#text").slideToggle(500);
    });

    $("#button").click(function(){
        $(".box").animate({
            left:"200px",
            top:"300px",
            borderRadius:"10px",
            backgroundColor:"pink", //jQuerry neturi spalvu keitimo animacijose
        });
        // let box = $(".box");
        // box.animate({left:"200px"});
        // box.animate({top:"300px"}, 2000);
        // box.animate({borderRadius:"10px"});
    });
    
});

//Metodai jungiami tasku .

////////////////////HTML DOM/////////////////////////////

//text() - paimti ar ideti teksta;
//html() - paimti arba ideti elemento turini (kartu su HTML kodu)

$(document).ready(function(){
    $("#b1").click(function(){
        alert("tekstas yra "+$("#title").text())
    })
    $("#b2").click(function(){
        alert("HTML yra " + $("#text").html())
    })
})

// val() - paima arba ideda formos elementu value;

$(document).ready(function(){
    $("#b3").click(function(){
        let inputVal = $("#input1").val();
        alert(inputVal);
        $("#title").text(inputVal)
        let x = Math.random().toFixed(2);
        $("#input").val(x)
    })
})

// norint ideti reiksmes i metoda irasome reiksmes

//text("tekstas") - text(tekstas), jei taip, turi buti kintamasis

//append() - prideda turini i elemento pabaiga;
//preppend() - prides i elemento prieki;


//after() - prides turini po pasirinkto elemento;
//before() - prideda turini pries pasirinkta elementa;
function add(){
$(document).ready(function(){    
    $("#b1").append("!");
    $("#b2").before("<p>tekstas</p>");
})
}

$("#button").click(add)

//empty() - panaikina child elementus;

//remove() - panaikina elementa ir visus jo child elementus;

//$("h1").remove(".smallHeading");

///////////------CSS manipuliavimas------///////////////////

//css() - galima paimti arba ideti stiliausatributus
//addClass() - prideda viena ar daugiau klasiu prie pasirinkto elemento;
//removeClass() - panaikina viena ar daugiau klasiu prie elemento;
//toggleClass() - sudetinis add ir remove;

console.log($(".box").css("background-color"));

let color = $(".box").css("background-color");

$("#b1").css({"background-color": color, "width":"50px"});

$(document).ready(function(){
    $("#boxCssAdd").click(function(){
        $(".box").addClass("green static");
        $(".box1").addClass("green static");
    })
    $("#boxCssRemove").click(function(){
        $(".box").removeClass("green static");
        $(".box1").removeClass("green");
    })
    $("#boxCssToggle").hover(function(){
        $(".box").toggleClass("green static");
        $(".box1").toggleClass("green");
    })
})