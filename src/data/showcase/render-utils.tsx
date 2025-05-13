
import React from 'react';
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
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TeamComparison } from '@/components/teams/TeamComparison';

// Helper functions to render components for showcase
export const renderButton = () => React.createElement(Button, {}, "Click me");

export const renderCard = () => React.createElement(
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

export const renderBadge = () => React.createElement(Badge, {}, "Badge");

export const renderAvatar = () => React.createElement(
  Avatar, 
  {}, 
  [
    React.createElement(AvatarImage, { key: "img", src: "https://github.com/shadcn.png", alt: "@shadcn" }),
    React.createElement(AvatarFallback, { key: "fallback" }, "CN")
  ]
);

export const renderAccordion = () => React.createElement(
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

export const renderAlert = () => React.createElement(
  Alert, 
  {}, 
  [
    React.createElement(AlertTitle, { key: "title" }, "Alert Title"),
    React.createElement(AlertDescription, { key: "desc" }, "Alert Description")
  ]
);

export const renderAspectRatio = () => React.createElement(
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

export const renderTabs = () => React.createElement(
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

export const renderInput = () => React.createElement(
  Input,
  { placeholder: "Email", type: "email" }
);

export const renderCheckbox = () => React.createElement(
  "div",
  { className: "flex items-center space-x-2" },
  [
    React.createElement(Checkbox, { id: "terms", key: "checkbox" }),
    React.createElement("label", { htmlFor: "terms", className: "text-sm", key: "label" }, "Accept terms and conditions")
  ]
);

export const renderRadioGroup = () => React.createElement(
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

export const renderSelect = () => React.createElement(
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

export const renderSwitch = () => React.createElement(
  "div",
  { className: "flex items-center space-x-2" },
  [
    React.createElement(Switch, { id: "airplane-mode", key: "switch" }),
    React.createElement("label", { htmlFor: "airplane-mode", key: "label" }, "Airplane Mode")
  ]
);

export const renderTable = () => React.createElement(
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

export const renderTextarea = () => React.createElement(
  Textarea,
  { placeholder: "Type your message here." }
);

export const renderTooltip = () => React.createElement(
  TooltipProvider,
  { children: React.createElement(
    Tooltip,
    {},
    [
      React.createElement(TooltipTrigger, { key: "trigger", asChild: true }, 
        React.createElement(Button, { variant: "outline" }, "Hover me")
      ),
      React.createElement(TooltipContent, { key: "content" }, "This is a tooltip")
    ]
  )}
);

export const renderTeamComparison = () => React.createElement(
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
export const renderButtonProps = () => React.createElement(
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

export const renderInputProps = () => React.createElement(
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

export const renderSelectProps = () => React.createElement(
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
