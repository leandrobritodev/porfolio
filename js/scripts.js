//Recebe a data atual e transforma na data exibida no rodapé
var agora = new Date()
const mes_escrito = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
"Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let mes = mes_escrito[agora.getMonth()]
var ano = agora.getFullYear()

// CDN JS Bootstrap 5
var bootstrapScript = document.createElement('script')
bootstrapScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
document.head.appendChild(bootstrapScript)
