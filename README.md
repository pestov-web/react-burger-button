
## Customizable burger button React component
### This component is a port from the [project for Vue](https://gitlab.com/onekind/burger-vue)
### Checkout the [Demo](https://pestov-web.github.io/react-burger-button/) which contains the visual configurator.

## Installation

```bash
npm i burger-react
```

## Setup

### React

- Add the following to you component file:

```js
import BurgerButton from 'burger-react'
```

#### import the styles
- css
```scss
import 'burger-react/dist/style.css'
```
- scss
```scss
import 'burger-react/dist/style.scss'
```
## Example 
```jsx
import 'burger-react/dist/style.css'
import BurgerButton from 'burger-react'

function App() {

    return (
        <div className='App'>
            <header className='App-header'>
                <BurgerButton />
            </header>
        </div>
    );
}

export default App;
```
## Props

| Name    | Type     | Default         |
|---------|----------|-----------------|
| variant | String   | "cross-right"   |           
| thin    | Boolean  | false           |
| thick   | Boolean  | false           |            
| color   | String   | "#000000"       |
| size    | Number   | 80              |
| label   | String   | "burger button" |
| onClick | Function |                 |
