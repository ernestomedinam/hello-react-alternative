# hello react + vite! 🤓
lightly opinionated base template for reactJS project with use case examples for routing & complex state management; built for 4GeeksAcademy community & open for all.

## how to use 😎
- install project dependencies based on boilerplate's lock file with `$npm clean-install`
- build `.env` file based on `.env.example` and update variable values
- start dev server with `$npm run start`
- test with `$npm run test`
- lint with `$npm run lint`
- code away
- build with `$npm run build`

> need to add new code for a feature? first thing is to build tests based on desired user experience for such feature

> need a new component or page? build them in folders inside src/components or src/pages

> need a new route? modify Layout.jsx

> need another context? replicate MainContext folder

> need more actions for the same context but the file is too big? split actions based on concerns and build hooks for them (i.e. useConcernActions)

## pending 🤪
- complete single livestock detail view route/component
- add loader component and add where it makes sense for user experience
- refactor based on module/feature folder structure, instead of file type folder structure
- update reactTs analogue

## notes 📝

> built with Node v20.9.0

> note: this is not official 4GeeksAcademy content but I'd be really glad for it to be considered as such, so in spirit it kind of is 😅

> note: this boilerplate is open for you to use as you please on your personal projects, but please DO NOT use this boilerplate for your 4Geeks final project nor any of 4Geeks program projects, as your TA's will reject them and I will be reprimanded 😐

made with ♥ by mentors @4GeeksAcademy.