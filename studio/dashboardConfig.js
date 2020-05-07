export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb369724bdf81f9ea93c0cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n3ruabwd',
                  apiId: '05e3f471-aa77-402c-95ee-d3198b80dc84'
                },
                {
                  buildHookId: '5eb36972bcf4b601bc731914',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-97icahp8',
                  apiId: 'd2dbb099-bc2c-4684-b62d-eec22bf44733'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reachalan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-97icahp8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
