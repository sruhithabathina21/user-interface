# User Profiles Modern

A modern, responsive, interactive User Profiles Management web app built with React and Tailwind CSS. Features beautiful design, smooth animations, and comprehensive CRUD operations with localStorage persistence.

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete user profiles
- **Modern Design**: Clean cards, soft gradients, and subtle shadows
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop
- **Search & Filtering**: Real-time search with debounced input and role filtering
- **Interactive Animations**: Smooth hover effects, transitions, and cursor behaviors
- **Form Validation**: Inline validation with disabled states until valid
- **Toast Notifications**: Success/error feedback for all operations
- **Dev Mode**: Simulate random errors and reset data for testing
- **Accessibility**: Full keyboard navigation and ARIA attributes
- **Loading States**: Skeleton loaders and async operation indicators

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and dev server
- **localStorage** - Client-side data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd UserProfilesModern
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📊 Data Storage

The app uses localStorage with the key `userProfilesModern` to persist data. Sample data is automatically seeded on first load.

### Sample Data Structure
```json
{
  "users": [
    {
      "id": "uuid",
      "name": "Alice Smith",
      "email": "alice@example.com",
      "role": "Admin",
      "avatar": "data:image/...",
      "createdAt": "2025-01-24T10:00:00Z"
    }
  ],
  "lastUpdated": "2025-01-24T10:00:00Z"
}
```

## 🎨 Design Features

### Color Palette
- **Primary**: #4F46E5 (Indigo)
- **Secondary**: #6366F1 (Indigo Light)
- **Background**: #F9FAFB (Gray 50)
- **Cards**: #FFFFFF (White)
- **Accent/Error**: #EF4444 (Red)

### Typography
- **Primary Font**: Inter (clean, modern)
- **Secondary Font**: Poppins (for headings)

### Cursor Behaviors
- **Buttons/Links**: `pointer` cursor with `translateY(-2px)` hover
- **Cards**: `pointer` cursor with border/background highlight
- **Disabled**: `not-allowed` cursor with opacity 0.5
- **Loading**: `wait` cursor during async operations
- **Interactive Icons**: `pointer` cursor with scale(1.06) hover

## 🔧 Development Features

### Dev Mode Toggle
Enable dev mode to simulate random network errors (10% chance) for testing error handling.

### Reset Data Button
Reset all data to sample data for testing and development.

### Async Operations
All operations include simulated 300ms delay to demonstrate loading states.

## 📱 Responsive Design

- **Mobile**: Single column layout with touch-friendly buttons
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid layout with full feature set

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Visible focus outlines and logical tab order
- **ARIA Labels**: Proper labeling for screen readers
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG compliant color combinations

## 🧪 Testing

The app includes several testing features:

1. **Dev Mode**: Toggle to simulate random errors
2. **Reset Data**: Button to restore sample data
3. **Form Validation**: Real-time validation with error messages
4. **Loading States**: Visual feedback during async operations
5. **Error Handling**: Toast notifications for success/error states

## 📁 Project Structure

```
src/
├── components/
│   ├── NavBar.jsx              # Navigation with dev mode toggle
│   ├── ProfileList.jsx         # Main profile listing with search/filter
│   ├── ProfileCard.jsx         # Individual profile card component
│   ├── ProfileModal.jsx        # Create/edit profile modal
│   ├── ConfirmActionDialog.jsx # Delete confirmation dialog
│   ├── LoadingSkeleton.jsx    # Loading state components
│   └── NotificationToast.jsx   # Toast notification system
├── hooks/
│   ├── useLocalProfiles.js     # Profile management hook
│   └── useAsyncOperation.js    # Async operation handling
├── pages/
│   └── Dashboard.jsx           # Main dashboard page
├── utils/
│   ├── localStorageHelper.js   # localStorage utilities
│   └── validators.js           # Form validation utilities
├── App.jsx                     # Main app component
├── main.jsx                    # App entry point
└── index.css                   # Global styles and Tailwind
```

## 🎯 Key Features Implemented

✅ **Modern Visual Design**: Cards, gradients, spacing, fonts  
✅ **Fully Responsive**: Mobile/tablet/desktop layouts  
✅ **CRUD Operations**: Full create, read, update, delete functionality  
✅ **Search & Filtering**: Debounced search with role filtering  
✅ **Form Validation**: Real-time validation with error states  
✅ **Loading States**: Skeleton loaders and async indicators  
✅ **Toast Notifications**: Success/error feedback  
✅ **Cursor Behaviors**: Exact implementation as specified  
✅ **Accessibility**: Keyboard navigation and ARIA labels  
✅ **Dev Mode**: Error simulation and data reset  
✅ **localStorage Persistence**: Data persists across sessions  

## 🚀 Getting Started

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Open `http://localhost:5173` in your browser
4. Start creating and managing user profiles!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
