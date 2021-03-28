# FindMind

## Introduction

Welcome to my submission project for FindMind Analytics in which I made a nice little task management system in React/Redux and using Axios.

## Launching

There's a pretty standard procedure for checking out the end result. Simply:

1. Clone this repository on your local system
2. `cd` into the find-mind directory using the command `cd find-mind` in the command line
3. Use `yarn start` (or `npm start`) and wait a few seconds and the project should open up in `localhost:3000`

If you followed the above steps correctly you should be good to go and a sign-in page should show up.

## Navigation

### Sign In page

For the current version, no sign-in authentication has been set up and the page is displayed solely for design purposes. In order to proceed to the dashboard, simply press either of the `Log In` or the `Sign Up` buttons

### Dashboard

This is the main page of the project. The simple task-management system consists of a number of "lists" (sample "My Tasks" shown).

You can add a new task in any list by pressing the `+ Add task` button. You will be prompted to enter the Title and Description of the new task and once you enter those, the new task should appear in the list.

You can add a new list in the dashboard by pressing the `+` button in the bottom right corner. You will be prompted to enter the name of the list and the new list would appear on the dashboard.

You can redirect to the signin page by simply clicking the logout button on the top-left.

## Versions

This concludes the features that this version of the project has. It is still in a work in progress.

### Features

Some of the features that I would like to implement in the future (in no particular order) are:

1. ✔ Task completion - Whenever a user clicks the icon next to a task, it should mark it as completed and move to a separate section in the list and appear green. (Part of this is code already implemented and can be seen in `src/components/DashComponents/js`)
2. 🖊 Task edit (and deletion) - A little option menu for each task using which a user can edit or delete existing tasks
3. 📃 Input form - A form input to take in details for the Task/List Heading and description along with a date field that denotes the deadline for each task (this date element already exists and can be seen whenever a user enters a new task. However, no actual date is queried from the user and it just defaults to arbitrarily chosen `17 Aug 2021`)
4. 💼 Local Storage - Whatever data a user enters into the dashboard should be saved in the local storage and be retrieved from there whenever the page is visited again in the future. As a second step, this may simply be linked to the account a user is logged into but this can only be implemented after the sign-in authentication.
5. 📝 Documentation - There is not a lot of documentation in the existing code and so I would like to implement the same to make it easier for open source developers to work on the code.

### Contributing

In case you find this project interesting and are willing to help me improve on it or find a bug, feel free to open an issue or write some code and send a pull request. There are no contributing guidelines as of yet so you can contribute in any way you want. Every a little bit helps!

## Tech stack used:

<img align="left" alt="HTML5" width="52px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" title="HTML"/>
<img align="left" alt="CSS3" width="52px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" title="CSS"/>
<img align="left" alt="JavaScript" width="52px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"  title="JavaScript"/>
<img align="left" alt="React" width="52px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" title="React"/>
<img align="left" alt="Axios" width="52px" src="https://avatars.githubusercontent.com/u/32372333?s=200&v=4" title="Axios"/>