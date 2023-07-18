# TabLog
A Chrome/Chromium extenstions that allows you to log a tab and then send that date to a firebase database.


The reason the repo was made was due me not being able to find a good way to have !song command for twich if I was using youtube playlist.

how to setup download the folder then go to chrome://extensions/ or whatever extensions tab your browser uses click the Load unpacked

![bild](https://github.com/Kasties/TabLog/assets/59847033/01b131a5-46bf-4efc-9b7e-77a7e7a11f0e)

then select the folder. I would recommend pinning it.

The first step is to setup a Firebase Firestore its free so thats why I used it. https://firebase.google.com/
Then you need to setup a colletion

![bild](https://github.com/Kasties/TabLog/assets/59847033/603e0649-3dfd-46b8-a359-5e7d61af2479)

name it whatever you want then add a document name it whatever you want

![bild](https://github.com/Kasties/TabLog/assets/59847033/0d261978-d9d4-4422-a4b1-e32b4798ae8f)

then add a field with the name Cursong. THIS IS CASE SENSATIVE SO JUST COPY AND PAST IT.
After this just click on the addon in your browser and Enter URL https://firestore.googleapis.com/v1/projects/(project name)/databases/(default)/documents/(name of colletion)/(name of document)

So exampel name the Collection Song, the docment List then the url will be https://firestore.googleapis.com/v1/projects/(project name)/databases/(default)/documents/Song/List
If you want to know the project name  it will be after the project part of the url 

![bild](https://github.com/Kasties/TabLog/assets/59847033/495f5ed5-4cfa-4fa5-a353-c55983e80383)

To setup moobot or whatever bot you are using

![bild](https://github.com/Kasties/TabLog/assets/59847033/ed316974-d96a-437a-baac-63f6cf894c3e) 

have it fetch json data then put in the url you added to to the addon https://firestore.googleapis.com/v1/projects/(project name)/databases/(default)/documents/Song/List

![bild](https://github.com/Kasties/TabLog/assets/59847033/51413068-6e2c-4edf-a624-fdaab774b4a4)

![bild](https://github.com/Kasties/TabLog/assets/59847033/e48f336c-a21b-4bbb-b3f7-6ee400b28f06)



