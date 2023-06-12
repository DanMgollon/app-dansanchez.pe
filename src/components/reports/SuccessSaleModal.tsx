import type { FC } from 'react'
import { useUIStore } from '@/store/useUIStore'
import { useSalesStore } from '@/store'
import { ButtonPrimary, Modal } from '@/ui'
import { AiOutlineFileText } from 'react-icons/ai'
import { useUserDNI } from '@/store/useUserDNI'

export const SuccessSaleModal: FC = () => {
  const removeProductsSales = useSalesStore(
    (state) => state.removeProductsSales
  )
  const removePDFUrl = useSalesStore((state) => state.removePDFUrl)
  const isModalSaleOpen = useUIStore((state) => state.isModalSaleOpen)
  const setIsModalSaleOpen = useUIStore((state) => state.setIsModalSaleOpen)
  const removeUserDNI = useUserDNI(state => state.removeUserDNI)
  const PDFUrl = useSalesStore((state) => state.PDFUrl)

  const handleDownload = (): void => {
    const a = document.createElement('a')
    a.href = PDFUrl as string
    a.download = 'venta.pdf'
    a.target = '_blank'
    a.click()
  }

  const handleClose = (): void => {
    setIsModalSaleOpen(false)
    removeProductsSales()
    removePDFUrl()
    removeUserDNI()
  }

  return (
    <Modal isOpen={isModalSaleOpen} onClose={handleClose} className="md:max-w-3xl">
      <h4 className="text-3xl font-black mb-5 text-blue-800 flex gap-2 items-center">
        Venta realizada
      </h4>
      <iframe src={PDFUrl as string} className='w-full min-h-[500px] mb-5'></iframe>
      <div>
        <ButtonPrimary onClick={handleDownload} className='flex gap-2 items-center w-full justify-center'>
          <AiOutlineFileText size={20}/>
          DESCARGAR PDF
        </ButtonPrimary>
      </div>
    </Modal>
  )
}
