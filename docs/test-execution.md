# Test Execution Report

## Resumen

Se ejecutaron un total de 3 casos de prueba sobre los módulos definidos.

## Resultados

- PASSED: 2
- FAILED: 1
- BLOQUEADOS: 0

## Observaciones

Durante la ejecución de los casos de prueba se detectó un error en la validación de campos vacíos en el login, donde el sistema no entrega un mensaje claro al usuario.

Además, se identificó un posible problema de usabilidad en la ubicación del mensaje de error en el caso de credenciales incorrectas, lo que podría afectar la experiencia del usuario.

Se recomienda:
- Mejorar la claridad de los mensajes de validación
- Revisar la ubicación visual de los mensajes de error


## Conclusión

El sistema cumple parcialmente con los requerimientos funcionales evaluados.

Si bien los flujos principales funcionan, existen oportunidades de mejora en la comunicación de errores al usuario, lo cual es clave para una buena experiencia de uso.