function searchFunc() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var column = document.getElementsByClassName("column");

    for (var i = 0; i < column.length; i++) {
        var imageItem = column[i].getElementsByClassName('image-item');
        for (var n = 0; n < imageItem.length; n++) {
            var tag = imageItem[n].getElementsByTagName("small")[0];
            var txtValue = tag.textContent || tag.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                imageItem[n].style.display = "";
            } else {
                imageItem[n].style.display = "none";
            }
        }
    }
}