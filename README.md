# Spootify Coding Challenge 🎧

Demo URL: https://spootify.vercel.app/

# Run

1. Install dependencies:

```bash
$ yarn install
```

2. Add `.env.local` file:

```bash
REACT_APP_BASE_URL=https://api.spotify.com/v1
REACT_APP_AUTH_URL=https://accounts.spotify.com/authorize
REACT_APP_REDIRECT_URL=http://localhost:3000/callback
REACT_APP_CLIENT_ID=<spotify_developer_client_id>
REACT_APP_CLIENT_SECRET=<spotify_developer_secret>
```

Visit [Spotify documentation](https://developer.spotify.com/documentation/) for more info

3. Start server:

```bash
$ yarn start
```

4. Visit Site: `http://localhost:3000`

# Run Tests

```bash
$ yarn test
```

# Goals/Outcomes ✨

- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently

# Requirements 📖

- [x] Fetch and display _Released This Week_ songs
  - Use the API path `new-releases`
- [x] Fetch and display _Featured Playlists_
  - Use the API path `featured-playlists`
- [x] Fetch and display _Browse_ genres
  - Use the API path `categories`
- [x] Loading state/UI _(optional, current UX is already clean)_
- [x] Integrate redux into the project and make API calls and access data through redux
- [x] Add tests

# Demo 🌄

![Demo](https://github.com/ronsigter/spootify/blob/main/screenshots/spootify.gif)
