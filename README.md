# Évi vital massage website

/* MAX-WITH QUERIES
For Mobile Devices – 320px — 480px
iPads and Tablets – 481px — 768px
Laptops and small screen – 769px — 1024px
Large screens and Desktops – 1025px — 1200px
TV and Extra Large Screens – 1201px and more */

## env
./functions/serviceAccountKey.json **database cred**
.env
FIREBASE_URL = **database url**
PROJECT_ID =
PRIVATE_KEY_ID =
PRIVATE_KEY = **"stringként!"**
CLIENT_EMAIL =
CLIENT_ID =
AUTH_URI =
TOKEN_URI =
AUTH_PROVIDER_X509_CERT_URL =
CLIENT_X509_CERT_URL =
UNIVERSE_DOMAIN =

A Netlify lehetőséget biztosít környezeti változók kezelésére, de a .env fájlokat nem közvetlenül támogatja deploy során. Ehelyett a Netlify UI vagy CLI segítségével adhatsz meg környezeti változókat.

Ha például a process.env.FIREBASE_URL értékét szeretnéd beállítani, azt így teheted meg:

Menj a Netlify dashboardra.
Válaszd ki a projektedet.
Kattints a "Site settings" gombra, majd válaszd ki az "Environment" szekciót.
Add meg a szükséges környezeti változókat, például FIREBASE_URL.
Alternatív megoldásként használhatod a .env fájlt helyi fejlesztéshez, de a deploy során ezeket a változókat a Netlify beállításain keresztül kell kezelni.

## letsBook

{
  "date":
  "begin": "2024-01-04T16:30:00Z",
  "end": "2024-01-04T17:00:00Z",
  "cdate": "2024-01-02T15:04:06Z",
  "email": "abcbcaabcab@abc",
  "massage":"Taptap"
  "name": "Kruller",
  "phone": "01231234567"
}