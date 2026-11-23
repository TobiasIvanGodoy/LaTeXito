const documentacion = document.getElementById("documentacion")
const copiar = document.getElementById("copiar")
const entrada = document.getElementById("entrada")
const salida = document.getElementById("salida")
const procesar = document.getElementById("procesar")

let borrador = localStorage.getItem("latexito_borrador");

if (borrador !== null) {
    entrada.value = borrador;
    salida.value = borrador;
}
let diccionarios = [
    {
        "paraTodo": "∀",
        "existe": "∃",
        "noExiste": "∄",
        "yL": "∧",
        "oL": "∨",
        "noL": "¬",
        "implica": "⇒",
        "noImplica": "⇏",
        "siSoloSi": "⇔",
        "implicadoPor": "⇐",
        "noImplicadoPor": "⇍",
        "probado": "□"
    },

    {
        "menorIgual": "≤",
        "mayorIgual": "≥",
        "distinto": "≠",
        "aproximadamente": "≈",
        "congruente": "≡",
        "coordinable": "∼",
        "proporcional": "∝",
        "ortogonal": "⊥"
    },
    {
        "talQue": "/",
        "pertenece": "∈",
        "noPertenece": "∉",
        "subconjunto": "⊆",
        "subconjuntoEstricto": "⊂",
        "noSubconjunto": "⊈",
        "noSubconjuntoEstricto": "⊄",
        "union": "∪",
        "interseccion": "∩",
        "vacio": "∅",
        "complemento": "ᶜ"
    },

    {
        "tiende": "→",
        "noTiende": "↛",
        "asigna": "←",
        "correspondencia": "↦"
    },

    {
        "integral": "∫",
        "sumatoria": "∑",
        "productoria": "∏",
        "raiz": "√",
        "sumaDirecta": "⊕"
    },

    {
        "naturales": "ℕ",
        "enteros": "ℤ",
        "racionales": "ℚ",
        "reales": "ℝ",
        "complejos": "ℂ",
        "irracionales": "𝕀",
        "infinito": "∞",
        "aleph0": "ℵ₀",
        "cardContinuo": "𝔠"
    },

    {
        "/alpha": "α",
        "/beta": "β",
        "/gamma": "γ",
        "/delta": "δ",
        "/epsilon": "ε",
        "/zeta": "ζ",
        "/eta": "η",
        "/theta": "θ",
        "/iota": "ι",
        "/kappa": "κ",
        "/lambda": "λ",
        "/mu": "μ",
        "/nu": "ν",
        "/xi": "ξ",
        "/omicron": "ο",
        "/pi": "π",
        "/rho": "ρ",
        "/sigma": "σ",
        "/tau": "τ",
        "/upsilon": "υ",
        "/phi": "φ",
        "/chi": "χ",
        "/psi": "ψ",
        "/omega": "ω",
    },
    {
        "/Alpha": "Α",
        "/Beta": "Β",
        "/Gamma": "Γ",
        "/Delta": "Δ",
        "/Epsilon": "Ε",
        "/Zeta": "Ζ",
        "/Eta": "Η",
        "/Theta": "Θ",
        "/Iota": "Ι",
        "/Kappa": "Κ",
        "/Lambda": "Λ",
        "/Mu": "Μ",
        "/Nu": "Ν",
        "/Xi": "Ξ",
        "/Omicron": "Ο",
        "/Pi": "Π",
        "/Rho": "Ρ",
        "/Sigma": "Σ",
        "/Tau": "Τ",
        "/Upsilon": "Υ",
        "/Phi": "Φ",
        "/Chi": "Χ",
        "/Psi": "Ψ",
        "/Omega": "Ω",
    },
    {
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

    },    
    {
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
    }]

const version_actual = 3;

const versionGuardada = localStorage.getItem("versionDiccionarios");

if (versionGuardada !== String(version_actual)) {

    Object.keys(localStorage).forEach(clave => {

        if (/^diccionario\d+$/.test(clave)) {
            localStorage.removeItem(clave);
        }

    });

    localStorage.removeItem("nombresDiccionarios");

    localStorage.setItem(
        "versionDiccionarios",
        String(version_actual)
    );

}

