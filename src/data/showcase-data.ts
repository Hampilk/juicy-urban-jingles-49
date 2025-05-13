
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
  Square as ButtonIcon, // Using Square as button icon
  Table as TableIcon,
  FormInput,
  Bell,
  Menu,
  Monitor,
  LayoutDashboard,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  ArrowRight
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Toast } from '@/components/ui/toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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

// New component renderers
const renderTabs = () => React.createElement(
  Tabs,
  { defaultValue: "account", className: "w-full" },
  [
    React.createElement(TabsList, { key: "list", className: "grid w-full grid-cols-2" }, [
      React.createElement(TabsTrigger, { key: "tab1", value: "account" }, "Account"),
      React.createElement(TabsTrigger, { key: "tab2", value: "password" }, "Password")
    ]),
    React.createElement(TabsContent, { key: "content1", value: "account" }, "Account settings"),
    React.createElement(TabsContent, { key: "content2", value: "password" }, "Password settings")
  ]
);

const renderInput = () => React.createElement(
  Input,
  { placeholder: "Email", type: "email" }
);

const renderCheckbox = () => React.createElement(
  "div",
  { className: "flex items-center space-x-2" },
  [
    React.createElement(Checkbox, { id: "terms", key: "checkbox" }),
    React.createElement("label", { htmlFor: "terms", className: "text-sm", key: "label" }, "Accept terms and conditions")
  ]
);

const renderRadioGroup = () => React.createElement(
  RadioGroup,
  { defaultValue: "option-one" },
  [
    React.createElement("div", { className: "flex items-center space-x-2", key: "option1" }, [
      React.createElement(RadioGroupItem, { value: "option-one", id: "option-one", key: "radio1" }),
      React.createElement("label", { htmlFor: "option-one", key: "label1" }, "Option One")
    ]),
    React.createElement("div", { className: "flex items-center space-x-2", key: "option2" }, [
      React.createElement(RadioGroupItem, { value: "option-two", id: "option-two", key: "radio2" }),
      React.createElement("label", { htmlFor: "option-two", key: "label2" }, "Option Two")
    ])
  ]
);

const renderSelect = () => React.createElement(
  Select,
  {},
  [
    React.createElement(SelectTrigger, { key: "trigger", className: "w-[180px]" }, 
      React.createElement(SelectValue, { placeholder: "Select a fruit" })
    ),
    React.createElement(SelectContent, { key: "content" }, [
      React.createElement(SelectItem, { key: "item1", value: "apple" }, "Apple"),
      React.createElement(SelectItem, { key: "item2", value: "banana" }, "Banana"),
      React.createElement(SelectItem, { key: "item3", value: "orange" }, "Orange")
    ])
  ]
);

const renderSwitch = () => React.createElement(
  "div",
  { className: "flex items-center space-x-2" },
  [
    React.createElement(Switch, { id: "airplane-mode", key: "switch" }),
    React.createElement("label", { htmlFor: "airplane-mode", key: "label" }, "Airplane Mode")
  ]
);

const renderTable = () => React.createElement(
  Table,
  {},
  [
    React.createElement(TableCaption, { key: "caption" }, "A list of your recent invoices."),
    React.createElement(TableHeader, { key: "header" }, 
      React.createElement(TableRow, {}, [
        React.createElement(TableHead, { key: "head1" }, "Invoice"),
        React.createElement(TableHead, { key: "head2" }, "Status"),
        React.createElement(TableHead, { key: "head3", className: "text-right" }, "Amount")
      ])
    ),
    React.createElement(TableBody, { key: "body" }, [
      React.createElement(TableRow, { key: "row1" }, [
        React.createElement(TableCell, { key: "cell1" }, "INV001"),
        React.createElement(TableCell, { key: "cell2" }, "Paid"),
        React.createElement(TableCell, { key: "cell3", className: "text-right" }, "$250.00")
      ]),
      React.createElement(TableRow, { key: "row2" }, [
        React.createElement(TableCell, { key: "cell1" }, "INV002"),
        React.createElement(TableCell, { key: "cell2" }, "Pending"),
        React.createElement(TableCell, { key: "cell3", className: "text-right" }, "$150.00")
      ])
    ])
  ]
);

const renderTextarea = () => React.createElement(
  Textarea,
  { placeholder: "Type your message here." }
);

