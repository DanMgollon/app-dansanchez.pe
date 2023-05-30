import type { FC, ReactNode, MouseEvent } from 'react'
import { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

interface Props {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const Modal: FC<Props> = ({ children, isOpen, onClose, className }) => {
  const handleClose = (evt: MouseEvent<HTMLElement>): void => {
    evt.stopPropagation()
    onClose()
  }
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
        <section className="absolute min-h-screen inset-0 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={handleClose}
        >
          <div className={`relative bg-white w-[90%] rounded ${className ?? 'md:max-w-md'}`}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <header className="flex justify-end px-3 mt-3 mb-1">
              <button onClick={onClose} className='hover:bg-blue-100 px-[4px] py-[2px] rounded-md'>
                <IoMdClose className="text-[25px] text-blue-800" />
              </button>
            </header>
            <div className="-mt-4 py-4 px-8">{children}</div>
          </div>
        </section>
      )}
    </>
  )
}
