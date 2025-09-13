import { NextPage } from 'next';
import { LinkComponent, ParentComponent } from 'jsx-styled/components/ui-code';

// TODO: implement routes for each induvidual project? [name].tsx?

const Contacts: NextPage = () => (
  <ParentComponent name="ProjectsContainer">
    <ParentComponent
      name="Project"
      props={[
        { name: 'name', value: 'eslint-plugin-ng-module-sort' },
        {
          name: 'description',
          value:
            'Sort Angular and NestJS module imports, declarations, exports, controls, etc.',
        },
        { name: 'type', value: 'ESLint plugin for Angular & NestJS' },
      ]}
    >
      <LinkComponent
        name="NPM"
        href="https://www.npmjs.com/package/eslint-plugin-ng-module-sort"
      />
      <LinkComponent
        name="Github"
        href="https://github.com/ducktordanny/eslint-plugin-ng-module-sort"
      />
    </ParentComponent>

    <label htmlFor="separating">{`  {/* -------------------- */}`}</label>

    <ParentComponent
      name="Project"
      props={[
        { name: 'name', value: 'Opres' },
        {
          name: 'description',
          value: 'An app to help calculating operation research problems.',
        },
        { name: 'type', value: 'Nx: Angular + NestJs' },
      ]}
    >
      <LinkComponent
        name="CheckOutSite"
        href="https://opres.ducktordanny.com/"
      />
      <LinkComponent
        name="Github"
        href="https://github.com/ducktordanny/opres.help"
      />
    </ParentComponent>

    <label htmlFor="separating">{`  {/* -------------------- */}`}</label>

    <ParentComponent
      name="Project"
      props={[
        { name: 'name', value: 'JSX Portfolio' },
        {
          name: 'description',
          value: 'A simple, but unique JSX style portfolio.',
        },
        { name: 'type', value: 'Next.js App' },
      ]}
    >
      <LinkComponent
        name="Github"
        href="https://github.com/ducktordanny/jsx-portfolio"
      />
    </ParentComponent>

    <label htmlFor="separating">{`  {/* -------------------- */}`}</label>

    <ParentComponent
      name="Project"
      props={[
        { name: 'name', value: 'Reveal presentation template' },
        {
          name: 'description',
          value: 'GitHub template repository for creating fancy presentations.',
        },
        { name: 'type', value: 'Reveal.js, Reveal-md' },
      ]}
    >
      <LinkComponent
        name="Github"
        href="https://github.com/ducktordanny/presentation"
      />
    </ParentComponent>

    <label htmlFor="separating">{`  {/* -------------------- */}`}</label>

    <ParentComponent
      name="Project"
      props={[
        { name: 'name', value: '.dotfiles' },
        {
          name: 'description',
          value:
            'Personal development-related configs: tmux, nvim, yabai, skhd, etc.',
        },
        { name: 'type', value: 'Configs' },
      ]}
    >
      <LinkComponent
        name="Github"
        href="https://github.com/ducktordanny/.dotfiles"
      />
    </ParentComponent>
  </ParentComponent>
);

export default Contacts;
