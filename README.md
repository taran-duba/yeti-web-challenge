# YETI Web Challenge

Welcome to the YETI Web Challenge! This is a quick progress check to see how you're doing with web development, and to help us understand how we can best support you.

This repository is a Next.js app with a basic todo list setup. The packages installed are reflective of what we currently use at YETI, but you are welcome to use any other libraries you want.

## The Challenge

You will be building a web app that allows users to manage a todo list. This will test your ability to:

- Build a web app using Next.js and Tailwind CSS
- Use a UI library
- (optionally) Use a database/local storage
- (optionally) Implement authentication and user accounts

## Rules

- Please avoid the use of AI tools. This can be a good way to learn if utilized effectively, but for this challenge, we want to see your own code (plus you'll get a better understanding of how YOU are doing).
- Please do not share your code with YETI team members. Again, this is an assessment, and we want to see your own work.
- You can use Google or look at documentation for libraries included in this repository (e.g., shadcn/ui, Tailwind CSS, or Next.js documentation), but please write your own code for this challenge (e.g. don't search "how to create a todo list react").
- For the purposes of this challenge, we will be using Next.js, Tailwind CSS, and shadcn/ui (this is the UI library we currently use at YETI), but you are welcome to use any other libraries you want.
  - We've installed the Button component from shadcn/ui, but you are welcome to use any other UI library you want.
  - When installing components, use `shadcn@canary` instead of `shadcn@latest`. This project uses Tailwind V4, and the latest release is not yet compatible.
- We encourage you to ask questions if you have them to YETI mentors. We will be available to help via Discord.

Bonus points for:

1) Having a nice UI (animations are extra points)
2) Using local storage or a database to persist the todo list (even more if you add an ORM)
3) Implementing authentication and user accounts

## Evaluation Criteria

We will be evaluating your code on the following criteria:

- Code readability / cleanliness
- Completion of the challenge
  - Unit tests passing
  - Features working in a demo

This is not meant to be a "test" in the traditional sense (we won't have strict points), but rather a check in to see how you're doing, and where YETI mentors can help you. So don't worry about passing or failing, but rather doing your best, and ensure the effort is your own. Again, if the work is your own, we'll be able to better help you.

### Automated Testing Requirements

Your code should be able to pass the automated tests run by `pnpm test`.

These requirements are as follows (and can be found in `__tests__/todo.test.tsx`):

- The todo list has an input field with the placeholder "Add a new todo"
- Todos should add a new todo when the user clicks the "Add" button. Each todo should show the text the user entered.
- When a todo is clicked (including the text), it should be marked as complete.
- If the user clicks the "Add" button without entering a todo, the todo list should not change.

This is a screen recording of an app that passes all the automated requirements:
https://github.com/user-attachments/assets/0601cb43-8fc6-47d8-a5e7-c0ddb758357b


Please let us know if you have any questions, or are having difficulty with the automated tests. There's a chance that the tests are not 100% accurate for all cases, so if you think you've followed the requirements but the tests are failing, please let us know.

## Submission

Please send a link to the GitHub repo to a YETI mentor. We will review your code and give you feedback at a meeting.

You'll have about 1 week to complete the challenge. Please let us know if you need more time, and include time spent in your README.md.
