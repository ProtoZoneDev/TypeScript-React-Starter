import * as React from 'react';

export default function MainLayout({ children }: { children: any }) {
  return (
    <div>
      <header>My website</header>
      <div>
        {children}
      </div>
    </div>
  )
}