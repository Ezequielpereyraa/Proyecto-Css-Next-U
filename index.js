// Get a reference to the database service
var database = firebase.database();

database.ref("Lugares").on("value",function(datalist){
var datos = detalist.val()
var codigo= ""
for (var i in datos){
    codigo += "<div><p>"+datos[i].nombre+"</p></div>"
}
})
$(".datos").html(codigo)

