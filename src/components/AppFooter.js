import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://anukram.ai/" target="_blank" rel="noopener noreferrer">
          Anukram.AI
        </a>
        <span className="ms-1">&copy; 2024 AnukramAI.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
