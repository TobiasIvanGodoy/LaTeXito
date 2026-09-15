const copiar = document.getElementById("copiar")
const entrada = document.getElementById("entrada")
const salida = document.getElementById("salida")
const procesar = document.getElementById("procesar")
const borrador = localStorage.getItem("latexito_borrador");

if (borrador !== null) {
    entrada.value = borrador;
    salida.value = borrador;
}

const traductor = {
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
    "union": "∪",
    "interseccion": "∩",
    "vacio": "∅",
    "complemento": "ᶜ",
    "infinito": "∞",
    "proporcional": "∝",
    "tiende": "→",
    "noTiende" : "↛",
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
    "^(" : "⁾",
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
    "^a" : "ᵃ",

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
};


`Tareas restantes:
-Cambiar el texto procesado por uno tipo innerHTML (no hizo falta)
-Implementar superindices y subindices con <sup> y <sub> (Hecho a fuerza bruta)
-Hacer el procesado ignore las secuencias de escape (Hecho)
-Mejorar el diseño de la interfaz, opcional.(Hecho)
-Agregar una funcion para el procedimiento de aplastar caracteres.`

copiar.addEventListener("click", function() {

    const texto = document.getElementById("salida");

    navigator.clipboard.writeText(texto.value)

    copiar.classList.add("animacion1")

    setTimeout(() => {
        copiar.classList.remove("animacion1");
    }, 400)
})

function procesarTexto(btnProcesado) {
     const entrada = document.getElementById("entrada");
        const texto = entrada.value;
        const palabras = texto.split(/(\s+)/);

        let procesado = "";
        let esperandoCierre = false;

        for (let i = 0; i < palabras.length; i++) {

            if (palabras[i] === "aplastar{") {
                esperandoCierre = true;
                continue;
            }

            if (palabras[i] === "}") {
                esperandoCierre = false;
                continue;
            }

            if (esperandoCierre) {

                if (palabras[i] === " ") {
                    continue;
                }

                if (traductor[palabras[i]]) {
                    procesado += traductor[palabras[i]];
                } else {
                    procesado += palabras[i];
                }

            } else {

                if (traductor[palabras[i]]) {
                    procesado += traductor[palabras[i]];
                } else {
                    procesado += palabras[i];
                }
            }
        }

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

