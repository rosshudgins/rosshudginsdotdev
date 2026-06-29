import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'tinacms'

const workspaceRoot = process.cwd()
const categoriesPath = resolve(workspaceRoot, 'src/content/miscs/categories.json')
const tagsPath = resolve(workspaceRoot, 'src/content/miscs/tags.json')

const categories = JSON.parse(readFileSync(categoriesPath, 'utf8')) as Array<{
  name: string
  slug: string
}>
const tags = JSON.parse(readFileSync(tagsPath, 'utf8')) as Array<{
  name: string
  slug: string
}>

const categoryOptions = categories.map(({ name, slug }) => ({
  label: name,
  value: slug,
}))

const tagOptions = tags.map(({ name, slug }) => ({
  label: name,
  value: slug,
}))

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
            ui: { component: 'select' },
            options: categoryOptions,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: { component: 'select' },
            options: tagOptions,
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
            ui: { component: 'select' },
            options: categoryOptions,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: { component: 'select' },
            options: tagOptions,
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