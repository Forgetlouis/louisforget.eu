import {
  Zap,
  Code,
  Cloud,
  BarChart3,
  BookOpen,
  Users,
  Briefcase,
  FileText,
  Award,
  Bike,
  Mountain,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';

type IconName =
  | 'Zap'
  | 'Code'
  | 'Cloud'
  | 'BarChart3'
  | 'BookOpen'
  | 'Users'
  | 'Briefcase'
  | 'FileText'
  | 'Award'
  | 'Bike'
  | 'Mountain'
  | 'Github'
  | 'Linkedin'
  | 'Mail'
  | 'Download'
  | 'ChevronRight'
  | 'Calendar'
  | 'MapPin'
  | 'ExternalLink';

const iconMap: Record<IconName, any> = {
  Zap,
  Code,
  Cloud,
  BarChart3,
  BookOpen,
  Users,
  Briefcase,
  FileText,
  Award,
  Bike,
  Mountain,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Calendar,
  MapPin,
  ExternalLink,
};

export function getIconComponent(name: IconName) {
  return iconMap[name] || Code;
}

export { iconMap };
