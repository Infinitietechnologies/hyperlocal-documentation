'use client';

import React from 'react';
import { allDocs } from 'contentlayer/generated';
import SearchDialog from '@/components/search-dialog';
import { getSidebarNavForPath } from 'config/sidebar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  SidebarProvider,
  SidebarLayout,
  MainContent,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeaderLogo,
  UserAvatar,
  NestedLink,
} from '@/components/sidebar';

import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Headphones } from 'lucide-react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const nav = getSidebarNavForPath(pathname || '/');

  return (
    <SidebarLayout>
      <SidebarProvider
        defaultOpen={isMobile ? false : true}
        defaultSide="left"
        defaultMaxWidth={243}
        showIconsOnCollapse={true}
      >
        <Sidebar>
          <SidebarHeader>
            <SidebarHeaderLogo
              logo={
                <>
                  <img
                    alt="logo"
                    className={
                      'h-full w-full object-contain dark:hidden max-h-14'
                    }
                    src={`/logos/hyperlocal-header-logo.png`}
                  />
                  <img
                    alt="logo"
                    className={
                      'h-full w-full object-contain hidden dark:block max-h-14'
                    }
                    src={`/logos/hyperlocal-dark-logo.webp`}
                  />
                </>
              }
            />
          </SidebarHeader>
          <SidebarContent>
            {nav.map((section) => (
              <SidebarMenuItem
                isCollapsable={section.pages && section.pages.length > 0}
                key={section.title}
                label={section.title}
                href={section.href}
                icon={section.icon}
                defaultOpen={section.defaultOpen}
              >
                {section.pages?.map((page) => (
                  <NestedLink key={page.href} href={page.href}>
                    {page.title}
                  </NestedLink>
                ))}
              </SidebarMenuItem>
            ))}
          </SidebarContent>

          <SidebarFooter>
            <UserAvatar>
              {
                <Image
                  alt="logo"
                  src={'/logos/infinitie_logo.webp'}
                  width={100}
                  height={100}
                />
              }
            </UserAvatar>
            <div className="flex flex-col">
              <a
                className="text-sm font-medium text-gray-900 dark:text-white underline hover:cursor-pointer"
                target="_blank"
                href="https://infinitietech.com/"
              >
                Infinitietech
              </a>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Best IT Services
              </span>
            </div>
          </SidebarFooter>
        </Sidebar>

        <MainContent>
          <Header className="justify-between py-2">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Documentation</h1>
            </div>
            <div className="flex gap-2 items-center pr-0 lg:pr-8">
              <SearchDialog searchData={allDocs} />
              <ModeToggle />
              <Button
                onClick={() =>
                  window.open(
                    'https://teams.live.com/l/invite/FEAnZbLQ2wHzo0DRQU?v=g1',
                    '_blank'
                  )
                }
              >
                <Headphones className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
          </Header>
          <main className="overflow-auto p-6">{children}</main>
        </MainContent>
      </SidebarProvider>
    </SidebarLayout>
  );
}
