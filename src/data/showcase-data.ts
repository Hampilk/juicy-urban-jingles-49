
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
const renderButton = () => <Button>Click me</Button>;

const renderCard = () => (
  <Card className="w-full max-w-md">
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
);

const renderBadge = () => <Badge>Badge</Badge>;

const renderAvatar = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

const renderAccordion = () => (
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
);

const renderAlert = () => (
  <Alert>
    <AlertTitle>Alert Title</AlertTitle>
    <AlertDescription>Alert Description</AlertDescription>
  </Alert>
);

const renderAspectRatio = () => (
  <div className="w-[200px]">
    <AspectRatio ratio={16 / 9}>
      <div className="flex items-center justify-center bg-muted w-full h-full rounded-md">
        16:9
      </div>
    </AspectRatio>
  </div>
);

const renderTeamComparison = () => (
  <div className="h-96 overflow-auto">
    <TeamComparison 
      teams={[
        { id: '1', name: 'Liverpool', logoUrl: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Arsenal', logoUrl: 'https://via.placeholder.com/150' }
      ]} 
      onClose={() => {}}
    />
  </div>
);

// Props rendering functions
const renderButtonProps = () => (
  <div className="space-y-4">
    <p className="font-medium">Props:</p>
    <ul className="list-disc pl-5 space-y-2 text-sm">
      <li><code>variant</code> - Button style variant</li>
      <li><code>size</code> - Button size</li>
      <li><code>asChild</code> - Change the component to the HTML tag or component</li>
    </ul>
  </div>
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
