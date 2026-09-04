const copiar = document.getElementById("copiar")
const entrada = document.getElementById("entrada")

const traductor = {
    "paraTodo": "∀",
    "existe": "∃",
    "noExiste": "∄",
    "yL": "∧",
    "oL": "∨",
    "noL": "¬",
    "implica": "⇒",
    "siSoloSi": "⇔",
    "implicadoPor": "⇐",
    "probado": "□",

    "menorIgual": "≤",
    "mayorIgual": "≥",
    "distinto": "≠",
    "aproximadamente": "≈",

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
    "aleph0": "ℵ₀",

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
-Cambiar el texto procesado por uno tipo innerHTML
-Implementar superindices y subindices con <sup> y <sub>
-Hacer el procesado ignore las secuencias de escape (Hecho)
-Mejorar el diseño de la interfaz, opcional.`
copiar.addEventListener("click", function() {

    const texto = document.getElementById("entrada");

    navigator.clipboard.writeText(texto.value)

    copiar.classList.add("animacion1")

    setTimeout(() => {
        copiar.classList.remove("animacion1");
    }, 400)
})

entrada.addEventListener("keydown", (event) => {
    if (event.key == " ") {
        const entrada = document.getElementById("entrada");
        const texto = entrada.value;
        const palabras = texto.split(/(\s+)/);
        let procesado = "";

        for (const palabra of palabras) {
            if (traductor[palabra]) {
                procesado += traductor[palabra];
            } else {
                procesado += palabra;
            }
        }

        entrada.value = procesado.trim();
    }
});