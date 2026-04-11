# Test Cases

## Módulo: Login

### TC-001: Login exitoso

- **Precondición:** Usuario registrado
- **Pasos:**
  1. Ir a página de login
  2. Ingresar email válido
  3. Ingresar contraseña válida
  4. Presionar "Ingresar"
- **Resultado esperado:**
  - Usuario accede al sistema
- **Estado:** PASSED
- **Notas:** Flujo ejecutado sin errores

---

### TC-002: Login con contraseña incorrecta

- **Precondición:** Usuario registrado
- **Pasos:**
  1. Ir a login
  2. Ingresar email válido
  3. Ingresar contraseña incorrecta
  4. Presionar "Ingresar"
- **Resultado esperado:**
  - Mensaje de error visible
  - Usuario no accede
- **Estado:** PASSED
- **Notas:** Flujo ejecutado correctamente. Sin embargo, el mensaje de confirmacion no se encuentra en una posición visible o intuitiva para el usuario, lo que podría afectar la experiencia de uso.

---

### TC-003: Campos vacíos

- **Pasos:**
  1. Ir a login
  2. No ingresar datos
  3. Presionar "Ingresar"
- **Resultado esperado:**
  - Validación de campos requerida
- **Estado:** FAILED
- **Notas:** Mensaje obtenido es incorrecto.

## Módulo: Carrito

### TC-004: Agregar producto al carrito desde detalle de producto

- **Precondición:** Existe al menos un producto disponible
- **Pasos:**
  1. Ir al catálogo
  2. Seleccionar un producto
  3. Entrar al detalle
  4. Presionar "Agregar al carrito"
- **Resultado esperado:**
  - El producto se agrega correctamente al carrito
  - El usuario recibe una confirmación visual o es redirigido al carrito
- **Estado:** PASSED
- **Notas:** Flujo ejecutado correctamente. Sin embargo persiste que el mensaje de confirmacion  no se encuentra en una posición visible o intuitiva para el usuario, lo que podría afectar la experiencia de uso.

---

### TC-005: Visualizar producto agregado en el carrito

- **Precondición:** Existe un producto agregado al carrito
- **Pasos:**
  1. Ir al carrito
- **Resultado esperado:**
  - El producto aparece listado en el carrito
  - Se visualiza nombre, cantidad y subtotal si corresponde
- **Estado:** PASSED
- **Notas:** El producto se visualiza correctamente en el carrito con la información esperada.

---

### TC-006: Aumentar cantidad de un producto en el carrito

- **Precondición:** Existe un producto en el carrito
- **Pasos:**
  1. Ir al carrito
  2. Modificar la cantidad del producto
- **Resultado esperado:**
  - La cantidad se actualiza correctamente
  - El subtotal y total se recalculan
- **Estado:** PASSED
- **Notas:** La actualización de cantidad funciona correctamente. Como mejora de usabilidad, la vista resumida del carrito podría incluir una opción para modificar cantidades, similar a la vista completa del carrito.

---

### TC-007: Eliminar producto del carrito

- **Precondición:** Existe un producto en el carrito
- **Pasos:**
  1. Ir al carrito
  2. Presionar opción de eliminar producto
- **Resultado esperado:**
  - El producto desaparece del carrito
  - El total se actualiza correctamente
- **Estado:** PASSED
- **Notas:** El producto se elimina correctamente y el total se actualiza según lo esperado.

---

### TC-008: Visualizar estado de carrito vacío

- **Precondición:** No existen productos en el carrito
- **Pasos:**
  1. Ir al carrito sin productos
- **Resultado esperado:**
  - El sistema muestra un mensaje claro indicando que el carrito está vacío
- **Estado:** PASSED
- **Notas:** El sistema muestra correctamente el estado de carrito vacío mediante un mensaje claro para el usuario.

## Módulo: Checkout

### TC-009: Acceder al checkout con productos en el carrito

- **Precondición:** Existe al menos un producto agregado al carrito
- **Pasos:**
  1. Ir al carrito
  2. Presionar la opción para continuar al checkout
- **Resultado esperado:**
  - El usuario accede correctamente a la vista de checkout
  - Se muestra el resumen de la compra
- **Estado:** PASSED
- **Notas:** Flujo ejecutado correctamente. Como mejora de usabilidad, se podría evaluar la eliminación del ícono de carrito en esta vista para evitar distracciones durante el proceso de compra.

---

### TC-010: Visualizar resumen de compra en checkout

- **Precondición:** Usuario en la vista de checkout con productos en el carrito
- **Pasos:**
  1. Revisar la información desplegada en el checkout
- **Resultado esperado:**
  - Se visualizan correctamente los productos seleccionados
  - Se muestra cantidad, subtotal y total final si corresponde
- **Estado:** PASSED
- **Notas:** El resumen se visualiza correctamente

---

### TC-011: Confirmar compra correctamente

- **Precondición:** Usuario en checkout con productos en el carrito
- **Pasos:**
  1. Presionar el botón para confirmar o finalizar compra
- **Resultado esperado:**
  - La compra se procesa correctamente
  - El usuario recibe una confirmación visual
  - El carrito se vacía si el flujo así lo define
- **Estado:** PASSED
- **Notas:** La compra se procesa correctamente. Se muestra una vista de éxito con el detalle del pedido y el carrito se vacía según lo esperado.

---

### TC-012: Intentar acceder al checkout con carrito vacío

- **Precondición:** No existen productos en el carrito
- **Pasos:**
  1. Intentar acceder a la URL o flujo de checkout
- **Resultado esperado:**
  - El sistema bloquea el acceso o informa claramente que no se puede continuar sin productos
- **Estado:** FAILED
- **Notas:** El sistema redirige a una página 404 al intentar acceder al checkout sin productos en el carrito. Esto no es consistente con el comportamiento esperado, ya que no informa claramente al usuario la razón del bloqueo.

---

### TC-013: Verificar persistencia de la orden tras la compra

- **Precondición:** Compra realizada correctamente
- **Pasos:**
  1. Completar una compra
  2. Revisar si existe confirmación, resumen o registro asociado
- **Resultado esperado:**
  - La orden queda correctamente registrada en el sistema o visible según el flujo implementado
- **Estado:** PASSED
- **Notas:** La orden es visible mediante su identificador en la URL. El sistema restringe correctamente el acceso a órdenes de otros usuarios, aunque lo hace mediante una respuesta 404.