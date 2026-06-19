# Servidor Local SOP

## Objetivo
Iniciar y mantener un servidor web local (localhost) para visualizar y probar el archivo `index.html` de la clínica estética (Medspa) de forma interactiva y responsiva.

## Entradas
- Archivo a servir: `index.html` en la raíz del proyecto.
- Configuración de puerto: Puerto por defecto 3000 (o alternativo si está ocupado).

## Salidas
- Un proceso de servidor web local activo sirviendo los archivos del directorio raíz.
- URL de acceso en el navegador (ej. http://localhost:3000).

## Lógica y Pasos
1. **Verificación de Entorno**: Comprobar que el archivo `index.html` existe en la raíz.
2. **Selección de Puerto**: Intentar vincular al puerto 3000. Si está ocupado, probar secuencialmente con 3001, 3002, etc.
3. **Inicio de Servidor**: Lanzar un servidor HTTP simple mediante un script de Python.
4. **Log de URL**: Imprimir en consola la URL del servidor local para que el usuario pueda abrirla.

## Restricciones y Casos Borde
- *Trampa*: Si el puerto 3000 está en uso por otro proceso, el script fallará. *Solución*: Implementar búsqueda automática de puertos libres en el script de Python.
- *Trampa*: Que el proceso se bloquee. *Solución*: Ejecutar el comando de forma asíncrona o en segundo plano en la terminal para no detener el agente.
