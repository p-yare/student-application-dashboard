# Course Finder AI Dashboard

🔗 **Live Demo:** https://student-application-tracker-five.vercel.app/  
📦 **GitHub Repo:** https://github.com/p-yare/student-application-dashboard

A production-ready, pixel-perfect React dashboard implementation meticulously crafted to match the Figma design specifications. This comprehensive dashboard provides an intuitive interface for managing international student applications, tracking visa processes, payments, and accessing educational resources.

## 🎯 Project Overview

This dashboard was built with a focus on:
- **100% Figma accuracy** - Every pixel, color, spacing, and component matches the design
- **Clean architecture** - No inline styles, all styling externalized to CSS files
- **Responsive design** - Seamless experience across all devices
- **Modern React practices** - Hooks, functional components, modular structure
- **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation

## ✨ Features

### 🎨 Design Implementation
- **Pixel-perfect Figma match** with exact colors, spacing, and typography
- **Fixed header** (70px height) with blue background (#226CF5)
- **Collapsible sidebar** (260px width, collapses to 70px) with circular collapse button
- **Responsive main content** with filter cards, summary statistics, and data tables
- **Fixed right sidebar** (320px width) with news, events, and contact information
- **Mobile-first responsive** design with touch-friendly interfaces

### 📱 Responsive Features
- **Mobile-first approach** with adaptive layouts
- **Collapsible sidebar** on mobile devices
- **Touch-friendly** interface elements
- **Optimized** for all screen sizes (320px and up)

### 📋 Key Components

#### 1. Header (`Header.js`)
- **Logo**: "coursefinder.ai" branding in white
- **Search bar**: Global search with icon (searches by student name/ACK number)
- **"What's New?"** link with sparkle icon
- **Notification bell**: Square button with red badge showing notification count
- **User profile**: Profile image (8px border-radius), name "Dikha Goel", dropdown chevron
- **Mobile menu**: Hamburger toggle for sidebar on mobile devices

#### 2. Sidebar Navigation (`Sidebar.js`)
- **Circular collapse button** positioned at top-right edge of sidebar
- **Navigation items** with icons:
  - Dashboard (Home icon) - Active state with blue background
  - Students (Users icon)
  - Applications (FileText icon)
  - Search Courses (Search icon)
  - Wallet (CreditCard icon)
  - Commission Payments (DollarSign icon)
  - Allied Services (Globe icon) - Dropdown menu
  - Quick Links (Link icon) - Dropdown menu
  - Learning Resources (Book icon)
- **Submit feedback** at bottom with message icon
- **Hover states** and smooth transitions

#### 3. Dashboard Content (`DashboardContent.js`)

##### Greeting Section
- "Hey, Good Morning **Dikha!**" heading
- Action buttons: "Refresh Dashboard" and "Register Student"

##### Filter Section
- **Year** dropdown (9.875rem width) with calendar icon
- **Date Created** dropdown (15.8rem width) with calendar icon
- **Select Intake** dropdown (15.06rem width) with calendar icon
- **Countries** dropdown (20.75rem width) with globe icon
- **Apply Filters** button (7.88rem width) with blue outline
- All filters with custom chevron icons and proper spacing

##### Summary Cards (`SummaryCards.js`)
- **5 metric cards** (137px × 107px each):
  - **Conditional** (18) - Blue (#226CF5)
  - **Un-Conditional** (22) - Green (#41A155)
  - **Payment Received** (30) - Yellow (#EBB925)
  - **Payment Received** (8) - Pink (#EC4899)
  - **VISA Received** (8) - Gray (#616262)
- Each card has:
  - Large number with color-coded font
  - Descriptive label
  - Action button at bottom with matching text color
  - White background with subtle shadow

##### Applications Table (`ApplicationsTable.js`)
- **Tab navigation** (3 tabs):
  - Pending On Me (15) - Active state with light blue background
  - Lorem Ipsum (12)
  - Lorem Ipsum (18)
- **Table columns** (sortable):
  - ACK. NO. (with sort icons)
  - STUDENT NAME (with sort icons)
  - UNIVERSITY (with sort icons)
  - PROGRAM (with sort icons)
  - PENDING SINCE (with sort icons)
- **15 sample applications** with realistic data
- **Pagination** (5 items per page):
  - Circular page number buttons
  - White background for active page with shadow
  - Transparent background for inactive pages
  - Arrow buttons without borders
- **Responsive table** with horizontal scroll on mobile

##### Allied Services Banner (`AlliedServicesBanner.js`)
- **Blue gradient background** (#226CF5)
- **3 carousel slides**:
  1. Overseas Education Loans
  2. Study Abroad Programs
  3. Visa Assistance
- **Circular image** on right (300px × 300px) with student photo
- **Floating emoji icons** (🔍, 📚, 🎓) with animation
- **"Get Started" button** with white background
- **3 pagination dots** at bottom (8px circles)

#### 4. Right Sidebar (`RightSidebar.js`)

##### News Bulletin
- **Card with icon**: File icon on left, blue color
- **News title**: Bold, large font
- **Description**: Gray text with "Read More" link
- **3 circular pagination dots**: Active dot in blue, others gray

##### Upcoming Events
- **Navigation buttons**: Circular prev/next buttons (36px)
- **Event image**: 180px height, 12px border-radius
- **Event title** and **date**
- **Time badge**: Gray background, large hour display, small AM/PM
- **Location** and **organizer** with icons
- **"Register Now" button**: Blue background, full width

##### Quick Links
- **5 separate white cards** with shadow
- **Blue underlined text**: Each link in its own card
- **External link icon** on right side
- **Hover effect**: Darker blue on hover

##### Contact Regional Manager
- **3 contact cards** with:
  - **Profile image** (50px circular)
  - **Name in blue** (1.125rem font)
  - **Phone | Location** on same line with separator
  - **Email in black** (not blue)

### 🎨 Design System & Styling

#### Color Palette (from Figma)
- **Primary Blue**: #226CF5 (header, buttons, active states)
- **Text Primary**: #1F2937 (headings, main text)
- **Text Secondary**: #6B7280 (descriptions, labels)
- **Border Gray**: #E5E7EB (borders, dividers)
- **Background Gray**: #F9FAFB (page background)
- **Success Green**: #41A155 (metrics)
- **Warning Yellow**: #EBB925 (metrics)
- **Danger Pink**: #EC4899 (metrics)

#### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI")
- **Headings**: Bold weight (600-700)
- **Body Text**: Regular weight (400-500)
- **Font Sizes**: Pixel-perfect from Figma (0.875rem to 2rem)

#### Spacing & Layout (Responsive Units)
- **Header Height**: 70px (fixed in pixels for consistency)
- **Sidebar Width**: 260px (expanded), 70px (collapsed) - fixed for layout
- **Right Sidebar Width**: 320px (fixed) - fixed for layout
- **Card Sizes**: **rem units** (8.56rem × 6.69rem ≈ 137px × 107px at base 16px)
- **Card Padding**: 1rem to 1.5rem (responsive to font size)
- **Gaps**: 1rem to 1.5rem (scales with user preferences)
- **Border Radius**: 0.5rem to 0.875rem (8px to 14px at base 16px)

> **Note**: Most dimensions use **rem** units for better accessibility and responsiveness. Fixed pixel values are only used for layout containers (header, sidebars) to maintain consistent structure. This allows the content to scale with user font preferences while keeping the layout stable.

#### Design Features
- **Box Shadows**: Subtle shadows matching Figma (0 2px 12px rgba)
- **Transitions**: Smooth 0.2s to 0.3s transitions
- **Hover Effects**: Background changes, opacity adjustments
- **Active States**: Blue backgrounds for selected items
- **Responsive Breakpoints**: 320px, 768px, 992px, 1200px

### ♿ Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Proper heading hierarchy

### 🚀 Performance
- Optimized component structure
- Efficient rendering
- Lazy loading ready
- Minimal re-renders

## 🛠 Technology Stack

### Core Technologies
- **React** 19.2.0 - Modern UI library with Hooks
- **React Icons** (Fi* icons from Feather Icons, HiSparkles from Heroicons)
- **Bootstrap** 5.3.8 - CSS utilities and grid system
- **Custom CSS** - All component styling externalized (no inline styles)
- **HTML5** - Semantic markup with accessibility features

### Project Architecture
- **Functional Components** - Modern React with Hooks (useState)
- **CSS Modules Pattern** - Each component has its own CSS file
- **Modular Structure** - Reusable, maintainable components
- **No Inline Styles** - All styling moved to external CSS files for better maintainability

## Installation

1. **Clone the repository** or navigate to the project directory:
```bash
cd dashboard1
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
dashboard1/
├── public/
│   ├── index.html              # Main HTML file
│   ├── manifest.json            # PWA manifest
│   └── robots.txt               # SEO robots file
├── src/
│   ├── components/
│   │   ├── Header.js            # Top navigation bar (70px fixed)
│   │   ├── Header.css           # Header styles (no inline styles)
│   │   ├── Sidebar.js           # Left navigation (260px/70px)
│   │   ├── Sidebar.css          # Sidebar styles with collapse states
│   │   ├── DashboardContent.js  # Main content wrapper
│   │   ├── DashboardContent.css # Content layout and filter styles
│   │   ├── SummaryCards.js      # 5 metric cards (137px × 107px)
│   │   ├── SummaryCards.css     # Card styles (externalized)
│   │   ├── ApplicationsTable.js # Table with tabs & pagination
│   │   ├── ApplicationsTable.css# Table, tabs, pagination styles
│   │   ├── AlliedServicesBanner.js # Blue banner carousel
│   │   ├── AlliedServicesBanner.css # Banner styles with animations
│   │   ├── RightSidebar.js      # News, events, contacts (320px)
│   │   └── RightSidebar.css     # Right sidebar component styles
│   ├── App.js                   # Root component with state
│   ├── App.css                  # App-level styles
│   ├── bootstrap-custom.css     # Bootstrap overrides
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles and CSS variables
├── package.json                 # Dependencies and scripts
├── BOOTSTRAP_USAGE.md          # Bootstrap documentation
└── README.md                    # This file
```

### Component Hierarchy

```
App
├── Header (fixed top)
├── Sidebar (fixed left, collapsible)
└── DashboardContent (main content area)
    ├── Filters Section
    ├── SummaryCards (5 metric cards)
    ├── ApplicationsTable (tabs, table, pagination)
    ├── AlliedServicesBanner (carousel)
    └── RightSidebar (fixed right)
        ├── News Bulletin
        ├── Upcoming Events
        ├── Quick Links
        └── Contact Regional Manager
```

## Usage

### Viewing the Dashboard

1. Start the development server using `npm start`
2. The dashboard will open in your default browser
3. Navigate through different sections using the sidebar
4. Use the search bar to search for students or acknowledgement numbers
5. Click on notification bell to see notifications (UI ready)
6. Use filters to refine application data
7. Sort table columns by clicking on column headers
8. Navigate through pages using pagination controls

### Mobile Usage

1. On mobile devices, click the hamburger menu icon in the header
2. The sidebar will slide in from the left
3. Click outside the sidebar or on a menu item to close it
4. All features are accessible on mobile devices

### Interactions

- **Hover effects**: Most interactive elements have hover states
- **Click interactions**: Buttons, links, and navigation items are clickable
- **Sortable columns**: Click on table headers to sort
- **Tab navigation**: Switch between different application views
- **Pagination**: Navigate through multiple pages of data
- **Dropdowns**: Expand/collapse dropdown menus in sidebar
- **Carousel**: Navigate through news items and events

## 🎨 Customization Guide

### Colors

All colors are defined based on the Figma design. To customize:

**Global CSS Variables** (`src/index.css`):
```css
:root {
  --primary-blue: #226CF5;
  --text-primary: #1F2937;
  --text-secondary: #6B7280;
  --border-gray: #E5E7EB;
  --bg-gray: #F9FAFB;
}
```

**Bootstrap Overrides** (`src/bootstrap-custom.css`):
- Custom button colors
- Form control styles
- Active states

### Component Customization

Each component has its own CSS file with **no inline styles**:

| Component | Files | Key Classes |
|-----------|-------|-------------|
| **Header** | `Header.js`, `Header.css` | `.dashboard-header`, `.header-search-input`, `.notification-badge-custom` |
| **Sidebar** | `Sidebar.js`, `Sidebar.css` | `.sidebar`, `.nav-item`, `.collapse-btn` |
| **Summary Cards** | `SummaryCards.js`, `SummaryCards.css` | `.summary-card-inner`, `.summary-card-button` |
| **Table** | `ApplicationsTable.js`, `ApplicationsTable.css` | `.applications-table-tab`, `.pagination` |
| **Right Sidebar** | `RightSidebar.js`, `RightSidebar.css` | `.news-icon`, `.event-image`, `.quick-link` |
| **Banner** | `AlliedServicesBanner.js`, `AlliedServicesBanner.css` | `.banner-content`, `.indicator` |

### Figma Design Specifications (rem-based)

> **Responsive Units**: All dimensions below use **rem** units for better responsiveness and accessibility. Pixel values are provided for reference (at base font-size: 16px).

- **Summary Card Size**: `8.56rem × 6.69rem` (≈ 137px × 107px)
- **Filter Widths**: 
  - Year: `9.875rem` (≈ 158px)
  - Date Created: `15.8rem` (≈ 253px)
  - Intake: `15.06rem` (≈ 241px)
  - Countries: `20.75rem` (≈ 332px)
  - Button: `7.88rem` (≈ 126px)
- **Border Radius**: 
  - Filters: `0.875rem` (≈ 14px)
  - Cards: `0.75rem` (≈ 12px)
  - Buttons: `0.5rem-0.75rem` (≈ 8-12px)
- **Font Sizes**: 
  - Headings: `1.125rem-2rem` (≈ 18px-32px)
  - Body: `0.875rem-1rem` (≈ 14px-16px)
- **Spacing**: 
  - Gap between cards: `1.5rem` (≈ 24px)
  - Card padding: `1rem-1.5rem` (≈ 16px-24px)

**Why rem?**
- ✅ Scales with user's browser font preferences
- ✅ Better for accessibility (respects user settings)
- ✅ Maintains proportions across different devices
- ✅ Easier responsive adjustments with media queries

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

### Breakpoints
- **Large Desktop**: 1200px and above - Full layout with all sidebars
- **Desktop**: 992px - 1199px - Sidebar remains visible
- **Tablet**: 768px - 991px - Sidebar becomes mobile toggle
- **Mobile**: 320px - 767px - Fully mobile-optimized layout

### Responsive Behavior

#### Desktop (>1200px)
- **Left Sidebar**: 260px fixed, collapsible to 70px
- **Main Content**: Fluid width between sidebars
- **Right Sidebar**: 320px fixed
- **Summary Cards**: 5 cards in a row
- **Filters**: All filters in single row

#### Tablet (768px - 1199px)
- **Sidebar**: Mobile toggle (hamburger menu)
- **Right Sidebar**: Moves below main content or hidden
- **Summary Cards**: 2-3 cards per row
- **Filters**: Wrap to multiple rows

#### Mobile (<768px)
- **Header**: Compressed with hamburger menu
- **Sidebar**: Full-screen overlay when opened
- **Summary Cards**: 1-2 cards per row or stacked
- **Filters**: Full-width dropdowns stacked vertically
- **Table**: Horizontal scroll with sticky columns
- **Pagination**: Compact circular buttons

## Build for Production

1. **Create a production build**:
```bash
npm run build
```

2. **The build folder** will contain the optimized production files

3. **Serve the build** using a static file server or deploy to your hosting service

## Testing

Run the test suite:
```bash
npm test
```

## Performance Optimization

- Components are optimized for minimal re-renders
- CSS is organized for efficient loading
- Images are optimized (use actual images in production)
- Lazy loading can be implemented for large lists

## Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Color contrast compliance

## 🚀 Key Implementation Highlights

### Code Quality
✅ **No Inline Styles** - All styling externalized to CSS files for maintainability  
✅ **Modular Architecture** - Each component is self-contained with its own CSS  
✅ **Semantic HTML** - Proper use of HTML5 elements  
✅ **Accessible** - ARIA labels, keyboard navigation, screen reader support  
✅ **Responsive** - Mobile-first approach with media queries  

### Figma Accuracy
✅ **Exact Colors** - All colors match Figma hex values  
✅ **Precise Spacing** - rem units for exact spacing from Figma  
✅ **Typography** - Font sizes, weights, and line heights match design  
✅ **Component Sizes** - Cards, buttons, inputs match pixel dimensions  
✅ **Border Radius** - All rounded corners match Figma specs  

### Features Implemented
✅ **Collapsible Sidebar** - Circular button at top-right edge  
✅ **Sortable Table** - Click headers to sort by any column  
✅ **Pagination** - Circular page buttons with active state  
✅ **Tab Navigation** - Pill-style tabs with active state  
✅ **Filter System** - Custom dropdowns with icons  
✅ **Carousel Components** - News bulletin and Allied Services banner  
✅ **Contact Cards** - Profile images with formatted information  

## 🔄 Future Enhancements

### Backend Integration
- [ ] Connect to REST API for real data
- [ ] Implement authentication and authorization
- [ ] Real-time notifications via WebSockets
- [ ] Data persistence and state management (Redux/Context API)

### Features
- [ ] Advanced filtering with multiple criteria
- [ ] Export to Excel/PDF functionality
- [ ] Bulk actions on table rows
- [ ] In-line editing of applications
- [ ] File upload for documents
- [ ] Chart visualizations for metrics
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)

### Performance
- [ ] Lazy loading for large tables
- [ ] Virtual scrolling for better performance
- [ ] Code splitting and bundle optimization
- [ ] Progressive Web App (PWA) features
- [ ] Image optimization and lazy loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Development Notes

### Design Decisions
1. **No Inline Styles**: All styles moved to external CSS for better maintainability
2. **Component Structure**: Each component has dedicated JS and CSS files
3. **Responsive First**: Mobile-first approach with progressive enhancement
4. **rem-based Sizing**: Most dimensions use rem units instead of pixels
   - **Why rem?** Scales with user's browser font settings (accessibility)
   - Content, padding, gaps, font sizes: **rem** (responsive)
   - Layout containers (header, sidebars): **pixels** (fixed structure)
   - Result: Better accessibility while maintaining consistent layout
5. **Sample Data**: 15 application records for demonstration purposes
6. **Carousel Components**: 3 slides each for news and services

### Known Considerations
- This is a **frontend-only** implementation
- Data is currently static (hardcoded sample data)
- Backend API integration required for production use
- Authentication/authorization not implemented
- Real-time features require WebSocket integration

## 📚 Documentation

- **Figma Design**: Reference for all visual specifications
- **BOOTSTRAP_USAGE.md**: Bootstrap customization documentation
- **Component Comments**: Each component has inline documentation

## 👨‍💻 Development Information

**Built with attention to:**
- Pixel-perfect accuracy to Figma design
- Clean, maintainable code structure
- Modern React best practices
- Accessibility standards (WCAG)
- Responsive design principles
- Performance optimization

---

**📌 Note**: This is a comprehensive frontend implementation matching the Figma design. Backend integration, API connections, authentication, and real-time features would need to be added for full production functionality.
