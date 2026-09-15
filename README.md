# Diccionario

LaTeXito utiliza un diccionario de traducción para convertir palabras clave en símbolos matemáticos. Las palabras clave deben escribirse utilizando **camelCase** cuando corresponda.

## Sintaxis de los símbolos

LaTeXito procesa la entrada **palabra por palabra**. Por este motivo, los elementos que se quieran traducir deben estar separados por espacios.

Esto es especialmente importante para los superíndices y subíndices, que utilizan `^` y `_` como sintaxis de entrada:

* `N _0` → `N ₀`

* `x ^n` → `x ⁿ`

* `a _i` → `a ᵢ`

En cambio, si el símbolo se encuentra unido a la palabra anterior, se interpreta como una única palabra y **no se realiza la traducción**:

* `N_0` → `N_0`

* `x^n` → `x^n`

* `a_i` → `a_i`

Por lo tanto, **todos los símbolos o palabras clave que se quieran traducir deben estar separados por espacios**.

## Aplastar caracteres

LaTeXito permite utilizar `aplastar{ ... }` para **eliminar los espacios entre los elementos contenidos dentro de las llaves**.

La sintaxis es:

`aplastar{ elemento1 elemento2 elemento3 }`

Por ejemplo:

`aplastar{ paraTodo existe }`

produce:

`∀∃`

Mientras que, sin `aplastar`:

`paraTodo existe`

produce:

`∀ ∃`

Esto permite utilizar la sintaxis habitual de LaTeXito, basada en palabras separadas por espacios, y posteriormente **aplastar el resultado cuando se necesita que los símbolos queden unidos**.

También se siguen aplicando las traducciones del diccionario dentro de `aplastar`:

`aplastar{ x ^2 + y ^2 }`

produce:

`x²+y²`

Los espacios que se encuentran dentro de `aplastar{ ... }` son ignorados, mientras que los espacios que se encuentran fuera se conservan.

## Lógica

| Palabra | Símbolo |
| -------------- | ------- |
| `paraTodo` | ∀ |
| `existe` | ∃ |
| `noExiste` | ∄ |
| `yL` | ∧ |
| `oL` | ∨ |
| `noL` | ¬ |
| `implica` | ⇒ |
| `noImplica` | ⇏ |
| `siSoloSi` | ⇔ |
| `implicadoPor` | ⇐ |
| `noImplicadoPor` | ⇍ |
| `probado` | □ |
| `talQue` | / |

## Comparadores y operadores matemáticos

| Palabra | Símbolo |
| ----------------- | ------- |
| `menorIgual` | ≤ |
| `mayorIgual` | ≥ |
| `distinto` | ≠ |
| `aproximadamente` | ≈ |
| `integral` | ∫ |
| `sumatoria` | ∑ |
| `productoria` | ∏ |
| `congruente` | ≡ |
| `sumaDirecta` | ⊕ |

## Conjuntos y relaciones

| Palabra | Símbolo |
| ----------------------- | ------- |
| `pertenece` | ∈ |
| `noPertenece` | ∉ |
| `subconjunto` | ⊆ |
| `subconjuntoEstricto` | ⊂ |
| `noSubconjunto` | ⊈ |
| `noSubconjuntoEstricto` | ⊄ |
| `union` | ∪ |
| `interseccion` | ∩ |
| `vacio` | ∅ |
| `complemento` | ᶜ |

## Otros símbolos

| Palabra | Símbolo |
| -------------- | ------- |
| `infinito` | ∞ |
| `proporcional` | ∝ |
| `tiende` | → |
| `noTiende` | ↛ |
| `aleph0` | ℵ₀ |
| `cardContinuo` | 𝔠 |
| `ortogonal` | ⊥ |

## Letras griegas minúsculas

| Palabra | Símbolo |
| --------- | ------- |
| `alpha` | α |
| `beta` | β |
| `gamma` | γ |
| `delta` | δ |
| `epsilon` | ε |
| `zeta` | ζ |
| `eta` | η |
| `theta` | θ |
| `iota` | ι |
| `kappa` | κ |
| `lambda` | λ |
| `mu` | μ |
| `nu` | ν |
| `xi` | ξ |
| `omicron` | ο |
| `pi` | π |
| `rho` | ρ |
| `sigma` | σ |
| `tau` | τ |
| `upsilon` | υ |
| `phi` | φ |
| `chi` | χ |
| `psi` | ψ |
| `omega` | ω |

## Letras griegas mayúsculas

| Palabra | Símbolo |
| --------- | ------- |
| `Alpha` | Α |
| `Beta` | Β |
| `Gamma` | Γ |
| `Delta` | Δ |
| `Epsilon` | Ε |
| `Zeta` | Ζ |
| `Eta` | Η |
| `Theta` | Θ |
| `Iota` | Ι |
| `Kappa` | Κ |
| `Lambda` | Λ |
| `Mu` | Μ |
| `Nu` | Ν |
| `Xi` | Ξ |
| `Omicron` | Ο |
| `Pi` | Π |
| `Rho` | Ρ |
| `Sigma` | Σ |
| `Tau` | Τ |
| `Upsilon` | Υ |
| `Phi` | Φ |
| `Chi` | Χ |
| `Psi` | Ψ |
| `Omega` | Ω |

## Conjuntos numéricos

| Palabra | Símbolo |
| ------------ | ------- |
| `naturales` | ℕ |
| `enteros` | ℤ |
| `racionales` | ℚ |
| `reales` | ℝ |
| `complejos` | ℂ |

## Superíndices

| Entrada | Símbolo |
| ------- | ------- |
| `^0` | ⁰ |
| `^1` | ¹ |
| `^2` | ² |
| `^3` | ³ |
| `^4` | ⁴ |
| `^5` | ⁵ |
| `^6` | ⁶ |
| `^7` | ⁷ |
| `^8` | ⁸ |
| `^9` | ⁹ |
| `^+` | ⁺ |
| `^-` | ⁻ |
| `^=` | ⁼ |
| `^(` | ⁽ |
| `^)` | ⁾ |
| `^!` | ꜝ |
| `^h` | ʰ |
| `^i` | ⁱ |
| `^j` | ʲ |
| `^k` | ᵏ |
| `^l` | ˡ |
| `^m` | ᵐ |
| `^n` | ⁿ |
| `^o` | ᵒ |
| `^p` | ᵖ |
| `^r` | ʳ |
| `^s` | ˢ |
| `^t` | ᵗ |
| `^a` | ᵃ |

## Subíndices

| Entrada | Símbolo |
| ------- | ------- |
| `_0` | ₀ |
| `_1` | ₁ |
| `_2` | ₂ |
| `_3` | ₃ |
| `_4` | ₄ |
| `_5` | ₅ |
| `_6` | ₆ |
| `_7` | ₇ |
| `_8` | ₈ |
| `_9` | ₉ |
| `_+` | ₊ |
| `_-` | ₋ |
| `_=` | ₌ |
| `_(` | ₍ |
| `_)` | ₎ |
| `_h` | ₕ |
| `_i` | ᵢ |
| `_j` | ⱼ |
| `_k` | ₖ |
| `_l` | ₗ |
| `_m` | ₘ |
| `_n` | ₙ |
| `_o` | ₒ |
| `_p` | ₚ |
| `_r` | ᵣ |
| `_s` | ₛ |
| `_t` | ₜ |

> **Nota:** El diccionario es parte del código fuente de LaTeXito. Para modificarlo o agregar nuevas palabras y símbolos, se puede modificar directamente el objeto `traductor` en `script.js` o crear un fork del proyecto.