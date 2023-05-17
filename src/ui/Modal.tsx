import { type FC, type ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
  isOpen: boolean
  handleClose: () => void
  // handleOpen: () => void
}

export const Modal: FC<Props> = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0)
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <section
          className="absolute min-h-screen inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative bg-white w-[90%] md:w-max rounded py-6 px-8">
            {children}
          </div>
        </section>
      )}
    </>
  )
}
