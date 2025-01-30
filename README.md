# Profile Card with React & TypeScript

## Objective

This project is a guided learning activity to build a **Profile Card** application using **React** and **TypeScript**. It focuses on the fundamentals of component creation, passing props, styling with CSS Modules, and using dynamic rendering for multiple profile cards.

## Tools & Technologies

- **React** (Library for building user interfaces)
- **TypeScript** (Superset of JavaScript that adds static typing)
- **Vite** (Fast frontend toolchain for modern web development)
- **CSS Modules** (For scoped component styling)

## Color Palette

The following color palette was provided for styling the Profile Card:

### Primary Color:
- #1C6043
- #27865D
- #85D1B0
- #D1F3E4
- #F5FBF8

### Secondary Color:
- #2C887C
- #7FC0B7
- #ACDCD5
- #DBFFFA
- #E6FFFE

### Grey Color:
- #5A5A5A
- #B3B3B3
- #D0D2D6
- #E9E9EA
- #F8F8F8

### Black Color:
- #000000
- #242629
- #53555A
- #DBDBDC
- #F6F8F7

## Features

1. **Profile Card Component**: A reusable component displaying user information such as name, job title, description, and profile image.
2. **Dynamic Rendering**: Multiple profile cards can be rendered by mapping over an array of data.
3. **Conditional Styling**: Styling changes based on specific conditions (e.g., VIP profile card styling).
4. **Modular CSS**: CSS modules to scope styles to components.

## Setup & Installation

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/Telesphore-Uwabera/profile-card.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd profile-card
npm install
```

### 3. Start Development Server

Run the development server to start the app:

```bash
npm run dev
```

You should see the app running at [http://localhost:5173](http://localhost:5173).

## Folder Structure

```
profile-card/
├── public/
│   ├── index.html
│   └── assets/
│       └── ut.jpg
├── src/
│   ├── App.tsx
│   ├── ProfileCard.tsx
│   ├── Avatar.tsx
│   ├── ProfileCard.module.css
│   ├── Avatar.module.css
│   └── index.tsx
├── package.json
└── tsconfig.json
```

### Files Breakdown

- **App.tsx**: The main component that renders the profile cards.
- **ProfileCard.tsx**: The Profile Card component that displays individual user information.
- **Avatar.tsx**: A component that displays the user's avatar image.
- **ProfileCard.module.css**: The CSS module for styling the ProfileCard component.
- **Avatar.module.css**: The CSS module for styling the Avatar component.
- **index.tsx**: The entry point for the React app.

## Additional Features

### 1. Add More Styling

Experiment with more CSS properties and use additional colors from the provided palette to enhance the look of the profile card.

### 2. Create a List Component

Create a new component that takes an array of strings as props and renders them as an unordered list (`<ul>`, `<li>`).

### 3. Conditional Styling

Use conditional logic to modify the appearance of the profile card based on the props. For example, you can apply a special style if the profile is marked as VIP.

### 4. Render Multiple Profile Cards

You can render multiple ProfileCard components with different data by creating an array of profile objects and mapping over it in the `App.tsx` component.

## Contributors

- **Telesphore Uwabera** - Lead Developer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
