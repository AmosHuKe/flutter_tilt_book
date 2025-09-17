import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ExampleCodeWidget,
  ExampleWidget,
} from "@/components/markdown/example-widget"
import { FileTree } from "@/components/markdown/filetree"
import { File, Folder } from "@/components/markdown/filetree/component"
import Image from "@/components/markdown/image"
import RoutedLink from "@/components/markdown/link"
import Mermaid from "@/components/markdown/mermaid"
import { NavCard, NavCardGrid } from "@/components/markdown/navigation-card"
import Note from "@/components/markdown/note"
import { Step, StepItem } from "@/components/markdown/step"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/markdown/table"

export const components = {
  a: RoutedLink,
  img: Image,
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  pre: Pre,
  NavCard,
  NavCardGrid,
  FileTree,
  Folder,
  File,
  Mermaid,
  Note,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ExampleWidget,
  ExampleCodeWidget,
}
