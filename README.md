# Cloudinary SaaS Application

Welcome to the **Cloudinary SaaS Application**! This innovative web application empowers users to upload and manage images and videos effortlessly. With advanced features for image resizing tailored for social media and Cloudinary AI for video processing, this app ensures users can showcase their content in the best possible light.

## Features

- **Image Upload**: 
  - Users can upload images quickly and efficiently.
  - Resize images to various ratios and dimensions, ensuring optimal viewing for platforms like Instagram, Facebook, and Twitter.

- **Video Upload**: 
  - Seamlessly upload videos and utilize Cloudinary’s powerful processing features.
  - Preview the best part of the video automatically, enhancing user experience and engagement.
  - Compress videos without significant loss of quality, with detailed information on the compression applied, making file management easier.

- **User Authentication**: 
  - Secure and reliable user authentication through **Clerk**, ensuring that user data is protected and only accessible to authorized individuals.

- **Responsive Design**: 
  - Built with **Tailwind CSS**, the application features a modern, user-friendly interface that adapts beautifully to all screen sizes, enhancing usability across devices.

## Tech Stack

| Technology       | Icon                                           | Description                                                                                   |
|------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Next.js**      | ![Next.js](https://img.icons8.com/color/48/000000/nextjs.png) | A React framework for server-rendered applications, enabling efficient routing and SEO.      |
| **TypeScript**   | ![TypeScript](https://img.icons8.com/color/48/000000/typescript.png) | A superset of JavaScript that adds static types, improving code quality and maintainability. |
| **Tailwind CSS** | ![Tailwind CSS](https://img.icons8.com/color/48/000000/tailwindcss.png) | A utility-first CSS framework that facilitates rapid UI design with customizable components.   |
| **Prisma**       | ![Prisma](https://img.icons8.com/color/48/000000/prisma.png) | An ORM (Object-Relational Mapping) tool that simplifies database management and queries.     |
| **Neon**         | ![Neon](https://img.icons8.com/color/48/000000/neon.png) | A serverless database platform designed for modern applications with automatic scaling.       |
| **Cloudinary**   | ![Cloudinary](https://img.icons8.com/color/48/000000/cloudinary.png) | A cloud service for managing and optimizing images and videos with powerful AI capabilities. |
| **Clerk**        | ![Clerk](https://img.icons8.com/color/48/000000/clerk.png) | A user authentication service that provides a secure, hassle-free way to manage user sign-ins. |

## Live Demo

Check out the live application: [Cloudinary SaaS Application](https://cloudianry-saas.vercel.app)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MishraShardendu22
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your Cloudinary, Neon, and Clerk credentials:

   ```
   NEXT_PUBLIC_CLOUDINARY_URL=your_cloudinary_url
   NEXT_PUBLIC_NEON_URL=your_neon_url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.
