function carga(){
    let myTexto = "Texto de carga desde un botón en JavaScript...";
    let mensaje = document.getElementById("texto");
    mensaje.textContent = myTexto;
    return myTexto;
}
document.addEventListener("DOMContentLoaded", function() {
    guten();
});
async function guten(){
    const lista = document.getElementById('lista_libros');
    lista.innerHTML = ''
    const reponse = await fetch(`https://gutendex.com/books/?languages=la&page=${numero}`);
    const data = await reponse.json()
    const start = 1;
    const conta = document.getElementById("contador");
    const conta_total = document.getElementById("contador-total");
    let = contador_pagin = Math.ceil(data.count/32); // 27 paginas
    conta.textContent = "Total de pagínas : " + contador_pagin;
    conta_total.textContent = "Total de libros disponibles : " + data.count;
    const horizontal_list = document.getElementById("lista_horizontal");
    horizontal_list.innerHTML = '';
    for (let i = start; i <= contador_pagin; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        li.className = 'list-item';
        console.log(i);
        horizontal_list.appendChild(li);
        li.style.cursor = 'pointer'; 
        li.addEventListener('click', () => handleNumberClick(i)); 
    }

    let index = 1;
    data.results.forEach(book=>{
        const li = document.createElement('li');
        const div_titulo = document.createElement('div')
        const div_descargas = document.createElement('div')
        const div_anios = document.createElement('div')
        div_titulo.textContent = index + " Title : " + book.title;
        div_descargas.textContent = "Downloads : " + book.download_count;
        book.authors.forEach(itemsBook => {
            const name = book.authors.name
            const age = calcularEdad(itemsBook.birth_year,itemsBook.death_year)
            div_anios.textContent = `Age : `  + age
        });
        // div_anios.textContent = "Age : " + book.download_count;
        li.appendChild(div_titulo);
        li.appendChild(div_descargas);
        li.appendChild(div_anios);
        div_titulo.className = 'card-titulo';
        // div_titulo.
        div_descargas.className = 'card-descargas';
        div_anios.className = 'card-anios';
        lista.appendChild(li);
        li.className = "carta";
        index++;
    });


    // const titles = data.results.map(book => book.title);
    // const nameAutor = data.results.map(book=> book.authors.map(autor=> autor.name));
    // Convertir la lista de títulos en una cadena separada por saltos de línea
    // const titlesText = titles.join('\n');
    // Asignar los títulos al elemento con id "titulo"
    // document.getElementById('titulo').textContent = titlesText;
    // document.getElementById('nameAuthor').textContent = nameAutor;
    return "Data";
}
let numero = 1
function handleNumberClick(number) {
    // alert(`Número ${number} clickeado`);
    numero = number;
    guten();
}
function calcularEdad(nacimiento,muerte){
    return muerte - nacimiento
}

function contrasenia(){
    let minusculas = "abcdefghijklmnopqrstuvwxyz"
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numeros = "1234567890"
    let caracteres = "#$%&/*-+"
    let ancho = 16
    const myContrasenia = calcular(mayusculas,minusculas,numeros,caracteres,ancho)
    let contrase = document.getElementById("contrase")
    contrase.textContent = myContrasenia
    }
    

function calcular(str1,str2,str3,str4,ancho){
    var message = "";
    const tama = str1.length;
    for(let i = 1; i < 2+1; i++){
        let letras = str1[Math.floor(Math.random() * str1.length)];
        message = message + letras;
    }
    for(let i = 1; i < 3+1; i++){
        let letras = str3[Math.floor(Math.random() * str3.length)];
        message = message + letras;
    }
    for(let i = 1; i < 2+1; i++){
        let letras = str4[Math.floor(Math.random() * str4.length)];
        message = message + letras;
    }
    for(let i = 1; i < 3+1; i++){
        let letras = str2[Math.floor(Math.random() * str2.length)];
        message = message + letras;
    }
    let fullLetras = str1+str2+str3+str4
    for(let i = 1; i < 50+1; i++){
        let letras = fullLetras[Math.floor(Math.random() * fullLetras.length)];
        message = message + letras;
    }
    
    let retorno = message.substring(0,ancho);
    console.log(message);
    console.log(retorno);
    return retorno;
}