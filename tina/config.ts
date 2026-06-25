import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: process.env.HEAD || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  schema: {
    collections: [
      {
        name: 'posts',
        label: 'Blog Posts',
        path: 'src/content/posts',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'createdAt',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'summary',
            label: 'Summary',
            ui: { component: 'textarea' },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'projects',
        label: 'Projects',
        path: 'src/content/projects',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: { component: 'textarea' },
            required: true,
          },
          {
            type: 'string',
            name: 'tech',
            label: 'Tech Stack',
            list: true,
          },
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Label',
              },
              {
                type: 'string',
                name: 'url',
                label: 'URL',
              },
            ],
          },
          {
            type: 'string',
            name: 'status',
            label: 'Status',
            options: ['planning', 'in-progress', 'completed', 'archived'],
          },
          {
            type: 'string',
            name: 'image',
            label: 'Image',
            required: false,
          },
        ],
      },
      {
        name: 'pages',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },
          {
            type: 'datetime',
            name: 'createdAt',
            label: 'Created At',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'summary',
            label: 'Summary',
            ui: { component: 'textarea' },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})