const renderTooltip = () => React.createElement(
  TooltipProvider,
  {},
  React.createElement(
    Tooltip,
    {},
    [
      React.createElement(TooltipTrigger, { key: "trigger", asChild: true }, 
        React.createElement(Button, { variant: "outline" }, "Hover me")
      ),
      React.createElement(TooltipContent, { key: "content" }, "This is a tooltip")
    ]
  )
);

const renderTeamComparison = () => React.createElement(
  "div", 
  { className: "h-96 overflow-auto" }, 
  React.createElement(
    TeamComparison, 
    { 
      teams: [
        { id: '1', name: 'Liverpool', logoUrl: 'https://via.placeholder.com/150', league: 'Premier League' },
        { id: '2', name: 'Arsenal', logoUrl: 'https://via.placeholder.com/150', league: 'Premier League' }
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

const renderInputProps = () => React.createElement(
  "div", 
  { className: "space-y-4" }, 
  [
    React.createElement("p", { key: "title", className: "font-medium" }, "Props:"),
    React.createElement(
      "ul", 
      { key: "list", className: "list-disc pl-5 space-y-2 text-sm" }, 
      [
        React.createElement("li", { key: "prop1" }, [
          React.createElement("code", {}, "type"),
          " - Input type (text, email, password, etc.)"
        ]),
        React.createElement("li", { key: "prop2" }, [
          React.createElement("code", {}, "placeholder"),
          " - Input placeholder text"
        ]),
        React.createElement("li", { key: "prop3" }, [
          React.createElement("code", {}, "disabled"),
          " - Disable the input"
        ])
      ]
    )
  ]
);

const renderSelectProps = () => React.createElement(
  "div", 
  { className: "space-y-4" }, 
  [
    React.createElement("p", { key: "title", className: "font-medium" }, "Props:"),
    React.createElement(
      "ul", 
      { key: "list", className: "list-disc pl-5 space-y-2 text-sm" }, 
      [
        React.createElement("li", { key: "prop1" }, [
          React.createElement("code", {}, "defaultValue"),
          " - Default selected value"
        ]),
        React.createElement("li", { key: "prop2" }, [
          React.createElement("code", {}, "value"),
          " - Controlled value"
        ]),
        React.createElement("li", { key: "prop3" }, [
          React.createElement("code", {}, "onValueChange"),
          " - Callback when value changes"
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

const tabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
    </Tabs>
  )
}`;

const inputCode = `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`;

const checkboxCode = `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}`;

const radioGroupCode = `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}`;

const selectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}`;

const switchCode = `import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>
  )
}`;

const tableCode = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`;

const textareaCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}`;

const tooltipCode = `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`;

const teamComparisonCode = `import { Team } from '../../data/premier-league-teams';
import { TeamComparison } from '../components/teams/TeamComparison';

export function TeamComparisonDemo() {
  const teams: Team[] = [
    { id: '1', name: 'Liverpool', logoUrl: '/liverpool.png', league: 'Premier League' },
    { id: '2', name: 'Arsenal', logoUrl: '/arsenal.png', league: 'Premier League' }
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
          {
            id: 'tabs',
            name: 'Tabs',
            description: 'A set of layered sections of content that display one panel at a time.',
            component: renderTabs(),
            code: tabsCode
          }
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
          {
            id: 'table',
            name: 'Table',
            description: 'A responsive table component for displaying tabular data.',
            component: renderTable(),
            code: tableCode
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
            code: alertCode
          },
          {
            id: 'tooltip',
            name: 'Tooltip',
            description: 'A popup that displays information related to an element when the element receives focus or is hovered over.',
            component: renderTooltip(),
            code: tooltipCode
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
            props: renderInputProps()
          },
          {
            id: 'checkbox',
            name: 'Checkbox',
            description: 'A control that allows the user to toggle between checked and unchecked states.',
            component: renderCheckbox(),
            code: checkboxCode
          },
          {
            id: 'radio-group',
            name: 'Radio Group',
            description: 'A set of checkable buttons, where only one can be checked at a time.',
            component: renderRadioGroup(),
            code: radioGroupCode
          },
          {
            id: 'select',
            name: 'Select',
            description: 'A dropdown control that displays a list of options.',
            component: renderSelect(),
            code: selectCode,
            props: renderSelectProps()
          },
          {
            id: 'switch',
            name: 'Switch',
            description: 'A toggle switch control.',
            component: renderSwitch(),
            code: switchCode
          },
          {
            id: 'textarea',
            name: 'Textarea',
            description: 'A multi-line text input control.',
            component: renderTextarea(),
            code: textareaCode
          }
        ]
      }
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
