# **Reto Inteligencia artificial avanzada para la ciencia de datos**

_**Nombre del proyecto:**_ _American Express - Default Prediction_

_**Institución:**_ _Instituto Tecnológico y de Estudios Superiores de Monterrey, Campus Puebla_

_**Unidad de formación:**_ _TC3006C_

_**Autores:**_

- _Myroslava Sánchez Andrade A01730712_
- _Karen Rugerio Armenta A01733228_
- _José Antonio Bobadilla García A01734433_
- _Alejandro Castro Reus A01731065_

_**Fecha de creación:**_ _17/08/2022_

_**Última modificación:**_ _14/09/2022_

---

## **Estructura general del repositorio**

---

## **Carpeta actividad_variable_tiempo**

Actividad realizada en clase en la que se modela la relación de la variable dependiente con una independiente a tarvés del tiempo.

---

## **Carpeta machine_learning:**

Esta carpeta contiene un archivo `main.ipynb`, el cual es utilizado como libreta principal para llamr a correr a los procesos del ETL, el modelado y la evaluación del modelado.

#### **_Carpeta partials dentro de machine learning:_**

Esta carpeta contiene 3 carpetas:

- etl: carpeta en la cual se lleva a cabo la extracción, transformación y load del dataset con el que se está trabajando.
- graphs: carpeta que contiene imágenes de las gráficas resultantes de la evaluación del modelo.
- model: carpeta en la cual se desarolló todo el modelo para la predicción de la variable dependiente. También en este se realizó la evaluación y mejora del modelo.

---

## **Carpeta reportes**

Como su nombre lo indica, en esta carpeta se contienen los reportes de la documentación del trabajo realizado por los autores.

---

## **Carpeta web_interface**

Esta carpeta contiene 2 carpetas:

- Frontend-IA: en la que se realiza todo el desarrollo de la página web para el despliegue del modelo.
- backend-ia: en la que se realiza toda la conexión de la interfaz gráfica con el modelo de predicción.

  ***

## **requirements.txt**

Archivo que contiene todas las librerías necesarias para correr el modelo

---

---

## **Puntos a tomar en cuenta**

Para que se pueda correr el script principal del modelo de predicción, se necesitará hacer una carpeta `data_file` en donde se deberán agregar los archivos `train_data.csv` (de Kaggle) y `train_labels.csv` (de Kaggle).
