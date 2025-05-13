
import React from 'react';
import { 
  Layout, 
  FileText, 
  Box, 
  Users, 
  Calendar, 
  BarChart3, 
  Home, 
  List,
  Button as ButtonIcon,
  Table as TableIcon,
  FormInput,
  Bell,
  Menu,
  Monitor,
  LayoutDashboard
} from 'lucide-react';

// Import component examples for showcase
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { TeamComparison } from '../components/teams/TeamComparison';

// Type definitions for component data structure
export interface ComponentData {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
  code: string;
  props?: React.ReactNode;
}

export interface SubCategory {
  id: string;
  name: string;
  icon: any;
  components: ComponentData[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
}

// Helper functions to render components for showcase
const renderButton = () => React.createElement(Button, {}, "Click me");

const renderCard = () => React.createElement(
  Card, 
  { className: "w-full max-w-md" }, 
  [
    React.createElement(CardHeader, { key: "header" }, [
      React.createElement(CardTitle, { key: "title" }, "Card Title"),
      React.createElement(CardDescription, { key: "desc" }, "Card Description")
    ]),
    React.createElement(CardContent, { key: "content" }, 
      React.createElement("p", {}, "Card Content")
    ),
    React.createElement(CardFooter, { key: "footer" }, 
      React.createElement("p", {}, "Card Footer")
    )
  ]
);

const renderBadge = () => React.createElement(Badge, {}, "Badge");

const renderAvatar = () => React.createElement(
  Avatar, 
  {}, 
  [
    React.createElement(AvatarImage, { key: "img", src: "https://github.com/shadcn.png", alt: "@shadcn" }),
    React.createElement(AvatarFallback, { key: "fallback" }, "CN")
  ]
);

const renderAccordion = () => React.createElement(
  Accordion, 
  { type: "single", collapsible: true, className: "w-full" }, 
  [
    React.createElement(AccordionItem, { key: "item-1", value: "item-1" }, [
      React.createElement(AccordionTrigger, { key: "trigger-1" }, "Is it accessible?"),
      React.createElement(AccordionContent, { key: "content-1" }, 
        "Yes. It adheres to the WAI-ARIA design pattern."
      )
    ]),
    React.createElement(AccordionItem, { key: "item-2", value: "item-2" }, [
      React.createElement(AccordionTrigger, { key: "trigger-2" }, "Is it styled?"),
      React.createElement(AccordionContent, { key: "content-2" }, 
        "Yes. It comes with default styles that matches the other components."
      )
    ])
  ]
);

const renderAlert = () => React.createElement(
  Alert, 
  {}, 
  [
    React.createElement(AlertTitle, { key: "title" }, "Alert Title"),
    React.createElement(AlertDescription, { key: "desc" }, "Alert Description")
  ]
);

const renderAspectRatio = () => React.createElement(
  "div", 
  { className: "w-[200px]" }, 
  React.createElement(
    AspectRatio, 
    { ratio: 16 / 9 }, 
    React.createElement(
      "div", 
      { className: "flex items-center justify-center bg-muted w-full h-full rounded-md" }, 
      "16:9"
    )
  )
);

const renderTeamComparison = () => React.createElement(
  "div", 
  { className: "h-96 overflow-auto" }, 
  React.createElement(
    TeamComparison, 
    { 
      teams: [
        { id: '1', name: 'Liverpool', logoUrl: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Arsenal', logoUrl: 'https://via.placeholder.com/150' }
      ],
      onClose: () => {} 
    }
  )
);

// Props rendering functions
const renderButtonProps = () => React.createElement(
  "div", 
  { className: "space-y-4" }, 
  [
    React.createElement("p", { key: "title", className: "font-medium" }, "Props:"),
    React.createElement(
      "ul", 
      { key: "list", className: "list-disc pl-5 space-y-2 text-sm" }, 
      [
        React.createElement("li", { key: "prop1" }, [
          React.createElement("code", {}, "variant"),
          " - Button style variant"
        ]),
        React.createElement("li", { key: "prop2" }, [
          React.createElement("code", {}, "size"),
          " - Button size"
        ]),
        React.createElement("li", { key: "prop3" }, [
          React.createElement("code", {}, "asChild"),
          " - Change the component to the HTML tag or component"
        ])
      ]
    )
  ]
);

// Sample code snippets for components
const buttonCode = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`;

const cardCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`;

const badgeCode = `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`;

const avatarCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`;

const accordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const alertCode = `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        Alert Description
      </AlertDescription>
    </Alert>
  )
}`;

const aspectRatioCode = `import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export function AspectRatioDemo() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="..."
          alt="Image"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}`;

const teamComparisonCode = `import { Team } from '../../data/premier-league-teams';
import { TeamComparison } from '../components/teams/TeamComparison';

