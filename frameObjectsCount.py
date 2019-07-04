import json


with open('interpolated6453372818203656817.json') as etalon:
    etalonInt = json.load(etalon)
with open('newMarkup6453372818203656817.json') as test:
    testInt = json.load(test)

# We count the summ of existing frames of objects of different types for etalon json
# Making an epty dict to store our frames
etFoundClasses = dict()
# Store there our frames names
etFramesNames = etalonInt.keys()
# This loop helps us to get from the frames rects info about object classes
for etFrameName in etFramesNames:
    rects = etalonInt[etFrameName]["rects"]
    for rect in rects:
        key = rect["object_class"]
        etFoundClasses[key] = etFoundClasses.get(key, 0) + 1


print("""Objects found on the etalon markup:\n 
    \t*vehicle: {0},
    \t*animal: {1},
    \t*human: {2}""".format(etFoundClasses["vehicle"], etFoundClasses["animal"], etFoundClasses["human"]))


# We count the summ of existing frames of objects of different types for test json
testFoundClasses = dict()
testFramesNames = testInt.keys()
for testFrameName in testFramesNames:
    rects = testInt[testFrameName]["rects"]
    for rect in rects:
        key = rect["object_class"]
        testFoundClasses[key] = testFoundClasses.get(key, 0) + 1


print("""Objects found on the testing markup:\n 
    \t*vehicle: {0},
    \t*animal: {1},
    \t*human: {2}""".format(testFoundClasses["vehicle"], testFoundClasses["animal"], testFoundClasses["human"]))
