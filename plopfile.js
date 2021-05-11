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
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
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
            path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'plop_templates/Page.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}View.tsx',
            templateFile: 'plop_templates/PageView.tsx.hbs',
          },
        ],
      });
  };