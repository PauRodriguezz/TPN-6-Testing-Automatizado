# Testing Automatizado con Cypress
Repositorio que contiene la implementación de tests automatizados end-to-end utilizando Cypress para validar funcionalidades de una aplicación web, realizado como parte de la asignatura Ingeniería y Calidad de Software (UTN – FRM) y tiene como objetivo aplicar prácticas de automatización de pruebas y validación de interfaces web.

## Objetivo
Explorar el uso de Cypress como herramienta de testing automatizado para:
- automatizar pruebas funcionales sobre una aplicación web
- validar el comportamiento de la interfaz de usuario
- ejecutar tests repetibles de manera automática

## Tests implementados
> Sistema bajo prueba: https://thinking-tester-contact-list.herokuapp.com/

Los tests automatizados se encuentran en `cypress/e2e/` y cubren los siguientes escenarios sobre la aplicación de ejemplo:
- `sign_up_usuario.cy.js` — Registro de usuario
  - Validación del botón **"Sign up"** (visibilidad y redirección a `/addUser`).
  - Registro de usuario completando el formulario con datos válidos.
  - Envío del formulario con campos vacíos y verificación del **mensaje de error** esperado.

- `add_contact.cy.js` — Alta de contacto
  - Validación del campo **First Name**: acepta y muestra correctamente un valor de longitud considerable (límite razonable).
  - Validación del campo **Email**: carga de formatos válidos e inválidos (sin `@`, sin dominio, sin parte local).
  - Validación de UI: verificación del **placeholder** del campo **City**.

- `logout.cy.js` — Cierre de sesión
  - Verificación de que el botón **Logout** es visible y posee el texto correcto.
  - Validación de la acción de logout: al hacer clic, se redirige a la ruta `/logout`.

## Tecnologías y herramientas
- **Cypress** (automatización de pruebas UI)
- **JavaScript / Node.js (npm)**
- **Test Craft** (asistente IA para generación de tests)
- **Playwright** (código base generado por Test Craft, luego adaptado a Cypress)

## Metodología utilizada (resumen)
En el trabajo se siguió el siguiente flujo:
1. Configuración inicial de Cypress en el proyecto.
2. Generación de escenarios de prueba con **Test Craft**.
3. Obtención de código de ejemplo en **Playwright**.
4. **Adaptación del código a Cypress**, ajustando sintaxis y comandos para su correcta ejecución.
5. Ejecución de pruebas y verificación de resultados desde la interfaz de Cypress.

## Estructura del repositorio
El proyecto se organiza siguiendo la siguiente estructura:

```text
├── cypress/                                           # Carpeta principal de Cypress
  ├── e2e/                                             # Tests automatizados
  │ ├── add_contact.cy.js                              # Prueba para agregar un contacto
  │ ├── logout.cy.js                                   # Prueba de cierre de sesión
  │ ├── sign_up_usuario.cy.js                          # Prueba de registro de usuario
  │ └── spec.cy.js                                     # Test generado por defecto por Cypress
  │
  ├── fixtures/                                        # Datos de prueba utilizados por los tests
  │ └── example.json
  │
  └── support/                                         # Configuración y comandos reutilizables
    ├── commands.js 
    └── e2e.js 
├──cypress.config.js                                   # Archivo principal de configuración de Cypress
├──cpackage-lock.json                                  # Archivo generado por npm que registra las versiones exactas de las dependencias
├──package.json                                        # Dependencias del proyecto y scripts de ejecución

```
