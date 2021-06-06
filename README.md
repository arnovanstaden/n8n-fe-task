# FE-screening

First of all, thanks for taking the time working on this task.

We have multiple problems in our Frontend Application that need to be fixed. Feel free to write down your thoughts or approach below the task description if you can't come up with a solution.

# 1. Fix our Layout:

Please fix our layout at [fix-layout](http://localhost:3000/fix-layout) page. The red module box should be placed right beside the two title boxes, somehow it slipped down for us. Maybe you can even explain to us why this did happen?

## My Notes

### Diagnosis
Incorrect use of Box Model. The section with articles had a width of 75% and the aside had 25%, which = 100% and is fine, but the added 1rem of padding on the section wasn't taken into account in the 75% width and thus the total for the two elements was > 100%, hence it couldn't fit into the same row. 

### Problem
Incorrect box sizing property (set to default content-xox)

### Solution
Change box-sizing property value to box-sizing to take the padding into account.


# 2. Make our page responsive:

Please make our page ([fix-responsive](http://localhost:3000/fix-responsive)) responsive while maintaining the hierachy of importance. Do your best at making it fit the screen more appropriately at any screen size.

# 3. Replace the markup with an image:

Please change the markup on the [replace-image](http://localhost:3000/replace-image) page to an image by just using CSS. We would appreciate if you could demonstrate us multiple ways of how one can achieve this.

# 4. Introducing state to our Application:

We now want to add interaction to our table on our Index page ([localhost:3000/](http://localhost:3000/)). Please complete the feature that we can add and remove persons from the table. Ideally we want to do this using the Vuex Store to manage the state.

# Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
