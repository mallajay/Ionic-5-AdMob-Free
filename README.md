# Ionic-5-AdMob-Free
## Admob using Ionic
Use Admob to Show Ads on your app



- Create New project
   - by using ```ionic start admob-free```
 
 - Then Serve the project by using ```ionic serve```
 - And to minimise the errror which I experinced, Build app by using ```ionic cordova run android```
 - Once build finished successfully Go to [cordova-plugin-admob-free](https://github.com/ratson/cordova-plugin-admob-free) OR <br>
 - Install 
 ```
 cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID="<YOUR_ANDROID_ADMOB_APP_ID_AS_FOUND_IN_ADMOB>"
 ```
 - After this install 
 ```
 npm install @ionic-native/admob-free
 ```
 
 ## Get ADMOB_APP_ID
   [Admob](https://apps.admob.com/v2/home?pli=1)
   
   - Add ad unit [if your  account is approved then your ad unit will active in 24 hr]
   - Till now to test the ad go to [Sample ad units](https://developers.google.com/admob/android/test-ads#sample_ad_units)
   
![](/image/1.png)
![](/image/2.png)
![](/image/3.png)
