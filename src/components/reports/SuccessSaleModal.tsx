import type { FC } from 'react'
import dynamic from 'next/dynamic'
import { useUIStore } from '@/store/useUIStore'
import { useSalesStore } from '@/store'
import { SalePDF } from './SalePDF'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ButtonPrimary, Modal } from '@/ui'

const PDFViewer = dynamic(
  async () => (await import('@react-pdf/renderer')).PDFViewer,
  {
    ssr: false
  }
)

export const SuccessSaleModal: FC = () => {
  const productSales = useSalesStore((state) => state.productsSales)
  const removeProductsSales = useSalesStore((state) => state.removeProductsSales)
  const isModalSaleOpen = useUIStore((state) => state.isModalSaleOpen)
  const setIsModalSaleOpen = useUIStore((state) => state.setIsModalSaleOpen)

  const handleClose = (): void => {
    setIsModalSaleOpen(false)
    removeProductsSales()
  }

  return (
    <Modal isOpen={isModalSaleOpen} onClose={handleClose} className="md:max-w-3xl">
      <h4 className="text-3xl font-black mb-5 text-blue-800 flex gap-2 items-center">
        Venta realizada
      </h4>
      <div className="mb-5">
        <PDFViewer
          style={{
            width: '100%',
            height: '500px'
          }}
        >
          <SalePDF productSales={productSales} />
        </PDFViewer>
      </div>
      <PDFDownloadLink
        document={<SalePDF productSales={productSales} />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading
            ? 'Cargando documento...'
            : (
                <ButtonPrimary>DESCARGAR BOLETA</ButtonPrimary>
              )
        }
      </PDFDownloadLink>
    </Modal>
  )
}
