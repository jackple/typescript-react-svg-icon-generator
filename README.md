React SVG Icon Generator Typescript
========================

Generate React Icon Component from SVG icons to show, resize and recolor them.
The default template is a typescript template.

# Dependencies

This codebase is built on node v6: https://nodejs.org/en/blog/release/v6.9.0/

## Instalation

You need to add this just to development, because it will generate self contained React component directly to your codebase.

```bash
npm install --save-dev typescript-react-svg-icon-generator
```

## Setup a node file


```js
const generator = require('typescript-react-svg-icon-generator')

const config = {
    svgDir: './src/assets/svg/',
    destination: './src/components/Icon/index.tsx'
}
generator(config)
```

- **svgDir** (required) - path to your directory with svg files. Can be relative path but it is better to use `path.join(__dirname, 'icons')` absolute path so it will work in any directory of project
- **destination** (required) -  path.join(__dirname, 'components', 'Icon.js')
- **comment** (optional) - it will be added to generated component, so other developer will know what to do
- **template** (optional) - provide path to your custom template
- **tslintDisable** (optional) - add `/* tslint:disable */` after comment
run it by `gulp icon`

## Use generate Icon component

```js
import React, {Component} from 'react'
import Icon from './Icon'

export default class App extends Component {
  render() {
    return (
      <div>
        Simple possible usage
        <Icon kind='clock' />

        Setup color and bounding width and height
        <Icon kind='close' color='#748' width={500} height={100} />

        Setup color and bounding width and height to size (square)
        <Icon kind='close' color='red' size={600} />

        Setup onClick behavior
        <Icon kind='close' onClick={() => alert('clicked on icon')} />

        Show all icons at once with description (for finding right icon)
        <Icon preview />
      </div>
    )
  }
}
```

## Thanks

This package was build upon [react-svg-icon-generator-ts](https://github.com/peeter-tomberg/react-svg-icon-generator)

This package was build upon [react-svg-icon-generator](https://github.com/blueberryapps/react-svg-icon-generator)
