import { memo } from 'react';

interface HeaderProps {
 title: string;
}

function HeaderItemComponent ({ title }: HeaderProps) {
  return (    
     <header>
       <span className="category">Categoria:<span> {title}</span></span>
     </header>
  )
}

export const Header = memo(HeaderItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps);
})
