/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: false,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    // {
    //   type: 'confirm',
    //   name: 'wantLoadable',
    //   default: false,
    //   message: 'Do you want to load the component asynchronously?',
    // },
  ],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/tests/index.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/styles.js',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true,
      },
    ];

    // If the user wants Loadable.js to load the component asynchronously
    // if (data.wantLoadable) {
    //   actions.push({
    //     type: 'add',
    //     path: '../../src/components/{{properCase name}}/loadable.js',
    //     templateFile: './component/loadable.js.hbs',
    //     abortOnFail: true,
    //   });
    // }

    actions.push({
      type: 'prettier',
      path: '/components/',
    });

    return actions;
  },
};
