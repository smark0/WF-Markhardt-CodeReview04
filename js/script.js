/* jshint esversion: 8 */

$(document).ready(function () {
    favarr = [];
    $("main").append("<div class='card-columns' id='sortable'></div>");
    for (i = 0; i <= 7; i++) {
        if (loners[i].gender == "male") {
            $("div.card-columns").append(`<div class="card male"><img src="${loners[i].img}" class="card-img-top"><div class="card-img-overlay"><div class="heart" id="${i}"></div></div><div class="card-body"><p class="card-text">${loners[i].quote}</p></div></div>`);
        } else {
            $("div.card-columns").append(`<div class="card female"><img src="${loners[i].img}" class="card-img-top"><div class="card-img-overlay"><div class="heart" id="${i}"></div></div><div class="card-body"><p class="card-text">${loners[i].quote}</p></div></div>`);
        }
    }
    $(".heart").on("click", function () {
        var liked = false;
        if ($(this).hasClass("is-active")) {
            liked = true;
        } else {
            liked = false;
        }
        $(this).toggleClass("is-active");
        if (liked == true) {
            var user = loners[this.id].id;
            if(b == 0){
                b++;
            }
            delete favarr[b-1];
            let tempfavarr = favarr.filter(function (el) {
                return el != null;
            });
            favarr = tempfavarr;
            tempfavarr = 0;
            $("#cc2").remove();
            $("div.col-lg-12").append("<div class='card-columns' id='cc2'></div>");
            for (b = 0; b < favarr.length; b++) {
                if (favarr.length != 0) {
                    $("#cc2").remove();
                    $("div.col-lg-12").append("<div class='card-columns' id='cc2'></div>");
                    $("#cc2").append(`<div class="card fav${b}"><img src="${favarr[b].img}" class="card-img-top"><div class="card-img-overlay"><div class="heart" id="${b}"></div></div><div class="card-body favtext"><p class="card-text">Name: ${favarr[b].name}<br>Age: ${favarr[b].age}<br>Location: ${favarr[b].location}<br>Hobbies: ${favarr[b].hobbies}<br>Favorite music: ${favarr[b].music}<br><br><a href="#" class="btn btn-primary">Send a message!</a></p></div></div>`);
                }
            }
        } else if (liked == false) {
            $("div.col-lg-12").append("<div class='card-columns' id='cc2'></div>");
            favarr.push(loners[this.id]);
            for (b = 0; b < favarr.length; b++) {
                $("#cc2").append(`<div class="card fav${b}"><img src="${favarr[b].img}" class="card-img-top"><div class="card-img-overlay"><div class="heart" id="${b}"></div></div><div class="card-body favtext"><p class="card-text">Name: ${favarr[b].name}<br>Age: ${favarr[b].age}<br>Location: ${favarr[b].location}<br>Hobbies: ${favarr[b].hobbies}<br>Favorite music: ${favarr[b].music}<br><br><a href="#" class="btn btn-primary">Send a message!</a></p></div></div>`);
            }
        }
    });
    
    $("#dateFilter").change(function () {
        var selected = $("#dateFilter :selected").text();
        if (selected == "Men") {
            $(".male").css("display", "block");
            $(".female").css("display", "none");    
        } else if (selected == "Women") {
            $(".male").css("display", "none");
            $(".female").css("display", "block");
        } else {
            $(".male").css("display", "block");
            $(".female").css("display", "block");
        }   
    });
});
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});