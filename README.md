# LaTeXito 2.0

La versión 2.0 trae cambios importantes en el funcionamiento del traductor y en la experiencia de uso. Estas son las novedades:

## Nuevas funcionalidades

### Tokenizador por caracteres
Se incorporó un nuevo tokenizador que procesa el texto **carácter por carácter**, en lugar de buscar palabras completas. Esto permite escribir expresiones matemáticas de forma más natural, sin necesidad de separar manualmente cada palabra clave.

**Antes:**
```text
paraTodo espilon > 0, existe un aplastar{ n _0 }
```

**Ahora:**
```text
paraTodoepsilon > 0, existe un n_0
```

El tokenizador reconoce las palabras clave incluso cuando están concatenadas con otros caracteres, facilitando la escritura de expresiones matemáticas.

### Diccionario integrado en la interfaz
Ahora podés consultar el diccionario directamente desde la interfaz principal, sin necesidad de volver a la documentación para buscar una palabra clave o su símbolo correspondiente.

### Gestión del diccionario
Se incorporaron nuevas opciones para administrar las entradas del diccionario:

- **Agregar:** incorporar nuevas palabras clave y sus respectivos símbolos.
- **Modificar:** editar entradas existentes.
- **Eliminar:** quitar entradas que ya no necesites.

### Guardado local
Los cambios realizados en el diccionario se guardan automáticamente en el almacenamiento local del navegador (`localStorage`).

Esto significa que tus modificaciones se conservan al cerrar o actualizar la página, siempre que vuelvas a utilizar el mismo navegador y no borres sus datos locales.

### Boton de copiado
Ahora el boton de copiar tiene una animación que explica visualmente que es lo que hace el boton.

**Nota:** Latexito viene con su propio diccionario base, pero ahora podes modificarlo y personalizarlo en la forma que te guste.

# LaTeXito 1.0

### Diccionario

LaTeXito utiliza un diccionario de traducción para convertir palabras clave en símbolos matemáticos. Las palabras clave deben escribirse utilizando **camelCase** cuando corresponda.

### Sintaxis de los símbolos

LaTeXito procesa la entrada **palabra por palabra**. Por este motivo, los elementos que se quieran traducir deben estar separados por espacios.

Esto es especialmente importante para los superíndices y subíndices, que utilizan `^` y `_` como sintaxis de entrada:

- `N _0` → `N ₀`
- `x ^n` → `x ⁿ`
- `a _i` → `a ᵢ`

En cambio, si el símbolo se encuentra unido a la palabra anterior, se interpreta como una única palabra y **no se realiza la traducción**:

- `N_0` → `N_0`
- `x^n` → `x^n`
- `a_i` → `a_i`

Por lo tanto, **todos los símbolos o palabras clave que se quieran traducir deben estar separados por espacios**.

### Aplastar caracteres

LaTeXito permite utilizar `aplastar{ ... }` para **eliminar los espacios entre los elementos contenidos dentro de las llaves**.

La sintaxis es:

```text
aplastar{ elemento1 elemento2 elemento3 }
```

Por ejemplo:

```text
aplastar{ paraTodo existe }
```

produce:

```text
∀∃
```

Mientras que, sin `aplastar`:

```text
paraTodo existe
```

produce:

```text
∀ ∃
```

Esto permite utilizar la sintaxis habitual de LaTeXito, basada en palabras separadas por espacios, y posteriormente **aplastar el resultado cuando se necesita que los símbolos queden unidos**.

También se siguen aplicando las traducciones del diccionario dentro de `aplastar`:

```text
aplastar{ x ^2 + y ^2 }
```

produce:

```text
x²+y²
```

Los espacios que se encuentran dentro de `aplastar{ ... }` son ignorados, mientras que los espacios que se encuentran fuera se conservan.