# Diccionario

LaTeXito utiliza un diccionario de traducción para convertir palabras clave en símbolos matemáticos. Las palabras clave deben escribirse utilizando **camelCase**.

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

## Lógica


| Palabra        | Símbolo |
| -------------- | ------- |
| `paraTodo`     | ∀       |
| `existe`       | ∃       |
| `noExiste`     | ∄       |
| `yL`           | ∧       |
| `oL`           | ∨       |
| `noL`          | ¬       |
| `implica`      | ⇒       |
| `siSoloSi`     | ⇔       |
| `implicadoPor` | ⇐       |
| `probado`      | □       |

## Comparadores

| Palabra           | Símbolo |
| ----------------- | ------- |
| `menorIgual`      | ≤       |
| `mayorIgual`      | ≥       |
| `distinto`        | ≠       |
| `aproximadamente` | ≈       |

Los operadores `<`, `>`, `=` se pueden escribir directamente.

## Conjuntos y relaciones

| Palabra                 | Símbolo |
| ----------------------- | ------- |
| `pertenece`             | ∈       |
| `noPertenece`           | ∉       |
| `subconjunto`           | ⊆       |
| `subconjuntoEstricto`   | ⊂       |
| `noSubconjunto`         | ⊈       |
| `noSubconjuntoEstricto` | ⊄       |
| `union`                 | ∪       |
| `interseccion`          | ∩       |
| `vacio`                 | ∅       |
| `complemento`           | ᶜ       |

## Otros símbolos

| Palabra        | Símbolo |
| -------------- | ------- |
| `infinito`     | ∞       |
| `proporcional` | ∝       |
| `tiende`       | →       |
| `aleph0`       | ℵ₀      |

## Conjuntos numéricos

| Palabra      | Símbolo |
| ------------ | ------- |
| `naturales`  | ℕ       |
| `enteros`    | ℤ       |
| `racionales` | ℚ       |
| `reales`     | ℝ       |
| `complejos`  | ℂ       |

## Letras griegas minúsculas

| Palabra   | Símbolo |
| --------- | ------- |
| `alpha`   | α       |
| `beta`    | β       |
| `gamma`   | γ       |
| `delta`   | δ       |
| `epsilon` | ε       |
| `zeta`    | ζ       |
| `eta`     | η       |
| `theta`   | θ       |
| `iota`    | ι       |
| `kappa`   | κ       |
| `lambda`  | λ       |
| `mu`      | μ       |
| `nu`      | ν       |
| `xi`      | ξ       |
| `omicron` | ο       |
| `pi`      | π       |
| `rho`     | ρ       |
| `sigma`   | σ       |
| `tau`     | τ       |
| `upsilon` | υ       |
| `phi`     | φ       |
| `chi`     | χ       |
| `psi`     | ψ       |
| `omega`   | ω       |

## Letras griegas mayúsculas

| Palabra   | Símbolo |
| --------- | ------- |
| `Alpha`   | Α       |
| `Beta`    | Β       |
| `Gamma`   | Γ       |
| `Delta`   | Δ       |
| `Epsilon` | Ε       |
| `Zeta`    | Ζ       |
| `Eta`     | Η       |
| `Theta`   | Θ       |
| `Iota`    | Ι       |
| `Kappa`   | Κ       |
| `Lambda`  | Λ       |
| `Mu`      | Μ       |
| `Nu`      | Ν       |
| `Xi`      | Ξ       |
| `Omicron` | Ο       |
| `Pi`      | Π       |
| `Rho`     | Ρ       |
| `Sigma`   | Σ       |
| `Tau`     | Τ       |
| `Upsilon` | Υ       |
| `Phi`     | Φ       |
| `Chi`     | Χ       |
| `Psi`     | Ψ       |
| `Omega`   | Ω       |

## Superíndices

| Entrada | Símbolo |
| ------- | ------- |
| `^0`    | ⁰       |
| `^1`    | ¹       |
| `^2`    | ²       |
| `^3`    | ³       |
| `^4`    | ⁴       |
| `^5`    | ⁵       |
| `^6`    | ⁶       |
| `^7`    | ⁷       |
| `^8`    | ⁸       |
| `^9`    | ⁹       |
| `^a`    | ᵃ       |
| `^e`    | ᵉ       |
| `^h`    | ʰ       |
| `^i`    | ⁱ       |
| `^j`    | ʲ       |
| `^k`    | ᵏ       |
| `^l`    | ˡ       |
| `^m`    | ᵐ       |
| `^n`    | ⁿ       |
| `^o`    | ᵒ       |
| `^p`    | ᵖ       |
| `^r`    | ʳ       |
| `^s`    | ˢ       |
| `^t`    | ᵗ       |
| `^u`    | ᵘ       |
| `^v`    | ᵛ       |
| `^x`    | ˣ       |

## Subíndices

| Entrada | Símbolo |
| ------- | ------- |
| `_0`    | ₀       |
| `_1`    | ₁       |
| `_2`    | ₂       |
| `_3`    | ₃       |
| `_4`    | ₄       |
| `_5`    | ₅       |
| `_6`    | ₆       |
| `_7`    | ₇       |
| `_8`    | ₈       |
| `_9`    | ₉       |
| `_a`    | ₐ       |
| `_e`    | ₑ       |
| `_h`    | ₕ       |
| `_i`    | ᵢ       |
| `_j`    | ⱼ       |
| `_k`    | ₖ       |
| `_l`    | ₗ       |
| `_m`    | ₘ       |
| `_n`    | ₙ       |
| `_o`    | ₒ       |
| `_p`    | ₚ       |
| `_r`    | ᵣ       |
| `_s`    | ₛ       |
| `_t`    | ₜ       |
| `_u`    | ᵤ       |
| `_v`    | ᵥ       |
| `_x`    | ₓ       |

> **Nota:** El diccionario es parte del código fuente de Latexito. Para modificarlo o agregar nuevas palabras y símbolos, se puede modificar directamente el objeto `traductor` en `script.js` o crear un fork del proyecto.
