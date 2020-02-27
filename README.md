# Yarn Programmatic API

yarn-programmatic is a library that allows you to access yarn commands programmatically from Javascript.


This is still being developed to map the full feature set of Yarn. Please submit a request on Github if there is a particular command you'd like


## Usage
Every function returns a Promise.

---

### `yarn.add()`

```js
yarn.add(['babel', 'react'], {dev: true});
```

#### Arguments
| name     | type   | value                       |
| -------- | ------ | --------------------------- |
| packages | Array  | List of packages to install |
| options  | Object | Options object (see below)  |


#### Options
| name | type    | default | value                   |
| ---- | ------- | ------- | ----------------------- |
| dev  | Boolean | false   | Save to devDependencies |


---

### `yarn.remove()`

```js
yarn.remove(['babel', 'react']);
```

#### Arguments
| name     | type  | value                      |
| -------- | ----- | -------------------------- |
| packages | Array | List of packages to remove |

---

### `yarn.info()`

```js
yarn.info(); // Get info on current package
yarn.info('react'); // Get info on 'react' package
```

#### Arguments
| name    | type   | value                               |
| ------- | ------ | ----------------------------------- |
| package | string | Optional package to lookup info for |
