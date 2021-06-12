# Onboarding Documentation 💻

---

### Logistics

The admin directory holds our [meeting records](./admin/meetings) and [branding](./admin/branding). Also in the admin directory is our mid-quarter [status video](./admin/videos) and our [group contract](./admin/misc). Standups and discussion among each sub-team occurred in Slack.

To get started, here are invite links to the workspaces we use for our project:

- [Slack](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
  
- [Shared Google Drive](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
  
- [Zoom Meetings](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
  
- [Miro](https://miro.com/welcomeonboard/bU5vaFB1c0cxaHZmSlVXRGM1bmhkMG9leURuRm80UlZldm1kc2lyMUpvVXFtaFZ5RnJJQ3NNblJPTklycVo4V3wzMDc0NDU3MzU3NzE5MjM5Mzkz)

- [Figma](https://www.figma.com/file/fidAnmGA9XGRRAu4ZvUjgL/Bujo-Wireframe?node-id=0%3A1)

- [Github](https://github.com/cse110-sp21-group15/cse110-sp21-group15)

- **[For Graders]:** The first three links are demonstrational and do not contain legitimate invites

## Onboarding for Developers

### Codebase

The source directory contains the HTML, CSS, and JS files for our landing page and app. Our bullet journal app is written as a PWA, or a progressive web app.

To get started, run the following command on your command line:

```
git clone https://github.com/cse110-sp21-group15/cse110-sp21-group15.git
```

To checkout the `development` branch:

```
git checkout -b development origin/development
```

We use the `development` branch as a staging branch before committing our code to the `main` branch. The `main` branch is where code that has been reviewed and tested is deployed.

You can read more about our branching strategy, known as `GitFlow`, at the following [link](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Following the guidelines of `GitFlow`, our `development` and `main` branches have branch protections so you cannot commit to them directly. In order to start committing code, you must checkout a feature branch with the following command:

```
git checkout -b feature-branch
git push -u origin feature-branch
```

Now you have checked out a local branch through which you can make your edits through, and when your changes are pushed, they will be visible in the repo.

The code for `JRNL` is split over two directories:

- `src/app` contains all the code for the BuJo application itself.

- `src/website` contains all the code for the landing page site of our app.

After you have made your changes, you need to write unit tests and end-to-end
tests using `Jest` and `Jest-Puppeteer` respectively. You can add these tests
into `src/app/__tests__/feature-tests/` and
`src/website/__tests__/feature-tests/`. Learn more about how to write tests
using the `testing.md` document [here](source/docs/testing.md).

If you think they are ready to be get pushed to production, you can first create a Pull Request (PR) from your feature branch into `development` via Github.


## Onboarding for Builders

### CI/CD Pipeline 

Documentation for the overall pipeline, including how to start using the different parts locally, is [here](./source/docs/pipeline_instructions_for_devs.md) to instruct new developers on how to use each piece. 

Our testing documentation is [here](./testing/testing.md), in the testing directory.

We generate documentation and deploy it automatically through JSDocs. You can see the documentation at this [Github Pages link](https://cse110-sp21-group15.github.io/cse110-sp21-group15/).

If you're interested you can find our group's status reports and pipeline overview videos in the [cipipeline](./admin/cipipeline) directory.

[Here](admin/cipipeline/github-actions-breakdown.md) is how we use Github Workflows

---

## Communication Tools Overview 🗣

- **Slack**
  - In our Slack, we have dedicated channels for each sub-team (testers, builders, devs, designers)

- **Shared Google Drive**
  - The shared drive will remain accessible to only the team and CSE 110 course staff
  
- **Zoom Meetings**
  - Zoom meetings were hosted by various members of the team throughout the quarter for group meetings, sprint office hours, and retrospectives

- **[Miro](https://miro.com/welcomeonboard/bU5vaFB1c0cxaHZmSlVXRGM1bmhkMG9leURuRm80UlZldm1kc2lyMUpvVXFtaFZ5RnJJQ3NNblJPTklycVo4V3wzMDc0NDU3MzU3NzE5MjM5Mzkz)**

- **[Figma](https://www.figma.com/file/fidAnmGA9XGRRAu4ZvUjgL/Bujo-Wireframe?node-id=0%3A1)**

- **[Github](https://github.com/cse110-sp21-group15/cse110-sp21-group15)**

---

## Tool and Methodology Index 🔎

### Project Management 🧳
- **Agile** 💨
  - GitHub Projects
    - We use a Kanban board on GitHub Projects where GitHub Issues are added to the board, and once the code for those issues are ready, a PR is linked to the issue. As the issue progresses through stages of completion, it moves from left to right across the board.
  - Daily standup (Geekbot)
    - We engaged with our team each day with the help of Geekbot, a Slack workspace bot that sent a daily reminder at 1 PM to all members for a brief standup update. This bot helped us increase group member engagement and gave everyone a sense of understanding regarding what we were all working on and what was coming up on each of our schedules.
  - Google Calendar extension for deadlines
    - To ensure that the group could stay ahead of assignment deadlines, we utilized a Google Calendar extension in our Slack Workspace that sent out weekly and daily reminders for tasks to be completed. This increased assignment awareness and allowed the team to plan ahead for upcoming deadlines.
  - Sprints
    - We run 2 week sprints where we create a backlog of tasks we want to finish by the end of the sprint. We then spend 2 weeks trying to empty the backlog by creating a new issue for each item in the backlog, writing the code for it, and merging it into the development or main branch with a PR.
  - Sprint reviews &amp; retrospectives
    - We leveraged Retrium to conduct Sprint reviews and facilitate our group retrospectives. Retrium allowed the team to reflect on the positives and negatives of the given sprint, and from there, we would brainstorm ways to improve on our weaknesses for future sprints.
### **Design** 🎨
  - Miro
    - During the initial stages of planning, we used Miro to create mind maps and distinct user stories to help us get in tune with the philosophy behind a bullet journal right from the start, setting the stage for the rest of the design process. We sketched up low fidelity wireframes that contained the core pages of a bullet journal to get an idea of what pieces we needed, which provided us with a starting point to build off of.
  - Figma
    - We shifted our design process onto Figma, where we dived deeper into the details of our design and established our color palette and font choices to give our app its own identity. From there, we created several high fidelity versions of each page and pieced them together to produce a full version of our app. We broke each feature down with extensive notes for clarity&#39;s sake and for the developers to easily follow and create custom components from.
  - Inkscape
    - Inkscape allowed us to create and edit SVGs, as well as convert images into an SVG. This made it easy to upload to SVGator for animation, as well as design the logo for the app.
  - SVGator
    - To bring our landing page to the next level, we used SVGator to animate individual pieces of custom SVGs to our liking.
### **Pipeline** 🔨
  - GitHub Actions
    - We used GitHub Actions to build our pipeline. We created actions to run on the main and development branches both on push and pull request. Actions for testing, linting, and automatic doc generation run on these branches.
  - GitFlow
    - Our group used GitFlow for our branching strategy. While we didn&#39;t follow the branching strategy from this diagram exactly, we created main, develop, and feature branches and placed branch protections on our main and develop branches. In order to create a pull request, we required two approving reviews on our main branch and one approving review on our development branch. Additionally, we also used special staging branches for changes related to the pipeline. The purpose of using GitFlow was to ensure that our app is fully functional before pushing to production, and using feature branches made it easier for developers to work in parallel.
  - Netlify, JSDocs, ESLint
    - [Link to Pipeline](./source/docs/pipeline_instructions_for_devs.md)
  - Jest
    - Allowed us to easily test our code and components of our application, and everyone was familiar with the tool since we had used it in the lab

### **Development** 🖥
  - Environment and Tooling
    - Npm
    - VSCode
      - Live Server
        - A tool that allows us to run our websites locally and see changes to our website in real time
      - Live Share
        - A code collaboration tool for group work during meetings
    - Vim/Emacs
    - ESLint
      - Tool that keeps our style in check
      - It automatically runs in vscode by following [this guide](https://github.com/cse110-sp21-group15/cse110-sp21-group15/blob/main/admin/cipipeline/phase1.md)
      - It runs on staged files
  - Source Code Management
    - GitHub
    - Git
      - Our source code management tool. Apart from the main and development branches, we name our branches after the feature they are implementing
      - We try to have atomic commits and follow [this guide](https://chris.beams.io/posts/git-commit/)
    - [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
  - Technologies
    - Vanilla web tech
      - Javascript
      - HTML
      - CSS
      - WebComponents
      - PWAs
    - Storage
      - Dexie.js
  - Testing
    - Jest
      - Our tool for unit testing, very easy to set up and work with
    - Jest-puppeteer
      - Out tool for End-to-End testing
