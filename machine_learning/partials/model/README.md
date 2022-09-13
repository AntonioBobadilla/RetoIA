## **Modelo MLP**
*Autores:*
- *Myroslava Sánchez Andrade A01730712*
- *Karen Rugerio Armenta A01733228*
- *José Antonio Bobadilla García A01734433*
- *Alejandro Castro Reus A01731065*

*Fecha de creación: 12/09/2022*

*Última modificación: 12/09/2022*

---

### **Tipo de problema**

---

El modelo recibe una serie de variables explicativas, que dan como resultado un valor binario que determina si el usuario pagará el crédito o no:
- 0: El usuario no pagará
- 1: El usuario pagará

Es por ello que se trata de un problema de clasificación binaria, para el cual existen diversos algoritmos de inteligencia artificial que se especializan en la clasificación de los resultados.

### **Modelo utilizado**

---

Al investigar los diferentes modelos que existen para resolver problemas de análisis de clasificación encontramos un modelo el cual se ajustaba perfectamente a los parámetros y necesidades del problema. Dicho modelo se abrevia por las siglas: MLP.  Multi Layer Perceptron. Este modelo optimiza la función de pérdida de registro utilizando LBFGS o descenso de gradiente estocástico el cuál se basa en algunos hiper parámetros como lo son las épocas, el algoritmo de optimización de pesos, el número de capas profundas con sus respectivos nodos, la función de activación y el paso de entrenamiento.

Al utilizar este modelo en el reto por primera vez, nos dimos cuenta que nuestro modelo obtenía un 86% de precisión o de confianza, lo cuál nos indicaba que empezamos por un buen camino. 

### **Modificación de hiperparámetros**

---

Se realizaron modificaciones de hiperparámetros para la obtención de un mejor modelo con un nivel más alto de precisión. Los parámetros modificados se encuentran a continuación: 

-200 épocas, 2 hidden layers de 20 neuronas cada una.
![Grafica 1](./assets/200-20-20.png) 
-200 épocas, 2 hidden layers de 25 neuronas cada una.
![Grafica 2](./assets/200-25-25.png) 
-200 épocas, 2 hidden layers de 33 neuronas cada una y un learning rate de 0.6.
![Grafica 3](./assets/200-33-33-06.png) 
-300 épocas, 2 hidden layers de 30 neuronas cada una.
![Grafica 4](./assets/300-30-30.png) 

El modelo elegido consta de los siguientes parámetros:

-200 épocas, 4 hidden layers de 10 neuronas, 10 neuronas, 10 neuronas y 5 neuronas y un learning rate de 0.6
![Grafica 5](./assets/200-10-10-10-5-06.png) 


### **Resultados**

---

Se logró realizar un modelo de redes neuronales el cuál obtuvo una precisión del 87.4% al predecir si un cliente no pagaría una tarjeta de crédito al haber sido otorgado una. 

