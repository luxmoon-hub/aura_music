AURA MUSIC SIGNATURE V7
-----------------------
Actualización visual y funcional.

NOVEDADES
- Nueva identidad visual con la paleta Deep Navy, Midnight Blue, Ocean Depth, Storm Blue, Blue Slate, Dusk Blue, Foggy Blue, Cloud Blue, Mist Blue y Arctic Haze.
- Jerarquía tipográfica combinada: titulares serif elegantes y controles sans-serif amigables.
- Vistas de Canciones, Álbumes, Artistas, Favoritos y Playlists.
- Lectura de etiquetas ID3 comunes en MP3 (título, artista, álbum, artista del álbum, género y número de pista).
- Si el archivo no trae etiquetas, intenta reconocer el patrón «Artista - Canción» del nombre.
- Portadas incrustadas: MP3 APIC, FLAC PICTURE y M4A/MP4 covr (según estructura compatible).
- Botón directo para abrir el Ecualizador de 5 bandas.
- Conserva el mismo nombre de base de datos IndexedDB para mantener la biblioteca de versiones anteriores.

ACTUALIZAR
1. Exporta un respaldo desde Ajustes.
2. Descomprime el ZIP.
3. Publica el contenido de la carpeta en el MISMO sitio y dominio de Netlify, reemplazando archivos anteriores.
4. Abre Aura Music y actualiza la página. Si no aparece la versión nueva, cierra y vuelve a abrir la PWA.
5. No borres datos del sitio ni IndexedDB.

NOTAS
- La extracción de etiquetas ID3 es para MP3. Otros formatos pueden mostrar artista/álbum si se editaron manualmente o si se amplía el lector de metadatos.
- La clasificación de artistas y álbumes utiliza los metadatos guardados en la biblioteca.
- La reproducción tras recargar restaura canción y posición; el navegador puede exigir tocar Play por restricciones de Android.
- El ecualizador usa Web Audio API; algunos navegadores pueden no permitirlo en todos los escenarios.
- No se ha probado físicamente en un OPPO Reno 14. Verifica tus archivos y haz respaldo antes de actualizar.
