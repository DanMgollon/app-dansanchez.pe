import { type ProductsSalesStore } from '@/interfaces'
import { useSalesStore } from '@/store'
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { FC } from 'react'

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
  productsWrapper: {
    flexDirection: 'row',
    gap: 5,
    fontSize: 14,
    marginTop: 10
  },
  productsDescriptionColumn: {
    width: '60%',
    textAlign: 'center'
  },
  columnsList: {
    marginTop: 10,
    flexDirection: 'column',
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
  productsUnitPrice: {
    width: '20%',
    textAlign: 'center'
  },
  productsTotalPrice: {
    width: '20%',
    textAlign: 'right'
  },
  totalPriceWrapper: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'right',
    borderTop: '1px solid #000000',
    paddingTop: 5
  }
})

interface Props {
  productSales: ProductsSalesStore[]
}

export const SalePDF: FC<Props> = ({ productSales }) => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  })

  const productsName =
    productSales?.map(
      (product) => `${product.name} ${product.saleAmount} UNIDADES`
    ) ?? []
  const productsPrice = productSales?.map((product) => product.price) ?? []
  const productsTotalPrice =
    productSales?.map((product) =>
      formatter.format(product.price * product.saleAmount)
    ) ?? []
  const total = formatter.format(
    productSales?.reduce((acu, curr) => acu + curr.price * curr.saleAmount, 0)
  )
  const customer = useSalesStore.getState().customer
  const dateString = new Date().toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

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
              <Text style={styles.salesDataRowValue}>{customer?.customer}</Text>
            </View>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>DNI: </Text>
              <Text style={styles.salesDataRowValue}>{customer?.dni}</Text>
            </View>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>FECHA: </Text>
              <Text style={styles.salesDataRowValue}>{dateString}</Text>
            </View>
            <View style={styles.salesDataRow}>
              <Text style={styles.salesDataRowColumn}>MONEDA: </Text>
              <Text style={styles.salesDataRowValue}>SOL (PEN)</Text>
            </View>
          </View>
        </View>
        <View style={styles.productsWrapper}>
          <View style={styles.productsDescriptionColumn}>
            <Text>COD DESCRIPCION CANT</Text>
            <View style={styles.columnsList}>
              {productsName?.map((product) => (
                <Text key={crypto.randomUUID()}>{product}</Text>
              ))}
            </View>
          </View>
          <View style={styles.productsUnitPrice}>
            <Text>P UNIT</Text>
            <View style={styles.columnsList}>
              {productsPrice?.map((price) => (
                <Text key={crypto.randomUUID()}>{price}</Text>
              ))}
            </View>
          </View>
          <View style={styles.productsTotalPrice}>
            <Text>P TOTAL</Text>
            <View style={styles.columnsList}>
              {productsTotalPrice.map((totalPrice) => (
                <Text key={crypto.randomUUID()}>{totalPrice}</Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.totalPriceWrapper}>
          <Text>IMPORTE TOTAL {total}</Text>
        </View>
      </Page>
    </Document>
  )
}
