# 🏡 Luxury Rentals

A modern **Villa & Luxury Property Rental Website** built using **React.js,
Vite, and React Router DOM**. The project allows users to explore luxury
villas, view detailed property information, discover different regions and
property specialities, learn about the platform, and access contact
information.

The application focuses on a clean and responsive user interface, reusable
React components, centralized property data, dynamic routing, and a simple
project structure that can be extended in the future.

---

## ✨ Features

- 🏡 Luxury villa rental interface
- 📱 Responsive and mobile-friendly design
- 🧭 Client-side navigation
- 🍔 Responsive hamburger menu
- 🌟 Hero section
- 🏠 Top Pick Villas section
- 🏘️ Complete villa listing
- 📄 Dynamic villa details pages
- 👥 Guest capacity information
- 🛏️ Bedroom information
- 🛁 Bathroom information
- 📐 Property area information
- 💶 Daily rental pricing
- ⭐ Villa rating data
- 🌄 Region showcase
- ⚡ Property specialities
- 🤝 Become a Host section
- 📖 About Us page
- 📞 Contact page
- 📜 Terms & Conditions page
- 🗺️ Google Maps integration
- 🔗 Social media icons
- 🎨 Custom CSS styling
- 🧩 Reusable React components
- 📦 Centralized villa data
- 🔄 Dynamic property routing
- ⚡ Vite production build

---

## 🏠 Project Overview

Luxury Rentals is a frontend-focused property rental website designed to
showcase premium villas in an attractive and organized manner.

The website provides users with an experience similar to a luxury property
discovery platform. Visitors can explore featured villas, browse all
available properties, open individual villa details, discover different
regions, view property facilities, learn about the company, and access
contact information.

The project demonstrates several important frontend development concepts,
including:

- Component-based architecture
- React state management
- React Router navigation
- Dynamic URL parameters
- Reusable components
- Static data management
- Responsive design
- CSS-based layouts
- Vite development workflow
- Production builds

---

## 🌐 Website Sections

The homepage contains the following major sections:

1. Hero Section
2. Top Pick Villas
3. Our Regions
4. Our Properties Specialities
5. Become a Host
6. About
7. Contact
8. Footer

The application also provides separate pages for:

- About Us
- Contact
- All Villas
- Individual Villa Details
- Terms & Conditions

---

## 🌟 Hero Section

The Hero Section provides the first introduction to the website.

It contains the main heading:

> BE OUR GUEST

and the supporting message:

> LIVE LIKE A KING IN OUR BEST HOUSES

The section is designed to communicate the luxury property rental concept
immediately when a visitor opens the website.

---

## 🏡 Top Pick Villas

The homepage contains a **Top Pick Villas** section that highlights a
selection of featured properties.

The component imports the centralized villa data from:

`src/villas.js`

The first three villas are displayed using:

`villas.slice(0, 3)`

Each villa is presented using a reusable **property card**.

### 🏠 Property Card Includes

- 🖼️ Property image
- 📍 Location
- 🏷️ Property category
- 🏡 Villa name
- 👥 Number of guests
- 🛏️ Number of bedrooms
- 📐 Property area
- 🛁 Number of bathrooms
- 💶 Daily rental price

Clicking a villa card navigates the user to its individual dynamic details
page.

## 🏘️ All Villas

The **All Villas** page displays the complete collection of properties.

The page dynamically loops through the `villas` array and creates a
reusable card for each property.

The total number of properties is displayed using:

`villas.length`

This means the property count automatically updates whenever properties are
added or removed from the centralized villa data.

Each villa card links to a dynamic route based on its ID.

### 🔗 Example Routes

- `/villa/1`
- `/villa/2`
- `/villa/3`

## 📄 Individual Villa Details

Each property has its own **dynamic details page** using the route:

`/villa/:id`

### 🔗 Example Routes

- `/villa/1`
- `/villa/2`
- `/villa/5`
- `/villa/9`

The `SingleVilla` component uses React Router's `useParams()` hook to obtain
the villa ID from the URL.

