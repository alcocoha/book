$(document).ready(function (params) {
    gallery.forEach(function (element, index) {
        galleryProjects(element.img, index);
        var item = {
            title : element.title,
            img : element.img,
            description: element.description,
            linkempresa: element.linkempresa,
            nombreempresa: element.nombreempresa,
            sitioweb: element.sitioweb,
            nombresitioweb: element.nombresitioweb
        }
        modalGallery(item, index);
    });
});

function galleryProjects(item, index) {
    var div = $("<div>").addClass("col-sm-4 portfolio-item");
    var a = $("<a>").addClass("portfolio-link").attr({
        'href': '#portfolioModal' + index,
        'data-toggle': 'modal'
    }).appendTo(div);
    var caption = $("<div>").addClass("caption").appendTo(a);
    var captionContent = $("<div>").addClass("caption-content").appendTo(caption);
    var fa = $("<i>").addClass("fa fa-search-plus fa-3x").appendTo(captionContent);
    var img = $("<img>").addClass("img-fluid").attr({ "src": "img/portfolio/" + item, "alt": item.split(".")[0] }).appendTo(a);
    $("#galleryProjects").append(div);
}

function modalGallery(item, index) {
    var div = $("<div>").addClass("portfolio-modal modal fade").attr({
        "id": "portfolioModal" + index,
        "tabindex": "-1",
        "role": "dialog",
        "aria-hidden": "true"
    });
    var modalDialog = $("<div>").addClass("modal-dialog").attr({ "role":"document"}).appendTo(div);
    var modalContent = $("<div>").addClass("modal-content").appendTo(modalDialog);
    var closeModal = $("<div>").addClass("close-modal").attr({ "data-dismiss": "modal" }).appendTo(modalContent);
    var lr = $("<div>").addClass("lr").appendTo(closeModal);
    var rl = $("<div>").addClass("rl").appendTo(lr);
    var container = $("<div>").addClass("container").appendTo(modalContent);
    var row = $("<div>").addClass("row").appendTo(container);
    var mxAuto = $("<div>").addClass("col-lg-8 mx-auto").appendTo(row);
    var modalBody = $("<div>").addClass("modal-body").appendTo(mxAuto);
    var h2 = $("<h2>").text(item.title).appendTo(modalBody);
    var hr = $("<hr>").addClass("star-primary").appendTo(modalBody);
    var img = $("<img>").addClass("img-fluid img-centered").attr({ "src": "img/portfolio/" + item.img, "alt": item.img.split(".")[0] }).appendTo(modalBody);
    var p = $("<p>").text(item.description).appendTo(modalBody);
    var ul = $("<ul>").addClass("list-inline item-details").appendTo(modalBody);
    var li1 = $("<li>").text("Empresa:").appendTo(ul);
    var strong1 = $("<strong>").appendTo(li1);
    var ali1 = $("<a>").attr({ "href": item.linkempresa}).text(item.nombreempresa).appendTo(strong1);
    var li2 = $("<li>").text("Sitio web:").appendTo(ul);
    var strong2 = $("<strong>").appendTo(li2);
    var ali2 = $("<a>").attr({ "href": item.sitioweb }).text(item.nombresitioweb).appendTo(strong2);
    var button = $("<button>").addClass("btn btn-success").attr({ "type": "button", "data-dismiss": "modal" }).text("Close").appendTo(modalBody);
    var ibutton = $("<i>").addClass("fa fa-times").appendTo(button);
    $("#modalcontainer").append(div);

}
