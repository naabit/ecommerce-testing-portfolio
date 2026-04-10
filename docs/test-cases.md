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
- **Notas:** Flujo ejecutado correctamente. Sin embargo, el mensaje de error no se encuentra en una posición visible o intuitiva para el usuario, lo que podría afectar la experiencia de uso.

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