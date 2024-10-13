# Vue.js Dashboard Implementation

## Description

This project is a functional implementation of an analytics dashboard based on the provided Figma design. The goal was to translate the visual design into a responsive and interactive application using Vue.js, TypeScript, Vuex for state management, and Vue Router for navigation.

### Ideas and Planning

Upon reviewing the Figma design, I focused on implementing two primary pages from the dashboard. My approach involved:

1. **Component Structure**: Breaking down the dashboard into reusable components (e.g., Header, Sidebar, Charts, and Cards) to maintain a clean and organized codebase.
2. **State Management**: Utilizing Vuex to manage the application state efficiently, particularly for the data displayed in tables across the two pages implemented.
3. **Routing**: Implementing Vue Router to facilitate navigation between different sections of the dashboard and handling missing routes with a 404 page, ensuring a smooth user experience.
4. **Interactivity**: Adding interactivity such as hover states and click actions to enhance user engagement and overall usability.
5. **Lazy Loading**: Implementing lazy loading for images and routes by dynamically importing components, which helps optimize the application’s performance and reduces initial load times.
6. **Static Typing with TypeScript**: Implementing static typing throughout the application using TypeScript to enhance code quality and reduce runtime errors.
7. **SVG Components**: Creating reusable components based on SVGs to represent different states of elements more efficiently, rather than having multiple separate SVG files.

### Execution

The implementation consists of:

- **Two Main Pages**: The primary dashboard view and the 'People' page based on the sidebar links.
- **Reusable Components**: Components created for charts, select input, and navigation elements to keep the design consistent and modular.
- **State Management with Vuex**: State management implemented to handle data flow throughout (in this case between both pages implemented) the application efficiently.
- **Routing with Vue Router**: Navigation implemented using Vue Router to switch between different pages seamlessly, with dynamic imports for lazy loading.
- **Styling**: Vanilla CSS was used for styling to maintain consistency with the design and enhance maintainability.

## Areas for Improvement

While the implementation fulfills the basic requirements, there are areas where improvements could be made:

1. **Accessibility Features**: Although basic accessibility practices were implemented, a more thorough audit could enhance usability for users with disabilities.
2. **Unit Testing**: Implementing unit tests for components and Vuex store actions could improve reliability and facilitate future updates.
3. **Performance Optimization**: Exploring additional performance optimization techniques could further improve the application's responsiveness.

4. **Component Decomposition**: Some larger components could be broken down into smaller, more focused units. For instance, complex components like charts or data tables could be split into subcomponents for individual elements to improve readability and reusability.
5. **Folder Structure Organization**: The project structure could be improved by organizing files into more intuitive folders. For example:
   - Grouping all components into a `components` directory.
   - Creating subdirectories within `components` for different types of components (e.g., `charts`, `forms`, `navigation`).
   - Separating styles into a `styles` folder to maintain a clear distinction between component logic and styling.
   - Moving utility functions into a `utils` folder to promote better organization and easier access.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/dashboard-implementation.git
   ```

2. **Navigate into the project directory**:

```
cd analytics-dashboard
```

3. **npm install**:

```
npm install or yarn install
```

3. **Run the application**:

```
npm run dev
```
