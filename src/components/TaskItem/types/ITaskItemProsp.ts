interface ItaskItemProps {
  id: string;
  title: string;
  onDell: (id:string) => void;
  onEdit: (id:string, title:string) => void;
}

export default ItaskItemProps