The ID is converted into a number and compared with the IDs stored inside
the `villas` array. The matching property is then displayed.

### 🏡 Villa Details Include

- 🏷️ Villa name
- 🖼️ Main property image
- 🌄 Additional property images
- 📍 Location
- 👥 Guest capacity
- 🛏️ Bedrooms
- 🛁 Bathrooms
- 📐 Property area
- 🕐 Check-in information
- 🕐 Check-out information
- 🗺️ Google Maps location

This approach allows one reusable component to display multiple properties
instead of creating a separate component for every villa.

## 🌄 Our Regions

The **Our Regions** section presents different types of destinations
available through the platform.

Currently, the project includes:

- 🌄 **Mountains**
- 🌊 **Coastline**

Each region contains:

- 🖼️ Region image
- 📍 Region name
- 🏠 Property count

The region section can later be extended with interactive filtering so
users can select a region and view matching properties.

---

## ⚡ Our Properties Specialities

The **Our Properties Specialities** section highlights facilities and
experiences associated with the properties.

Currently included specialities are:

- 🌊 **Seafront**
- 🐶 **Pet Friendly**
- 🚗 **Electric Car**
- 🏋️ **Fitness/Gym**
- ⛵ **Boat Morning**

The project uses the `react-icons` package for the icons.

The specialities are stored inside an array and rendered using JavaScript's
`.map()` method.

This makes the section easy to maintain and extend with additional
facilities.

## 🤝 Become a Host

The **Become a Host** section is designed for property owners who may want
to partner with the platform.

The section highlights the benefits of listing a property and includes the
following call-to-action:

- **JOIN TODAY**

Currently, this section is a frontend presentation only.

In the future, it can be connected to:

- 📝 Host registration system
- 🏠 Property submission system
- 📊 Host dashboard

## 📖 About Us

The project contains an **About** section on the homepage and a dedicated
**About Us** page.

The content focuses on:

- 🏡 **Elegant properties**
- 🏗️ **Modern architecture**
- ✨ **Premium finishes**
- 🛋️ **Comfortable spaces**
- 📍 **Prime locations**
- 🔒 **Privacy**
- 💎 **Luxury lifestyle**
- 🌿 **Refined living experiences**

The dedicated **About Us** page also demonstrates component reuse by
including the smaller `About` component.

This helps reduce unnecessary duplication and keeps the application
structure organized and maintainable.

## 📞 Contact

The **Contact** page provides visitors with information for connecting with
the platform.

It contains:

- 📱 **Phone number**
- 📧 **Email address**
- 📍 **Address**
- 🔗 **Social media icons**
- 📝 **Contact form**

The current contact form provides a frontend interface for users to enter
their information and messages.

At the moment, the form does not send information to a backend server or
database. It can later be connected to an API or external service for
storing contact messages and sending notifications.

## 📜 Terms & Conditions

The application contains a dedicated **Terms & Conditions** page.

The page covers topics such as:

- **Acceptance of Terms**
- **Use of the Website**
- **Privacy Policy**
- **Intellectual Property**
- **Limitation of Liability**
- **Governing Law**
- **Contact Information**

The page can be accessed through the website footer.

## 🧭 Navigation

The application uses a reusable **Navbar** component for website navigation.

The navigation contains links to:

- **ABOUT US**
- **VILLAS**
- **CONTACT**

The website logo navigates the user back to the homepage.

A responsive **hamburger menu** is available for smaller screen sizes.

The hamburger menu state is managed using React's `useState()` hook.

## 🦶 Footer

The reusable **Footer** component is displayed throughout the application.

It contains:

- Website name
- Website description
- Home link
- Terms & Conditions link
- Contact link
- Phone number
- Email address
- Copyright information

The Footer uses React Router's `useLocation()` hook to determine whether the
user is currently on the homepage.

Based on the current route, different CSS classes are applied to the Footer.

## 🧩 Component Architecture

The application follows a component-based React architecture.

### 📁 Page-Level Components

Page-level components are organized inside:

`src/components/`

The main page components include:

