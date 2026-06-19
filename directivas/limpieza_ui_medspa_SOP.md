# Limpieza UI Medspa SOP

## Objetivo
Refactorizar y limpiar visualmente la web de la clínica estética (Medspa), eliminando cualquier dependencia de frameworks (Vite, React, Tailwind) y transformándola en un solo archivo `index.html` con Vanilla CSS y JS.

## Entradas
- Archivo base a reemplazar: `index.html` actual.
- Instrucciones de diseño: Paleta Nude/Beige, tipografía Cormorant Garamond y Jost, estilo minimalista de lujo.

## Salidas
- Un archivo `index.html` completo y funcional.
- Las salidas deben colocarse directamente en la respuesta del chat como código crudo según la instrucción "SOLO el código HTML completo".

## Lógica y Pasos
1. **Configuración Inicial**: Incluir Google Fonts (Cormorant Garamond, Jost) y FontAwesome por CDN.
2. **Estilos Globales**: Definir variables CSS para la paleta de colores. Aplicar scroll-behavior: smooth.
3. **Estructura HTML (SPA)**:
   - Navbar fija interactiva.
   - Página 1 (Home): Hero, Acerca de, Servicios (Card Grid), Antes/Después (Slider drag), Confianza (Bento grid), Testimonios, Sección Médica, Blog, Formulario Cita, FAQ, Footer.
   - Página 2 (Servicios).
   - Página 3 (Contacto).
4. **Interactividad (JS Puro)**:
   - Menú hamburguesa.
   - Animaciones fade-in (IntersectionObserver).
   - Slider de antes/después con drag handle.
   - Carrusel de testimonios.
   - Formulario con validación y toast de éxito simulado.
   - Acordeón de FAQ.

## Restricciones y Casos Borde
- *Trampa*: Usar librerías externas para los sliders. *Solución*: Usar Vanilla JS estrictamente.
- *Trampa*: Entregar texto explicativo. *Solución*: Omitir comentarios ajenos al código en la salida final además de las declaraciones estandarizadas.
- *Trampa*: Sobrescribir lógica existente sin considerar que el index.html base pertenece a React/Vite. *Solución*: Sobrescribir todo el index.html ya que el usuario pidió "Un solo index.html, ... ENTREGABLE: Solo el código HTML completo".
