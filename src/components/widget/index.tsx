import React, { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from '../WidgetForm'

export const Widget = () => {

  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-10">
      <Popover.Panel>
        <WidgetForm/>
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6"/>
        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
          <span className="pl-2"></span>
            Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}