const nombresPredeterminados = [
    "Lógica",
    "Relaciones y comparadores",
    "Teoría de conjuntos",
    "Flechas y correspondencias",
    "Operadores matemáticos",
    "Conjuntos numéricos y cardinalidad",
    "Letras griegas minúsculas",
    "Letras griegas mayúsculas",
    "Superíndices",
    "Subíndices"
];

const nombresGuardados = localStorage.getItem("nombresDiccionarios");

let nombresDiccionarios = nombresGuardados
    ? JSON.parse(nombresGuardados)
    : [...nombresPredeterminados];

const diccionariosPredeterminados = diccionarios;

diccionarios = nombresDiccionarios.map((nombre, i) => {

    const diccionarioLocal = localStorage.getItem(`diccionario${i}`);

    if (diccionarioLocal !== null) {
        return JSON.parse(diccionarioLocal);
    }

    const inicial = diccionariosPredeterminados[i] ?? {};

    return JSON.parse(JSON.stringify(inicial));

});

function guardarDiccionarios() {

    localStorage.setItem(
        "nombresDiccionarios",
        JSON.stringify(nombresDiccionarios)
    );

    diccionarios.forEach((diccionario, i) => {

        localStorage.setItem(
            `diccionario${i}`,
            JSON.stringify(diccionario)
        );

    });

    Object.keys(localStorage).forEach(clave => {

        const coincidencia = clave.match(/^diccionario(\d+)$/);

        if (coincidencia && Number(coincidencia[1]) >= diccionarios.length) {
            localStorage.removeItem(clave);
        }

    });

}

function crear_boton_tabla(ruta, alt, accion) {

    const boton = document.createElement("button");
    boton.classList.add("botonesTabla");

    const imagen = document.createElement("img");
    imagen.src = ruta;
    imagen.alt = alt;

    boton.appendChild(imagen);

    boton.addEventListener("click", accion);

    return boton;

}

function restaurarCampoDiccionario(formulario) {

    if (formulario.querySelector(".campoDiccionario")) return;

    const diccionario = document.createElement("input");

    diccionario.type = "text";
    diccionario.placeholder = "Diccionario";
    diccionario.classList.add("campoDiccionario");

    const confirmar = formulario.querySelector("button");

    formulario.insertBefore(diccionario, confirmar);

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

    const overlay = document.getElementById("overlay");
    overlay.classList.remove("oculto");

    obtener();

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

    const tablas = document.getElementById("tablas");

    tablas.innerHTML = "";

    nombresDiccionarios.forEach((nombre, indice) => {

        const categoria = document.createElement("div");
        categoria.classList.add("categoriaDiccionario");

        const titulo = document.createElement("h3");
        titulo.textContent = nombre;

        const tabla = document.createElement("table");
        tabla.classList.add("referencias");

        const thead = document.createElement("thead");
        const encabezado = document.createElement("tr");

        ["Palabra", "Símbolo", "Eliminar", "Modificar"].forEach(texto => {

            const th = document.createElement("th");
            th.textContent = texto;

            encabezado.appendChild(th);

        });

        thead.appendChild(encabezado);

        const tbody = document.createElement("tbody");

        for (const [palabra, simbolo] of Object.entries(diccionarios[indice])
            .sort(([a], [b]) => a.localeCompare(b))) {

            const fila = document.createElement("tr");

            const celdaPalabra = document.createElement("td");
            celdaPalabra.textContent = palabra;

            const celdaSimbolo = document.createElement("td");
            celdaSimbolo.textContent = simbolo;

            const celdaEliminar = document.createElement("td");

            const eliminarBtn = crear_boton_tabla(
                "btnEliminar.png",
                "Eliminar",
                () => eliminar(indice, palabra)
            );

            celdaEliminar.appendChild(eliminarBtn);

            const celdaModificar = document.createElement("td");

            const modificarBtn = crear_boton_tabla(
                "btnEditar.png",
                "Modificar",
                () => modificar(indice, palabra, simbolo)
            );

            celdaModificar.appendChild(modificarBtn);

            fila.appendChild(celdaPalabra);
            fila.appendChild(celdaSimbolo);
            fila.appendChild(celdaEliminar);
            fila.appendChild(celdaModificar);

            tbody.appendChild(fila);

        }

        tabla.appendChild(thead);
        tabla.appendChild(tbody);

        const contenedorTabla = document.createElement("div");
        contenedorTabla.classList.add("contenedorTabla");

        contenedorTabla.appendChild(tabla);

        categoria.appendChild(titulo);
        categoria.appendChild(contenedorTabla);

        tablas.appendChild(categoria);

    });

    agregar();

}

