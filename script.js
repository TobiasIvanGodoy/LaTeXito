const documentacion = document.getElementById("documentacion")
const copiar = document.getElementById("copiar")
const entrada = document.getElementById("entrada")
const salida = document.getElementById("salida")
const procesar = document.getElementById("procesar")

let borrador = localStorage.getItem("latexito_borrador");
let diccionarioLocal = localStorage.getItem("diccionario")

if (borrador !== null) {
    entrada.value = borrador;
    salida.value = borrador;
}

let traductor = {
    "paraTodo": "∀",
    "existe": "∃",
    "noExiste": "∄",
    "yL": "∧",
    "oL": "∨",
    "noL": "¬",
    "implica": "⇒",
    "noImplica" : "⇏",
    "siSoloSi": "⇔",
    "implicadoPor": "⇐",
    "noImplicadoPor" : "⇍", 
    "probado": "□",
    "talQue" : "/",
    "sumaDirecta" : "⊕",
    "raiz" : "√",

    "menorIgual": "≤",
    "mayorIgual": "≥",
    "distinto": "≠",
    "aproximadamente": "≈",
    "integral" : "∫",
    "delta" : "Δ",
    "sumatoria" : "∑",
    "productoria" : "∏",
    "congruente" : "≡",

    "pertenece": "∈",
    "noPertenece": "∉",
    "subconjunto": "⊆",
    "subconjuntoEstricto": "⊂",
    "noSubconjunto": "⊈",
    "noSubconjuntoEstricto": "⊄",
    "coordinable" : "∼",
    "union": "∪",
    "interseccion": "∩",
    "vacio": "∅",
    "complemento": "ᶜ",
    "infinito": "∞",
    "proporcional": "∝",
    "tiende": "→",
    "noTiende" : "↛",
    "asigna" : "←",
    "correspondencia" : "↦",
    "aleph0": "ℵ₀",
    "cardContinuo" : "𝔠",
    "ortogonal" : "⊥",

    "alpha": "α",
    "beta": "β",
    "gamma": "γ",
    "delta": "δ",
    "epsilon": "ε",
    "zeta": "ζ",
    "eta": "η",
    "theta": "θ",
    "iota": "ι",
    "kappa": "κ",
    "lambda": "λ",
    "mu": "μ",
    "nu": "ν",
    "xi": "ξ",
    "omicron": "ο",
    "pi": "π",
    "rho": "ρ",
    "sigma": "σ",
    "tau": "τ",
    "upsilon": "υ",
    "phi": "φ",
    "chi": "χ",
    "psi": "ψ",
    "omega": "ω",

    "Alpha": "Α",
    "Beta": "Β",
    "Gamma": "Γ",
    "Delta": "Δ",
    "Epsilon": "Ε",
    "Zeta": "Ζ",
    "Eta": "Η",
    "Theta": "Θ",
    "Iota": "Ι",
    "Kappa": "Κ",
    "Lambda": "Λ",
    "Mu": "Μ",
    "Nu": "Ν",
    "Xi": "Ξ",
    "Omicron": "Ο",
    "Pi": "Π",
    "Rho": "Ρ",
    "Sigma": "Σ",
    "Tau": "Τ",
    "Upsilon": "Υ",
    "Phi": "Φ",
    "Chi": "Χ",
    "Psi": "Ψ",
    "Omega": "Ω",

    "naturales": "ℕ",
    "enteros": "ℤ",
    "racionales": "ℚ",
    "reales": "ℝ",
    "complejos": "ℂ",
    "irracionales" : "𝕀",

    "^0" : "⁰",
    "^1" : "¹",
    "^2" : "²",
    "^3" : "³",
    "^4" : "⁴",
    "^5" : "⁵",
    "^6" : "⁶",
    "^7" : "⁷",
    "^8" : "⁸",
    "^9" : "⁹",
    "^+" : "⁺",
    "^-" : "⁻",
    "^=" : "⁼",
    "^(" : "⁽",
    "^)" : "⁾",
    "^!" : "ꜝ",
    

    "_0" : "₀",
    "_1" : "₁",
    "_2" : "₂",
    "_3" : "₃",
    "_4" : "₄",
    "_5" : "₅",
    "_6" : "₆",
    "_7" : "₇",
    "_8" : "₈",
    "_9" : "₉",
    "_+" : "₊",
    "_-" : "₋",
    "_=" : "₌",
    "_(" : "₍",
    "_)" : "₎",
        
    "^h" : "ʰ",
    "^i" : "ⁱ",
    "^j" : "ʲ",
    "^k" : "ᵏ",
    "^l" : "ˡ",
    "^m" : "ᵐ",
    "^n" : "ⁿ",
    "^o" : "ᵒ",
    "^p" : "ᵖ",
    "^r" : "ʳ",
    "^s" : "ˢ",
    "^t" : "ᵗ",
    "^u" : "ᵘ",
    "^v" : "ᵛ",
    "^a" : "ᵃ",
    "^x" : "ˣ",
    "^d" : "ᵈ",

    "_h" : "ₕ",
    "_i" : "ᵢ",
    "_j" : "ⱼ",
    "_k" : "ₖ",
    "_l" : "ₗ",
    "_m" : "ₘ",
    "_n" : "ₙ",
    "_o" : "ₒ",
    "_p" : "ₚ",
    "_r" : "ᵣ",
    "_s" : "ₛ",
    "_t" : "ₜ",
    "_u" : "ᵤ",
    "_v" : "ᵥ",
    "_x" : "ₓ",
    "_y" : "ᵧ"
};

