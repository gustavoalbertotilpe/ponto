import { ReactNode } from 'react';

export type Props = {
    children: ReactNode;
}

export type PropsBtn = {
    title?: string;
    handleClick?: () => void;
}
