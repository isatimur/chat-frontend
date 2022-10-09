declare type PropsWithChildren<T> = import('react').PropsWithChildren<T>;

declare interface PropsWithClassName {
  className?: string;
}

declare type Callback = () => void;

declare type Nullable<T> = T | null;

declare type Component<P = unknown> = (props?: P) => JSX.Element;
