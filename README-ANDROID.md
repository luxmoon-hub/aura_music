# Aura Music — Android APK (Capacitor)

Este proyecto empaqueta Aura Music V10 como una aplicación Android instalable mediante Capacitor 8. La interfaz y la biblioteca local se mantienen; la aplicación abre desde sus archivos incluidos y no necesita cargar GitHub Pages ni abrir una pestaña de Chrome.

## Requisitos de desarrollo
- Node.js 22 o superior.
- Android Studio y Android SDK (API 24 o superior).
- Para compilar localmente, Java 21 es adecuado para el flujo de CI incluido.

## Crear el APK desde GitHub
1. Sube el contenido de este ZIP a la raíz del repositorio `aura-music` (puedes conservar también la web/PWA).
2. En GitHub, abre **Actions**.
3. Selecciona **Build Aura Music APK** y pulsa **Run workflow**, o espera a que se ejecute al subir los cambios a `main`.
4. Cuando termine correctamente, abre la ejecución y descarga el artefacto `aura-music-debug-apk`.
5. Dentro encontrarás `app-debug.apk`, que puedes transferir al OPPO e instalar para pruebas personales.

## Firma y seguridad
- El APK de esta primera compilación es un **debug APK firmado automáticamente para pruebas**; no es todavía un paquete de lanzamiento firmado con una clave privada propia.
- Para distribuir una versión estable de lanzamiento o publicarla en una tienda, hay que crear una clave de firma privada y guardarla en GitHub Secrets/entorno seguro. No subas el archivo keystore, contraseñas ni claves al repositorio ni las compartas en el chat.
- Revisa permisos y prueba importación, reproducción en segundo plano, almacenamiento y restauración antes de considerar la versión final.
- No se incorpora ningún servidor remoto ni se envía tu biblioteca musical a Aura Music.

## Importante sobre funciones nativas
Esta primera etapa empaqueta la aplicación existente con Capacitor. El selector de música actual sigue usando el selector de archivos del sistema; la importación nativa por carpetas/lotes y la reproducción Android con servicio multimedia dedicado son mejoras siguientes, no se deben dar por garantizadas todavía.