- **Home**
- **AboutUs**
- **Contact**
- **Villas**
- **SingleVilla**
- **TermsAndConditions**
- **Navbar**
- **Footer**

### 🧱 Reusable SubComponents

Smaller reusable homepage sections are organized inside:

`src/SubComponents/`

The reusable subcomponents include:

- **About**
- **Contact**
- **HeroSection**
- **Host**
- **OurSpecialities**
- **Regions**
- **TopVillas**

This separation makes the project easier to understand, maintain, and extend.

## 🛠️ Technologies Used

### Frontend

- **React.js** – Used to build the user interface with reusable components.
- **Vite** – Used as the development server and production build tool.
- **JavaScript ES6+** – Used for application logic and data handling.
- **CSS** – Used for styling, layouts, responsiveness, and visual design.
- **React Router DOM** – Used for client-side navigation and dynamic routes.
- **React Icons** – Used for icons throughout the website.

## 📦 Dependencies

### Main Dependencies

- `react`
- `react-dom`
- `react-icons`
- `react-router-dom`

### Development Dependencies

- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react-swc`
- `eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `vite`

## 📂 Project Structure

```text
project/
│
├── public/
│   ├── about.jpg
│   ├── contact.jpg
│   ├── host.jpg
│   ├── host2.jpg
│   ├── landing.jpg
│   ├── people.jpg
│   ├── people2.jpg
│   ├── region1.jpg
│   ├── region2.jpg
│   ├── villa1.jpg
│   ├── villa2.jpg
│   ├── villa3.jpg
│   ├── villa4.jpg
│   ├── villa5.jpg
│   ├── villa6.jpg
│   ├── villa7.jpg
│   ├── villa8.jpg
│   ├── villa9.jpg
│   └── villa10.jpg
│
├── src/
│   ├── components/
│   │   ├── AboutUs/
│   │   │   └── AboutUs.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── TermsAndConditions/
│   │   │   ├── TermsAndConditions.css
│   │   │   └── TermsAndConditions.jsx
│   │   └── Villa/
│   │       ├── SingleVilla.jsx
│   │       └── Villas.jsx
│   │
│   ├── SubComponents/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Host.jsx
│   │   ├── OurSpecialities.jsx
│   │   ├── Regions.jsx
│   │   └── TopVillas.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── villas.js
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 📁 Important Files

### `src/main.jsx`

`main.jsx` is the entry point of the React application.

It creates the React root and renders the `App` component inside the HTML element with the ID:

```text
root
```

React Strict Mode is enabled during development.

### `src/App.jsx`

`App.jsx` is the main application component.

It imports the page components, navigation components, and main stylesheet.

It also configures the React Router routes.

The main routes are:

```text
/                    → Home
/aboutus             → About Us
/contact             → Contact
/termsandconditions  → Terms & Conditions
/villas              → All Villas
/villa/:id           → Individual Villa
```

The `Navbar` and `Footer` components are rendered around the routed content.

### `src/villas.js`

This file contains the centralized static villa data.

Each villa object contains information such as:

- `id`
- `name`
- `location`
- `category`
- `guests`
- `bedrooms`
- `bathrooms`
- `squareMeter`
- `rating`
- `image`
- `dailyRent`

Example:

```js
{
  id: 1,
  name: "Villa Luna",
  location: "Greece",
  category: "Mountains",
  guests: 11,
  bedrooms: 6,
  bathrooms: 10,
  squareMeter: "400",
  rating: 4.7,
  image: "/villa1.jpg",
  dailyRent: "240"
}
```

The application imports this array wherever villa information is required.

## 🔄 Application Flow

The basic application flow is:

```text
User
  ↓
React Application
  ↓
main.jsx
  ↓
App.jsx
  ↓
React Router
  ↓
Selected Page Component
  ↓
Reusable Components
  ↓
UI displayed to the user
```

When the website starts, `main.jsx` loads the React application.

`App.jsx` contains the router and determines which page should be rendered according to the current URL.

For example:

```text
/                    → Home
/aboutus             → AboutUs
/contact             → Contact
/villas              → Villas
/villa/1             → SingleVilla
/termsandconditions  → TermsAndConditions
```

## 🏘️ Villa Data Flow

The villa data follows a centralized flow:

```text
villas.js
   ↓
