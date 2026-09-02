const procesar = document.getElementById("procesar")
const copiar = document.getElementById("copiar")

const traductor = {
    "paraTodo": "∀",
    "existe": "∃",
    "noExiste": "∄",
    "yL": "∧",
    "oL": "∨",
    "noL": "¬",
    "implica": "⇒",
    "siSoloSi": "⇔",

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
    "complejos": "ℂ"
};

copiar.addEventListener("click", function() {
    copiar.classList.remove("animacion1")

    const texto = document.getElementById("entrada");

    navigator.clipboard.writeText(texto.value)

    copiar.classList.add("animacion1")
})

procesar.addEventListener("click", function() {
    procesar.classList.remove("animacion1");

    const entrada = document.getElementById("entrada");
    const texto = entrada.value;
    const palabras = texto.split(" ");
    let procesado = "";

    for (const palabra of palabras) {
        if (traductor[palabra]) {
            procesado += traductor[palabra];
        } else {
            procesado += palabra;
        }
        procesado += " ";
    }

    entrada.value = procesado;

    procesar.classList.add("animacion1");
});