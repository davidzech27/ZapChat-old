## An original, open-ended, room-based chat app

### Zapchat was made in 24 hours for a [hackathon](https://devpost.com/software/zapchat).


### From devpost page:

#### Inspiration
Existing chat apps have very well-defined rules to use them. ZapChat is specifically designed to be a platform to just mess around with friends on.

#### What it does
After signing up, you can search for chat rooms by their name, and easily create one if it doesn't already exist. If you create a chat room, you have admin privileges over it, and can change its 3 messaging topic to whatever you want.

#### How we built it
ZapChat is a Nuxt project, which is a framework built upon the Vue javascript framework. I used Pinia for state management, axios for API calls, windicss (which is basically tailwindcss) for css, express.js for the backend, Mongoose to interact with MongoDB, Atlas for MongoDB cloud hosting, vue-tilt.js for the tiltable sign-in button, and passport to handle Google OAuth logic.

#### Challenges we ran into
Messy tailwindcss code. Javascript dates are super annoying. A lot of mysterious bugs were caused by not coordinating database schema with frontend and API logic. The logic for admin privileges. For some reason, some buttons couldn't be pressed, and I don't even remember what was done to fix that. Getting shapes to line up to create aesthetically pleasing curves. A lot of libraries I wanted to use weren't supported by Nuxt3 beta (I will be switching to React after this).

#### Accomplishments that we're proud of
The UI looks much more polished than I was expecting it to.

#### What we learned
I got much, much better at tailwindcss. I learned how to write messy code quickly.

#### What's next for ZapChat
Any real-time chat application should use either websockets or peer-to-peer connections. But, I decided that I didn't have enough time to add Socket.io to my already convoluted tech stack, so instead used repeated HTTP requests for message polling every 1.5 seconds. In the future, I may try to replace those HTTP requests with websockets. Also, you can edit your bio, but it's pointless because other users can't even view your profile. A feature should be added to allow you to view others' profiles by hovering your mouse over their username. Admin privileges should be expanded to prevent spamming, and ZapChat won't be production-ready until this is added.

#### Made with Nuxt.js

Install dependencies
```bash
yarn install
```

Run dev server
```bash
yarn run dev
```

Build for production
```bash
yarn build
```
