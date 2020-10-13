##### Build instructions

1. Open the `PushNotification` directory
2. Run `npm install` in `PushNotification directory`. This should download and create the directories for the project.
3. Run `npm run android` to start the server to deliver the bundle url. Make sure this is running before you start your application.
4. Go to console and find Device Token Which is in first screen
5. put server key and device token here and curl it
   curl -X POST \
    https://fcm.googleapis.com/fcm/send \
    -H 'Authorization: key=SERVER_KEY' \
    -H 'Content-Type: application/json' \
    -H 'Host: fcm.googleapis.com' \
    -d '{
   "to" : "DEVICE_TOKEN",
   "data" : {
   "body" : "Body of Your Notification in Data",
   "title": "Title of Your Notification in Title",
   "key_1" : "Value 1",
   "key_2" : "Value 1"
   }
   }'

##### iOS specific build instructions

2. Open the `venido_cab` directory
3. Run `npm install` in `venido_cab directory`. This should download and create the directories for the project.
4. Run `npm run ios` to start the server to deliver the bundle url. Make sure this is running before you start your application.
