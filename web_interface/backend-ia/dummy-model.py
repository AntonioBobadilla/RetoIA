import sys
from io import StringIO
from joblib import load
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import uuid
import json 


df = pd.read_csv(StringIO(sys.argv[1]), sep=",", header=None)

clp = load("MLmodel.joblib")

prediction = clp.predict(df)

unique, counts = np.unique(prediction, return_counts=True)
plt.pie(counts, labels=unique, autopct="%1.1f%%", )

id = str(uuid.uuid4())

plt.savefig("./api-imgs/"+id+".png", dpi=200, transparent=False)

prediction = prediction.tolist()

json_object = json.dumps({"results": prediction, "id": id}) 
print(json_object)

#print(prediction)