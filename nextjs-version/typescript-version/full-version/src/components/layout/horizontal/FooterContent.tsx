'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

// Config Imports
import brandConfig from '@configs/brandConfig'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={classnames(horizontalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span className='text-textSecondary'>{`© ${new Date().getFullYear()}, ${brandConfig.companyName}`}</span>
        <span className='text-textSecondary'>{` — All rights reserved.`}</span>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link href={brandConfig.docsUrl} className='text-primary'>
            Documentation
          </Link>
          <Link href={brandConfig.supportUrl} className='text-primary'>
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
