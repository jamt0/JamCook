module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'plop_templates/Component.tsx.hbs',
        },
      ],
    });
    plop.setGenerator('page', {
        description: 'Create a page',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'What is your page name?'
          },
        ],
        actions: [
          {
            type: 'add',
            path: 'src/containers/{{pascalCase name}}/index.tsx',
            templateFile: 'plop_templates/Page.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/layouts/{{pascalCase name}}View/index.tsx',
            templateFile: 'plop_templates/PageView.tsx.hbs',
          },
        ],
      });
  };