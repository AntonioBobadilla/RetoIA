from sklearn.neural_network import MLPClassifier
from joblib import dump

x = [[0., 0.], [1., 1.]]
y = [0, 1]

clp = MLPClassifier(solver="lbfgs", alpha=1e-5, hidden_layer_sizes=(5, 2), random_state=1)
clp.fit(x, y)

# clp.predict([[2., 2.], [-1., -2]]) # [1, 0]

dump(clp, "dummy-model.joblib")