data = [{
    'img1': 'aset/eme.jpg',
    'img2': 'aset/eke.jpg',
    'title':'Mobile legend',
    'desc':'Untuk project ml mungkin gada ya tapi aku pernah masuk top 1 supreme Granger',
    'for': 'main.html'
}, {
    'img1': 'aset/project.jpg',
    'img2': 'aset/proyec.jpg',
    'title':'Lego tower',
    'subtitle':'lego tower',
    'desc':'Salah satu project yang pernah ku buat adalah membuat tower dari beberapa block lego yg di satukan',
    'for':'test.html'
}, {
    'img1': 'aset/pict.jpg',
    'img2': 'aset/pii.jpg',
    'title': 'Picsart',
    'desc': 'Untuk project picsart mungkin kaya foto disamping, bisa di liat sendiri'
}] //img 3

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project" data-aos="fade-left" data-aos-duration="3000">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <p>${element.desc}</p>
    </div>
    <a href="${element.for}"><button class="read-more">Read More</button></a>
</div>`
});