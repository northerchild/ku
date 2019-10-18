let contenido = document.querySelector('#contenido')
let cursos = document.querySelector('#cursos')
let generar_reporte = document.getElementById("reporte")
let btnGenerar = document.getElementById('generar');

document.getElementById('user').addEventListener('click', traer)


function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                `

            cursos.innerHTML = `<div class="row">
            <div class="four columns">
            <div class="card">
                <img src="img/curso1.jpg" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>Técnico en software</h4>
                    <p>Nombre:  ${data.results['0'].name.first} ${data.results['0'].name.last}</p>
                </div>
                </div> <!--.card-->
            </div>
        </div> <!--.row-->
        
            `;

            btnGenerar.style.display = "block";

        })

}

document.getElementById('generar').addEventListener('click', reporte)

function reporte() {
    generar_reporte.innerHTML = `<section>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>

    <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</section>
<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav>`;
}