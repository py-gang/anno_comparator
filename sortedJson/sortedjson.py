import requests
import json

with open('interpolated6453372818203656817.json') as etalon:
    etalonInt = json.load(etalon)
# Placeholder for second json
# with open('') as test:
#    testInt = json.load(test)

# We need to sort our frames in json by growing
def BubbleSort(etalonInt):
    for keys in range(len(etalonInt)-1, 0,-1):
        for items in range(keys):
            if etalonInt[i]>etalonInt[i+1]:
                temporary = etalonInt[i]
                etalonInt[i] = etalonInt[i + 1]
                etalonInt[i + 1] = temporary
