## **Interfaz Web**
*Autores:*
- *Myroslava Sánchez Andrade A01730712*
- *Karen Rugerio Armenta A01733228*
- *José Antonio Bobadilla García A01734433*
- *Alejandro Castro Reus A01731065*

*Fecha de creación: 12/09/2022*

*Última modificación: 12/09/2022*

---

### **Frontend**

---

La sección de frontend de la interfaz web se desarrolló usando las siguientes tecnologías: 

- HTML
- CSS
- Javascript

Se usó HTML para el maquetado de la página web, la cuál es una SPA  (Single Page Application) que consta de 3 secciones:

- Home page
- Sección de procesado de datos 
- Sección de resultados de predicción

La sección de Home page consta de un banner y un formulario, en el cuál se tiene un input de tipo file, con el que se seleccionará el archivo de tipo CSV para realizar dicha predicción.

Una vez que se sube el archivo, un script de Javascript detecta estos cambios en el input y envía dicho archivo al endpoint con el que se procesará el archivo. 

Dicho endpoint retorna un JSON el cuál contiene 2 valores: un arreglo de las predicciones presentadas y un string el cuál se refiere a la ruta de la imagen de la grafica procesada desde el backend.

Una vez que se recibe la respuesta desde el backend, se procede a mostrar en el HTML generando una tabla y mostrando la imagen en la sección de resultados.

La sección de resultados consta de un cuadro en el cuál se muestra una tabla con la predicción realizada y una imágen la cuál es una gráfica de pastel con el porcentaje de clientes que no paga la tarjeta y los clinetes que pagan la tarjeta.

### **Backend**

---

La sección de backend se desarrolló usando las siguientes tecnologías:

-Express.js (Node.js)
-Python

Se usó express para procesar las solicitudes. Consta de 2 endpoints:

- / : Recibe el csv del frontend y lo manda al script de Python, al finalizar regresa el id de la imagen y los resultados individuales
- /api-imgs/:img_id : Regresa el archivo de la imagen al frontend

El script de Python recibe el csv y lo convierte a dataframe, carga el modelo, hace las predicciones, realiza una gráfica de pastel que guarda en el directorio de api-imgs y regresa tanto las predicciones individuales como la dirección de la imagen de la gráfica de pastel.
