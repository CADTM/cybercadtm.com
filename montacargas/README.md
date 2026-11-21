# Montacargas MX3 · Servidor y clientes

Control de montacargas, cargadores, arneses, escáneres, radios, insumos y consumibles del almacén MX3.

| App | Archivo | Para quién |
|---|---|---|
| **Servidor** (panel completo) | `index.html` | Quien concentra la información e imprime los reportes |
| **Cliente** (checklist) | `cliente.html` | Cada persona o turno que captura el checklist de montacargas, cargadores y arneses |

## Cómo funciona la red

1. En el **servidor**, usa **Exportar catálogo para clientes** (montacargas, cargadores y arneses).
2. En cada **cliente**, carga ese catálogo (*Cargar catálogo*).
3. Los clientes capturan sus checklists durante el turno.
4. Al final, cada cliente usa **Exportar JSON** y manda el archivo al servidor (WhatsApp, correo, USB…).
5. En el servidor, en **Historial → Importar datos de clientes**, se cargan esos archivos y se generan los reportes.
6. Ya importado, el cliente puede usar **Vaciar registros**.

Los datos se guardan **solo en el navegador de cada dispositivo**. Este repositorio no contiene ningún dato capturado.

## Instalar como app

Las dos páginas se pueden instalar (PWA) y funcionan sin internet después de abrirlas una vez:

- **Android / Chrome:** menú ⋮ → *Instalar app*.
- **iPhone / iPad:** Safari → *Compartir* → *Añadir a pantalla de inicio*.
- **PC:** Chrome o Edge → ícono de instalar en la barra de direcciones.

---
© @cybercadtm