if (diccionarioLocal === null) {
    localStorage.setItem("diccionario", JSON.stringify(traductor))
} else {
    traductor = JSON.parse(diccionarioLocal)
}


function tokenizar(texto) {
    const tokens = Object.keys(traductor)
        .sort((a, b) => b.length - a.length);

    let resultado = "";
    let i = 0;

    while (i < texto.length) {
        let encontrado = false;

        for (const token of tokens) {
            if (texto.startsWith(token, i)) {
                resultado += traductor[token];
                i += token.length;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            resultado += texto[i];
            i++;
        }
    }

    return resultado;
}

function procesarTexto(btnProcesado) {
    const texto = entrada.value;

    const procesado = tokenizar(texto);

    salida.value = procesado.trim();

    if (btnProcesado) {
        entrada.value = procesado.trim();
    }

    localStorage.setItem("latexito_borrador", entrada.value);
}

entrada.addEventListener("keydown", (event) => {
    if (event.key == " " || event.key == "Enter") {
       procesarTexto(false)
    }
});

procesar.addEventListener("click", function() {
    
    procesarTexto(true)

    procesar.classList.add("animacion1")

    setTimeout(() => {
        procesar.classList.remove("animacion1");
    }, 400)
});

copiar.addEventListener("click", function() {

    const texto = document.getElementById("salida");

    navigator.clipboard.writeText(texto.value).then(() => {

        const mensaje = document.createElement("div");
        mensaje.id = "mensajeCopiado";
        mensaje.textContent = "¡Copiado!";

        document.getElementById("contenedorSalida").appendChild(mensaje);

        mensaje.addEventListener("animationend", () => {
            mensaje.remove();
        });

    });

});

documentacion.addEventListener("click", function() {
    
    const overlay = document.getElementById("overlay")
    overlay.classList.remove("oculto")

    obtener()

});

function obtener() {

    const hud = document.getElementById("hud");

    if (!document.getElementById("cerrar")) {
        const cerrar = document.createElement("button");
        cerrar.id = "cerrar";

        const imagen = document.createElement("img");
        imagen.src = "btnCerrar.png";
        imagen.alt = "Cerrar";

        cerrar.appendChild(imagen);

        cerrar.addEventListener("click", () => {
            document.getElementById("overlay").classList.add("oculto");
        });

        hud.prepend(cerrar);
    }

    const tabla = document.getElementById("referencias");

    tabla.innerHTML = `
        <tr>
            <th>Palabra</th>
            <th>Símbolo</th>
            <th>Eliminar</th>
            <th>Modificar</th>
        </tr>
    `;

    for (const [palabra, simbolo] of Object.entries(traductor).sort(([a], [b]) => a.localeCompare(b))) {

        const fila = document.createElement("tr");

        const celdaPalabra = document.createElement("td");
        celdaPalabra.textContent = palabra;

        const celdaSimbolo = document.createElement("td");
        celdaSimbolo.textContent = simbolo;

        const celdaEliminar = document.createElement("td");

        const eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("botonesTabla");

        const imagenEliminar = document.createElement("img");
        imagenEliminar.src = "btnEliminar.png";
        imagenEliminar.alt = "Eliminar";

        eliminarBtn.appendChild(imagenEliminar);

        eliminarBtn.addEventListener("click", () => {
            eliminar(palabra);
        });

        celdaEliminar.appendChild(eliminarBtn);

        const celdaModificar = document.createElement("td");

        const modificarBtn = document.createElement("button");
        modificarBtn.classList.add("botonesTabla");

        const imagenModificar = document.createElement("img");
        imagenModificar.src = "btnEditar.png";
        imagenModificar.alt = "Modificar";

        modificarBtn.appendChild(imagenModificar);

        modificarBtn.addEventListener("click", () => {
            modificar(palabra, simbolo);
        });

        celdaModificar.appendChild(modificarBtn);

        fila.appendChild(celdaPalabra);
        fila.appendChild(celdaSimbolo);
        fila.appendChild(celdaEliminar);
        fila.appendChild(celdaModificar);

        tabla.appendChild(fila);
    }

    agregar();
}

function eliminar(palabra) {

    const confirmar = confirm(`¿Estás seguro de que querés eliminar "${palabra}"?`);

    if (confirmar) {
        delete traductor[palabra];

        localStorage.setItem(
            "diccionario",
            JSON.stringify(traductor)
        );

        obtener();
    }
}
function crear_campo_entrada() {

    if (document.getElementById("formAgregar")) return;

    const hud = document.getElementById("hud");

    const formulario = document.createElement("div");
    formulario.id = "formAgregar";

    const titulo = document.createElement("h3");

    const palabra = document.createElement("input");
    palabra.type = "text";
    palabra.placeholder = "Palabra";

    const simbolo = document.createElement("input");
    simbolo.type = "text";
    simbolo.placeholder = "Símbolo";

    const confirmar = document.createElement("button");

    const cancelar = document.createElement("button");
    cancelar.textContent = "Cancelar";
    cancelar.hidden = true;

    confirmar.addEventListener("click", () => {

        const clave = palabra.value.trim();
        const valor = simbolo.value.trim();

        if (!clave || !valor) {
            alert("Completa ambos campos");
            return;
        }

        const modo = formulario.dataset.modo;

        if (modo === "agregar") {

            if (Object.hasOwn(traductor, clave)) {
                alert("Esa palabra ya existe");
                return;
            }

            traductor[clave] = valor;
        }

        else if (modo === "modificar") {

            const original = formulario.dataset.original;

            if (clave !== original && Object.hasOwn(traductor, clave)) {
                alert("Esa palabra ya existe");
                return;
            }

            delete traductor[original];
            traductor[clave] = valor;
        }

        localStorage.setItem(
            "diccionario",
            JSON.stringify(traductor)
        );

        obtener();
    });

    cancelar.addEventListener("click", () => {
        agregar();
    });

    formulario.appendChild(titulo);
    formulario.appendChild(palabra);
    formulario.appendChild(simbolo);
    formulario.appendChild(confirmar);
    formulario.appendChild(cancelar);

    hud.appendChild(formulario);
}

function modificar(palabra, simbolo) {

    crear_campo_entrada();

    const formulario = document.getElementById("formAgregar");
    const campos = formulario.querySelectorAll("input");
    const botones = formulario.querySelectorAll("button");

    formulario.dataset.modo = "modificar";
    formulario.dataset.original = palabra;

    formulario.querySelector("h3").textContent = "Modificar entrada";

    campos[0].value = palabra;
    campos[1].value = simbolo;

    botones[0].textContent = "Guardar";
    botones[1].hidden = false;
}


function agregar() {

    crear_campo_entrada();

    const formulario = document.getElementById("formAgregar");
    const campos = formulario.querySelectorAll("input");
    const botones = formulario.querySelectorAll("button");

    formulario.dataset.modo = "agregar";

    formulario.querySelector("h3").textContent = "Agregar entrada";

    campos[0].value = "";
    campos[1].value = "";

    botones[0].textContent = "Confirmar";
    botones[1].hidden = true;
}