export function TeamComparisonDemo() {
  const teams: Team[] = [
    { id: '1', name: 'Liverpool', logoUrl: '/liverpool.png' },
    { id: '2', name: 'Arsenal', logoUrl: '/arsenal.png' }
  ];
  
  return <TeamComparison teams={teams} onClose={() => {}} />
}`;

// Define component categories
export const componentCategories: Category[] = [
  {
    id: 'ui',
    name: 'UI Components',
    icon: React.createElement(Box, { className: "h-4 w-4" }),
    subcategories: [
      {
        id: 'basic',
        name: 'Basic Elements',
        icon: ButtonIcon,
        components: [
          {
            id: 'button',
            name: 'Button',
            description: 'Displays a button or a component that looks like a button.',
            component: renderButton(),
            code: buttonCode,
            props: renderButtonProps()
          },
          {
            id: 'badge',
            name: 'Badge',
            description: 'Displays a badge or a component that looks like a badge.',
            component: renderBadge(),
            code: badgeCode
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
            code: cardCode
          },
          {
            id: 'accordion',
            name: 'Accordion',
            description: 'Displays a vertically stacked set of interactive headings that each reveal an associated section of content.',
            component: renderAccordion(),
            code: accordionCode
          },
        ]
      },
      {
        id: 'data-display',
        name: 'Data Display',
        icon: TableIcon,
        components: [
          {
            id: 'avatar',
            name: 'Avatar',
            description: 'An image element with a fallback for representing the user.',
            component: renderAvatar(),
            code: avatarCode
          },
          {
            id: 'aspect-ratio',
            name: 'Aspect Ratio',
            description: 'Displays content with a desired ratio.',
            component: renderAspectRatio(),
            code: aspectRatioCode
          },
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
            code: alertCode
          },
        ]
      },
    ]
  },
  {
    id: 'team',
    name: 'Team Components',
    icon: React.createElement(Users, { className: "h-4 w-4" }),
    subcategories: [
      {
        id: 'team-display',
        name: 'Team Display',
        icon: Users,
        components: [
          {
            id: 'team-comparison',
            name: 'Team Comparison',
            description: 'Shows a detailed comparison between two teams.',
            component: renderTeamComparison(),
            code: teamComparisonCode
          },
        ]
      },
    ]
  },
  {
    id: 'match',
    name: 'Match Components',
    icon: React.createElement(Calendar, { className: "h-4 w-4" }),
    subcategories: [
      {
        id: 'match-display',
        name: 'Match Display',
        icon: Calendar,
        components: []
      },
    ]
  },
  {
    id: 'dashboard',
    name: 'Dashboard Components',
    icon: React.createElement(LayoutDashboard, { className: "h-4 w-4" }),
    subcategories: [
      {
        id: 'dashboard-widgets',
        name: 'Dashboard Widgets',
        icon: LayoutDashboard,
        components: []
      },
    ]
  },
  {
    id: 'pages',
    name: 'Page Components',
    icon: React.createElement(FileText, { className: "h-4 w-4" }),
    subcategories: [
      {
        id: 'main-pages',
        name: 'Main Pages',
        icon: FileText,
        components: []
      },
    ]
  },
];
