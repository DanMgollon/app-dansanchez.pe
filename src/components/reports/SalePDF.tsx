import type { NewSalePDFData } from '@/interfaces'
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  renderToStream
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 20
  },
  header: {
    width: '100%',
    marginBottom: 20
  },
  company: {
    fontSize: 16
  },
  textCenter: {
    textAlign: 'center',
    marginVertical: 1,
    fontSize: 14
  },
  slogan: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14
  },
  saleData: {
    flexDirection: 'row',
    gap: 10,
    fontSize: 14,
    marginTop: 10
  },
  salesDataRow: {
    flexDirection: 'row',
    gap: 5
  },
  salesDataWrapper: {
    marginVertical: 10
  },
  salesDataRowColumn: {
    width: '40%',
    textAlign: 'right',
    fontSize: 14
  },
  salesDataRowValue: {
    width: '60%',
    textAlign: 'left',
    fontSize: 14
  },
  totalPriceWrapper: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'right',
    borderTop: '1px solid #000000',
    paddingTop: 5
  },
  dataProductsRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10
  },
  productsDataItemHeader: {
    flexGrow: 1,
    fontSize: 14
  },
  productsDataItemValue: {
    textAlign: 'right'
  },
  dataProductsWrapper: {
    marginTop: 10
  },
  productsListWrapper: {
    marginTop: 25,
    flexDirection: 'column',
    gap: 20
  },
  textNormal: {
    fontSize: 14
  },
  saleDetailsIVG: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
    fontSize: 15,
    marginLeft: 'auto',
    fontWeight: 'bold'
  }
})

export const SalePDF = ({
  products = [],
  customer,
  date
}: NewSalePDFData): JSX.Element => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  })
  const total = products?.reduce((acu, curr) => acu + curr.price * curr.saleAmount, 0)
  const totalFormated = formatter.format(total)
  const productsData = products?.map(product => ({
    name: `${product.name} ${product.saleAmount} UNIDADES`,
    uniquePrice: product.price,
    total: formatter.format(product.price * product.saleAmount)
  }))
  const igv = formatter.format(total * 0.18)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={[styles.company, styles.textCenter]}>
            FERRETERIA &quot;JR&quot;
          </Text>
          <Text style={styles.textCenter}>
            ROGRIGUEZ QUISPE JOSE DEL CARMEN
          </Text>
          <Text style={styles.textCenter}>RUC: 10104515512S</Text>
          <Text style={styles.textCenter}>
            CALLE COMERCIO # 420 MORROPON CENTRO
          </Text>
          <Text style={styles.textCenter}>MORROPON PIURA</Text>
          <Text style={styles.slogan}>
            Venta de materiales de construcción, alambres eléctricos, tubos
            plasticos y otros
          </Text>
        </View>
        <View>
          <Text style={styles.textCenter}>BOLETA DE VENTA</Text>
          <View style={styles.salesDataWrapper}>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>CLIENTE: </Text>
              <Text style={styles.salesDataRowValue}>{customer.customer}</Text>
            </View>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>DNI: </Text>
              <Text style={styles.salesDataRowValue}>{customer.dni}</Text>
            </View>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>FECHA: </Text>
              <Text style={styles.salesDataRowValue}>{date}</Text>
            </View>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>MONEDA: </Text>
              <Text style={styles.salesDataRowValue}>SOL (PEN)</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataProductsWrapper}>
          <View>
            <View style={[styles.dataProductsRow, styles.textNormal]}>
              <Text
                style={{
                  flexBasis: '60%'
                }}
              >
                CÓDIGO DESCRIPCIÓN CANT
              </Text>
              <Text
                style={{
                  flexBasis: '20%'
                }}
              >
                P.UNIT
              </Text>
              <Text
                style={{
                  flexBasis: '20%'
                }}
              >
                P.TOTAL
              </Text>
            </View>
            <View style={[styles.productsListWrapper, styles.textNormal]}>
              {productsData?.map((product) => (
                <View key={product.name} style={styles.dataProductsRow}>
                  <Text
                    style={{
                      flexBasis: '60%'
                    }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={{
                      flexBasis: '20%'
                    }}
                  >
                    {product.uniquePrice}
                  </Text>
                  <Text
                    style={{
                      flexBasis: '20%'
                    }}
                  >
                    {product.total}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.saleDetailsIVG}>
              <Text
                style={{
                  flexBasis: '20%'
                }}
              >
                IVG:
              </Text>
              <Text
                style={{
                  flexBasis: '20%'
                }}
              >
                {igv}
              </Text>
            </View>
          </View>
        </View>
        <View></View>
        <View style={styles.totalPriceWrapper}>
          <Text>IMPORTE TOTAL {totalFormated}</Text>
        </View>
      </Page>
    </Document>
  )
}

export const generateNewSalePDF = async (
  data: NewSalePDFData
): Promise<NodeJS.ReadableStream> => {
  return await renderToStream(
    <SalePDF
      customer={data.customer}
      products={data.products}
      date={data.date}
    />
  )
}
