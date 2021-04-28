function showButton() {
    document.getElementById("delete").style.display = " block ";
    document.getElementById("edit").style.display = " block ";
    document.getElementById("delete1").style.display = " block ";
    document.getElementById("edit1").style.display = " block ";
    document.getElementById("delete2").style.display = " block ";
    document.getElementById("edit2").style.display = " block ";
    document.getElementById("delete3").style.display = " block ";
    document.getElementById("edit3").style.display = " block ";
    document.getElementById("delete4").style.display = " block ";
    document.getElementById("edit4").style.display = " block ";
    document.getElementById("delete5").style.display = " block ";
    document.getElementById("edit5").style.display = " block ";
    document.getElementById("addCard").style.display = " block ";
    document.getElementById("addProduct").style.display = " block ";
}

function deleteProduct() {
    var element = document.getElementById("product");
    element.remove("card");
}