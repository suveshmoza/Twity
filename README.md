<img src="https://i.ibb.co/Gs2FCRj/Screenshot-from-2023-05-02-13-47-56.png" alt="twity-logo" />

Twity is a Twitter-like app built with Next.js, TailwindCSS, and Firebase. It allows users to share their thoughts, ideas, and opinions with others in a quick and easy way.

# Features
- Post comments
- Edit comments
- Delete comments
- Write comments on specific posts
- User authentication and data storage with Firebase

# Technologies Used
<img src="https://skillicons.dev/icons?i=nextjs,tailwindcss,firebase" />

# Getting Started

To get started with Twity, simply clone the repository and install the necessary dependencies:

```bashCopy code
git clone https://github.com/suveshmoza/Twity.git
cd twity
npm install
```
You will also need to create a Firebase account and add your Firebase configuration information to a .env file in the root directory of the project:

```makefile
NEXT_PUBLIC_API_KEY=yourapikey
NEXT_PUBLIC_AUTH_DOMAIN=yourauthdomain
NEXT_PUBLIC_PROJECT_ID=yourprojectid
NEXT_PUBLIC_STORAGE_BUCKET=yourstoragebucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=yourmessagingsenderid
NEXT_PUBLIC_APP_ID=yourappid
NEXT_PUBLIC_MEASUREMENT_ID=yourmeasurementid
```
Once you have added your Firebase configuration information, you can start the development server:

```node
npm run dev
```
# Contributing
Contributions to Twity are welcome and encouraged! If you notice a bug, have an idea for a new feature, or would like to contribute code, please feel free to open an issue or submit a pull request.
