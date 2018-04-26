import cv2;
import numpy as np
from datetime import datetime, timedelta
import base64
import requests
from PIL import Image

faceDetect = cv2.CascadeClassifier('haarcascade_frontalface_default.xml');
cam = cv2.VideoCapture(0);
num = 0
dateno =datetime.now()
while(True):
    ret,img=cam.read();
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces=faceDetect.detectMultiScale(gray,1.3,5);
    while len(faces) > 0 and  datetime.now() >= dateno + timedelta(seconds=10):
        cv2.imwrite('opencv'+str(num)+'.jpg',img)
        with open('opencv'+str(num)+'.jpg', "rb") as image_file:
        	encoded_string = base64.b64encode(image_file.read())
        r = requests.post("http://localhost:3000/opencv/", data={'img': encoded_string})
        print(r.status_code, r.reason , r.text)
        num = num+1
        dateno = datetime.now()
    for(x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,0,255),2)
    cv2.imshow("Face",img);
    if(cv2.waitKey(1)==ord('q')):
        break;
cam.release()
cv2.destroyAllWindows()