TopVillas / Villas
   ↓
Villa Card
   ↓
User Click
   ↓
/villa/:id
   ↓
SingleVilla
   ↓
useParams()
   ↓
Matching Villa
   ↓
Villa Details
```

This approach avoids duplicating property information across multiple components.

Adding a new property only requires adding another object to `villas.js`.

## 🔗 Dynamic Routing

The application uses React Router's `useParams()` hook to retrieve the dynamic villa ID.

The route is:

```text
/villa/:id
```

This route can represent any villa.

For example, when a user visits:

```text
/villa/5
```

The component receives:

```text
id = "5"
```

The ID is converted into a number and compared with the IDs stored inside the villa array.

The matching villa is then rendered on the page.

## 🎨 Styling

The application uses CSS for its overall visual design.

The main stylesheet is:

```text
src/App.css
```

The Terms & Conditions page also has a dedicated stylesheet:

```text
src/components/TermsAndConditions/TermsAndConditions.css
```

The CSS handles:

- Page layouts
- Navigation
- Villa cards
- Images
- Typography
- Buttons
- Sections
- Footer
- Responsive layouts
- Mobile navigation
- Villa details
- Spacing and alignment

## 🖼️ Static Assets

Website images are stored inside:

```text
public/
```

They can be referenced directly from React components.

For example:

```jsx
<img src="/villa1.jpg" alt="Villa Luna" />
```

Files inside the `public` directory are available from the website root.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/PrakharBarsainya/Luxury-Rentals.git
```

Move into the project directory:

```bash
cd project
```

Install all project dependencies:

```bash
npm install
```

## 💻 Run Locally

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173
```

Open the provided URL in a browser to view the website.

## 🏗️ Production Build

To create an optimized production build, run:

```bash
npm run build
```

Vite generates the production files inside:

```text
dist/
```

The generated `dist` folder contains the optimized files required for deployment.

## 🔍 Preview Production Build

After creating the production build, run:

```bash
npm run preview
```

This allows the production version of the website to be tested locally before deployment.


## 📜 Available Scripts

### Development, Production Build, Preview & Lint

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

- `npm run dev` — Starts the Vite development server.
- `npm run build` — Creates the optimized production build.
- `npm run preview` — Runs a local preview of the production build.
- `npm run lint` — Runs ESLint to check the source code.


## 🚀 Deployment
The project is a Vite-based React frontend and can be deployed using
frontend hosting platforms such as:

- Render
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
The production build command is:

```bash
npm run build
```

The generated deployment directory is:
```text
dist
```

The hosting provider should serve the contents of this directory.

## 🌐 Render Deployment
For a Render Static Site, the basic configuration can be:

### Build Command:
```bash
npm run build
```

### Publish Directory:
```text
dist
```

After deployment, Render provides a public URL for the application.

The final live URL can be added to the Live Demo section of this
README.

## 🔐 Environment Variables

The current version of the project does not require environment variables
because the application uses static villa data.

If APIs, authentication, databases, or third-party services are added in
the future, environment variables can be introduced.

For Vite frontend variables, the variable name should normally use the
`VITE_` prefix.

### Example

```env
VITE_API_URL=https://example.com/api
```

## 🛡️ Git & .gitignore

Git is used to track changes in the project and manage the source code
through version control.

Generated dependencies, build files, and environment configuration files
should not normally be committed to the repository.

### Recommended `.gitignore`

```text
node_modules/
dist/
.env
.env.local
```

## 🧪 Testing Checklist

Before deploying the application, verify the following:

- 🏠 Homepage loads correctly
- 🧭 Navbar links work
- 🍔 Hamburger menu works on smaller screens
- 🏡 Villa cards display correctly
- 🌟 Top Pick Villas displays correctly
- 🏘️ All Villas page displays all properties
- 📄 Villa detail pages open correctly
- 🔗 Dynamic villa IDs work
- 📖 About Us page works
- 📞 Contact page works
- 📜 Terms & Conditions page works
- 🦶 Footer navigation works
- 🖼️ Images load correctly
- 🗺️ Google Maps loads correctly
- 📱 Website is responsive
- ⚠️ No major console errors appear
- 🏗️ Production build completes successfully

### Production Testing

Create the production build:

```bash
npm run build
npm run preview
```

## ⚠️ Current Limitations

This project is currently a frontend-focused property rental interface.

The following features are not connected to a real backend:

- 🔐 User authentication
- 🏠 Real property booking
- 💳 Online payments
- 📅 Property availability
- 🗄️ Database storage
- 📧 Contact form submission
- 🤝 Host account management
- 🛠️ Admin dashboard
- 🔎 Villa search
- 🎯 Villa filtering
- ↕️ Villa sorting
- 💰 Real-time pricing
- 📋 Reservation management

The current property information is stored statically in:

```text
src/villas.js
```

## 🔮 Future Improvements

The project can be expanded into a complete property rental platform.

Possible improvements include:

- 🔐 User authentication
- 👤 User profiles
- 🏠 Host registration
- 🏘️ Property submission system
- 🛠️ Admin dashboard
- 📅 Booking and reservation system
- 🔎 Villa search
- 🎯 Advanced property filtering
- ↕️ Sorting by price and rating
- 💳 Online payment integration
- 📧 Email notifications
- ❤️ Favorite properties
- ⭐ Customer reviews and ratings
- 🗓️ Real-time availability
- 🗺️ Location-based property search
- ☁️ Cloud image storage
- 🗄️ Database integration
- 🔒 Backend API
- 🛡️ Role-based authorization
- 📱 Improved mobile experience
- 🔍 SEO improvements
- ⚡ Performance optimization
- 🤖 CAPTCHA and spam protection

## 📈 Possible Future Backend Architecture

If a backend is added in the future, the application can follow an
architecture similar to:

```text
React Frontend
      ↓
