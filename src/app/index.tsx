import React from 'react';
import Screen from '@/components/ui/Screen';
import BrandHeader from '@/components/ui/BrandHeader';
import logo from "../../assets/logo.png"
import ListTask from '@/components/ui/ListTask';

export default function Home() {
  return (
    <Screen>
      <BrandHeader
        title="Mi App"
        subtitle="Bienvenido"
        logo={logo} />
        <ListTask/>
    </Screen>
  );
}
