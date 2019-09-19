# Addons and iframe bug

```
$ yarn
$ yarn start-storybook
```

Observe:

- By default the "Button/with text" story appears on a white background
- By default the "Button/with some emoji" story appears on a **red** background

```
$ yarn build
$ npx http-server dist
$ open 'http://127.0.0.1:8080/iframe.html?id=button--with-text'
$ open 'http://127.0.0.1:8080/iframe.html?id=button--with-some-emoji'
```

Observe:

- By default the "Button/with text" story appears on a white background
- By default the "Button/with some emoji" story appears on a **white** background
