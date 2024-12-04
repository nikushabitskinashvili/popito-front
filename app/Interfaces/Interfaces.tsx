export interface navbarItemProps {
  active: boolean;
  pathname: string;
  title: string;
}

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export interface headerInputProps {
  type?: "text" | "email" | "password" | "number" | "file";
  placeholder?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ButtonProps {
  openModal: () => void;
}
