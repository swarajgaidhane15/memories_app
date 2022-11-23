# MERN Stack with Redux toolkit and OAuth

Demo - [Click here](https://memories-app-s1ap.onrender.com/)

![image](https://user-images.githubusercontent.com/52031837/203634298-6bc46a8b-398e-4360-a815-8fb0847ff2d3.png)

### To run this application in your local machine, type in your `terminal`
```
git clone https://github.com/swarajgaidhane15/memories_app
cd memories_app
yarn install
```
- Create a file named `.env` with following content:
```
PORT=5000
MONGOURI=YOUR_MONGODB_URI
JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY
```
then, back to terminal
```
cd client
```
- Create a file named `.env` with following content:
```
REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```
then, back to terminal
```
yarn install
cd ..
npm run dev
```

- The demo should open in your default browser at `http://localhost:3000`
