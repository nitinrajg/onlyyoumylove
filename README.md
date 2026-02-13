# Love Website Project

A beautiful, interactive, and romantic website template built with React, Vite, and Tailwind CSS. This project is designed to be a special digital gift, perfect for anniversaries, Valentine's Day, or just to show someone you care.

## 🌟 Features

-   **Hero Section**: A welcoming landing page with a romantic theme.
-   **Memory Gallery**: A photo gallery to showcase your favorite moments.
-   **Reasons Why**: A section to list the reasons why you love your special someone.
-   **Timeline**: A visual timeline of your relationship milestones.
-   **Love Letter**: A dedicated space for a heartfelt message.
-   **Interactive Elements**: Floating hearts, music toggle, and smooth animations.
-   **Responsive Design**: Looks great on both desktop and mobile devices.
-   **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🛠️ Technologies Used

-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
-   **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript for better development experience.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[shadcn/ui](https://ui.shadcn.com/)**: Beautifully designed components built with Radix UI and Tailwind CSS.
-   **[Framer Motion](https://www.framer.com/motion/)** (likely used for animations, check `package.json`).

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   **[Node.js](https://nodejs.org/)** (v18 or higher is recommended)
-   **npm** (usually comes with Node.js) or **bun** / **yarn** / **pnpm**

## 🚀 Installation & Setup

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <your-repo-url>
    cd "website for 14"
    ```

2.  **Install Dependencies**:
    Navigate to the project directory and run:
    ```bash
    npm install
    # or
    yarn install
    # or
    bun install
    ```

## 💻 Usage

### Development Server
To start the development server and see the website in your browser:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the site. The page will reload if you make edits.

### Building for Production
To create an optimized build for deployment:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build
To locally preview the production build:

```bash
npm run preview
```

### Linting
To run the linter and check for code issues:

```bash
npm run lint
```

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui components (Button, Card, etc.)
│   ├── HeroSection.tsx  # Main landing section
│   ├── MemoryGallery.tsx# Photo gallery section
│   ├── ReasonsSection.tsx # "Reasons why I love you" section
│   ├── TimelineSection.tsx # Relationship timeline
│   ├── LoveLetterSection.tsx # Long text message section
│   └── ...              # Other components like MusicToggle, FloatingHearts
├── pages/
│   ├── Index.tsx        # Main page assembling all sections
│   └── NotFound.tsx     # 404 Page
├── App.tsx              # Main application component & routing
├── main.tsx             # Entry point
└── index.css            # Global styles (Tailwind imports)
```

## 🎨 Customization

To make this website your own, you'll want to edit the content in the component files:

1.  **Images**: Add your own photos to the project (e.g., in a `public/images` folder or import them directly) and update `src/components/MemoryGallery.tsx` and `src/components/HeroSection.tsx`.
2.  **Text**:
    -   Update the reasons in `src/components/ReasonsSection.tsx`.
    -   Update the timeline events in `src/components/TimelineSection.tsx`.
    -   Write your own letter in `src/components/LoveLetterSection.tsx`.
    -   Update the hero text in `src/components/HeroSection.tsx`.
3.  **Music**: If there is background music, replace the audio file and update `src/components/MusicToggle.tsx` if necessary.

## 🤝 Contributing

Feel free to fork this project and submit pull requests if you have any cool ideas or improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
