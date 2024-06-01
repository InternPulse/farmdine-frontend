Farmdine Frontend
This is a Vite, React and Tailwindcss project.

Getting Started
This project uses npm workspaces as default monorepo architecture.

First clone the repo
git clone https://github.com/InternPulse/farmdine-frontend.git
Install all dependencies
npm install
Run the development server:
npm run dev
# or
yarn dev
# or
pnpm dev
Types
As you know by now that this is a typescript based project. Please all types must be created separately in the type or @types directly outside of the componentss folder. If your components require a custom type, create them inside a folder called types or @types and export it to be used somewhere else.

Commit Standards
Branches
dev -> pr this branch for everything frontend related
main -> dont touch this branch, this is what is running in production.
Contributions
Project X is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

Contribution Guidelines
Clone the repo git clone https://github.com/InternPulse/farmdine-frontend.git.
Open your terminal & set the origin branch: git remote add origin https://github.com/InternPulse/farmdine-frontend.git
Pull origin git pull origin dev
Create a new branch for the task you were assigned to, eg TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title : git checkout -b NA-001/Feat/Sign-Up-from
After making changes, do git add .
Commit your changes with a descriptive commit message : git commit -m "your commit message".
To make sure there are no conflicts, run git pull origin dev.
Push changes to your new branch, run git push -u origin NA-001/Feat/Sign-Up-from.
Create a pull request to the dev branch not main.
Ensure to describe your pull request.
If you've added code that should be tested, add some test examples.

Merging
Under any circumstances should you merge a pull request on a specific branch to the dev or main branch

Commit CheatSheet
Type		Description
feat	Features	A new feature
fix	Bug Fixes	A bug fix
docs	Documentation	Documentation only changes
style	Styles	Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor	Code Refactoring	A code change that neither fixes a bug nor adds a feature
perf	Performance Improvements	A code change that improves performance
test	Tests	Adding missing tests or correcting existing tests
build	Builds	Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci	Continuous Integrations	Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
chore	Chores	Other changes that don't modify, frontend or test files
revert	Reverts	Reverts a previous commit
Sample Commit Messages

chore: Updated README file := chore is used because the commit didn't make any changes to the frontend or test folders in any way.
feat: Added plugin info endpoints := feat is used here because the feature was non-existent before the commit.
Code Explanation
API Calls
A separate folder called http which contains axios.ts and index.ts files where created to handle any outgoing or incoming http request/response. the index.ts file should contain all outgoing API calls to the backend server.

❗❗Do not create any custom http calls inside a page or components. Whatever calls need to be processed by the server should be called within the index.ts file.

Custom Authentication Handler
Within the helpers folder contains two different files called withAuth.tsx and withoutAuth.tsx.

WithAuth.tsx :- contains two HOF called withUserAuth and withAdminAuth which are functions that wrap every component that needs protection or protected route components for user and admin respectively. for eg Dashboard or any other page that require the user to be loggedIn. All you have to do is import the cusstom handler and wrap your component inside it. i.e
withUserAuth(Dashboard);
withUserAuth(Promotion);
for e.g AnalyticsAndReportingLayouts or any other page that requires the user to be an admin before they access it. All you have to do is import the custom handler and wrap your component inside it. i.e

withAdminAuth(AnalyticsAndReportingLayouts);
withAdminAuth(SanctionedProducts);
WithoutAuth.tsx :- is the opposite of withAuth.tsx HOF. It only meant to be used to prevent loggedIn users from redirecting or navigating to a page. i.e when a user is loggedIn and you dont want them to view a certain page, use this function.
withoutAuth(Login);
withoutAuth(Signup);
MainLayout.tsx
Within this file contains a MainLayout component, rather than calling Footer, Sidebar, TopBar component on every file manually, all you have to do is first invoke the <MainLayout> component inside any page before adding the children of that page.

for eg

import Link from 'next/link';
import MainLayout from '../components/Layout/MainLayout';

function Home() {
  return (
    <MainLayout activePage="home" showDashboardSidebar showTopbar>
      <p className="text-dark-100">Home Page</p>
    </MainLayout>
  );
}

export default Home;
You also get to decide whether to show the footer or sidebar using the available props.