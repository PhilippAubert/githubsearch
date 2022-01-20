The Task
Create a web application (PWA) that searches the GitHub Users API
(https://docs.github.com/en/rest/reference/search) for users and displays the result as a list.

Elements of this list can be marked as favorites.

Requirements:
- We use react.js for development
- The GitHub API is rate limited without an API key, how you handle this is up to you
- Apart from react.js use whatever libraries and architecture you like and think would be
suitable to solve the case


- Provide the results via a git repo using a git provider of your choice (github, gitlab, self-
hosted, ...)


Required: Spec Data Retrieval and Storage
- Call the GitHub search API when there is a minimum of 3 characters entered in the text input
field

- Data should update when the text input changes

- Store information of favorite status locally, so it can be used consistently in different views


Optional:

- Basic offline-first functionality, which still displays data even if the device is offline
Required: Spec Data Display

- Text input to enter queries to search for

- Listview which displays username and avatar

o Paginate while scrolling (Infinite Loader)

o Should support pull to refresh

- Clicking on an item should open a detail view showing some user data you would like to
display

- Possibility to mark users as favorites from list view and detail view

Optional:

- Listview Should be performant with bigger datasets