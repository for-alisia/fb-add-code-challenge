# How to run the app

1. Clone the app locally
2. Run 'npm install'
3. Run 'npm start'

# What tachnologies were used

An app was created with Create-React-App (no ts template). React context was used for state mamagement. React-Router-Dom (v6) was used for navigation. No additional libraries was used

# What was developer

1. Main view with Products (based on provided JSON, data are fetched locally)
2. Adds view for specific Product (click on product name to navigate)
3. Create/Edit add view (click Create button on Adds view to create or click on Add Card to edit)
4. User can change CTA text and description, upload image (no multi upload was created, as it's not clear how mock up should handle multiple images)
5. User can delete an add from Edit view by clicking on Delete button and Confirm in Popup.
6. Notification will be shown after deletion of an add and user will be redirected to a page with all adds for specific product (not to Home page, as it can be confusing for the user if he has a lot of adds and products to manage)
7. On all views user can navigate to All products page using Home icon in the header

# What can be improved and was not added due to time limitations

1. Responsice layout
2. Performance optimizations (some analog of useSelector, React.Memo, useCallback)
3. More UI features for components (closing Modal not only by click on Confirm/Cancel button, advanced validation for the components, animations for notifications, modals, more props for UI components for different scenarios)
4. Improvements for accessability
5. Multifile upload
6. Code clean up (some components could be splitted, consistent imports, better names)
7. Tests (jest + RTL) should be created
