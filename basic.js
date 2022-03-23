var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Lista de hobbies'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message: "Leer" },
            { message: "Natacion" },
            { message: "Ver series" },
            { message: "Tocar el ukelele" },
            { message: "Cantar" },
            { message: "Cocinar" },
            { message: "Escribir" },
        ]
    }
});

var app3 = new Vue({
    el:'#app-3',
    data: {
        pasatiempo: GetRandomRequest()
    }
});

function GetRandomImage(){
    let picturePath = ''
    let imageBank = ['https://lauraemprende.com/wp-content/uploads/2020/01/joel-muniz-XqXJJhK-c08-unsplash-1080x675.jpg','https://static2.abc.es/media/bienestar/2020/05/26/natacion-koQB--620x349@abc.jpg','https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/02/peliculas-online-gratis-2245511.jpg?itok=8ezMNcJY','https://musicopolix.com/blog/wp-content/uploads/2021/04/que-ukelele-comprar-tocando.jpg','https://okdiario.com/img/2019/02/14/afinar-voz-655x368.jpg']
    picturePath += imageBank[Math.floor(Math.random()* imageBank.length)]
    return picturePath
}

function GetRandomRequest(){
    let request = ''
    let requestBank = ['Escribe tu nombre','Escribe un hobbie','Escribe un color']
    request += requestBank[Math.floor(Math.random()* requestBank.length)]
    return request
}

var app4 = new Vue({
    el:'#app-4',
    data: {
        showImage: false,
        imag: GetRandomImage()
    },
});

var app5 = new Vue({
    el:'#app-5',
    data: {
        name: 'Ana Lizbeth Zermeno Torres',
        matricula: 'A00824913',
        titulo: '1er parcial'
    }
});