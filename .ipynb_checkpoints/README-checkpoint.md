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

_**Última modificación:**_ _12/09/2022_

---

## **Índice**

### [1. Business Understanding](#1-business-understanding)

### [2. Data Understanding](#2-data-understanding)

### [3. Data Preparation](#3-data-preparation)

#### [3.1 Extracción](#31-extract)

#### [3.2 Transformación](#32-transform)

#### [3.3 Transformación](#33-load)

---

## **1. Business Understanding**

Las empresas bancarias tienen un peso muy grande en la economía global. Tan sólo en México, se considera que al menos 41.1 millones de Mexicanos, que representa a un 49.1% del total de adultos de 18 a 70 años, tienen al menos una cuenta bancaria, según el Instituto Nacional de Estadística y Geografía (INEGI, 11 de mayo de 2022).

Los bancos desempeñan un papel importante, ya que se encargan de permitir el flujo de recursos financieros en todo el país, distribuir efectivo, pagar los cheques que se emiten, ofrecer servicio con tarjetas y transferencias bancarias, otorgar préstamos, entre otros.

Saber predecir si una persona va a pagar el crédito que se le otorga es una parte esencial del negocio. Es por ello, que este proyecto trató de predecir, haciendo uso de un modelo de Machine Learning y entrenando un algoritmo con base en un historial de usuarios, si un usuario pagará el crédito de la tarjeta a la que aplicó.

---

## **2. Data Understanding**

Los datos del proyecto se encuentran en la página oficial de **[Kaggle](https://www.kaggle.com/)**. Lo que se encontró es que hay tres archivos de tipo CSV, dos con la información dividida por clientes y estos a su vez divididos por periodos (uno es el train y otro es el test) y otro con los datos de si el cliente pagó o no.

**_Variables independientes_**
<br>Las variables independientes se nos presentaron divididas en 5 categorías:

- D\_\* = Deliquency variables
- S\_\* = Spend variables
- P\_\* = Payment variables
- B\_\* = Balance variables
- R\_\* = Risk variables

Siendo categóricas las siguientes: `['B_30', 'B_38', 'D_114', 'D_116', 'D_117', 'D_120', 'D_126', 'D_63', 'D_64', 'D_66', 'D_68']`

<br>**_Variables dependientes_**
<br>Probabilidad de un pago futuro para un cliente:

    `['target']` == 0 (el cliente sí pagó)
    `['target']` == 1 (el cliente no pagó)

<br>Las variables se encuentran protegidas por privacidad, es por esta razón que no se puede identificar qué representan de manera literal. Sin embargo debido al contexto del reto no es necesario entender el significado de las variables que conforman el sistema, para ello se realizarán técnicas de obtención de variables explicativas de la variable independiente, las cuales veremos a continuación.

---

## **3 Data Preparation**

#### **3.1 Extract**

Los datos fueron extaídos de la plataforma **[Kaggle](https://www.kaggle.com/competitions/amex-default-prediction/data)**, en donde fue publicada la competencia "American Express - Default Prediction". Se descargaron los archivos `train_data.csv` y `train_labels.csv`, estos tienen un tamaño de 16.39 GB y 30.75 MB respectivamente.

#### **_Extracción del 20% de los clients AMEX del dataset_**

Dado el tamaño de los archivos, fue difícil trabajar en el análisis y la manipualción de los datos en nuestras computadoras portátiles. Aún cuando logramos poder importar el dataset con la herramienta dask, fue irrealizable un análisis. Debido a esta situación y después de comentarle nuestra problemática al Dr. Ahuactzin, se concluyó que se trabajaría con sólo un porcentaje designado por el equipo del archivo `train_data.csv`.

Como equipo se decidió que se trabajaría sólo con el 20% de los datos del archivo, correspondiente a un tamaño de aproximadamente 3 GB, debido a que esto nos permitiría a todos trabajar desde nuestra computadora personal.
<br>Es importante resaltar que para mantener la integridad de los datos, la extracción de este porcentaje fue realizada conservando los mismos porcentajes de los clientes que pagaron y los que no del archivo original. También se hizo un _shuffle_ de los datos por si el archivo tenía un orden específico que pudiera afectar al modelo de predicción.
El archivo final con el que se trabajó para el entrenamiento y el _testeo_ del mismo, cuenta con un tamaño de 3.03 GB; lo que representan: 91783 clientes, 1107261 filas y 191 columnas.<br><br>

### **3.2 Transform**

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

Ya que se tiene más de una entrada por cliente, es óptimo la reudcción de estas a una sola, para que sólo se tenga una entrada por cliente. Agrupamos por cliente y aplicamos el promedio de cada columna para obtener una sola entrada. Así el DataFrame se redujo a 91783 filas (1 por cliente).<br><br>

#### **3.3 Load**

Una vez terminada la transformación del datset, se exportó el dataset resultante a un archivo csv. Este tiene un tamaño de 41.6 MB, 91783 filas y 22 columnas.

---

## **4 Modelling**
