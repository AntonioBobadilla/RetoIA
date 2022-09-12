# **Preparación de los datos | ETL**

_Autores:_

- _Myroslava Sánchez Andrade A01730712_
- _Karen Rugerio Armenta A01733228_
- _José Antonio Bobadilla García A01734433_
- _Alejandro Castro Reus A01731065_

_Fecha de creación: 17/08/2022_

_Última modificación: 12/09/2022_

---

## **Extract**

Los datos fueron extaídos de la plataforma **[Kaggle](https://www.kaggle.com/competitions/amex-default-prediction/data)**, en donde fue publicada la competencia "American Express - Default Prediction". Se descargaron los archivos `train_data.csv` y `train_labels.csv`, estos tienen un tamaño de 16.39 GB y 30.75 MB respectivamente.

#### **_Extracción del 20% de los clients AMEX del dataset_**

Dado el tamaño de los archivos, fue difícil trabajar en el análisis y la manipualción de los datos en nuestras computadoras portátiles. Aún cuando logramos poder importar el dataset con la herramienta dask, fue irrealizable un análisis. Debido a esta situación y después de comentarle nuestra problemática al Dr. Ahuactzin, se concluyó que se trabajaría con sólo un porcentaje designado por el equipo del archivo `train_data.csv`.

Como equipo se decidió que se trabajaría sólo con el 20% de los datos del archivo, correspondiente a un tamaño de aproximadamente 3 GB, debido a que esto nos permitiría a todos trabajar desde nuestra computadora personal.
<br>Es importante resaltar que para mantener la integridad de los datos, la extracción de este porcentaje fue realizada conservando los mismos porcentajes de los clientes que pagaron y los que no del archivo original. También se hizo un _shuffle_ de los datos por si el archivo tenía un orden específico que pudiera afectar al modelo de predicción.
El archivo final con el que se trabajó para el entrenamiento y el _testeo_ del mismo, cuenta con un tamaño de 3.03 GB; lo que representan: 91783 clientes, 1107261 filas y 191 columnas.

---

## **Transform**

Sabemos que para realizar un modelo de predicción, es indispensable que los datos con los que se trabaje sean los correctos. Es por eso que se realizaron los siguientes procesos para asegurarnos de que los datos que serán alimentados para nuestro modelo sean de gran utilidad y eviten la creación de sesgos. Al final de cada proceso se exportó el DF para así poder trabajar de una manera más sencilla.

#### **_- Análisis de columnas_**

Tomando en cuenta que una mala elección de las columnas podrían llegar a incluso afectar nuestro modelo, lo primero que se hizo fue eliminar las columnas que tuvieran 70% o más valores nulos. Esto resultó en la eliminación de 32 columnas, dejando un total de 159 columnas

#### **_- Análisis de filas_**

Ya que cada fila no representaba una instancia por sí misma, se hizo el análisis por clientes, pues un cliente (input para el modelo) puede tener más de una entrada. Después de calcular el total de celdas que tiene cada cliente, se eliminaron los clientes (y todas sus respectivas filas) que tuvieran más del 75% de valores nulos. Esto resultó en la eliminación de ningún cliente, en realidad todos los clientes contaban con por lo menos 83% de valores no nulos.

#### **_- One Hot Encoding_**

En la descripción de los datos en Kaggle, se nos indicaba que se contaban con un total de 10 columnas categóricas: `['B_30', 'B_38', 'D_114', 'D_116', 'D_117', 'D_120', 'D_126', 'D_63', 'D_64', 'D_66', 'D_68'] `.
<br>Se hizo uso de la función **[preprocessing.LabelEncoder](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html)** de sklearn para la categorización de los valores de las columnas por números, de esta manera remplazamos todas las columnas categóricas por nuevas columnas con valores numéricos. Esto resultó en la creación de 52 columnas, resultando en un total de 201 columnas.

#### **_- Imputación_**

Se hizo uso de la función **[impute.IterativeImputer](https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html)** de sklearn para la imputación de valores mediante la estimación de las características de las variables a partir de todas las otras.

#### **_Principal Componen Analysis (PCA)_**

Dado que se tiene un gran número de columnas, consideramos que sería mejor hacer una reducción de estas y así facilitar su manipulación.
<br>Implementamos la función **[decomposition.PCA](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)** de sklearn para hacer una reducción de la dimensión lineal del DataFrame usando la Decomposición de Valor Singular de los datos. Esta función se aplicó al DataFrame sin las columnas `['customer_ID', 'target']`, pues estas columnas deben ser mantenidas con sus valores originales.
<br>Se decidió que la reducción de las columnas sería a 20 columnas finales, dejando un total de 22 columnas (añadimos las columnas que no fueron aplicadas al PCA).

#### **_Agregación de los clientes_**

Ya que se tiene más de una entrada por cliente, es óptimo la reudcción de estas a una sola, para que sólo se tenga una entrada por cliente. Agrupamos por cliente y aplicamos el promedio para obtener una sóla entrada. Así el DataFrame se redujo a 91783 filas (1 por cliente).

---

## **Load**

Una vez terminada la transformación del datset, se exportó el dataset resultante a un archivo csv. Este tiene un tamaño de 41.6 MB, 91783 filas y 22 columnas.