function eliminar(indice, palabra) {

    const confirmar = confirm(`¿Estás seguro de que querés eliminar "${palabra}"?`);

    if (!confirmar) return;

    delete diccionarios[indice][palabra];

    if (Object.keys(diccionarios[indice]).length === 0) {

        diccionarios.splice(indice, 1);
        nombresDiccionarios.splice(indice, 1);

    }

    guardarDiccionarios();

    obtener();

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
    palabra.classList.add("campoPalabra");

    const simbolo = document.createElement("input");
    simbolo.type = "text";
    simbolo.placeholder = "Símbolo";
    simbolo.classList.add("campoSimbolo");

    const diccionario = document.createElement("input");
    diccionario.type = "text";
    diccionario.placeholder = "Diccionario";
    diccionario.classList.add("campoDiccionario");

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

            const nombreDiccionario = diccionario.value.trim();

            if (!nombreDiccionario) {
                alert("Indica a qué diccionario querés agregar la entrada");
                return;
            }

            let indice = nombresDiccionarios.findIndex(
                nombre => nombre.toLowerCase() === nombreDiccionario.toLowerCase()
            );

            if (indice === -1) {

                nombresDiccionarios.push(nombreDiccionario);
                diccionarios.push({});

                indice = diccionarios.length - 1;

            }

            if (Object.hasOwn(diccionarios[indice], clave)) {
                alert("Esa palabra ya existe en este diccionario");
                return;
            }

            diccionarios[indice][clave] = valor;

        }

        else if (modo === "modificar") {

            const indice = Number(formulario.dataset.indice);
            const original = formulario.dataset.original;

            if (
                clave !== original &&
                Object.hasOwn(diccionarios[indice], clave)
            ) {
                alert("Esa palabra ya existe en este diccionario");
                return;
            }

            delete diccionarios[indice][original];

            diccionarios[indice][clave] = valor;

        }

        guardarDiccionarios();

        obtener();

    });

    cancelar.addEventListener("click", () => {
        agregar();
    });

    formulario.appendChild(titulo);
    formulario.appendChild(palabra);
    formulario.appendChild(simbolo);
    formulario.appendChild(diccionario);
    formulario.appendChild(confirmar);
    formulario.appendChild(cancelar);

    hud.appendChild(formulario);

}

function modificar(indice, palabra, simbolo) {

    crear_campo_entrada();

    const formulario = document.getElementById("formAgregar");

    formulario.dataset.modo = "modificar";
    formulario.dataset.indice = indice;
    formulario.dataset.original = palabra;


    formulario.querySelector(".campoDiccionario").remove();

    formulario.querySelector("h3").textContent = "Modificar entrada";

    formulario.querySelector(".campoPalabra").value = palabra;
    formulario.querySelector(".campoSimbolo").value = simbolo;

    const botones = formulario.querySelectorAll("button");

    botones[0].textContent = "Guardar";
    botones[1].hidden = false;

}

function agregar() {

    crear_campo_entrada();

    const formulario = document.getElementById("formAgregar");

    restaurarCampoDiccionario(formulario);

    formulario.dataset.modo = "agregar";

    delete formulario.dataset.original;
    delete formulario.dataset.indice;

    formulario.querySelector("h3").textContent = "Agregar entrada";

    formulario.querySelector(".campoPalabra").value = "";
    formulario.querySelector(".campoSimbolo").value = "";
    formulario.querySelector(".campoDiccionario").value = "";

    const botones = formulario.querySelectorAll("button");

    botones[0].textContent = "Confirmar";
    botones[1].hidden = true;

}