REST API
      ↓
Node.js / Express
      ↓
Controllers
      ↓
Database Models
      ↓
MongoDB
```

## 📊 Current Project Status

| Feature | Status |
|---|---|
| Frontend | ✅ Completed |
| React Components | ✅ Completed |
| React Router | ✅ Integrated |
| Dynamic Villa Routes | ✅ Completed |
| Static Villa Data | ✅ Completed |
| Responsive Navigation | ✅ Implemented |
| About Page | ✅ Completed |
| Contact Page | ✅ Completed |
| Terms Page | ✅ Completed |
| Google Maps | ✅ Integrated |
| Production Build | ✅ Supported |
| Backend | ⏳ Future Improvement |
| Database | ⏳ Future Improvement |
| Authentication | ⏳ Future Improvement |
| Booking System | ⏳ Future Improvement |
| Payment System | ⏳ Future Improvement |

## 🌍 Live Demo

The project is deployed and available online:

https://luxury-real-estate-cyan.vercel.app/

## 💻 GitHub Repository

The source code is available on GitHub:

https://github.com/PrakharBarsainya/Luxury-Rentals

## 👨‍💻 Author

**Prakhar Barsainya**

Built with:

- React.js
- Vite
- React Router DOM
- React Icons
- JavaScript
- CSS

## 📌 Project Summary

**Luxury Rentals** is a responsive React-based luxury villa rental
interface that demonstrates practical frontend development concepts.

The project uses:

- 🧩 Reusable React components
- 🏠 Centralized property data
- 🔗 Dynamic routing
- 📱 Responsive navigation
- 🖼️ Static assets
- ⚡ Vite for development and production builds

The architecture is intentionally simple and easy to extend. New villas can
be added to `villas.js`, reusable sections can be added to `SubComponents`,
and additional pages can be registered through `App.jsx`.

With future backend integration, the current frontend can be expanded into a
complete property rental platform with:

- 🔐 User authentication
- 📅 Booking and reservation management
- 💳 Online payments
- 🗓️ Real-time property availability
- 🤝 Host features
- ⭐ Customer reviews
- 🛠️ Administrative controls