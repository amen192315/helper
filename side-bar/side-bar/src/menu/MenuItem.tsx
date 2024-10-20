import React from 'react';
import { IMenuItem } from './menu.data';
import { useAtomValue } from 'jotai';
import { isCollapsedAtom } from '../store';

const MenuItem = ({ item }: { item: IMenuItem }) => {
  const isCollapsed = useAtomValue(isCollapsedAtom);
  return (
    <a href={item.link} rel="noreferrer noopener" target="_blank">
      <item.icon />
      {!isCollapsed && <div>{item.name}</div>}
    </a>
  );
};

export default MenuItem;
