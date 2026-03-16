
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

    const [opened, setOpened] = React.useState(false);
    return (
        <div className='App'>
            <header className='App-header'>
                <BurgerButton
                    isOpened={opened}
                    onClick={() => setOpened(!opened)}
                />
            </header>
        </div>
    );
}

export default App;
```
## Props

| Name     | Type     | Default         | Description                       |
|----------|----------|-----------------|-----------------------------------|
| variant  | String   | "cross-right"   | Icon type                         |
| thin     | Boolean  | false           | Thin lines                        |
| thick    | Boolean  | false           | Thick lines                       |
| color    | String   | "#000000"       | Line color                        |
| size     | Number   | 80              | SVG size                          |
| label    | String   | "burger button" | aria-label for accessibility      |
| onClick  | Function |                 | Click handler                     |
| isOpened | Boolean  | undefined       | Controls open state               |
