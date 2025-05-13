
import React from 'react';
import { 
  Layout, 
  FileText, 
  Box, 
  Square, 
  Table, 
  FormInput,
  Bell
} from 'lucide-react';

import {
  renderButton,
  renderCard,
  renderBadge,
  renderAvatar,
  renderAccordion,
  renderAlert,
  renderAspectRatio,
  renderTabs,
  renderInput,
  renderCheckbox,
  renderRadioGroup,
  renderSelect,
  renderSwitch,
  renderTable,
  renderTextarea,
  renderTooltip,
  renderButtonProps,
  renderInputProps,
  renderSelectProps
} from './render-utils';

import {
  buttonCode,
  cardCode,
  badgeCode,
  avatarCode,
  accordionCode,
  alertCode,
  aspectRatioCode,
  tabsCode,
  inputCode,
  checkboxCode,
  radioGroupCode,
  selectCode,
  switchCode,
  tableCode,
  textareaCode,
  tooltipCode
} from './code-snippets';

import { Category } from './types';

export const uiComponents: Category = {
  id: 'ui',
  name: 'UI Components',
  icon: React.createElement(Box, { className: "h-4 w-4" }),
  subcategories: [
    {
      id: 'basic',
      name: 'Basic Elements',
      icon: Square,
      components: [
        {
          id: 'button',
          name: 'Button',
          description: 'Displays a button or a component that looks like a button.',
          component: renderButton(),
          code: buttonCode,
          props: renderButtonProps(),
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'badge',
          name: 'Badge',
          description: 'Displays a badge or a component that looks like a badge.',
          component: renderBadge(),
          code: badgeCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
      ]
    },
    {
      id: 'layout',
      name: 'Layout',
      icon: Layout,
      components: [
        {
          id: 'card',
          name: 'Card',
          description: 'Displays a card with header, content, and footer.',
          component: renderCard(),
          code: cardCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'accordion',
          name: 'Accordion',
          description: 'Displays a vertically stacked set of interactive headings that each reveal an associated section of content.',
          component: renderAccordion(),
          code: accordionCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'tabs',
          name: 'Tabs',
          description: 'A set of layered sections of content that display one panel at a time.',
          component: renderTabs(),
          code: tabsCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        }
      ]
    },
    {
      id: 'data-display',
      name: 'Data Display',
      icon: Table,
      components: [
        {
          id: 'avatar',
          name: 'Avatar',
          description: 'An image element with a fallback for representing the user.',
          component: renderAvatar(),
          code: avatarCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'aspect-ratio',
          name: 'Aspect Ratio',
          description: 'Displays content with a desired ratio.',
          component: renderAspectRatio(),
          code: aspectRatioCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'table',
          name: 'Table',
          description: 'A responsive table component for displaying tabular data.',
          component: renderTable(),
          code: tableCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        }
      ]
    },
    {
      id: 'feedback',
      name: 'Feedback',
      icon: Bell,
      components: [
        {
          id: 'alert',
          name: 'Alert',
          description: 'Displays a callout for user attention.',
          component: renderAlert(),
          code: alertCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'tooltip',
          name: 'Tooltip',
          description: 'A popup that displays information related to an element when the element receives focus or is hovered over.',
          component: renderTooltip(),
          code: tooltipCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        }
      ]
    },
    {
      id: 'forms',
      name: 'Form Controls',
      icon: FormInput,
      components: [
        {
          id: 'input',
          name: 'Input',
          description: 'A form input field for collecting user input.',
          component: renderInput(),
          code: inputCode,
          props: renderInputProps(),
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'checkbox',
          name: 'Checkbox',
          description: 'A control that allows the user to toggle between checked and unchecked states.',
          component: renderCheckbox(),
          code: checkboxCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'radio-group',
          name: 'Radio Group',
          description: 'A set of checkable buttons, where only one can be checked at a time.',
          component: renderRadioGroup(),
          code: radioGroupCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'select',
          name: 'Select',
          description: 'A dropdown control that displays a list of options.',
          component: renderSelect(),
          code: selectCode,
          props: renderSelectProps(),
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'switch',
          name: 'Switch',
          description: 'A toggle switch control.',
          component: renderSwitch(),
          code: switchCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        },
        {
          id: 'textarea',
          name: 'Textarea',
          description: 'A multi-line text input control.',
          component: renderTextarea(),
          code: textareaCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "stable"
        }
      ]
    }
  ]
};
